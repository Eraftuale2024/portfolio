import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import Services from "./components/Services.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import { profile } from "./data/profile.js";

export default function App() {
  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <a className="brand" href="#top">
            <span className="mono">AG</span>
            {profile.name}
          </a>
          <nav aria-label="Main">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#case-studies">Case studies</a>
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <About />
        <Expertise />
        <Services />
        <CaseStudies />
        <Work />
        <Experience />
        <Contact />
      </main>

      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
}