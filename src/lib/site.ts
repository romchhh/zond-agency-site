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

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zond.agency";
  return url.replace(/\/$/, "");
}
