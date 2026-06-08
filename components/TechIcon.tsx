"use client";

import { getIcon } from "@/lib/icons";

/** Brand logo (chip variant) — colored by default, flips black on chip hover via CSS. */
export function TechIcon({ slug }: { slug?: string }) {
  const icon = getIcon(slug);
  if (!icon) return null;
  return (
    <svg
      className="chip-ico"
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
      style={{ color: `#${icon.hex}` }}
      role="img"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Brand logo (marquee variant) — rendered white. */
export function MarqueeIcon({ slug }: { slug?: string }) {
  const icon = getIcon(slug);
  if (!icon) return null;
  return (
    <svg className="mq-ico" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
