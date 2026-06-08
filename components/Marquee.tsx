"use client";

import { MARQUEE } from "@/lib/data";
import { MarqueeIcon } from "./TechIcon";

/** Full-bleed, auto-scrolling strip of tech logos under the hero. */
export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]; // duplicated for a seamless loop
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i}>
            <MarqueeIcon slug={t.slug} />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}
