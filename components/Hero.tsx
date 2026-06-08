"use client";

import Reveal from "./Reveal";
import Marquee from "./Marquee";
import CodeCard from "./CodeCard";
import { HERO } from "@/lib/data";
import { Download } from "./Icons";
import Starfield from "./Starfield";


export default function Hero() {
  return (
    <section id="home" className="section hero">
      <Starfield dense className="hero-bg" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal as="span" className="eyebrow"><span className="dot" /> {HERO.eyebrow}</Reveal>
            <Reveal as="h1" delay={1}>
              I build Software Production <span className="accent">Ready.</span>
            </Reveal>
            <Reveal as="p" delay={2} className="lead">{HERO.leadHtml}</Reveal>
            <Reveal delay={3} className="hero-cta">
              <a href="/Muhammad-Waris-full-stack-Resume.pdf" download className="btn btn-accent">
                Download Resume
                <Download />
              </a>
              <a href="#projects" className="btn btn-ghost">View Projects</a>
            </Reveal>
            <Reveal delay={3} className="hero-meta">
              {HERO.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={2} className="hero-visual">
            <CodeCard />
            <div className="hero-badge">
              <span className="pulse animate-pulse" />
              <div>
                <b className="text-dark">Available for work</b>
                <span>Remote · Relocation · Worldwide</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <Marquee />
        </Reveal>
      </div>
    </section>
  );
}
