import type { Locale } from "@/i18n/config";

export const serviceSlugs = [
  "branding",
  "marketing-360",
  "graphics",
  "smm",
  "illustration",
  "packaging",
  "influence-marketing",
  "identity",
  "logo",
  "brandbook",
  "rebranding",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.includes(value as ServiceSlug);
}

export const heroServiceSlugs: ServiceSlug[] = [
  "branding",
  "influence-marketing",
  "graphics",
  "smm",
  "illustration",
  "packaging",
  "brandbook",
  "logo",
];

export const serviceTitles: Record<Locale, Record<ServiceSlug, string>> = {
  uk: {
    branding: "Брендинг",
    "marketing-360": "Marketing 360",
    graphics: "Графічний дизайн",
    smm: "SMM",
    illustration: "Ілюстрація",
    packaging: "Пакування",
    "influence-marketing": "Інфлюенс маркетинг",
    identity: "Айдентика",
    logo: "Логотип",
    brandbook: "Брендбук",
    rebranding: "Ребрендинг",
  },
  en: {
    branding: "Branding",
    "marketing-360": "Marketing 360",
    graphics: "Graphic design",
    smm: "SMM",
    illustration: "Illustration",
    packaging: "Packaging",
    "influence-marketing": "Influence marketing",
    identity: "Brand identity",
    logo: "Logo design",
    brandbook: "Brand book",
    rebranding: "Rebranding",
  },
  ru: {
    branding: "Брендинг",
    "marketing-360": "Marketing 360",
    graphics: "Графический дизайн",
    smm: "SMM",
    illustration: "Иллюстрация",
    packaging: "Упаковка",
    "influence-marketing": "Инфлюенс маркетинг",
    identity: "Айдентика",
    logo: "Логотип",
    brandbook: "Брендбук",
    rebranding: "Ребрендинг",
  },
};

export const serviceMeta: Record<
  Locale,
  Record<ServiceSlug, { title: string; description: string }>
> = {
  uk: {
    branding: {
      title: "Розробка бренду та брендинг для бізнесу — ZOND",
      description:
        "Розробка бренду для бізнесу: стратегія, позиціонування, неймінг, логотип, айдентика, брендбук та комунікація.",
    },
    "marketing-360": {
      title: "Marketing 360 — ZOND",
      description: "Комплексний маркетинг для бренду від агенції ZOND.",
    },
    graphics: {
      title: "Графічний дизайн — ZOND",
      description: "Графічний дизайн для брендів від агенції ZOND.",
    },
    smm: {
      title: "SMM — ZOND",
      description: "SMM і контент для брендів від агенції ZOND.",
    },
    illustration: {
      title: "Ілюстрація — ZOND",
      description: "Ілюстрація для брендів від агенції ZOND.",
    },
    packaging: {
      title: "Дизайн пакування — ZOND",
      description: "Дизайн пакування від агенції ZOND.",
    },
    "influence-marketing": {
      title: "Інфлюенс маркетинг — ZOND",
      description: "Інфлюенс маркетинг від агенції ZOND.",
    },
    identity: {
      title: "Айдентика — ZOND",
      description: "Розробка айдентики від агенції ZOND.",
    },
    logo: {
      title: "Дизайн логотипу — ZOND",
      description: "Розробка логотипу від агенції ZOND.",
    },
    brandbook: {
      title: "Брендбук — ZOND",
      description: "Розробка брендбуку від агенції ZOND.",
    },
    rebranding: {
      title: "Ребрендинг — ZOND",
      description: "Ребрендинг від агенції ZOND.",
    },
  },
  en: {
    branding: {
      title: "Brand development and branding for business — ZOND",
      description:
        "Brand development for business: strategy, positioning, naming, logo, identity, brand book, and communication.",
    },
    "marketing-360": {
      title: "Marketing 360 — ZOND",
      description: "Full-cycle marketing for brands by ZOND Agency.",
    },
    graphics: {
      title: "Graphic design — ZOND",
      description: "Graphic design for brands by ZOND Agency.",
    },
    smm: {
      title: "SMM — ZOND",
      description: "SMM and content for brands by ZOND Agency.",
    },
    illustration: {
      title: "Illustration — ZOND",
      description: "Illustration for brands by ZOND Agency.",
    },
    packaging: {
      title: "Packaging design — ZOND",
      description: "Packaging design by ZOND Agency.",
    },
    "influence-marketing": {
      title: "Influence marketing — ZOND",
      description: "Influence marketing by ZOND Agency.",
    },
    identity: {
      title: "Brand identity — ZOND",
      description: "Brand identity design by ZOND Agency.",
    },
    logo: {
      title: "Logo design — ZOND",
      description: "Logo design by ZOND Agency.",
    },
    brandbook: {
      title: "Brand book — ZOND",
      description: "Brand book development by ZOND Agency.",
    },
    rebranding: {
      title: "Rebranding — ZOND",
      description: "Rebranding by ZOND Agency.",
    },
  },
  ru: {
    branding: {
      title: "Разработка бренда и брендинг для бизнеса — ZOND",
      description:
        "Разработка бренда для бизнеса: стратегия, позиционирование, нейминг, логотип, айдентика, брендбук и коммуникация.",
    },
    "marketing-360": {
      title: "Marketing 360 — ZOND",
      description: "Комплексный маркетинг для бренда от агентства ZOND.",
    },
    graphics: {
      title: "Графический дизайн — ZOND",
      description: "Графический дизайн для брендов от агентства ZOND.",
    },
    smm: {
      title: "SMM — ZOND",
      description: "SMM и контент для брендов от агентства ZOND.",
    },
    illustration: {
      title: "Иллюстрация — ZOND",
      description: "Иллюстрация для брендов от агентства ZOND.",
    },
    packaging: {
      title: "Дизайн упаковки — ZOND",
      description: "Дизайн упаковки от агентства ZOND.",
    },
    "influence-marketing": {
      title: "Инфлюенс маркетинг — ZOND",
      description: "Инфлюенс маркетинг от агентства ZOND.",
    },
    identity: {
      title: "Айдентика — ZOND",
      description: "Разработка айдентики от агентства ZOND.",
    },
    logo: {
      title: "Дизайн логотипа — ZOND",
      description: "Разработка логотипа от агентства ZOND.",
    },
    brandbook: {
      title: "Брендбук — ZOND",
      description: "Разработка брендбука от агентства ZOND.",
    },
    rebranding: {
      title: "Ребрендинг — ZOND",
      description: "Ребрендинг от агентства ZOND.",
    },
  },
};
