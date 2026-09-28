import type { Locale } from "@/i18n/config";
import type { CaseItem } from "./types";
import { casesEnMissing } from "./cases.en-missing";

/** UK order is canonical; fill gaps in EN with translated supplements. */
export function mergeCaseCatalog(
  locale: Locale,
  canonical: CaseItem[],
  localized: CaseItem[],
): CaseItem[] {
  if (locale !== "en") return localized;

  const localizedBySlug = new Map(localized.map((item) => [item.slug, item]));
  const missingBySlug = new Map(casesEnMissing.map((item) => [item.slug, item]));

  const merged: CaseItem[] = [];
  const seen = new Set<string>();

  for (const item of canonical) {
    const en =
      localizedBySlug.get(item.slug) ?? missingBySlug.get(item.slug) ?? item;
    merged.push(en);
    seen.add(item.slug);
  }

  for (const item of localized) {
    if (!seen.has(item.slug)) merged.push(item);
  }

  return merged;
}
