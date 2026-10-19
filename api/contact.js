// Vercel serverless function (Node.js).
// Saves each message to Supabase and emails it to the owner.

const { SUPABASE_URL, SUPABASE_SERVICE_KEY, RESEND_API_KEY, CONTACT_TO } = process.env;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function dbHeaders() {
  const h = { apikey: SUPABASE_SERVICE_KEY, "Content-Type": "application/json" };
  // Older service_role keys are JWTs and also go in the Authorization header.
  if (SUPABASE_SERVICE_KEY.startsWith("eyJ")) h.Authorization = `Bearer ${SUPABASE_SERVICE_KEY}`;
  return h;
}

async function saveMessage({ name, email, message }) {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
      method: "POST",
      headers: { ...dbHeaders(), Prefer: "return=minimal" },
      body: JSON.stringify({ name, email, message }),
    });
    return r.ok;
  } catch {
    return false;
  }
}

async function tooManyRecent(email) {
  try {
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const url =
      `${SUPABASE_URL}/rest/v1/messages?select=id` +
      `&email=eq.${encodeURIComponent(email)}&created_at=gte.${encodeURIComponent(since)}`;
    const r = await fetch(url, { headers: dbHeaders() });
    if (!r.ok) return false;
    const rows = await r.json();
    return rows.length >= 3;
  } catch {
    return false;
  }
}

async function sendEmail({ to, subject, text, replyTo }) {
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        subject,
        text,
        ...(replyTo && { reply_to: replyTo }),
      }),
    });
    return r.ok;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const body = req.body || {};

  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (body.website) return res.status(200).json({ ok: true });

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 150) : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !EMAIL_RE.test(email) || !message || message.length > 3000) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const dbReady = Boolean(SUPABASE_URL && SUPABASE_SERVICE_KEY);
  const mailReady = Boolean(RESEND_API_KEY && CONTACT_TO);
  if (!dbReady && !mailReady) return res.status(500).json({ error: "Server not configured" });

  if (dbReady && (await tooManyRecent(email))) {
    return res.status(429).json({ error: "Too many messages. Please try again later." });
  }

  const saved = dbReady ? await saveMessage({ name, email, message }) : false;

  const notified = mailReady
    ? await sendEmail({
        to: CONTACT_TO,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      })
    : false;

  if (!saved && !notified) return res.status(502).json({ error: "Could not deliver message" });
  return res.status(200).json({ ok: true });
}