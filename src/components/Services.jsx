import { services, process } from "../data/site.js";

export default function Services() {
  return (
    <section id="services" className="sec">
      <div className="wrap">
        <h2>Services</h2>
        <p className="intro">What I can take on for your company, from first workshop to go-live.</p>

        <div className="svc-grid">
          {services.map((s, i) => (
            <div className="card svc" key={s.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <h2 className="sub-h">How I work</h2>
        <div className="steps">
          {process.map((s, i) => (
            <div className="step" key={s.title}>
              <span className="n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}