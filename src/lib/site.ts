const DEFAULT_SITE_URL = "https://zond.agency";
export const CANONICAL_HOST = "zond.agency";
const WWW_HOST = "www.zond.agency";

export const siteConfig = {
  name: "ZOND Agency",
  title: "ZOND — Branding Agency",
  description:
    "Брендингова агенція ZOND у Києві: стратегія, неймінг, логотип, айдентика, брендбук, упаковка і SMM. Працюємо з 2021 року, стратегія до результату.",
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

function isVercelPreviewHost(hostname: string): boolean {
  return hostname.endsWith(".vercel.app") || hostname === "localhost" || hostname === "127.0.0.1";
}

function normalizeSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return DEFAULT_SITE_URL;

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    if (url.hostname === WWW_HOST) {
      url.hostname = CANONICAL_HOST;
      return url.origin;
    }
    if (url.hostname === CANONICAL_HOST) {
      return url.origin;
    }
    if (isVercelPreviewHost(url.hostname)) {
      return DEFAULT_SITE_URL;
    }
    return DEFAULT_SITE_URL;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/**
 * Production canonical origin for metadata, sitemap, and JSON-LD.
 * Server-only: use SITE_URL (not NEXT_PUBLIC_*) so Vercel keeps it private.
 * NEXT_PUBLIC_SITE_URL is still read as a temporary fallback.
 */
export function getCanonicalSiteUrl(): string {
  return normalizeSiteUrl(
    process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL,
  );
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

/** www alias — redirect permanently to apex (canonical). */
export function isWwwHost(host?: string | null): boolean {
  return normalizeHost(host) === WWW_HOST;
}

/**
 * Indexing is allowed only on zond.agency. www, preview, localhost, and
 * zond-agency-site.vercel.app stay closed even when VERCEL_ENV is production.
 */
export function shouldBlockSearchIndexing(host?: string | null): boolean {
  return normalizeHost(host) !== CANONICAL_HOST;
}
