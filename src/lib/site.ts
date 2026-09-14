const DEFAULT_SITE_URL = "https://zond.agency";

export const siteConfig = {
  name: "ZOND Agency",
  title: "ZOND — Branding Agency",
  description:
    "ZOND — агенція брендингу з 2019 року. Стратегія, айдентика, дизайн, SMM, упаковка, брендбук та цифрові рішення для бізнесу в Україні та світі.",
  locale: "uk_UA",
  language: "uk",
  email: "hello@zond.agency",
  phone: "+380961234567",
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
    "веб-дизайн",
    "агенція брендингу",
    "ZOND",
    "Україна",
  ],
};

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

export function getSiteUrl(): string {
  const fromEnv = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  if (fromEnv !== DEFAULT_SITE_URL) return fromEnv;

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return normalizeSiteUrl(`https://${vercelUrl}`);
  }

  return DEFAULT_SITE_URL;
}
