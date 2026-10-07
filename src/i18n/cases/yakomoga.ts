import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/yakomoga/${file}`;

const yakomogaMedia = [
  "media/yakomoga/cover.gif",
  "media/yakomoga/hero.webp",
  "media/yakomoga/01.jpeg",
  ...Array.from({ length: 17 }, (_, i) => `media/yakomoga/${String(i + 2).padStart(2, "0")}.webp`),
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Точка у NOVUS.\nБренд із характером.",
    paragraphs: [
      "ЯКОМОГА — бренд доставки японської кухні з окремим приміщенням напроти кас супермаркету NOVUS. Тут покупці можуть забрати замовлення, а команда готує його до видачі та доставки.",
      "В основі бренду — поєднання японської кухні та українського характеру. Айдентика має швидко привертати увагу серед супермаркетного оточення й залишатися впізнаваною на пакуванні, у формі команди та цифровій комунікації.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "доставка їжі" },
      { label: "Продукт", value: "доставка / самовивіз" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.jpeg"), caption: "Оригінальний логотип ЯКОМОГА та слоган «Доставка задоволення»" },
      { src: m("02.webp"), caption: "Типографіка та її практичне застосування" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Помітити напроти кас.\nЗапам’ятати після покупки.",
    paragraphs: [
      "Створити виразний образ для точки видачі у NOVUS і служби доставки. Покупець має легко знайти ЯКОМОГА, впізнати бренд і зрозуміти, де забрати своє замовлення.",
      "Об’єднати вивіску, пакування, форму команди, подарункову карту, серветки та штендер. Зберегти виразний знак, а патерн використовувати вибірково на чорних носіях.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Характер", description: "Український характер і виразний знак." },
      { title: "Послідовність", description: "Спільні правила для всіх носіїв." },
      { title: "Масштаб", description: "Точка у NOVUS, самовивіз і доставка." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Видача одного білого паперового пакета та коробки" },
      { src: m("04.webp"), caption: "Бюджетні білі пакет і коробка з оригінальним патерном" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Впізнаваний знак.\nЧиста подача.",
    paragraphs: [
      "Оригінальний логотип із козацьким персонажем і слоган «Доставка задоволення» стали основою системи. Білий і чорний кольори дають простір, червоний допомагає виділити бренд серед супермаркетного оточення.",
      "Вишиваний геометричний патерн додає українського характеру білому паперовому пакету й коробці. На чорній сумці доставки, чохлі для паличок і подарунковій карті він працює у контрастній версії. Типографіка та палітра підтримують цю систему в пакуванні й рекламі, а фотографії роллів стають головним акцентом Instagram-комунікації. На формі, серветках та вивісці головну роль зберігає знак — кожен носій має власний баланс графіки й вільного простору.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ БРЕНДУ",
    text: "Доставка\nзадоволення.",
    footer: "ЯКОМОГА / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("05.webp"), caption: "Кольорова палітра ЯКОМОГА" },
      { src: m("06.webp"), caption: "Оригінальний патерн і застосування на пакуванні" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("07.webp"), caption: "Футболка ЯКОМОГА спереду" },
      { src: m("08.webp"), caption: "Кепка лише зі знаком ЯКОМОГА" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "ЕЛЕМЕНТИ СИСТЕМИ",
    title: "Брендбук.\nОснова для команди.",
    paragraphs: [],
    rules: [
      "Логотип та версії",
      "Кольорова палітра",
      "Типографіка",
      "Патерн на носіях",
      "Пакування",
      "Поліграфія та мерч",
      "Цифрові носії",
      "Правила застосування",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("09.webp"), caption: "Подарунковий сертифікат 1000 грн із тонкою смугою патерну" },
      { src: m("10.webp"), caption: "Серветки зі знаком у куті" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("11.webp"), caption: "Сумка доставки з контрастним патерном" },
      { src: m("12.webp"), caption: "Чохол для паличок із контрастним патерном" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("13.webp"), caption: "Екран замовлення: чотири роли з цінами" },
      { src: m("14.webp"), caption: "Чорний штендер із фото роллів та акцією" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("15.webp"), caption: "Instagram ЯКОМОГА на телефоні" },
      { src: m("16.webp"), caption: "Instagram-креативи з фотографіями роллів на телефонах" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("17.webp"), caption: "Візитка ЯКОМОГА" },
      { src: m("18.webp"), caption: "Об’ємна шильда зі знаком під прозорою смолою" },
    ],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Від точки видачі\nдо дверей клієнта.",
    paragraphs: [
      "ЯКОМОГА отримала цілісну візуальну систему для присутності у NOVUS, самовивозу та доставки. Бренд можна впізнати за знаком, кольоровими акцентами й послідовною комунікацією.",
      "У цій подачі кейса акцент зроблено на потрібних бізнесу носіях: бюджетному білому пакуванні з патерном, пластиковій карті номіналом 1000 грн, формі команди, серветках зі знаком, рекламному штендері та цифровому замовленні. Правила айдентики допомагають розвивати ці формати узгоджено.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК",
    heading: "Слово команді\nЯКОМОГА.",
    paragraphs: [
      "Нам був потрібен бренд, який легко помітити у приміщенні напроти кас NOVUS і впізнати під час отримання доставки. Важливо було передати український характер та зберегти зрозумілу, чисту подачу.",
      "Єдиний стиль об’єднав точку видачі, пакування й форму команди. Тепер ми маємо основу для послідовної комунікації з покупцями та розвитку доставки.",
    ],
    author: "ЯКОМОГА",
    role: "Місце для імені та посади представника",
    badge: "Редакційний приклад для погодження",
    note: "Це запропонований текст для макета, а не підтверджена цитата клієнта.",
  },
];

const yakomogaGalleryCaptionsRu: Record<string, string> = {
  [m("01.jpeg")]: "Оригинальный логотип ЯКОМОГА и слоган «Доставка удовольствия»",
  [m("02.webp")]: "Типографика и её практическое применение",
  [m("03.webp")]: "Выдача одного белого бумажного пакета и коробки",
  [m("04.webp")]: "Бюджетные белые пакет и коробка с оригинальным паттерном",
  [m("05.webp")]: "Цветовая палитра ЯКОМОГА",
  [m("06.webp")]: "Оригинальный паттерн и применение на упаковке",
  [m("07.webp")]: "Футболка ЯКОМОГА спереди",
  [m("08.webp")]: "Кепка только со знаком ЯКОМОГА",
  [m("09.webp")]: "Подарочный сертификат 1000 грн с тонкой полосой паттерна",
  [m("10.webp")]: "Салфетки со знаком в углу",
  [m("11.webp")]: "Сумка доставки с контрастным паттерном",
  [m("12.webp")]: "Чехол для палочек с контрастным паттерном",
  [m("13.webp")]: "Экран заказа: четыре ролла с ценами",
  [m("14.webp")]: "Чёрный штендер с фото роллов и акцией",
  [m("15.webp")]: "Instagram ЯКОМОГА на телефоне",
  [m("16.webp")]: "Instagram-креативы с фотографиями роллов на телефонах",
  [m("17.webp")]: "Визитка ЯКОМОГА",
  [m("18.webp")]: "Объёмная шильда со знаком под прозрачной смолой",
};

const yakomogaGalleryCaptionsEn: Record<string, string> = {
  [m("01.jpeg")]: "Original Yakomoga logo and the \"Delivering pleasure\" tagline",
  [m("02.webp")]: "Typography and its practical application",
  [m("03.webp")]: "Handing over a single white paper bag and box",
  [m("04.webp")]: "Budget white bag and box with the original pattern",
  [m("05.webp")]: "Yakomoga color palette",
  [m("06.webp")]: "Original pattern and its application on packaging",
  [m("07.webp")]: "Yakomoga T-shirt, front view",
  [m("08.webp")]: "Cap with the Yakomoga mark only",
  [m("09.webp")]: "1,000 UAH gift card with a thin pattern strip",
  [m("10.webp")]: "Napkins with the mark in the corner",
  [m("11.webp")]: "Delivery bag with a contrasting pattern",
  [m("12.webp")]: "Chopstick sleeve with a contrasting pattern",
  [m("13.webp")]: "Order screen: four rolls with prices",
  [m("14.webp")]: "Black sidewalk sign with roll photos and a promo",
  [m("15.webp")]: "Yakomoga Instagram on a phone",
  [m("16.webp")]: "Instagram creatives with roll photos on phones",
  [m("17.webp")]: "Yakomoga business card",
  [m("18.webp")]: "Dimensional sign with the mark under clear resin",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Точка в NOVUS.\nБренд с характером.",
      paragraphs: [
        "ЯКОМОГА — бренд доставки японской кухни с отдельным помещением напротив касс супермаркета NOVUS. Здесь покупатели могут забрать заказ, а команда готовит его к выдаче и доставке.",
        "В основе бренда — сочетание японской кухни и украинского характера. Айдентика должна быстро привлекать внимание среди супермаркетного окружения и оставаться узнаваемой на упаковке, в форме команды и цифровой коммуникации.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Заметить напротив касс.\nЗапомнить после покупки.",
      paragraphs: [
        "Создать выразительный образ для точки выдачи в NOVUS и службы доставки. Покупатель должен легко найти ЯКОМОГА, узнать бренд и понять, где забрать свой заказ.",
        "Объединить вывеску, упаковку, форму команды, подарочную карту, салфетки и штендер. Сохранить выразительный знак, а паттерн использовать выборочно на чёрных носителях.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Узнаваемый знак.\nЧистая подача.",
      paragraphs: [
        "Оригинальный логотип с казацким персонажем и слоган «Доставка удовольствия» стали основой системы. Белый и чёрный цвета дают простор, красный помогает выделить бренд среди супермаркетного окружения.",
        "Вышитый геометрический паттерн добавляет украинского характера белому бумажному пакету и коробке. На чёрной сумке доставки, чехле для палочек и подарочной карте он работает в контрастной версии. Типографика и палитра поддерживают эту систему в упаковке и рекламе, а фотографии роллов становятся главным акцентом Instagram-коммуникации. На форме, салфетках и вывеске главную роль сохраняет знак — каждый носитель имеет свой баланс графики и свободного пространства.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "От точки выдачи\nдо дверей клиента.",
      paragraphs: [
        "ЯКОМОГА получила целостную визуальную систему для присутствия в NOVUS, самовывоза и доставки. Бренд можно узнать по знаку, цветовым акцентам и последовательной коммуникации.",
        "В этой подаче кейса акцент сделан на нужных бизнесу носителях: бюджетной белой упаковке с паттерном, пластиковой карте номиналом 1000 грн, форме команды, салфетках со знаком, рекламном штендере и цифровом заказе. Правила айдентики помогают развивать эти форматы согласованно.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "ЭЛЕМЕНТЫ СИСТЕМЫ",
      title: "Брендбук.\nОснова для команды.",
      rules: [
        "Логотип и версии",
        "Цветовая палитра",
        "Типографика",
        "Паттерн на носителях",
        "Упаковка",
        "Полиграфия и мерч",
        "Цифровые носители",
        "Правила применения",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Характер", description: "Украинский характер и выразительный знак." },
        { title: "Последовательность", description: "Общие правила для всех носителей." },
        { title: "Масштаб", description: "Точка в NOVUS, самовывоз и доставка." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ БРЕНДА",
      text: "Доставка\nудовольствия.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ",
      heading: "Слово команды\nЯКОМОГА.",
      paragraphs: [
        "Нам был нужен бренд, который легко заметить в помещении напротив касс NOVUS и узнать при получении доставки. Важно было передать украинский характер и сохранить понятную, чистую подачу.",
        "Единый стиль объединил точку выдачи, упаковку и форму команды. Теперь у нас есть основа для последовательной коммуникации с покупателями и развития доставки.",
      ],
      author: "ЯКОМОГА",
      role: "Место для имени и должности представителя",
      badge: "Редакционный пример для согласования",
      note: "Это предложенный текст для макета, а не подтверждённая цитата клиента.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Страна", value: "Украина", accent: true, countryCode: "UA" },
        { label: "Ниша", value: "доставка еды" },
        { label: "Продукт", value: "доставка / самовывоз" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: yakomogaGalleryCaptionsRu[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

const blocksEn: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "ABOUT CLIENT",
      title: "A spot at NOVUS.\nA brand with character.",
      paragraphs: [
        "Yakomoga is a Japanese-food delivery brand with its own space right across from the checkouts at NOVUS supermarket. Customers can pick up orders there while the team prepares them for pickup and delivery.",
        "At the core of the brand is a blend of Japanese cuisine and Ukrainian character. The identity needed to grab attention quickly amid the supermarket surroundings and stay recognizable on packaging, team uniforms, and digital communication.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Stand out at checkout.\nBe remembered after.",
      paragraphs: [
        "Create an expressive look for the pickup point at NOVUS and the delivery service. Customers should easily find Yakomoga, recognize the brand, and understand where to collect their order.",
        "Unite the signage, packaging, team uniform, gift card, napkins, and sidewalk sign. Keep a strong mark while using the pattern selectively on black carriers.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "A recognizable mark.\nA clean presentation.",
      paragraphs: [
        "The original logo featuring a Cossack character and the \"Delivering pleasure\" tagline became the foundation of the system. White and black give the design room to breathe, while red helps the brand stand out against the supermarket surroundings.",
        "An embroidered geometric pattern adds Ukrainian character to the white paper bag and box. On the black delivery bag, chopstick sleeve, and gift card it works in a contrasting version. Typography and palette support this system across packaging and advertising, while roll photography becomes the main focus of Instagram communication. On the uniform, napkins, and signage the mark stays the lead — each carrier finds its own balance of graphics and open space.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "From the pickup point\nto the customer's door.",
      paragraphs: [
        "Yakomoga received a cohesive visual system for its presence at NOVUS, self-pickup, and delivery. The brand is recognizable by its mark, color accents, and consistent communication.",
        "This case presentation focuses on the carriers the business actually needs: budget white packaging with the pattern, a 1,000 UAH plastic gift card, team uniforms, napkins with the mark, a promotional sidewalk sign, and the digital order screen. Identity rules help develop these formats consistently.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SYSTEM ELEMENTS",
      title: "Brand book.\nA foundation for the team.",
      rules: [
        "Logo and versions",
        "Color palette",
        "Typography",
        "Pattern on carriers",
        "Packaging",
        "Print and merch",
        "Digital channels",
        "Application rules",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Character", description: "Ukrainian character and a bold mark." },
        { title: "Consistency", description: "Shared rules across every touchpoint." },
        { title: "Scale", description: "A pickup point at NOVUS, self-pickup, and delivery." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "BRAND IDEA",
      text: "Delivering\npleasure.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT FEEDBACK",
      heading: "The Yakomoga\nteam's word.",
      paragraphs: [
        "We needed a brand that's easy to spot in the space across from the NOVUS checkouts and easy to recognize when picking up a delivery. It was important to convey Ukrainian character while keeping a clear, clean presentation.",
        "A unified style brought together the pickup point, packaging, and team uniform. Now we have a foundation for consistent communication with customers and for growing delivery.",
      ],
      author: "Yakomoga",
      role: "Space for representative's name and title",
      badge: "Editorial placeholder pending approval",
      note: "This is a proposed copy draft, not a confirmed client quote.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "food delivery" },
        { label: "Product", value: "delivery / pickup" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: yakomogaGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getYakomogaBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const yakomogaShared = {
  slug: "yakomoga",
  cover: m("cover.gif"),
  listCover: m("cover.gif"),
  media: yakomogaMedia,
  body: `[IMG: media/yakomoga/hero.webp]`,
};

export const yakomogaCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "ЯКОМОГА",
    description:
      "Розробили айдентику ЯКОМОГА — сервісу доставки японської кухні з точкою видачі у NOVUS: логотип, брендбук, пакування, форма та SMM.",
    tagline: "Доставка задоволення.\nТочка у NOVUS.",
    serviceTag: "Айдентика · брендбук · комунікація",
  },
  ru: {
    title: "ЯКОМОГА",
    description:
      "Разработали айдентику ЯКОМОГА — сервиса доставки японской кухни с точкой выдачи в NOVUS: логотип, брендбук, упаковка, форма и SMM.",
    tagline: "Доставка удовольствия.\nТочка в NOVUS.",
    serviceTag: "Айдентика · брендбук · коммуникация",
  },
  en: {
    title: "Yakomoga",
    description:
      "We built the identity for Yakomoga — a Japanese-food delivery service with a pickup point at NOVUS: logo, brand book, packaging, uniforms, and SMM.",
    tagline: "Delivering pleasure.\nA spot at NOVUS.",
    serviceTag: "Identity · brand book · communication",
  },
};
