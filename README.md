# Muhammad Waris — Portfolio (Next.js 15 + Tailwind v4)

A fast, SEO-optimized personal portfolio for **Muhammad Waris — Full-Stack Software Engineer**.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4** (CSS-first, `@theme` tokens) + a custom design-system layer in `app/globals.css`
- **TypeScript**
- **`next/font`** — self-hosted Plus Jakarta Sans (display/body) + JetBrains Mono (code), zero render-blocking font requests
- **`simple-icons`** — brand logos bundled at build time (no CDN)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

> Requires Node 18.18+ (Node 20+ recommended).

## Project structure

```
app/
  layout.tsx       # SEO metadata, Open Graph/Twitter, JSON-LD Person schema, fonts
  page.tsx         # composes the sections
  globals.css      # Tailwind v4 import + design tokens + all component styles
  sitemap.ts       # /sitemap.xml
  robots.ts        # /robots.txt
components/         # every component is a Client Component ("use client")
  Nav, Hero, CodeCard, Marquee, About, TechStack,
  Experience, Projects, Contact, Footer,
  Starfield, Reveal, ClientInit, Icons, TechIcon
lib/
  data.ts          # ALL editable content (hero copy, tech stack, experience, projects, contact)
  icons.ts         # simple-icons resolver
public/
  portrait.png         # replace with your photo (4:5)
  covers/*.png         # project cover placeholders — replace with screenshots
  og-image.png         # social share image (1200×630)
  favicon.svg
  Muhammad-Waris-Resume.pdf
```

## Editing content

Everything you'd normally change lives in **`lib/data.ts`** — hero text & stats, the tech-stack
groups, experience timeline, projects, and contact details. No need to touch the components.

## Notes / decisions

- **All components are CSR** (`"use client"`) as requested. Next.js still server-renders their
  initial HTML for first paint + SEO, then hydrates on the client.
- **Performance (Lighthouse):** self-hosted fonts with `display: swap`, `next/image` with explicit
  dimensions (no layout shift), immutable cache headers for static assets, tiny inline SVG icons
  (no icon library shipped), and motion gated behind `prefers-reduced-motion`.
- **Contact form** has no backend — it validates client-side and opens the visitor's mail client via
  a prefilled `mailto:`. Swap in an API route / form service (Resend, Formspree, etc.) if you want
  server delivery.
- **Fonts:** the original design called for "Google Sans Flex", which isn't available as a web font,
  so Plus Jakarta Sans (its closest open match) is used as the display face.
- Update the canonical domain (`https://waris.dev`) in `app/layout.tsx`, `app/sitemap.ts` and
  `app/robots.ts` if you deploy elsewhere.

## Deploy

Deploys cleanly to **Vercel** (zero config). For a fully static export, set
`output: "export"` + `images.unoptimized: true` in `next.config.mjs`.
