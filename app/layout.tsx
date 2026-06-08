import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans ,JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Self-hosted, swap-optimized fonts (no render-blocking external requests). */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jbmono",
  display: "swap",
});

const SITE_URL = "https://waris.dev";
const NAME = "Muhammad Waris";
const ROLE = "Full Stack Developer";
const DESCRIPTION =
  "Muhammad Waris — Full-Stack Software Developer with 2.5+ years building enterprise web & mobile platforms (HR, POS, ERP and AI products) with React, Angular.js, Next.js, Node and React Native.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} — ${ROLE}`,
    template: `%s · ${NAME}`,
  },
  description: DESCRIPTION,
  applicationName: `${NAME} Portfolio`,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  keywords: [
    "Muhammad Waris",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "React Native",
    "Angular",
    "Nest.js Developer",
    "TypeScript",
    "Portfolio",
    "Gujrat Pakistan",
  ],
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${NAME} — Portfolio`,
    title: `${NAME} — ${ROLE}`,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${NAME} — ${ROLE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — ${ROLE}`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0e",
  width: "device-width",
  initialScale: 1,
};

/* Person structured data (rich results / SEO). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: ROLE,
  url: SITE_URL,
  email: "mailto:m.waris390@gmail.com",
  telephone: "+92-342-4899609",
  image: `${SITE_URL}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gujrat",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Gujrat",
  },
  sameAs: [
    "https://github.com/mwaris390",
    "https://linkedin.com/in/mwaris390/",
    "https://waris.dev",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Angular.js",
    "Nest.js",
    "React Native",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "AI Integration",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jbmono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
