import { erpGroups, skillGroups } from "../data/profile.js";

const pick = (title) => skillGroups.find((g) => g.title === title).items;

export default function Expertise() {
  return (
    <section id="expertise" className="sec alt">
      <div className="wrap">
        <h2>Expertise</h2>
        <p className="intro">Three disciplines that work together: ERP that runs the business, software that extends it, and data that improves it.</p>

        <div className="bento">
          <div className="tile erp">
            <h3>ERP architecture</h3>
            <p className="sub">Odoo 17 to 19, implemented end to end in real businesses</p>
            {erpGroups.map((g) => (
              <div className="group" key={g.title}>
                <h4>{g.title}</h4>
                <div className="chips">
                  {g.items.map((i) => <span key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="tile ai">
            <h3>AI and data science</h3>
            <p className="sub">From raw data to a deployed model</p>
            <div className="chips mint">
              {pick("Data and AI").map((i) => <span key={i}>{i}</span>)}
            </div>
          </div>

          <div className="tile sw">
            <h3>Software engineering</h3>
            <p className="sub">Custom modules, portals and integrations</p>
            <div className="chips">
              {pick("Software engineering").map((i) => <span key={i}>{i}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}