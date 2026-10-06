/** CDN TTL for prerendered HTML, sitemap, and robots. Browsers still revalidate. */
export const PAGE_CACHE_CONTROL =
  "public, s-maxage=3600, stale-while-revalidate=86400";
