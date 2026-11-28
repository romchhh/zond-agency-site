const { buildLegacyRedirects } = require("./legacy-redirects.cjs");

const oneYearImmutable = "public, max-age=31536000, immutable";
/** Photos/covers are replaced in place — must revalidate after restart/deploy. */
const mediaRevalidate = "public, max-age=60, must-revalidate";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // WebP only: AVIF encode is too slow on small VPS and caused multi-second waits.
    formats: ["image/webp"],
    qualities: [75, 80, 90],
    // Don't keep optimized copies of replaced media for a year.
    minimumCacheTTL: 60,
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return buildLegacyRedirects();
  },
  async rewrites() {
    return [
      { source: "/aximod", destination: "/aximod/index.html" },
      { source: "/aximod/", destination: "/aximod/index.html" },
      { source: "/violux", destination: "/violux/index.html" },
      { source: "/violux/", destination: "/violux/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: oneYearImmutable }],
      },
      // Editable media first (overrides broad /assets rule below).
      {
        source: "/assets/photography/:path*",
        headers: [{ key: "Cache-Control", value: mediaRevalidate }],
      },
      {
        source: "/assets/cases/:path*",
        headers: [{ key: "Cache-Control", value: mediaRevalidate }],
      },
      {
        source: "/uploads/:path*",
        headers: [{ key: "Cache-Control", value: mediaRevalidate }],
      },
      {
        source: "/services/:path*.:ext(jpg|jpeg|png|webp|gif|avif|mp4|webm)",
        headers: [{ key: "Cache-Control", value: mediaRevalidate }],
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: oneYearImmutable }],
      },
      {
        source: "/branding/:path*",
        headers: [{ key: "Cache-Control", value: oneYearImmutable }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: oneYearImmutable }],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, must-revalidate",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/aximod",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/aximod/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/violux",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/violux/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

module.exports = nextConfig;
