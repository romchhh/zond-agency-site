const DEFAULT_SITE_URL = "https://zond.agency";

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
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

const CANONICAL_HOSTS = new Set(["zond.agency", "www.zond.agency"]);

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

/**
 * Block indexing on Vercel previews, local dev, and non-production hosts (e.g. *.vercel.app).
 * Set NEXT_PUBLIC_INDEXING_ENABLED=true on the production Vercel project when zond.agency goes live.
 */
export function shouldBlockSearchIndexing(host?: string | null): boolean {
  const normalizedHost = normalizeHost(host);

  if (normalizedHost) {
    if (normalizedHost === "localhost" || normalizedHost === "127.0.0.1") {
      return true;
    }
    if (CANONICAL_HOSTS.has(normalizedHost)) {
      return false;
    }
    return true;
  }

  if (process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true") {
    return false;
  }

  if (
    process.env.VERCEL_ENV === "preview" ||
    process.env.VERCEL_ENV === "development"
  ) {
    return true;
  }

  if (process.env.VERCEL === "1") {
    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  return false;
}
