/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static images live in /public and are served through next/image's optimizer.
  // For a fully static export (`output: 'export'`), set images.unoptimized = true.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Strong, cache-friendly headers help the Lighthouse "Best Practices" score.
  async headers() {
    return [
      {
        source: "/:all*(png|jpg|jpeg|svg|webp|avif|woff2|pdf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
