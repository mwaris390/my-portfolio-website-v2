/* Central content/data for the portfolio — edit here to update the site. */

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export const HERO = {
  eyebrow: "Full Stack Software Developer",
  leadHtml:
    "I'm Muhammad Waris — a full stack developer building enterprise web & mobile platforms end to end. 2.5+ years shipping HR, POS, ERP and AI products with React, Next.js, Node and React Native.",
  stats: [
    { value: "2.5+", label: "Years experience" },
    { value: "10K+", label: "Daily transactions handled" },
    { value: "30+", label: "Technologies" },
  ],
};

/* Tech logos travelling in the hero marquee (slug = simple icons export). */
export const MARQUEE = [
  // Frontend
  { name: "React.js", slug: "siReact" },
  { name: "Next.js", slug: "siNextdotjs" },
  { name: "Angular.js", slug: "siAngular" },
  { name: "TailwindCSS", slug: "siTailwindcss" },
  { name: "Shadcn", slug: "siShadcnui" },
  { name: "Material UI", slug: "siMui" },
  { name: "Bootstrap", slug: "siBootstrap" },
  { name: "Redux Toolkit", slug: "siRedux" },
  { name: "Zustand", slug: "siZustand" },
  { name: "React Query", slug: "siReactquery" },
  { name: "HTML", slug: "siHtml5" },

  // Backend
  { name: "Node.js", slug: "siNodedotjs" },
  { name: "Express.js", slug: "siExpress" },
  { name: "Prisma", slug: "siPrisma" },
  { name: "Nest.js", slug: "siNestjs" },

  // Mobile
  { name: "React Native", slug: "siReact" },
  { name: "Expo", slug: "siExpo" },
  { name: "Ionic", slug: "siIonic" },

  // Database
  { name: "PostgreSQL", slug: "siPostgresql" },
  { name: "MySQL", slug: "siMysql" },
  { name: "SQLite", slug: "siSqlite" },
  { name: "MongoDB", slug: "siMongodb" },
  { name: "Firebase", slug: "siFirebase" },
  { name: "Supabase", slug: "siSupabase" },
  { name: "Prisma Postgres", slug: "siPrisma" },
  { name: "NeonDB", slug: "siNeon" },

  // DevOps & Tools
  { name: "Docker", slug: "siDocker" },
  { name: "Git", slug: "siGit" },
  { name: "Vercel", slug: "siVercel" },
  { name: "Render", slug: "siRender" },

  // Others
  { name: "JavaScript", slug: "siJavascript" },
  { name: "TypeScript", slug: "siTypescript" },
  { name: "Google APIs", slug: "siGoogle" },
  { name: "AI Integration", slug: "siOpenai" },
  { name: "Socket.io", slug: "siSocketdotio" },
  { name: "JWT", slug: "siJsonwebtokens" },
];

export const ABOUT_LIST = [
  { k: "Location", v: "Gujrat, Pakistan" },
  { k: "Availability", v: "Remote / Relocate" },
  { k: "Focus", v: "Full stack · Mobile · AI" },
  { k: "Education", v: "BSc Software Engineering" },
];

export type TechGroup = { idx: string; title: string; items: { name: string; slug?: string }[] };

export const TECH_GROUPS: TechGroup[] = [
  {
    idx: "01",
    title: "Frontend",
    items: [
      { name: "React.js", slug: "siReact" },
      { name: "Next.js", slug: "siNextdotjs" },
      { name: "Angular.js", slug: "siAngular" },
      { name: "TailwindCSS", slug: "siTailwindcss" },
      { name: "Shadcn", slug: "siShadcnui" },
      { name: "Material UI", slug: "siMui" },
      { name: "Bootstrap", slug: "siBootstrap" },
      { name: "Redux Toolkit", slug: "siRedux" },
      { name: "Zustand" },
      { name: "React Query", slug: "siReactquery" },
      { name: "HTML", slug: "siHtml5" },
    ],
  },
  {
    idx: "02",
    title: "Backend",
    items: [
      { name: "Node.js", slug: "siNodedotjs" },
      { name: "Express.js", slug: "siExpress" },
      { name: "Prisma", slug: "siPrisma" },
      { name: "Nest.js", slug: "siNestjs" },
    ],
  },
  {
    idx: "03",
    title: "Mobile",
    items: [
      { name: "React Native", slug: "siReact" },
      { name: "Expo", slug: "siExpo" },
      { name: "Ionic", slug: "siIonic" },
    ],
  },
  {
    idx: "04",
    title: "Database",
    items: [
      { name: "PostgreSQL", slug: "siPostgresql" },
      { name: "MySQL", slug: "siMysql" },
      { name: "SQLite", slug: "siSqlite" },
      { name: "MongoDB", slug: "siMongodb" },
      { name: "Firebase", slug: "siFirebase" },
      { name: "Supabase", slug: "siSupabase" },
      { name: "Prisma Postgres", slug: "siPrisma" },
      { name: "NeonDB" },
    ],
  },
  {
    idx: "05",
    title: "DevOps & Tools",
    items: [
      { name: "Docker", slug: "siDocker" },
      { name: "Git", slug: "siGit" },
      { name: "Vercel", slug: "siVercel" },
      { name: "Render", slug: "siRender" },
    ],
  },
  {
    idx: "06",
    title: "Others",
    items: [
      { name: "JavaScript", slug: "siJavascript" },
      { name: "TypeScript", slug: "siTypescript" },
      { name: "Google APIs", slug: "siGoogle" },
      { name: "AI Integration" },
      { name: "Socket.io", slug: "siSocketdotio" },
      { name: "JWT", slug: "siJsonwebtokens" },
    ],
  },
];

export type Experience = {
  when: string;
  current?: boolean;
  role: string;
  company: string;
  desc: string;
  points?: { html: string }[];
  tags?: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    when: "Oct 2023 — Present",
    current: true,
    role: "Full Stack Developer",
    company: "Technoverse · Gujrat, Pakistan",
    desc: "Design and ship enterprise web and mobile platforms end to end — backend services, data models, RBAC, APIs and pixel perfect frontends — across HR, manufacturing and business management domains.",
    points: [
      { html: "Architected an <b>enterprise HR Management System</b> for a <b>Saudi</b> security firm — RBAC, attendance, duty deployment, payroll and geolocation. Supported <b>1,000+ employees</b> and cut manual inquiry time by <b>90%</b>." },
      { html: "Built a high throughput <b>Inventory &amp; POS system</b> with barcode processing and thermal printing — handling <b>10,000+ daily transactions</b> and reducing distribution time by <b>80%</b>." },
      { html: "Led a <b>Quality Control system</b> for food manufacturing (workflow engine + dynamic forms) processing <b>10,000+ records/day</b>, cutting report time and paper usage by <b>80–90%</b>." },
      { html: "Delivered a modular <b>ERP frontend</b> for a packaging manufacturer spanning HR, inventory, warehouse, production, QC and finance." },
    ],
    tags: ["Next.js", "Angular.js", "Express.js","Nest.js", "React Native", "PostgreSQL", "Prisma"],
  },
  {
    when: "Jul 2023 — Sept 2023",
    role: "Intern Software Engineer",
    company: "Technoverse · Gujrat, Pakistan",
    desc: "Collaborated with UI/UX and backend teams on frontend development and RESTful API design for high quality web applications. Delivered reliable, on time solutions — earning recognition from senior developers and a full time offer.",
    tags: ["React", "REST APIs", "Frontend"],
  },
  {
    when: "Sept 2019 — Sept 2023",
    role: "BSc Software Engineering",
    company: "University of Gujrat",
    desc: "Graduated in Software Engineering — ranked 3rd in the final semester with a 3.56 GPA.",
  },
];

export type Project = {
  title: string;
  tag: string;
  cover: string;
  desc: string;
  stack: string[];
  href: string;
};

export const PROJECTS: Project[] = [
  {
    title: "ClinicMS",
    tag: "Web App",
    cover: "/covers/clinic-logo.png",
    desc: "A custom clinic management system for an eye clinic — RBAC + JWT auth, appointment scheduling and actionable patient insights. Managing 1,000+ patient records.",
    stack: ["Next.js", "Shadcn", "PostgreSQL"],
    href: "https://github.com/mwaris390/clinicms",
  },
  {
    title: "MedicAsk",
    tag: "AI · Mobile",
    cover: "/covers/medicask-logo.png",
    desc: "An AI powered healthcare assistant app with image based medicine recognition and conversational AI, using OpenRouter APIs and the device camera.",
    stack: ["React Native", "Expo", "OpenRouter AI"],
    href: "https://github.com/mwaris390/medicask",
  },
  {
    title: "CTI Tracker",
    tag: "Mobile",
    cover: "/covers/cti-logo.png",
    desc: "An inventory management app for a timber warehouse that cut manual data entry by 80% for field teams, writing entries directly to Google Sheets. Shipped on iOS & Android.",
    stack: ["Angular", "Ionic", "Google Sheets"],
    href: "https://github.com/mwaris390/cti-app",
  },
];

export const CONTACT = {
  email: "m.waris390@gmail.com",
  phone: "+92 342 4899609",
  phoneHref: "+923424899609",
  linkedin: "https://linkedin.com/in/mwaris390/",
  linkedinLabel: "in/mwaris390",
  github: "https://github.com/mwaris390",
  website: "https://waris.dev",
  websiteLabel: "waris.dev",
  location: "Gujrat, Pakistan · Remote",
};
