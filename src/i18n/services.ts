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

/** Slugs for the 12 homepage /services grid cards, by index order. */
export const servicesGridSlugs: Array<ServiceSlug | null> = [
  "branding",
  "branding",
  "branding",
  "logo",
  "identity",
  "brandbook",
  "branding",
  "branding",
  "packaging",
  "graphics",
  null,
  "smm",
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
      title: "Графічний дизайн для бізнесу — поліграфія та реклама | ZOND",
      description:
        "Графічний дизайн: поліграфія, зовнішня реклама, презентації, технічний дизайн і підготовка до друку. Робимо бренд впізнаваним на кожному носії. Студія ZOND.",
    },
    smm: {
      title: "SMM-просування — соціальні мережі для бізнесу | ZOND",
      description:
        "SMM-просування: стратегія, контент, Tone of Voice, управління репутацією та візуальний стиль у Facebook, Instagram, Telegram і YouTube. Студія ZOND.",
    },
    illustration: {
      title:
        "Створити комерційну ілюстрацію на замовлення - Ціна ілюстратора | ZOND",
      description:
        "Стокові картинки забувають одразу. Комерційна ілюстрація на замовлення. Персонажі, комікси й графіка для упаковки, сайту й реклами. Студія ZOND.",
    },
    packaging: {
      title: "Дизайн пакування та етикетки — ZOND",
      description:
        "Дизайн упаковки та етикетки: концепція, 3D-мокапи, адаптації для SKU та макети, готові до друку. Створюємо упаковки, які привертають увагу й продають на полиці.",
    },
    "influence-marketing": {
      title: "Інфлюенс маркетинг — реклама у блогерів в Україні | ZOND",
      description:
        "Інфлюенс маркетинг: підбір блогерів, кампанії в Instagram, TikTok, YouTube і Telegram, аналітика результатів. Реклама у блогерів під ваш бюджет. Студія ZOND.",
    },
    identity: {
      title: "Айдентика — ZOND",
      description: "Розробка айдентики від агенції ZOND.",
    },
    logo: {
      title: "Дизайн логотипів — розробка логотипа для компанії — ZOND",
      description:
        "Розробка логотипа для компанії: авторський дизайн, палітра кольорів, logobook і пакет файлів. Створюємо логотипи, які легко впізнати й складно забути.",
    },
    brandbook: {
      title: "Брендбук — розробка брендбуку — ZOND",
      description:
        "Розробка брендбуку: правила логотипа, кольорів, шрифтів, графіки та носіїв. Створюємо брендбуки, які зберігають цілісність бренду в кожній точці контакту.",
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
      title: "Graphic design for business — print and advertising | ZOND",
      description:
        "Graphic design: print, outdoor advertising, presentations, technical design, and print preparation. Make the brand recognizable on every medium. ZOND studio.",
    },
    smm: {
      title: "SMM promotion — social media for business | ZOND",
      description:
        "SMM promotion: strategy, content, Tone of Voice, reputation management, and visual style on Facebook, Instagram, Telegram, and YouTube. ZOND studio.",
    },
    illustration: {
      title: "Custom commercial illustration - Illustrator price | ZOND",
      description:
        "Stock images are forgotten instantly. Custom commercial illustration: characters, comics, and graphics for packaging, websites, and ads. ZOND studio.",
    },
    packaging: {
      title: "Packaging and label design — ZOND",
      description:
        "Packaging and label design: concept, 3D mockups, SKU adaptations, and print-ready layouts. Packaging that attracts attention and sells on the shelf.",
    },
    "influence-marketing": {
      title: "Influence marketing — blogger advertising in Ukraine | ZOND",
      description:
        "Influence marketing: influencer selection, campaigns on Instagram, TikTok, YouTube, and Telegram, result analytics. Blogger ads for your budget. ZOND studio.",
    },
    identity: {
      title: "Brand identity — ZOND",
      description: "Brand identity design by ZOND Agency.",
    },
    logo: {
      title: "Logo design — business logo development — ZOND",
      description:
        "Business logo development: original design, color palette, logobook, and file package. Logos that are easy to recognize and hard to forget.",
    },
    brandbook: {
      title: "Brand book — brand book development — ZOND",
      description:
        "Brand book development: logo, color, typography, graphics, and media rules. Brand books that preserve consistency at every touchpoint.",
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
      title: "Графический дизайн для бизнеса — полиграфия и реклама | ZOND",
      description:
        "Графический дизайн: полиграфия, наружная реклама, презентации, технический дизайн и подготовка к печати. Делаем бренд узнаваемым на каждом носителе. Студия ZOND.",
    },
    smm: {
      title: "SMM-продвижение — социальные сети для бизнеса | ZOND",
      description:
        "SMM-продвижение: стратегия, контент, Tone of Voice, управление репутацией и визуальный стиль в Facebook, Instagram, Telegram и YouTube. Студия ZOND.",
    },
    illustration: {
      title: "Создать коммерческую иллюстрацию на заказ - Цена иллюстратора | ZOND",
      description:
        "Стоковые картинки забывают сразу. Коммерческая иллюстрация на заказ. Персонажи, комиксы и графика для упаковки, сайта и рекламы. Студия ZOND.",
    },
    packaging: {
      title: "Дизайн упаковки и этикетки — ZOND",
      description:
        "Дизайн упаковки и этикетки: концепция, 3D-мокапы, адаптации для SKU и макеты, готовые к печати. Создаём упаковки, которые привлекают внимание и продают на полке.",
    },
    "influence-marketing": {
      title: "Инфлюенс маркетинг — реклама у блогеров в Украине | ZOND",
      description:
        "Инфлюенс маркетинг: подбор блогеров, кампании в Instagram, TikTok, YouTube и Telegram, аналитика результатов. Реклама у блогеров под ваш бюджет. Студия ZOND.",
    },
    identity: {
      title: "Айдентика — ZOND",
      description: "Разработка айдентики от агентства ZOND.",
    },
    logo: {
      title: "Дизайн логотипов — разработка логотипа для компании — ZOND",
      description:
        "Разработка логотипа для компании: авторский дизайн, палитра цветов, logobook и пакет файлов. Создаём логотипы, которые легко узнать и сложно забыть.",
    },
    brandbook: {
      title: "Брендбук — разработка брендбука — ZOND",
      description:
        "Разработка брендбука: правила логотипа, цветов, шрифтов, графики и носителей. Создаём брендбуки, сохраняющие целостность бренда в каждой точке контакта.",
    },
    rebranding: {
      title: "Ребрендинг — ZOND",
      description: "Ребрендинг от агентства ZOND.",
    },
  },
};

export const servicesIndexMeta: Record<
  Locale,
  { title: string; description: string }
> = {
  uk: {
    title: "Наші послуги | Студія графічного дизайну ZOND",
    description:
      "Послуги дизайн-студії ZOND: брендинг, логотип, айдентика, брендбук, ребрендинг, SMM, упаковка, графіка, ілюстрація та маркетинг 360.",
  },
  en: {
    title: "Our services | ZOND graphic design studio",
    description:
      "ZOND design studio services: branding, logo, identity, brand book, rebranding, SMM, packaging, graphics, illustration, and marketing 360.",
  },
  ru: {
    title: "Наши услуги | Студия графического дизайна ZOND",
    description:
      "Услуги дизайн-студии ZOND: брендинг, логотип, айдентика, брендбук, ребрендинг, SMM, упаковка, графика, иллюстрация и маркетинг 360.",
  },
};
