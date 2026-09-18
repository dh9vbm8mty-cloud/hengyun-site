import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const stages = ["Evidence", "Analysis", "Design", "Prototype", "Validation", "Field"];
const development = ["Research Foundation", "Engineering Development", "Prototype", "Controlled Validation", "Field Demonstration", "Field Evidence"];
const collaborators = [
  ["Infrastructure Owners & Site Operators", "Potential demonstration environments and operational context."],
  ["Engineering Partners", "Engineering support for prototype integration and field implementation."],
  ["Research Institutions", "Research collaboration and independent evaluation."],
  ["Public-Sector Programs", "Demonstration and innovation-program opportunities."],
];

export default function Home() {
  return <div id="top" className="vnext"><SiteHeader dark /><main id="main-content" tabIndex={-1}>
    <section className="canvas-hero" aria-labelledby="hero-title">
      <Image className="hero-photo" src="/Visuals/hero-sunset-vnext.webp" alt="" fill priority sizes="100vw" />
      <div className="canvas-width hero-composition"><p className="technical-label">Thermal Infrastructure Engineering</p><h1 id="hero-title">We engineer<br />thermal infrastructure.</h1><p className="hero-intro">Transforming engineering research into practical thermal infrastructure solutions.</p><p className="hero-philosophy">Design with evidence.<span>Build for simplicity.</span>Validate with data.</p></div>
    </section>

    <section id="thermal-asset" className="asset-band" aria-labelledby="asset-title"><div className="canvas-width asset-composition">
      <div className="asset-copy"><p className="technical-label section-label">Pavement as a Thermal Asset</p><h2 id="asset-title">Pavement is more than a surface.</h2><p>Paved infrastructure is continuously exposed to solar and environmental thermal loads. Heat is absorbed, stored, transferred, and released as pavement conditions change over time.</p><p>HENGYUN approaches pavement as a Thermal Asset—a built-environment asset whose thermal behavior can be measured, managed, and incorporated into thermal infrastructure.</p></div>
      <figure className="thermal-study"><Image src="/Visuals/thermal-asset-vnext.webp" alt="Conceptual environmental heat loading of pavement material" width={991} height={793} sizes="(min-width: 901px) 60vw, 100vw" /><figcaption><span>Absorption</span><span>Storage</span><span>Transfer</span><span>Release</span></figcaption></figure>
    </div></section>

    <section id="engineering" className="engineering-band" aria-labelledby="engineering-title"><div className="canvas-width engineering-composition">
      <div><p className="technical-label section-label">Engineering Approach</p><h2 id="engineering-title">A disciplined pathway from evidence to field learning.</h2></div>
      <div><ol className="evidence-path" aria-label="Engineering pathway">{stages.map((stage) => <li key={stage}><span className="process-node" aria-hidden="true" /><span>{stage}</span></li>)}</ol><p className="process-note">Each stage reduces uncertainty and builds the evidence required for the next.</p></div>
    </div></section>

    <section id="technologies" className="technology-band" aria-labelledby="technology-title"><div className="canvas-width technology-composition">
      <div className="technology-heading"><p className="technical-label section-label">Technologies</p><h2 id="technology-title">Application Systems for Thermal Assets</h2></div>
      <article className="steps-entry"><div className="steps-copy"><h3>STEPS</h3><p className="system-name">Sustainable Thermal Energy Pavement System</p><p className="technical-label">Pavement Application System</p><p>A pavement application system for managing the thermal behavior of paved Thermal Assets.</p></div><figure className="steps-study"><Image src="/Visuals/hengyun-steps-concept.webp" alt="Public-safe conceptual thermal interaction associated with pavement; not to scale" width={1942} height={809} sizes="(min-width: 901px) 55vw, 100vw" /><figcaption>Conceptual thermal interaction · Not to scale</figcaption></figure></article>
      <aside className="future-concepts"><p className="technical-label">Future Concepts</p><div className="future-entries"><article><div className="concept-mark climate-mark" aria-hidden="true"><span /><span /><span /></div><h3>AMPS</h3><p className="system-name">Advanced Microclimate Pavement System</p><p className="technical-label">Future Concept</p></article><article><div className="concept-mark asset-mark" aria-hidden="true"><span /><span /><span /></div><h3>TEAMS</h3><p className="system-name">Thermal Energy &amp; Asset Management System</p><p className="technical-label">Future Concept</p></article></div></aside>
    </div></section>

    <section id="research" className="research-band research-editorial" aria-labelledby="research-title">
      <div className="canvas-width research-composition">
        <div className="research-heading">
          <p className="technical-label section-label">Research &amp; Intellectual Property</p>
          <h2 id="research-title">Engineering research to real-world impact.</h2>
        </div>
        {/* Decorative category marks only: neither measured data nor a connected process. */}
        <div className="research-anchors">
          <article>
            <svg className="evidence-mark evidence-mark--traces" viewBox="0 0 160 80" fill="none" aria-hidden="true" focusable="false">
              <path d="M8 51C29 17 48 14 72 39S119 71 151 30" /><path d="M8 62C35 36 54 26 81 49S128 53 151 16" opacity=".65" /><path d="M8 35C39 63 56 67 83 35S127 18 151 42" opacity=".4" />
            </svg>
            <h3 className="technical-label">Published Research</h3>
            <p>Research on pavement thermal behavior, heat transfer, and related built-environment thermal systems.</p>
          </article>
          <article>
            <svg className="evidence-mark" viewBox="0 0 160 80" fill="none" aria-hidden="true" focusable="false">
              <circle cx="34" cy="27" r="12" /><circle cx="111" cy="52" r="7" />
              <path d="M63 15H109M57 37H87M22 62H73" />
            </svg>
            <h3 className="technical-label">Current Engineering Development</h3>
            <p>Translating research into practical thermal infrastructure applications.</p>
          </article>
          <article>
            <svg className="evidence-mark evidence-mark--document" viewBox="0 0 160 80" fill="none" aria-hidden="true" focusable="false">
              <path d="M42 9H84L101 26V71H42ZM84 9V26H101M55 43H84M55 54H76" />
            </svg>
            <h3 className="technical-label">Intellectual Property</h3>
            <p>Taiwan Utility Model Patent M686216</p>
            <p lang="zh-Hant">智慧導熱鋪面能源系統</p>
            <p>Granted 2026</p>
          </article>
        </div>
      </div>
    </section>

    <section id="development" className="development-band" aria-labelledby="development-title"><div className="canvas-width development-composition"><div><p className="technical-label section-label">Development Toward Field Learning</p><h2 id="development-title">From controlled validation to field evidence.</h2></div><div><ol className="maturity-line" aria-label="Development pathway">{development.map((stage, i) => <li key={stage} className={i > 1 ? "is-future" : i === 1 ? "is-current" : ""}><span className="maturity-node" aria-hidden="true" /><span>{stage}</span>{i === 1 && <small>Current development</small>}</li>)}</ol><p className="process-note">Current engineering development is building the evidence required for subsequent field evaluation.</p><p className="evidence-statement">Field performance will be reported when supported by measured evidence.</p></div></div></section>

    <section id="collaboration" className="collaboration-band" aria-labelledby="collaboration-title"><div className="canvas-width collaboration-composition"><div className="partner-heading"><p className="technical-label section-label">Field Demonstration &amp; Collaboration</p><h2 id="collaboration-title">Seeking sites and partners for controlled engineering validation.</h2></div><p className="partner-copy">HENGYUN is preparing for future field demonstration in paved environments where system operation, thermal behavior, and engineering measurements can be evaluated under defined conditions.</p><dl className="collaborator-list">{collaborators.map(([title, body]) => <div key={title}><dt>{title}</dt><dd>{body}</dd></div>)}</dl><a className="text-link" href="#contact">Discuss a potential demonstration or collaboration <span aria-hidden="true">→</span></a></div></section>

    <section id="contact" className="contact-band" aria-labelledby="contact-title"><div className="canvas-width contact-composition"><div><p className="technical-label section-label">Contact</p><h2 id="contact-title">Let’s discuss thermal infrastructure.</h2></div><div className="contact-address"><p>For thermal infrastructure engineering, research collaboration, engineering partnership, or future field demonstration:</p><a href="mailto:founder@hengyun-tech.com">founder@hengyun-tech.com <span aria-hidden="true">→</span></a></div></div></section>
  </main><SiteFooter /></div>;
}
