/** Append "| ZOND" once — skip if the title already mentions the brand. */
export function withBrandTitle(title: string): string {
  if (/\bZOND\b/i.test(title)) return title;
  return `${title} | ZOND`;
}
