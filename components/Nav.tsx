"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { ArrowRight } from "./Icons";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const hero = document.getElementById("home");
    const footer = document.getElementById("footer");

    const sections = Array.from(
      document.querySelectorAll("section[id]"),
    ) as HTMLElement[];

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);
        // if (hero) setOverHero(y + 64 < hero.offsetTop + hero.offsetHeight);
        if (hero && footer) {
          const heroEnd = hero.offsetTop + hero.offsetHeight;

          const footerStart = footer.offsetTop - 300;

          const isOverHero =
            y + 64 < heroEnd || y + window.innerHeight >= footerStart;

          setOverHero(isOverHero);
        }
        const mid = y + window.innerHeight * 0.4;
        let cur = "home";
        sections.forEach((s) => {
          if (s.offsetTop <= mid) cur = s.id;
        });
        setActive(cur);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.menu = menuOpen ? "open" : "closed";
  }, [menuOpen]);

  // While the (light) mobile menu is open, drop the dark hero blend.
  const navClass = [
    "nav",
    scrolled ? "scrolled" : "",
    overHero && !menuOpen ? "over-hero" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={`${navClass} `}>
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <span>MW</span>
          </span>
          Muhammad&nbsp;Waris
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#contact" className="btn btn-dark nav-cta-desktop">
            Contact
            <ArrowRight />
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
