import { useState } from "react";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | fallback

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      // Backend not available (for example on localhost): open the email app instead.
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("fallback");
    }
  }

  const tel = profile.phone.replace(/\s/g, "");

  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <h2>Contact me</h2>
        <p className="intro">Tell me what your team does today and what you want to change. I reply with a clear plan.</p>

        <div className="contact-grid">
          <div className="card details">
            <h3>Contact details</h3>
            <p><span>Phone</span><a href={`tel:${tel}`}>{profile.phone}</a></p>
            <p><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p><span>Alternative email</span><a href={`mailto:${profile.email2}`}>{profile.email2}</a></p>
            <p><span>GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">github.com/Eraftuale2024</a></p>
            <p><span>Location</span>{profile.location}</p>
          </div>

          <form onSubmit={submit} className="card form">
            <label>Name<input name="name" required maxLength={100} /></label>
            <label>Email<input name="email" type="email" required maxLength={150} /></label>
            <label>Message<textarea name="message" rows={5} required maxLength={3000} /></label>
            <button className="btn main" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" className="note">
              {status === "sent" && "Message sent. I will reply soon."}
              {status === "fallback" && "Opening your email app so you can send the message."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}