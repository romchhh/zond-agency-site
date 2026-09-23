import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const media = (name: string) => `/assets/cases/home-hub/${name}`;

const homeHubMedia = [
  "media/home-hub/cover.webp",
  "media/home-hub/01.webp",
  "media/home-hub/02.webp",
  "media/home-hub/03.webp",
  "media/home-hub/04.webp",
  "media/home-hub/05.webp",
  "media/home-hub/06.webp",
  "media/home-hub/07.webp",
  "media/home-hub/08.webp",
  "media/home-hub/09.webp",
  "media/home-hub/10.webp",
  "media/home-hub/11.webp",
  "media/home-hub/12.webp",
  "media/home-hub/13.webp",
  "media/home-hub/14.webp",
  "media/home-hub/15.webp",
  "media/home-hub/16.webp",
  "media/home-hub/17.webp",
  "media/home-hub/18.webp",
  "media/home-hub/19.webp",
  "media/home-hub/20.webp",
  "media/home-hub/21.webp",
  "media/home-hub/22.webp",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Три категорії.\nОдин дім.",
    paragraphs: [
      "Home Hub — компанія з продажу дверей, вікон та фурнітури. Її асортимент об’єднує продукти, від яких залежать світло, тиша, безпека й відчуття комфорту вдома.",
      "У концепті ми позиціонуємо Home Hub як місце продуманого вибору: двері, вікна та деталі мають доповнювати одне одного. Бренд допомагає побачити за окремими товарами цілісне рішення для простору.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Швеція", accent: true, countryCode: "SE" },
      { label: "Ніша", value: "двері, вікна та фурнітура" },
      { label: "Продукт", value: "брендинг і система носіїв" },
    ],
  },
  {
    type: "gallery",
    layout: "triple",
    images: [
      { src: media("01.webp"), caption: "Двері. Тепло натуральних матеріалів" },
      { src: media("02.webp"), caption: "Вікна. Простір для світла" },
      { src: media("03.webp"), caption: "Фурнітура. Значення кожної деталі" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Різні продукти.\nСпільний характер.",
    paragraphs: [
      "Завдання — розробити брендинг, який об’єднає три товарні категорії та зробить Home Hub упізнаваним у кожній точці контакту: від першого знайомства онлайн до візиту в шоурум.",
      "Важливо було передати надійність і сучасний підхід без візуального перевантаження. Система мала однаково добре працювати на великій вивісці, у каталозі й на невеликій упаковці фурнітури.",
    ],
    deliverables: [
      { title: "Об’єднати\nкатегорії", description: "Спільна візуальна мова для дверей, вікон та фурнітури." },
      { title: "Спростити\nвибір", description: "Чітка ієрархія інформації та увага до самого продукту." },
      { title: "Побудувати\nсистему", description: "Принципи, які легко переносити на нові носії." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("04.webp"), caption: "Простір продуманого вибору" },
      { src: media("05.webp"), caption: "Бренд, орієнтований на людину" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Проста форма.\nБільше можливостей.",
    paragraphs: [
      "Центральна ідея — «Дім починається з деталей». Її візуальним втіленням став відкритий портал: проста геометрична форма, що нагадує дверний отвір і віконну раму. Вона працює як знак бренду та основа композиції.",
      "Теплий білий залишає простір для продукту, графіт додає виразності, а помаранчевий виділяє важливе. Стримана типографіка й фотографії дерева, скла та металу пов’язують айдентику з реальними матеріалами Home Hub.",
    ],
    ideaStrip: "Портал — знак входу\nу власний простір.",
  },
  {
    type: "manifesto",
    label: "ЦЕНТРАЛЬНА ІДЕЯ",
    text: "Дім починається\nз деталей.",
    footer: "HOME HUB — DOORS / WINDOWS / HARDWARE",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("11.webp"), caption: "Логотип Home Hub" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("12.webp"), caption: "Ділові матеріали" },
      { src: media("16.webp"), caption: "Палітра та матеріали" },
    ],
  },
  {
    type: "palette",
    colors: [
      { name: "Warm ivory", hex: "#F4F1EA", bg: "#f4f1ea", fg: "#242622" },
      { name: "Graphite", hex: "#242622", bg: "#242622", fg: "#f4f1ea" },
      { name: "Hub orange", hex: "#F47A38", bg: "#f47a38", fg: "#242622" },
    ],
  },
  {
    type: "section",
    index: "06",
    variant: "book",
    kicker: "БРЕНДБУК",
    title: "Правила, що тримають\nбренд разом.",
    paragraphs: [
      "Для брендбуку запропонували шість напрямів правил: логотип, палітра, типографіка, фотостиль, композиція та носії. Разом вони задають послідовний характер комунікації.",
      "У макетах показали, як система переходить у візитки, каталог, пакування, digital та оформлення простору. Ці приклади формують основу для подальшої розробки робочого брендбуку.",
    ],
    rules: ["Логотип", "Палітра", "Типографіка", "Фотостиль", "Композиція", "Носії"],
    conceptNote: "Візуальна модель брендбуку: 6 напрямів правил.",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("13.webp"), caption: "Брендбук. Концепція обкладинки" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("14.webp"), caption: "Брендбук. Побудова та використання знака" },
      { src: media("15.webp"), caption: "Брендбук. Типографічний напрям" },
    ],
  },
  {
    type: "gallery",
    layout: "triple",
    images: [
      { src: media("17.webp"), caption: "Пакування фурнітури" },
      { src: media("18.webp"), caption: "Комплект матеріалів для вікон" },
      { src: media("19.webp"), caption: "Фірмовий пакет" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("20.webp"), caption: "Продуктовий каталог" },
      { src: media("22.webp"), caption: "Візуальний напрям інтернет-магазину" },
    ],
  },
  {
    type: "banner",
    kicker: "АЙДЕНТИКА В ДІЇ",
    title: "Від коробки.\nДо цілого простору.",
    tags: ["Пакування", "Digital", "Шоурум", "Транспорт"],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("06.webp"), caption: "Фасад і вивіска Home Hub" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("07.webp"), caption: "Навігація у шоурумі" },
      { src: media("21.webp"), caption: "Зовнішня комунікація" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: media("08.webp"), caption: "Брендування транспорту" },
      { src: media("09.webp"), caption: "Одяг команди" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: media("10.webp"), caption: "Продукт у житті: світло, тепло, комфорт" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Одна система.\nНа всіх носіях.",
    paragraphs: [
      "У межах концепту сформували цілісний образ Home Hub: логотип, колірну систему, графічний принцип і візуальний напрям брендбуку. Три продуктові категорії об’єднані однією ідеєю, яка читається на різних носіях.",
      "23 візуалізації демонструють, як бренд може працювати в упаковці, рекламі, інтернет-магазині та шоурумі. Це основа для погодження й подальшого впровадження; дані про продажі та впізнаваність потребуватимуть оцінки після запуску.",
    ],
  },
  {
    type: "quote",
    paragraphs: [
      "«Ми хотіли, щоб Home Hub сприймався як єдиний бренд, а не окремі напрямки з продажу дверей, вікон і фурнітури. Для нас було важливо зберегти простоту, але додати характер і впізнаваність.",
      "У цьому концепті нам близькі логіка порталу, спокійна палітра та увага до матеріалів. На прикладах упаковки, каталогу й шоуруму добре видно, як система працюватиме в різних форматах.»",
    ],
    badge: "Демонстраційний відгук",
    author: "Представник Home Hub",
    role: "Місце для імені та посади клієнта",
    note: "Приклад тексту для макета. Не є реальним відгуком; перед публікацією замініть погодженою цитатою клієнта.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Три категории.\nОдин дом.",
      paragraphs: [
        "Home Hub — компания по продаже дверей, окон и фурнитуры. Её ассортимент объединяет продукты, от которых зависят свет, тишина, безопасность и комфорт дома.",
        "В концепции мы позиционируем Home Hub как место продуманного выбора: двери, окна и детали должны дополнять друг друга.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Разные продукты.\nОбщий характер.",
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Простая форма.\nБольше возможностей.",
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Одна система.\nНа всех носителях.",
    };
  }
  if (block.type === "banner") {
    return {
      ...block,
      kicker: "АЙДЕНТИКА В ДЕЙСТВИИ",
      title: "От коробки.\nДо целого пространства.",
      tags: ["Упаковка", "Digital", "Шоурум", "Транспорт"],
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      badge: "Демонстрационный отзыв",
      author: "Представитель Home Hub",
      role: "Место для имени и должности клиента",
      note: "Пример текста для макета. Не является реальным отзывом.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Страна", value: "Швеция", countryCode: "SE" }
          : item.label === "Ніша"
            ? { ...item, label: "Ниша", value: "двери, окна и фурнитура" }
            : { ...item, label: "Продукт", value: "брендинг и система носителей" },
      ),
    };
  }
  return block;
});

const blocksEn: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "ABOUT CLIENT",
      title: "Three categories.\nOne home.",
      paragraphs: [
        "Home Hub is a company selling doors, windows, and hardware. Its range brings together products that shape light, quiet, security, and comfort at home.",
        "In this concept, Home Hub is positioned as a place of thoughtful choice where doors, windows, and details complement each other.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Different products.\nShared character.",
      paragraphs: [
        "The goal was to develop branding that unites three product categories and makes Home Hub recognizable at every touchpoint.",
        "It was important to convey reliability and a modern approach without visual overload.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Simple form.\nMore possibilities.",
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "One system.\nAcross all touchpoints.",
    };
  }
  if (block.type === "section" && block.index === "02" && block.deliverables) {
    return {
      ...block,
      deliverables: [
        { title: "Unite\ncategories", description: "A shared visual language for doors, windows, and hardware." },
        { title: "Simplify\nchoice", description: "Clear information hierarchy and focus on the product." },
        { title: "Build a\nsystem", description: "Principles that scale to new touchpoints." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "CORE IDEA",
      text: "Home starts\nwith details.",
    };
  }
  if (block.type === "banner") {
    return {
      ...block,
      kicker: "IDENTITY IN ACTION",
      title: "From packaging.\nTo full space.",
      tags: ["Packaging", "Digital", "Showroom", "Transport"],
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      badge: "Demo testimonial",
      author: "Home Hub representative",
      role: "Placeholder for client name and role",
      note: "Sample text for the layout. Replace with an approved client quote before publishing.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Sweden", accent: true, countryCode: "SE" },
        { label: "Niche", value: "doors, windows, and hardware" },
        { label: "Product", value: "branding and touchpoint system" },
      ],
    };
  }
  return block;
});

export function getHomeHubBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const homeHubShared = {
  slug: "home-hub",
  cover: media("cover.webp"),
  media: homeHubMedia,
  tagline: "Дім починається\nз деталей.",
  serviceTag: "Брендинг + брендбук",
  body: `[IMG: media/home-hub/cover.webp]`,
};

export const homeHubCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Home Hub",
    description:
      "Концепт брендингу Home Hub: двері, вікна, фурнітура. Від ідеї та логотипа до брендбуку, пакування й простору.",
    tagline: "Дім починається\nз деталей.",
    serviceTag: "Брендинг + брендбук",
  },
  ru: {
    title: "Home Hub",
    description:
      "Концепт брендинга Home Hub: двери, окна, фурнитура. От идеи и логотипа до брендбука, упаковки и пространства.",
    tagline: "Дом начинается\nс деталей.",
    serviceTag: "Брендинг + брендбук",
  },
  en: {
    title: "Home Hub",
    description:
      "Home Hub branding concept: doors, windows, hardware. From idea and logo to brand book, packaging, and space.",
    tagline: "Home starts\nwith details.",
    serviceTag: "Branding + brand book",
  },
};
