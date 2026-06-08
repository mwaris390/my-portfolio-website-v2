"use client";

import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id='footer' className="footer">
      <div className="wrap">
        <a href="#home" className="brand">
          <span className="brand-mark"><span>MW</span></span>
          Muhammad&nbsp;Waris
        </a>
        <nav>
          {NAV_LINKS.filter((l) => l.href !== "#home").map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#contact">Contact</a>
        </nav>
        <div className="copy">© {year} Muhammad Waris</div>
      </div>
    </footer>
  );
}
