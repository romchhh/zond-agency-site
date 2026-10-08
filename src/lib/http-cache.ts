/**
 * HTML / sitemap / robots cache for CDN & nginx.
 * Keep short: after deploy hashed `/_next/static/*.css` change; long-lived HTML
 * then points at deleted CSS and the site renders without styles.
 */
export const PAGE_CACHE_CONTROL =
  "public, max-age=0, s-maxage=60, stale-while-revalidate=120";
