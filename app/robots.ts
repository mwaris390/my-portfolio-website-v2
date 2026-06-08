import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://waris.dev/sitemap.xml",
    host: "https://waris.dev",
  };
}
