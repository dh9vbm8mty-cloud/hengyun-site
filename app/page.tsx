import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Fragment } from "react";
const pathway = ["Evidence", "Analysis", "Design", "Prototype", "Validation", "Field"];

const principles = [
  ["Design with evidence.", "Engineering decisions are grounded in published research, analysis, measured observations, and documented assumptions."],
  ["Build for simplicity.", "System architecture is kept practical so prototypes can be constructed, measured, maintained, and improved."],
  ["Validate with data.", "Controlled validation is used to reduce uncertainty before any broader field implementation is represented."],
];

const technologies = [
  ["STEPS", "Sustainable Thermal Energy Pavement System", "Core Engineering System / Pavement Thermal Infrastructure Framework", "STEPS is HENGYUN’s core pavement thermal infrastructure engineering system. It provides the framework for integrating pavement thermal exchange, circulation, thermal management, sensing, measurement, validation, and future scalable deployment."],
  ["RTSU", "Roadside Thermal Service Unit", "Current Engineering Prototype", "RTSU is the current engineering prototype used to support controlled STEPS development and validation. It integrates circulation, thermal management, sensing, control, and engineering data functions without disclosing proprietary implementation details."],
  ["AMPS", "Advanced Microclimate Pavement System", "Future Platform Concept", "A future platform-level concept for broader multi-zone or multiple-pavement thermal management."],
  ["TEAMS", "Thermal Energy & Asset Management System", "Future Management / Data Layer", "A future management and data layer for thermal asset monitoring, operational coordination, and engineering data handling."],
];

export default function Home() {
  return (
    <div id="top" className="bg-[#f4f3ef] text-[#1b1f22]">
      <section className="bg-[#1b1f22] text-[#f4f3ef]">
        <SiteHeader dark />
        <div className="mx-auto max-w-[1180px] px-6 pb-14 pt-12 md:px-8 md:pb-16 md:pt-14">
          <p className="eyebrow text-white/45">HENGYUN Technology</p>
          <h1 className="mt-6 max-w-[760px] text-[40px] font-[680] leading-[1.05] tracking-[-.035em] sm:text-[46px] md:text-[50px]">
            We engineer thermal infrastructure.
          </h1>
          <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-white/62">
            Transforming engineering research into practical thermal infrastructure solutions.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-3 gap-y-2 border-t border-white/15 pt-5 text-[13px] text-white/72">
            <span>Design with evidence.</span>
            <span className="text-white/25">/</span>
            <span>Build for simplicity.</span>
            <span className="text-white/25">/</span>
            <span>Validate with data.</span>
          </div>
        </div>
      </section>

      <main>
        <section id="about" className="mx-auto max-w-[1180px] scroll-mt-20 px-6 py-13 md:px-8 md:py-15">
          <div className="grid gap-8 md:grid-cols-[210px_1fr]">
            <div className="eyebrow text-black/40">About HENGYUN</div>
            <div className="max-w-[760px]">
              <h2 className="max-w-[680px] text-[28px] font-[620] leading-[1.15] tracking-[-.03em] md:text-[30px]">
                  Thermal Infrastructure Engineering, developed from research toward practical solutions.
              </h2>
              <div className="mt-7 border-t rule pt-6">
                <p className="text-[15px] leading-7 text-black/62">
                  HENGYUN Technology is an engineering company dedicated to Thermal Infrastructure Engineering.
                  We develop engineering systems that connect thermal science, infrastructure engineering,
                  measurement, controlled validation, and future field deployment.
                </p>
                <div className="mt-6">
                  <div className="eyebrow text-black/40">Mission</div>
                  <p className="mt-2 text-[15px] leading-7 text-black/62">
                    Transforming engineering research into practical thermal infrastructure solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="engineering" className="border-y rule bg-[#eceae4] scroll-mt-20">
          <div className="mx-auto max-w-[1180px] px-6 py-13 md:px-8 md:py-15">
            <div className="grid gap-8 md:grid-cols-[210px_1fr]">
              <div className="eyebrow text-black/40">Engineering</div>
              <div>
                <h2 className="max-w-[670px] text-[28px] font-[620] leading-[1.15] tracking-[-.03em] md:text-[30px]">
                  A disciplined pathway from evidence to field learning.
                </h2>
                <div className="mt-9 grid gap-5 md:grid-cols-3">
                  {principles.map(([title, body]) => (
                    <div key={title} className="border-t-2 border-black/25 pt-4">
                      <h3 className="text-[18px] font-semibold tracking-[-.015em]">{title}</h3>
                      <p className="mt-3 text-[14px] leading-6 text-black/55">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-9 overflow-x-auto">
                  <div className="grid min-w-[700px] grid-cols-11 items-center border-y rule py-5">
                    {pathway.map((stage, index) => (
                      <Fragment key={stage}>
                        <span className="text-center text-[13px] font-medium">{stage}</span>
                        {index < pathway.length - 1 && <span className="text-center text-black/25">→</span>}
                      </Fragment>
                    ))}
                  </div>
                </div>
                <p className="mt-5 max-w-[680px] text-[13px] leading-6 text-black/50">
                  Each stage is used to reduce uncertainty. Early analysis, prototype work, or controlled
                  evidence is not presented as proof of later-stage field performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" className="mx-auto max-w-[1180px] scroll-mt-20 px-6 py-13 md:px-8 md:py-15">
          <div className="grid gap-8 md:grid-cols-[210px_1fr]">
            <div className="eyebrow text-black/40">Technologies</div>
            <div>
              <h2 className="max-w-[670px] text-[28px] font-[620] leading-[1.15] tracking-[-.03em] md:text-[30px]">
                A clear hierarchy for current engineering and future platform development.
              </h2>
              <div className="mt-8 border-t rule">
                {technologies.map(([name, system, role, summary]) => (
                  <div key={name} className="grid gap-3 border-b rule py-5 md:grid-cols-[100px_230px_1fr]">
                    <div className="text-[22px] font-semibold tracking-[-.025em]">{name}</div>
                    <div>
                      <div className="text-[13px] font-medium leading-6 text-black/65">{system}</div>
                      <div className="mt-1 text-[11px] font-normal uppercase tracking-[.08em] text-black/40">{role}</div>
                    </div>
                    <p className="max-w-[560px] text-[14px] leading-6 text-black/55">{summary}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 max-w-[720px] text-[12px] leading-6 text-black/42">
                This website presents a public-safe engineering overview. Detailed technical specifications,
                proprietary control logic, hydraulic configurations, validation datasets, project-specific
                designs, and patent-sensitive implementation details are shared only under appropriate
                disclosure and collaboration conditions.
              </p>
            </div>
          </div>
        </section>

        <section id="research" className="border-y rule bg-[#1b1f22] text-[#f4f3ef] scroll-mt-20">
          <div className="mx-auto max-w-[1180px] px-6 py-14 md:px-8 md:py-16">
            <div className="grid gap-8 md:grid-cols-[210px_1fr]">
              <div className="eyebrow text-white/40">Research Foundation</div>
              <div>
                <h2 className="max-w-[700px] text-[28px] font-[620] leading-[1.15] tracking-[-.03em] md:text-[30px]">
                  Published research provides technical continuity for current engineering development.
                </h2>
                <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-white/58">
                  HENGYUN Technology builds upon the founder’s published research in pavement thermal
                  engineering, including asphalt pavement thermal behavior, pavement heat harvesting,
                  embedded pipe heat exchange, finite element modeling, and pavement surface-temperature
                  reduction. This research provides part of the scientific foundation and engineering
                  rationale for the current STEPS / RTSU development pathway.
                </p>
                <div className="mt-7 border-t border-white/15 pt-5 text-[13px] text-white/55">
                  <span className="eyebrow text-white/40">Founder</span>
                  <div className="mt-2 text-[16px] text-white/80">Bao-Liang Chen, Ph.D.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-[1180px] scroll-mt-20 px-6 py-13 md:px-8 md:py-15">
          <div className="grid gap-8 md:grid-cols-[210px_1fr]">
            <div className="eyebrow text-black/40">Demo / Partners</div>
            <div>
              <h2 className="max-w-[670px] text-[28px] font-[620] leading-[1.15] tracking-[-.03em] md:text-[30px]">
                Open to future controlled field demonstration and engineering measurement.
              </h2>
              <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-black/58">
                HENGYUN is open to collaboration for future controlled field demonstration and engineering measurement.
              </p>
              <div className="mt-7 grid gap-3 border-t rule pt-5 text-[13px] leading-6 text-black/58 sm:grid-cols-2">
                <div>Demonstration sites</div>
                <div>Research collaboration</div>
                <div>Engineering partners</div>
                <div>Public-sector or grant-supported validation programs</div>
              </div>
            </div>
          </div>
        </section>

        <section id="development" className="border-t rule mx-auto max-w-[1180px] scroll-mt-20 px-6 py-13 md:px-8 md:py-15">
          <div className="grid gap-8 md:grid-cols-[210px_1fr]">
            <div className="eyebrow text-black/40">Current Development</div>
            <div>
                <h2 className="max-w-[670px] text-[28px] font-[620] leading-[1.15] tracking-[-.03em] md:text-[30px]">
                RTSU is the present engineering prototype for controlled validation.
              </h2>
              <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-black/58">
                The current development focus is using RTSU as an engineering prototype to validate design
                intent, measurement approach, operating boundaries, and implementation readiness under
                controlled conditions before broader field use is represented.
              </p>
            </div>
          </div>
        </section>

        <section id="field-validation" className="border-y rule bg-[#eceae4] scroll-mt-20">
          <div className="mx-auto max-w-[1180px] px-6 py-12 md:px-8 md:py-14">
            <div className="grid gap-8 md:grid-cols-[210px_1fr]">
              <div className="eyebrow text-black/40">Future Field Validation</div>
              <div>
                <h2 className="max-w-[650px] text-[28px] font-[620] leading-[1.15] tracking-[-.025em] md:text-[30px]">
                  Field validation and demonstration information will be added when supported by monitored data.
                </h2>
                <p className="mt-5 max-w-[700px] text-[13px] leading-6 text-black/55">
                  This section is reserved for future field demonstration status, validation scope, and
                  documented learning after appropriate deployment and measurement conditions are established.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1180px] scroll-mt-20 px-6 py-13 md:px-8 md:py-15">
          <div className="grid gap-8 md:grid-cols-[210px_1fr]">
            <div className="eyebrow text-black/40">Contact</div>
            <div className="grid gap-8 pt-6 md:grid-cols-[1fr_1.1fr]">
              <p className="max-w-[520px] text-[14px] leading-7 text-black/58">
                HENGYUN welcomes discussions related to thermal infrastructure engineering, controlled
                engineering development, research collaboration, and future field demonstration.
              </p>
              <div>
                <div className="eyebrow text-black/40">Company Email</div>
                <div className="mt-4 text-[22px] font-semibold tracking-[-.025em]">founder@hengyun-tech.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
