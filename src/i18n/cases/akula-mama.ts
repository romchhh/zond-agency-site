import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/akula-mama/${file}`;

const akulaMamaMedia = [
  "media/akula-mama/cover.webp",
  "media/akula-mama/hero.webp",
  ...Array.from({ length: 15 }, (_, i) => `media/akula-mama/${String(i + 1).padStart(2, "0")}.webp`),
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Морський смак.\nБлизький кожному.",
    paragraphs: [
      "Акула Мама — бренд з Одеси, який створює рибні закуски за доступною ціною. У його асортименті — котлети, рибні палички та креветки.",
      "Бренд звертається до сімейної аудиторії 35+. Для неї важливі якість продукту, зрозумілий вибір і справедлива ціна. Візуальний образ мав поєднати ці очікування з живим одеським характером.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "харчові продукти" },
      { label: "Продукт", value: "рибні закуски" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.webp"), caption: "Логотип бренду Акула Мама" },
      { src: m("02.webp"), caption: "Типографіка бренду та рибні закуски" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Виглядати якісно.\nЗалишатися доступними.",
    paragraphs: [
      "Створити впізнаваний логотип і дизайн упаковки, який привертає увагу та передає якість рибної продукції. Важливо було зберегти дружність бренду й відповідність його ціновому сегменту.",
      "Упаковка мала допомагати покупцеві швидко розпізнавати бренд і продукт. Єдиний стиль повинен об’єднати різні позиції асортименту та працювати на полиці.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Характер", description: "Живий, дружній, з одеським настроєм." },
      { title: "Послідовність", description: "Одна візуальна мова для всієї лінійки." },
      { title: "Масштаб", description: "Система для різних продуктів і форматів." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Палітра кольорів бренду" },
      { src: m("04.webp"), caption: "Пакування круасанів із начинкою" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Яскрава система.\nВпізнаваний бренд.",
    paragraphs: [
      "У центрі айдентики — виразний логотип, колір і графічні елементи. Вони формують характер бренду та допомагають упаковці виділятися серед інших рибних продуктів.",
      "Дизайн поєднує емоційну подачу зі зрозумілою інформацією про продукт. Узгоджені композиційні принципи підтримують цілісність лінійки, а відмінності між позиціями полегшують вибір.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ БРЕНДУ",
    text: "З Одеси.\nЗі смаком.",
    footer: "АКУЛА МАМА / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.webp"), caption: "Постер у продуктовому магазині" }],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "ЕЛЕМЕНТИ СИСТЕМИ",
    title: "Єдиний стиль.\nРізні продукти.",
    paragraphs: [],
    rules: [
      "Логотип",
      "Кольорова палітра",
      "Типографіка",
      "Графічна мова",
      "Продуктова лінійка",
      "Дизайн пакування",
      "Ієрархія інформації",
      "Приклади застосування",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.webp"), caption: "Зовнішня реклама бренду" },
      { src: m("07.webp"), caption: "Лінійка пакування Акула Мама" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.webp"), caption: "Бренд у холодильній вітрині" },
      { src: m("09.webp"), caption: "Пакування рибних паличок" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Пакування сирних паличок" },
      { src: m("11.webp"), caption: "Брендована вітрина" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.webp"), caption: "Брендований пікап Акула Мама" },
      { src: m("13.webp"), caption: "Транспортні коробки з гофрокартону з логотипом і маркуванням" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Брендований кіоск Акула Мама" },
      { src: m("15.webp"), caption: "Фірмовий спецодяг доставщика Акула Мама" },
    ],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Продукт, який\nлегко впізнати.",
    paragraphs: [
      "Бренд отримав логотип і узгоджений дизайн упаковки для рибних закусок. Яскравий візуальний стиль передає якість продукції та підтримує доступний, дружній характер Акули Мами.",
      "Система об’єднує різні продукти в одну лінійку. Пакування стає основним носієм бренду: знайомить із продуктом, допомагає у виборі та формує впізнаваний образ.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК",
    heading: "Слово команді\nАкули Мами.",
    paragraphs: [
      "Нам було важливо показати якість нашої продукції та зберегти близький людям характер бренду. Хотілося, щоб упаковка виглядала яскраво, зрозуміло й апетитно.",
      "Новий стиль об’єднав асортимент і дав бренду власне обличчя — з одеським настроєм та увагою до продукту.",
    ],
    author: "Акула Мама",
    role: "Місце для імені та посади представника",
    badge: "Редакційний приклад для погодження",
  },
];

const akulaMamaGalleryCaptionsRu: Record<string, string> = {
  [m("01.webp")]: "Логотип бренда Акула Мама",
  [m("02.webp")]: "Типографика бренда и рыбные закуски",
  [m("03.webp")]: "Цветовая палитра бренда",
  [m("04.webp")]: "Упаковка круассанов с начинкой",
  [m("05.webp")]: "Постер в продуктовом магазине",
  [m("06.webp")]: "Наружная реклама бренда",
  [m("07.webp")]: "Линейка упаковки Акула Мама",
  [m("08.webp")]: "Бренд в холодильной витрине",
  [m("09.webp")]: "Упаковка рыбных палочек",
  [m("10.webp")]: "Упаковка сырных палочек",
  [m("11.webp")]: "Брендированная витрина",
  [m("12.webp")]: "Брендированный пикап Акула Мама",
  [m("13.webp")]: "Транспортные коробки из гофрокартона с логотипом и маркировкой",
  [m("14.webp")]: "Брендированный киоск Акула Мама",
  [m("15.webp")]: "Фирменная спецодежда доставщика Акула Мама",
};

const akulaMamaGalleryCaptionsEn: Record<string, string> = {
  [m("01.webp")]: "Akula Mama brand logo",
  [m("02.webp")]: "Brand typography and fish snacks",
  [m("03.webp")]: "Brand color palette",
  [m("04.webp")]: "Filled croissant-shaped snack packaging",
  [m("05.webp")]: "Poster inside a grocery store",
  [m("06.webp")]: "Brand outdoor advertising",
  [m("07.webp")]: "Akula Mama packaging lineup",
  [m("08.webp")]: "Brand in a refrigerated display case",
  [m("09.webp")]: "Fish sticks packaging",
  [m("10.webp")]: "Cheese sticks packaging",
  [m("11.webp")]: "Branded display case",
  [m("12.webp")]: "Branded Akula Mama pickup truck",
  [m("13.webp")]: "Corrugated transport boxes with logo and labeling",
  [m("14.webp")]: "Branded Akula Mama kiosk",
  [m("15.webp")]: "Branded delivery staff uniform for Akula Mama",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Морской вкус.\nБлизкий каждому.",
      paragraphs: [
        "Акула Мама — бренд из Одессы, который создаёт рыбные закуски по доступной цене. В его ассортименте — котлеты, рыбные палочки и креветки.",
        "Бренд обращается к семейной аудитории 35+. Для неё важны качество продукта, понятный выбор и справедливая цена. Визуальный образ должен был объединить эти ожидания с живым одесским характером.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Выглядеть качественно.\nОставаться доступными.",
      paragraphs: [
        "Создать узнаваемый логотип и дизайн упаковки, который привлекает внимание и передаёт качество рыбной продукции. Важно было сохранить дружелюбность бренда и соответствие его ценовому сегменту.",
        "Упаковка должна была помогать покупателю быстро узнавать бренд и продукт. Единый стиль должен объединить разные позиции ассортимента и работать на полке.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Яркая система.\nУзнаваемый бренд.",
      paragraphs: [
        "В центре айдентики — выразительный логотип, цвет и графические элементы. Они формируют характер бренда и помогают упаковке выделяться среди других рыбных продуктов.",
        "Дизайн объединяет эмоциональную подачу с понятной информацией о продукте. Согласованные композиционные принципы поддерживают целостность линейки, а отличия между позициями облегчают выбор.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Продукт, который\nлегко узнать.",
      paragraphs: [
        "Бренд получил логотип и согласованный дизайн упаковки для рыбных закусок. Яркий визуальный стиль передаёт качество продукции и поддерживает доступный, дружелюбный характер «Акулы Мамы».",
        "Система объединяет разные продукты в одну линейку. Упаковка становится основным носителем бренда: знакомит с продуктом, помогает в выборе и формирует узнаваемый образ.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "ЭЛЕМЕНТЫ СИСТЕМЫ",
      title: "Единый стиль.\nРазные продукты.",
      rules: [
        "Логотип",
        "Цветовая палитра",
        "Типографика",
        "Графический язык",
        "Продуктовая линейка",
        "Дизайн упаковки",
        "Иерархия информации",
        "Примеры применения",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Характер", description: "Живой, дружелюбный, с одесским настроением." },
        { title: "Последовательность", description: "Единый визуальный язык для всей линейки." },
        { title: "Масштаб", description: "Система для разных продуктов и форматов." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ БРЕНДА",
      text: "Из Одессы.\nСо вкусом.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ",
      heading: "Слово команде\n«Акулы Мамы».",
      paragraphs: [
        "Нам было важно показать качество нашей продукции и сохранить близкий людям характер бренда. Хотелось, чтобы упаковка выглядела ярко, понятно и аппетитно.",
        "Новый стиль объединил ассортимент и дал бренду собственное лицо — с одесским настроением и внимание к продукту.",
      ],
      author: "Акула Мама",
      role: "Место для имени и должности представителя",
      badge: "Редакционный пример для согласования",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Страна", value: "Украина", accent: true, countryCode: "UA" },
        { label: "Ниша", value: "продукты питания" },
        { label: "Продукт", value: "рыбные закуски" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: akulaMamaGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "A taste of the sea.\nClose to everyone.",
      paragraphs: [
        "Akula Mama is an Odesa-based brand that makes affordable fish snacks. Its lineup includes fish cutlets, fish sticks, and shrimp.",
        "The brand speaks to a family audience aged 35+, for whom product quality, a clear choice, and a fair price matter most. The visual identity needed to combine these expectations with a lively Odesa character.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Look premium.\nStay affordable.",
      paragraphs: [
        "Create a recognizable logo and packaging design that grabs attention and conveys the quality of the fish products. It was important to keep the brand friendly and aligned with its price segment.",
        "The packaging needed to help shoppers quickly recognize the brand and product. One visual system had to unite different lineup items and work well on the shelf.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "A vivid system.\nA recognizable brand.",
      paragraphs: [
        "At the core of the identity are an expressive logo, color, and graphic elements. Together they shape the brand's character and help the packaging stand out among other fish products.",
        "The design combines emotional appeal with clear product information. Consistent composition principles keep the lineup cohesive, while differences between items make choosing easier.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A product that's\neasy to recognize.",
      paragraphs: [
        "The brand received a logo and a consistent packaging design for its fish snacks. The vibrant visual style conveys product quality and supports Akula Mama's affordable, friendly character.",
        "The system unites different products into one lineup. Packaging becomes the brand's main touchpoint: it introduces the product, helps with choice, and builds a recognizable image.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SYSTEM ELEMENTS",
      title: "One style.\nDifferent products.",
      rules: [
        "Logo",
        "Color palette",
        "Typography",
        "Graphic language",
        "Product lineup",
        "Packaging design",
        "Information hierarchy",
        "Application examples",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Character", description: "Lively, friendly, with Odesa mood." },
        { title: "Consistency", description: "One visual language for the whole lineup." },
        { title: "Scale", description: "A system for different products and formats." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "BRAND IDEA",
      text: "From Odesa.\nWith taste.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT FEEDBACK",
      heading: "The Akula Mama\nteam's word.",
      paragraphs: [
        "It was important for us to show the quality of our products and keep the brand's character close to people. We wanted the packaging to look vivid, clear, and appetizing.",
        "The new style united the lineup and gave the brand a face of its own — with Odesa mood and attention to the product.",
      ],
      author: "Akula Mama",
      role: "Space for representative's name and title",
      badge: "Editorial placeholder pending approval",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "food products" },
        { label: "Product", value: "fish snacks" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: akulaMamaGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getAkulaMamaBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const akulaMamaShared = {
  slug: "akula-mama",
  cover: m("hero.webp"),
  listCover: m("hero.webp"),
  media: akulaMamaMedia,
  body: `[IMG: media/akula-mama/hero.webp]`,
};

export const akulaMamaCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Акула Мама",
    description:
      "Розробили логотип і дизайн пакування Акула Мама — одеського бренду рибних закусок: впізнавана айдентика для всієї продуктової лінійки.",
    tagline: "Одеський характер.\nАпетитна айдентика.",
    serviceTag: "Логотип · дизайн пакування",
  },
  ru: {
    title: "Акула Мама",
    description:
      "Разработали логотип и дизайн упаковки «Акула Мама» — одесского бренда рыбных закусок: узнаваемая айдентика для всей продуктовой линейки.",
    tagline: "Одесский характер.\nАппетитная айдентика.",
    serviceTag: "Логотип · дизайн упаковки",
  },
  en: {
    title: "Akula Mama",
    description:
      "We designed the logo and packaging for Akula Mama — an Odesa fish snack brand: a recognizable identity for the whole product lineup.",
    tagline: "Odesa character.\nAppetizing identity.",
    serviceTag: "Logo · packaging design",
  },
};
