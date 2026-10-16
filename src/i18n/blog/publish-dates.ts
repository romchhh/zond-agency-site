/** Webflow publish dates by slug. Empty until the export from backup step 10. */
export const blogPublishDates: Record<string, string> = {
  "what-is-branding": "2025-08-15",
  "what-is-illustration": "2025-08-22",
  "what-is-rebranding": "2025-08-29",
};

/** Used for Article until per-post dates from Webflow are filled in. */
export const BLOG_FALLBACK_PUBLISH_DATE = "2026-10-06";

export function getBlogPublishDate(slug: string): string {
  return blogPublishDates[slug] ?? BLOG_FALLBACK_PUBLISH_DATE;
}
