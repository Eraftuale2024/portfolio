import { about } from "../data/site.js";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <h2>About me</h2>
        <div className="about-grid">
          <div className="about-text">
            {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <div className="tile glance">
            <h3>At a glance</h3>
            <dl>
              <div><dt>Education</dt><dd>{profile.education}</dd></div>
              <div><dt>Odoo</dt><dd>About 3 years</dd></div>
              <div><dt>Python</dt><dd>About 4 years</dd></div>
              <div><dt>Based in</dt><dd>{profile.location}</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}