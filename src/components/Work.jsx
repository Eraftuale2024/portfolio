import { useState } from "react";
import { projects } from "../data/profile.js";

const filters = [
  { id: "all", label: "All" },
  { id: "erp", label: "ERP" },
  { id: "ai", label: "AI and data" },
];
const LIMIT = 6;

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const list = projects.filter((p) => filter === "all" || p.category === filter);
  const visible = showAll ? list : list.slice(0, LIMIT);

  return (
    <section id="work" className="sec">
      <div className="wrap">
        <h2>Selected projects</h2>
        <p className="intro">ERP systems built for real organizations, and AI and data projects built end to end.</p>

        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => { setFilter(f.id); setShowAll(false); }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="cards">
          {visible.map((p) => (
            <article className={`card project ${p.category}`} key={p.title}>
              <span className={`badge ${p.category}`}>{p.category === "erp" ? "ERP" : "AI and data"}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              {p.link && (
                <a className="plink" href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
              )}
            </article>
          ))}
        </div>

        {list.length > LIMIT && (
          <div className="more">
            <button className="btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show fewer projects" : `Show all ${list.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}