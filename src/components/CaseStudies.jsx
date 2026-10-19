import { caseStudies } from "../data/site.js";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="sec alt">
      <div className="wrap">
        <h2>Case studies</h2>
        <p className="intro">A closer look at how I approach a problem, from the challenge to what I built.</p>

        <div className="cs-list">
          {caseStudies.map((c) => (
            <article className="card cs" key={c.title}>
              <header>
                <h3>{c.title}</h3>
                <span>{c.kind}</span>
              </header>

              <div className="cs-cols">
                <div>
                  <h4>Challenge</h4>
                  <p>{c.challenge}</p>
                </div>
                <div>
                  <h4>What I built</h4>
                  <ul>{c.built.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
                {c.result && (
                  <div>
                    <h4>Result</h4>
                    <p className="result">{c.result}</p>
                  </div>
                )}
              </div>

              <div className="tags">
                {c.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}