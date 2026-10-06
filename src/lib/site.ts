const DEFAULT_SITE_URL = "https://www.zond.agency";
export const CANONICAL_HOST = "www.zond.agency";
const APEX_HOST = "zond.agency";

export const siteConfig = {
  name: "ZOND Agency",
  title: "ZOND — Branding Agency",
  description:
    "ZOND — агенція брендингу з 2021 року. Стратегія, айдентика, дизайн, SMM, упаковка, брендбук та цифрові рішення для бізнесу в Україні та світі.",
  locale: "uk_UA",
  language: "uk",
  email: "ask@zond.agency",
  phone: "+380997424154",
  telegramBot: "https://t.me/ZOND_Agency_Bot",
  instagram: "https://www.instagram.com/zond.agency/",
  keywords: [
    "брендинг",
    "айдентика",
    "дизайн",
    "SMM",
    "неймінг",
    "логотип",
    "брендбук",
    "упаковка",
    "веб-розробка",
    "агенція брендингу",
    "ZOND",
    "Україна",
  ],
};

/** Display format for Ukrainian mobile numbers stored as +380XXXXXXXXX */
export function formatSitePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 12 || !digits.startsWith("380")) return phone;
  return `+38 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10, 12)}`;
}

function normalizeSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return DEFAULT_SITE_URL;

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    if (url.hostname === APEX_HOST) {
      url.hostname = CANONICAL_HOST;
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/** Production canonical origin for metadata, sitemap, and JSON-LD. */
export function getCanonicalSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
}

export function getSiteUrl(): string {
  return getCanonicalSiteUrl();
}

function normalizeHost(host: string | null | undefined): string | null {
  const value = host?.trim().toLowerCase();
  if (!value) return null;
  return value.split(":")[0] ?? null;
}

/** Public request host. Prefer forwarded host so Vercel aliases stay distinct from the live domain. */
export function getRequestHostname(headersList: Headers): string | null {
  const forwarded = headersList.get("x-forwarded-host");
  const raw = forwarded?.split(",")[0]?.trim() || headersList.get("host");
  return normalizeHost(raw);
}

export function isApexHost(host?: string | null): boolean {
  return normalizeHost(host) === APEX_HOST;
}

/**
 * Indexing is allowed only on www.zond.agency. Apex, preview, localhost, and
 * zond-agency-site.vercel.app stay closed even when VERCEL_ENV is production.
 */
export function shouldBlockSearchIndexing(host?: string | null): boolean {
  return normalizeHost(host) !== CANONICAL_HOST;
}
