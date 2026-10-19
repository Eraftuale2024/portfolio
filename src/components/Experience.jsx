import { experience } from "../data/profile.js";
import { experienceDetails } from "../data/site.js";

export default function Experience() {
  return (
    <section id="experience" className="sec alt">
      <div className="wrap">
        <h2>Experience</h2>
        <p className="intro">Roles across ERP consulting, software engineering and business analysis.</p>

        <div className="exp-cards">
          {experience.map((e) => (
            <article className="card exp" key={e.org}>
              <header>
                <h3>{e.role}</h3>
                <span>{e.org}</span>
              </header>
              <ul>
                {(experienceDetails[e.org] || []).map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}