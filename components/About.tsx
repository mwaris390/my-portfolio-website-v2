"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ABOUT_LIST } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section bg-bg">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <Reveal className="section-head" style={{ marginBottom: 28 }}>
              <span className="eyebrow">
                <span className="dot" /> About
              </span>
              <h2>
                Building softwares
                <br />
                that move real
                <br />
                businesses.
              </h2>
            </Reveal>
            <Reveal as="p" delay={1}>
              I&apos;m a full stack developer with 2.5+ years building
              enterprise web and mobile applications in fast moving agile teams.
              I own the whole arc — frontend architecture, backend services, API
              design and database integration.
            </Reveal>
            <Reveal as="p" delay={1}>
              I&apos;ve delivered scalable solutions across HR, manufacturing
              and business management sectors using React, Next.js, Angular,
              Node, Express, Prisma, Ionic and React Native. Based in Gujrat,
              Pakistan, and happy to work remotely or relocate.
            </Reveal>
            <Reveal as="p" delay={1}>
              Based in Gujrat, Pakistan, and happy to work remotely or relocate.
            </Reveal>
            <Reveal as="ul" delay={2} className="about-list">
              {ABOUT_LIST.map((row) => (
                <li key={row.k}>
                  <span className="k">{row.k}</span>
                  <span className="v">{row.v}</span>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal delay={2} className="about-visual">
            <div className="about-photo">
              <Image
                src="/me.webp"
                alt="Muhammad Waris"
                width={720}
                height={900}
                priority={false}
                sizes="(max-width: 800px) 90vw, 560px"
              />
            </div>
            <div className="about-stat-card">
              <b>10K+</b>
              <span>Daily transactions handled</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
