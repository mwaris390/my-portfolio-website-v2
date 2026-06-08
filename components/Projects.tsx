"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { PROJECTS, CONTACT } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import Contact from "./Contact";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg-pure)" }}
    >
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" /> Projects
          </span>
          <h2>Things I&apos;ve Deployed.</h2>
          <p>
            Web and mobile Applications I&apos;ve designed and engineered end to
            end.
          </p>
        </Reveal>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal
              as="article"
              className="proj-card"
              delay={(i % 3 || undefined) as 1 | 2 | undefined}
              key={p.title}
            >
              <div className="proj-cover">
                <span className="proj-tagpill">{p.tag}</span>
                <Image
                  src={p.cover}
                  alt={`${p.title} cover`}
                  width={880}
                  height={605}
                  sizes="(max-width: 620px) 90vw, (max-width: 920px) 45vw, 400px"
                />
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <a href={p.href} target="_blank" className="proj-link">
                  View project <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <a href={CONTACT.github} target="_blank" className="mt-12 btn btn-dark">
          View More Projects
        </a>
      </div>
    </section>
  );
}
