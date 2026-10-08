import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/novo-development/${file}`;

const novoMedia = [
  "media/novo-development/cover.webp",
  "media/novo-development/hero.webp",
  "media/novo-development/01.webp",
  "media/novo-development/02.svg",
  "media/novo-development/03.webp",
  "media/novo-development/04.webp",
  "media/novo-development/05.webp",
  "media/novo-development/06.webp",
  "media/novo-development/07.webp",
  "media/novo-development/08.webp",
  "media/novo-development/09.webp",
  "media/novo-development/10.webp",
  "media/novo-development/11.webp",
  "media/novo-development/12.svg",
  "media/novo-development/13.webp",
  "media/novo-development/14.svg",
  "media/novo-development/15.svg",
  "media/novo-development/16.svg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Новий спосіб\nбути в Убуді.",
    paragraphs: [
      "NOVO Development — житловий комплекс в Убуді на острові Балі. Команда прагнула створити бренд, який передає мобільність, зручність і комфорт.",
      "Айдентика поєднує сучасний характер комплексу з природою Балі та працює для різних напрямів: NOVO Ubud, NOVO Spa і NOVO Kitchen & Bar.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Індонезія", accent: true, countryCode: "ID" },
      { label: "Ніша", value: "нерухомість" },
      { label: "Продукт", value: "житловий комплекс" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.webp"), caption: "Логотипи NOVO Spa, NOVO Ubud та NOVO Kitchen & Bar" },
      { src: m("02.svg"), caption: "NOVO — Kharkiv Tone Regular" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Кольорова палітра NOVO" },
      { src: m("04.webp"), caption: "Фірмовий бланк і папка NOVO Ubud" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Одна ідея.\nУ кожному форматі.",
    paragraphs: [
      "Розробити логотип і комплексний брендбук, що вирізняють NOVO серед житлових проєктів Балі. Побудувати впізнавану систему для простору, друкованих матеріалів і digital.",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("05.webp"), caption: "Вхідна група та зовнішня реклама NOVO Ubud" },
      { src: m("06.webp"), caption: "Фірмова вивіска NOVO Kitchen & Bar" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Простір стає\nмовою бренду.",
    paragraphs: [
      "Створили логотип, кольорову палітру, типографіку та правила фірмового стилю. Мінімалістична графіка підтримує архітектуру й атмосферу комплексу.",
      "Kharkiv Tone Regular задає характер заголовків, Montserrat забезпечує читабельність текстів. Єдина система об’єднує вивіски, поліграфію та цифрові носії.",
    ],
  },
  {
    type: "manifesto",
    label: "NOVO / BRAND EXPERIENCE",
    text: "Від простору.\nДо відчуття.",
    footer: "NOVO DEVELOPMENT / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("07.webp"), caption: "Айдентика NOVO Spa у зоні відпочинку" },
      { src: m("08.webp"), caption: "Конверт NOVO Ubud із тисненням" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Бренд у деталях.",
    paragraphs: [],
    rules: [
      "Брендинг",
      "Логотип",
      "Брендбук",
      "3D-модель",
      "Поліграфія",
      "Сувенірна продукція",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("09.webp"), caption: "Профіль NOVO Ubud в Instagram" },
      { src: m("10.webp"), caption: "Сторіс NOVO Ubud на смартфонах" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("11.webp"), caption: "Візитки та фірмова поліграфія" },
      { src: m("12.svg"), caption: "NOVO — Kharkiv Tone Regular" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("13.webp"), caption: "Презентація NOVO Ubud на ноутбуці" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.svg"), caption: "NOVO — Kharkiv Tone Regular" },
      { src: m("15.svg"), caption: "NOVO — Kharkiv Tone Regular" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("16.svg"), caption: "NOVO — Kharkiv Tone Regular" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Впізнаваний бренд.\nЦілісний досвід.",
    paragraphs: [
      "NOVO отримав логотип, брендбук та узгоджену візуальну систему. Її застосування охоплює середовище комплексу, рекламу, поліграфію й digital.",
      "Правила бренду допомагають зберігати єдиний характер у різних форматах і розвивати нові носії.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК",
    heading: "Погляд команди\nNOVO.",
    paragraphs: [
      "Для нас було важливо, щоб бренд передавав не лише вигляд комплексу, а й відчуття життя в ньому. Зрозуміла візуальна система допомагає послідовно говорити про NOVO — від першого знайомства до деталей у просторі.",
    ],
    author: "Команда NOVO Development",
    role: "NOVO Development",
    badge: "Текст для погодження з клієнтом",
  },
];

const novoGalleryCaptionsRu: Record<string, string> = {
  [m("01.webp")]: "Логотипы NOVO Spa, NOVO Ubud и NOVO Kitchen & Bar",
  [m("02.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("03.webp")]: "Цветовая палитра NOVO",
  [m("04.webp")]: "Фирменный бланк и папка NOVO Ubud",
  [m("05.webp")]: "Входная группа и наружная реклама NOVO Ubud",
  [m("06.webp")]: "Фирменная вывеска NOVO Kitchen & Bar",
  [m("07.webp")]: "Айдентика NOVO Spa в зоне отдыха",
  [m("08.webp")]: "Конверт NOVO Ubud с тиснением",
  [m("09.webp")]: "Профиль NOVO Ubud в Instagram",
  [m("10.webp")]: "Stories NOVO Ubud на смартфонах",
  [m("11.webp")]: "Визитки и фирменная полиграфия",
  [m("12.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("13.webp")]: "Презентация NOVO Ubud на ноутбуке",
  [m("14.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("15.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("16.svg")]: "NOVO — Kharkiv Tone Regular",
};

const novoGalleryCaptionsEn: Record<string, string> = {
  [m("01.webp")]: "NOVO Spa, NOVO Ubud, and NOVO Kitchen & Bar logos",
  [m("02.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("03.webp")]: "NOVO color palette",
  [m("04.webp")]: "NOVO Ubud letterhead and folder",
  [m("05.webp")]: "NOVO Ubud entrance and outdoor advertising",
  [m("06.webp")]: "NOVO Kitchen & Bar signage",
  [m("07.webp")]: "NOVO Spa identity in the lounge area",
  [m("08.webp")]: "Embossed NOVO Ubud envelope",
  [m("09.webp")]: "NOVO Ubud Instagram profile",
  [m("10.webp")]: "NOVO Ubud stories on smartphones",
  [m("11.webp")]: "Business cards and printed materials",
  [m("12.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("13.webp")]: "NOVO Ubud presentation on a laptop",
  [m("14.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("15.svg")]: "NOVO — Kharkiv Tone Regular",
  [m("16.svg")]: "NOVO — Kharkiv Tone Regular",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Новый способ\nбыть в Убуде.",
      paragraphs: [
        "NOVO Development — жилой комплекс в Убуде на острове Бали. Команда стремилась создать бренд, который передаёт мобильность, удобство и комфорт.",
        "Айдентика сочетает современный характер комплекса с природой Бали и работает для разных направлений: NOVO Ubud, NOVO Spa и NOVO Kitchen & Bar.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Одна идея.\nВ каждом формате.",
      paragraphs: [
        "Разработать логотип и комплексный брендбук, которые выделяют NOVO среди жилых проектов Бали. Построить узнаваемую систему для пространства, печатных материалов и digital.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Пространство становится\nязыком бренда.",
      paragraphs: [
        "Создали логотип, цветовую палитру, типографику и правила фирменного стиля. Минималистичная графика поддерживает архитектуру и атмосферу комплекса.",
        "Kharkiv Tone Regular задаёт характер заголовков, Montserrat обеспечивает читаемость текстов. Единая система объединяет вывески, полиграфию и цифровые носители.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Узнаваемый бренд.\nЦельный опыт.",
      paragraphs: [
        "NOVO получил логотип, брендбук и согласованную визуальную систему. Её применение охватывает среду комплекса, рекламу, полиграфию и digital.",
        "Правила бренда помогают сохранять единый характер в разных форматах и развивать новые носители.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Бренд в деталях.",
      rules: [
        "Брендинг",
        "Логотип",
        "Брендбук",
        "3D-модель",
        "Полиграфия",
        "Сувенирная продукция",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "NOVO / BRAND EXPERIENCE",
      text: "От пространства.\nК ощущению.",
      footer: "NOVO DEVELOPMENT / BRAND IDENTITY",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ",
      heading: "Взгляд команды\nNOVO.",
      paragraphs: [
        "Для нас было важно, чтобы бренд передавал не только облик комплекса, но и ощущение жизни в нём. Понятная визуальная система помогает последовательно говорить о NOVO — от первого знакомства до деталей в пространстве.",
      ],
      author: "Команда NOVO Development",
      role: "NOVO Development",
      badge: "Текст для согласования с клиентом",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Страна", value: "Индонезия", accent: true, countryCode: "ID" },
        { label: "Ниша", value: "недвижимость" },
        { label: "Продукт", value: "жилой комплекс" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: novoGalleryCaptionsRu[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

const blocksEn: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "ABOUT THE CLIENT",
      title: "A new way\nto be in Ubud.",
      paragraphs: [
        "NOVO Development is a residential complex in Ubud, Bali. The team wanted a brand that conveys mobility, convenience, and comfort.",
        "The identity blends the complex’s contemporary character with Bali’s nature and works across NOVO Ubud, NOVO Spa, and NOVO Kitchen & Bar.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "THE BRIEF",
      title: "One idea.\nIn every format.",
      paragraphs: [
        "Design a logo and a full brand book that set NOVO apart among Bali residential projects. Build a recognizable system for the space, print, and digital.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "THE SOLUTION",
      title: "Space becomes\nthe brand language.",
      paragraphs: [
        "We created the logo, color palette, typography, and identity rules. Minimal graphics support the architecture and atmosphere of the complex.",
        "Kharkiv Tone Regular shapes the headlines; Montserrat keeps body text readable. One system unites signage, print, and digital carriers.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "THE RESULT",
      title: "A recognizable brand.\nA cohesive experience.",
      paragraphs: [
        "NOVO received a logo, brand book, and a consistent visual system applied across the complex environment, advertising, print, and digital.",
        "Brand rules help keep one character across formats and open the way for new carriers.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "Brand in the details.",
      rules: [
        "Branding",
        "Logo",
        "Brand book",
        "3D model",
        "Print",
        "Souvenir products",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "NOVO / BRAND EXPERIENCE",
      text: "From space.\nTo feeling.",
      footer: "NOVO DEVELOPMENT / BRAND IDENTITY",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "TESTIMONIAL",
      heading: "From the NOVO\nteam.",
      paragraphs: [
        "It was important that the brand convey not only how the complex looks, but how it feels to live there. A clear visual system helps us speak about NOVO consistently — from the first introduction to details in the space.",
      ],
      author: "NOVO Development team",
      role: "NOVO Development",
      badge: "Draft text pending client approval",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Indonesia", accent: true, countryCode: "ID" },
        { label: "Niche", value: "real estate" },
        { label: "Product", value: "residential complex" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: novoGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getNovoDevelopmentBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const novoDevelopmentShared = {
  slug: "novo-development",
  cover: m("hero.webp"),
  listCover: m("hero.webp"),
  media: novoMedia,
  body: `[IMG: media/novo-development/hero.webp]`,
};

export const novoDevelopmentCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "NOVO Development",
    description:
      "Розробили брендинг, логотип і повний брендбук для NOVO Development — сучасного житлового комплексу в Убуді на Балі. Також сайт і сувенірка.",
    tagline: "Простір для життя.\nБренд для нового досвіду.",
    serviceTag: "Брендинг · айдентика · брендбук",
  },
  ru: {
    title: "NOVO Development",
    description:
      "Разработали брендинг, логотип и полный брендбук для NOVO Development — современного жилого комплекса в Убуде на Бали. Также сайт и сувенирка.",
    tagline: "Пространство для жизни.\nБренд для нового опыта.",
    serviceTag: "Брендинг · айдентика · брендбук",
  },
  en: {
    title: "NOVO Development",
    description:
      "We developed branding, logo, and a full brand book for NOVO Development — a residential complex in Ubud, Bali. Also website and souvenirs.",
    tagline: "A space for living.\nA brand for a new experience.",
    serviceTag: "Branding · identity · brand book",
  },
};
