import { useState } from "react";
import { profile, projects, erpGroups } from "../data/profile.js";

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  const moduleCount = erpGroups.reduce((n, g) => n + g.items.length, 0);
  const stats = [
    { value: "3+", label: "Years with Odoo" },
    { value: "4+", label: "Years with Python" },
    { value: projects.length, label: "Featured projects" },
    { value: moduleCount, label: "ERP modules delivered" },
  ];

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="pill">Open to remote work and new projects</span>
            <h1>{profile.headline}</h1>
            <p className="lead">{profile.lead}</p>
            <div className="btns">
              <a className="btn main" href="#contact">Contact me</a>
              <a className="btn" href="#work">View projects</a>
              <a className="btn" href="/Abraham-Getachew-CV.pdf" download>Download CV</a>
            </div>
          </div>

          <figure className="portrait">
            {photoOk ? (
              <img src="/photo.jpg" alt={profile.name} onError={() => setPhotoOk(false)} />
            ) : (
              <span className="initials">AG</span>
            )}
            <figcaption>
              <strong>{profile.name}</strong>
              <span>{profile.title}</span>
            </figcaption>
          </figure>
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}