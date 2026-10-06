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
  "naming",
  "positioning",
  "communication",
  "brand-character",
  "web-development",
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
  "positioning",
  "graphics",
  "smm",
  "web-development",
  "packaging",
  "brandbook",
  "logo",
];

/**
 * Grid card index (01–12) → icon file in public/assets/services/icons/.
 * File numbers describe the artwork batch; cards follow the services grid order.
 */
const serviceGridIconFileByCardIndex: Record<string, string> = {
  "01": "01", // стратегія
  "02": "02", // позиціонування
  "03": "03", // неймінг
  "04": "05", // логотип
  "05": "04", // айдентика
  "06": "06", // брендбук
  "07": "10", // слоган і комунікація
  "08": "11", // персонаж бренду
  "09": "07", // упаковка
  "10": "08", // графічний дизайн
  "11": "12", // веб-розробка
  "12": "09", // SMM
};

/** Grid card index (01–12) → illustration icon (replaces photo in UI; photos kept in dictionary). */
export function getServiceGridIconSrc(cardIndex: string): string {
  const normalized = cardIndex.padStart(2, "0");
  const file = serviceGridIconFileByCardIndex[normalized] ?? normalized;
  return `/assets/services/icons/${file}.png`;
}

/** Card index (01–12) → service detail slug for the homepage /services grid. */
export const servicesGridSlugByCardIndex: Record<string, ServiceSlug> = {
  "01": "branding",
  "02": "positioning",
  "03": "naming",
  "04": "logo",
  "05": "identity",
  "06": "brandbook",
  "07": "communication",
  "08": "brand-character",
  "09": "packaging",
  "10": "graphics",
  "11": "web-development",
  "12": "smm",
};

export const serviceTitles: Record<Locale, Record<ServiceSlug, string>> = {
  uk: {
    branding: "Брендинг",
    "marketing-360": "Marketing 360",
    graphics: "Графічний дизайн",
    smm: "SMM",
    illustration: "Ілюстрація",
    packaging: "Упаковка",
    "influence-marketing": "Інфлюенс маркетинг",
    identity: "Айдентика",
    naming: "Неймінг",
    positioning: "Позиціонування",
    communication: "Слоган і комунікація",
    "brand-character": "Персонаж бренду",
    "web-development": "Веб-розробка",
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
    naming: "Naming",
    positioning: "Positioning",
    communication: "Slogan & communication",
    "brand-character": "Brand character",
    "web-development": "Web development",
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
    naming: "Нейминг",
    positioning: "Позиционирование",
    communication: "Слоган и коммуникация",
    "brand-character": "Персонаж бренда",
    "web-development": "Веб-разработка",
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
      title: "Брендинг - Розробка та створення бренду в Україні | ZOND",
      description:
        "Клієнти обирають конкурента, бо він виглядає солідніше. Брендинг і розробка бренду під ключ, від позиціонування до брендбука. Студія ZOND, Україна.",
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
      title: "Замовити розробку дизайну упаковки, етикетки, пакування | ZOND, Київ",
      description:
        "На полиці ваш товар просто не помічають. Дизайн упаковки та етикетки, яку беруть до рук. Макети під друк і супровід на виробництві. ZOND, Київ.",
    },
    "influence-marketing": {
      title: "Інфлюенс маркетинг — реклама у блогерів в Україні | ZOND",
      description:
        "Інфлюенс маркетинг: підбір блогерів, кампанії в Instagram, TikTok, YouTube і Telegram, аналітика результатів. Реклама у блогерів під ваш бюджет. Студія ZOND.",
    },
    identity: {
      title: "Розробка фірмового стилю компанії, створення айдентики, ціна | ZOND",
      description:
        "Компанія виглядає дрібнішою, ніж вона є. Фірмовий стиль і айдентика збирають логотип, палітру, шрифти й макети носіїв в один упізнаваний образ. ZOND.",
    },
    naming: {
      title: "Неймінг: створення назви бренду та продукту — ZOND",
      description:
        "Розробляємо назви для компаній, продуктів і сервісів. Дослідження, креативні напрями, мовний відбір і рекомендації до запуску. Неймінг від ZOND.",
    },
    positioning: {
      title: "Позиціонування бренду для бізнесу — ZOND",
      description:
        "Розробляємо позиціонування бренду: дослідження бізнесу, ринку й аудиторії, ціннісну пропозицію та ключові повідомлення. Позиціонування від ZOND.",
    },
    communication: {
      title: "Слоган та комунікація бренду — ZOND",
      description:
        "Розробляємо слогани та комунікацію бренду: головна ідея, тон голосу, ключові повідомлення та принципи для різних каналів. Комунікація від ZOND.",
    },
    "brand-character": {
      title: "Персонаж бренду: створення маскота — ZOND",
      description:
        "Створюємо персонажів бренду: ідея, характер, силует, емоції, 2D або 3D образ, носії та гайд для команди. Розробка маскота від ZOND.",
    },
    "web-development": {
      title: "Веб-розробка та створення сайтів для бізнесу — ZOND",
      description:
        "Створюємо сайти для бізнесу: стратегія, структура, дизайн, адаптивна веб-розробка, тестування та запуск. Веб-розробка від ZOND.",
    },
    logo: {
      title: "Створення логотипу - Замовити розробку і дизайн лого | Ціна у ZOND, Київ",
      description:
        "Логотип із генератора зливається з тисячею таких самих. Замовити розробку логотипу, який запам'ятовують. Усі файли для друку й digital. ZOND, Київ.",
    },
    brandbook: {
      title: "Розробка брендбуку - Замовити створення бренд гайду | Ціна від ZOND, Київ",
      description:
        "Кожен підрядник малює ваш бренд по-своєму. Замовити розробку брендбуку, який фіксує логотип, кольори, шрифти й носії. Приклади студії ZOND, Київ.",
    },
    rebranding: {
      title: "Ребрендинг компанії, оновлення бренду під ключ | ZOND",
      description:
        "Оновити бренд і не втратити своїх клієнтів реально. Ребрендинг компанії. Аудит, нове позиціонування, логотип і план переходу. Кейси студії ZOND.",
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
      title: "Brand identity and corporate style, price | ZOND, Kyiv",
      description:
        "The company looks smaller than it is. Corporate style and identity bring the logo, palette, type, and media layouts into one recognizable image. ZOND examples, Kyiv.",
    },
    naming: {
      title: "Naming: brand and product name development — ZOND",
      description:
        "We create names for companies, products, and services: research, creative directions, language review, and launch recommendations.",
    },
    positioning: {
      title: "Brand positioning for business — ZOND",
      description:
        "We develop brand positioning: business, market, and audience research, value proposition, and key messages.",
    },
    communication: {
      title: "Slogan and brand communication — ZOND",
      description:
        "We develop slogans and brand communication: core idea, tone of voice, key messages, and principles for different channels.",
    },
    "brand-character": {
      title: "Brand character and mascot design — ZOND",
      description:
        "We create brand characters: concept, personality, silhouette, emotions, 2D or 3D visuals, applications, and guidelines for your team.",
    },
    "web-development": {
      title: "Web development and business websites — ZOND",
      description:
        "We build business websites: strategy, structure, design, responsive development, testing, and launch. Web development by ZOND.",
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
      title: "Company rebranding, brand refresh under one roof | ZOND",
      description:
        "Rebranding without losing your customers: brand audit, new positioning, logo and identity update, and a transition plan. ZOND case studies.",
    },
  },
  ru: {
    branding: {
      title: "Брендинг в Киеве, заказать услуги разработки бренда, цена | ZOND",
      description:
        "Клиенты выбирают конкурента, потому что он выглядит солиднее. Брендинг компании в Киеве, разработка бренда от позиционирования до брендбука. Кейсы ZOND.",
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
      title: "Дизайн иллюстрации на заказ, создание иллюстраций, цена | ZOND, Киев",
      description:
        "Стоковые картинки забываются сразу. Дизайн иллюстрации на заказ. Персонажи, комиксы и графика для упаковки, сайта и рекламы. Студия ZOND, Киев.",
    },
    packaging: {
      title: "Дизайнер упаковки, заказать разработку дизайна этикетки | ZOND, Киев",
      description:
        "На полке ваш товар просто не замечают. Дизайн упаковки и этикетки в Киеве, которую берут в руки. Макеты под печать и производство. Кейсы студии ZOND.",
    },
    "influence-marketing": {
      title: "Инфлюенс маркетинг — реклама у блогеров в Украине | ZOND",
      description:
        "Инфлюенс маркетинг: подбор блогеров, кампании в Instagram, TikTok, YouTube и Telegram, аналитика результатов. Реклама у блогеров под ваш бюджет. Студия ZOND.",
    },
    identity: {
      title: "Разработка фирменного стиля и создание айдентики, цена | ZOND, Киев",
      description:
        "Компания выглядит мельче, чем она есть. Фирменный стиль и айдентика собирают логотип, палитру, шрифты и макеты носителей в один образ. Примеры ZOND, Киев.",
    },
    naming: {
      title: "Нейминг: создание названия бренда и продукта — ZOND",
      description:
        "Разрабатываем названия для компаний, продуктов и сервисов: исследование, креативные направления, языковой отбор и рекомендации к запуску.",
    },
    positioning: {
      title: "Позиционирование бренда для бизнеса — ZOND",
      description:
        "Разрабатываем позиционирование бренда: исследование бизнеса, рынка и аудитории, ценностное предложение и ключевые сообщения.",
    },
    communication: {
      title: "Слоган и коммуникация бренда — ZOND",
      description:
        "Разрабатываем слоганы и коммуникацию бренда: главная идея, тон голоса, ключевые сообщения и принципы для разных каналов.",
    },
    "brand-character": {
      title: "Персонаж бренда: создание маскота — ZOND",
      description:
        "Создаём персонажей бренда: идея, характер, силуэт, эмоции, 2D или 3D образ, носители и гайд для команды.",
    },
    "web-development": {
      title: "Веб-разработка и создание сайтов для бизнеса — ZOND",
      description:
        "Создаём сайты для бизнеса: стратегия, структура, дизайн, адаптивная веб-разработка, тестирование и запуск. Веб-разработка от ZOND.",
    },
    logo: {
      title: "Создание логотипа компании, заказать дизайн лого, цена | ZOND, Киев",
      description:
        "Логотип из генератора сливается с тысячей таких же. Создание логотипа компании, который запоминают. Все файлы для печати и digital. Студия ZOND, Киев.",
    },
    brandbook: {
      title: "Разработка брендбука, заказать создание бренд гайда, цена | ZOND, Киев",
      description:
        "Каждый подрядчик рисует ваш бренд по-своему. Заказать разработку брендбука, который фиксирует логотип, цвета, шрифты и носители. Примеры ZOND, Киев.",
    },
    rebranding: {
      title: "Ребрендинг компании, заказать редизайн логотипа и стиля, цена | ZOND",
      description:
        "Обновить бренд и не потерять своих клиентов реально. Ребрендинг компании и редизайн логотипа. Аудит, позиционирование, план перехода. Кейсы ZOND, Киев.",
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
