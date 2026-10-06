/** Webflow publish dates by slug. Empty until the export from backup step 10. */
export const blogPublishDates: Record<string, string> = {};

/** Used for Article until per-post dates from Webflow are filled in. */
export const BLOG_FALLBACK_PUBLISH_DATE = "2026-10-06";

export function getBlogPublishDate(slug: string): string {
  return blogPublishDates[slug] ?? BLOG_FALLBACK_PUBLISH_DATE;
}
