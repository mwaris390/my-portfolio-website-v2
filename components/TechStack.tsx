"use client";

import Reveal from "./Reveal";
import { TECH_GROUPS } from "@/lib/data";
import { TechIcon } from "./TechIcon";

export default function TechStack() {
  return (
    <section id="tech" className="section" style={{ background: "var(--bg-pure)" }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot" /> Tech Stack</span>
          <h2>What I build with.</h2>
          <p>
            A full stack toolkit spanning frontend, backend, mobile, data and DevOps — the same stack
            I use to ship HR, POS, ERP and AI products into production.
          </p>
        </Reveal>
        <div className="stack-groups">
          {TECH_GROUPS.map((group) => (
            <Reveal className="stack-row" key={group.idx}>
              <div className="stack-label">
                <span className="idx">{group.idx}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item.name}>
                    <TechIcon slug={item.slug} />
                    {item.name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
