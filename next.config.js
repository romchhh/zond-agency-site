const oneYearImmutable = "public, max-age=31536000, immutable";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: oneYearImmutable }],
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: oneYearImmutable }],
      },
      {
        source: "/services/:path*.:ext(jpg|jpeg|png|webp|gif|avif)",
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
            value: "public, max-age=31536000, stale-while-revalidate=86400",
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
    ];
  },
};

module.exports = nextConfig;
