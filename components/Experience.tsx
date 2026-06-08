"use client";

import Reveal from "./Reveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section bg-bg">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot" /> Experience</span>
          <h2>From intern to<br />full stack lead.</h2>
          <p>
            More than two and a half years owning enterprise products end to end at Technoverse — backend
            architecture and APIs through to polished, production ready interfaces.
          </p>
        </Reveal>
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <Reveal className="tl-item" key={item.role}>
              <div className="tl-when">
                {item.when}
                {item.current && (
                  <>
                    <br />
                    <span className="now">Current</span>
                  </>
                )}
              </div>
              <div className="tl-body">
                <div className="tl-role">{item.role}</div>
                <div className="tl-company">{item.company}</div>
                <p className="tl-desc">{item.desc}</p>
                {item.points && (
                  <ul className="tl-points">
                    {item.points.map((p, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: p.html }} />
                    ))}
                  </ul>
                )}
                {item.tags && (
                  <div className="tl-tags">
                    {item.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
