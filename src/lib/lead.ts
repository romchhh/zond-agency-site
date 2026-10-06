import type { Locale } from "@/i18n/config";

export const LEAD_SOURCE_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "page_url",
] as const;

export type LeadSourceField = (typeof LEAD_SOURCE_FIELDS)[number];

export const LEAD_HONEYPOT_FIELD = "zond_hp";

function isOwnSiteValue(value: string): boolean {
  const text = value.trim().toLowerCase();
  return (
    text.includes("zond.agency") ||
    text.includes("localhost") ||
    text.includes("127.0.0.1")
  );
}

/** True only for a real bot fill — not browser autofill of the current site. */
export function isHoneypotTrap(body: Record<string, unknown>): boolean {
  const candidates = [body[LEAD_HONEYPOT_FIELD], body.website];
  return candidates.some((value) => {
    if (typeof value !== "string" || !value.trim()) return false;
    return !isOwnSiteValue(value);
  });
}

export function getThanksPath(locale: Locale): string {
  if (locale === "en") return "/thanks-eng";
  if (locale === "ru") return "/thanks-ru";
  return "/thanks-ua";
}

export function getThanksLocale(pathname: string): Locale | null {
  if (pathname === "/thanks-eng") return "en";
  if (pathname === "/thanks-ru") return "ru";
  if (pathname === "/thanks-ua") return "uk";
  return null;
}
