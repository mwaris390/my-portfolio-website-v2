/**
 * Brand-icon resolver backed by the `simple-icons` npm package.
 * Icons are bundled at build time (no CDN / no network) — fully static.
 *
 * Returns the raw SVG path + brand hex for a given simple-icons slug,
 * or null when no brand icon exists (e.g. Zustand, NeonDB, AI Integration),
 * in which case the UI falls back to a text-only chip.
 */
import * as simpleIcons from "simple-icons";

export type BrandIcon = { path: string; hex: string; title: string };

export function getIcon(slug?: string | null): BrandIcon | null {
  if (!slug) return null;
  const icon = (
    simpleIcons as unknown as Record<string, BrandIcon | undefined>
  )[slug];
  if (!icon || !icon.path) return null;
  return { path: icon.path, hex: icon.hex, title: icon.title };
}
