import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/kavlora/${file}`;

const kavloraMedia = Array.from({ length: 17 }, (_, index) =>
  `media/kavlora/${String(index + 1).padStart(2, "0")}.webp`,
);

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Матеріал, якому\nдовіряють.",
    paragraphs: [
      "KAVLORA — бренд виробництва дерев’яних виробів. Для такого бізнесу важливі якість матеріалу, точність обробки й довіра до виробника: ці властивості повинні відчуватися вже під час першого знайомства з компанією.",
      "У середньому сегменті візуальна система допомагає виразно представити майстерність команди. Вона об’єднує продукт і комунікацію в зрозумілий, послідовний образ.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "деревообробка" },
      { label: "Продукт", value: "дерев’яні вироби" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("02.webp"), caption: "Знак на фасаді виробництва" },
      { src: m("03.webp"), caption: "Шрифт KAVLORA" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Показати якість.\nЗнайти власний характер.",
    paragraphs: [
      "Дослідити конкурентне середовище й визначити, як KAVLORA може виокремитися серед деревообробних підприємств. На цій основі створити логотип, палітру та шрифтову систему для сучасного виробника.",
      "Бренд мав однаково добре працювати на візитівці, бланку, вивісці, веббанері та корпоративному одязі. Потрібна була зрозуміла графічна мова, яку легко застосовувати у щоденній роботі.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Майстерність", description: "Показати якість матеріалу й точність роботи." },
      { title: "Єдність", description: "Зберегти спільний характер у всіх матеріалах." },
      { title: "Адаптивність", description: "Застосувати айдентику від візитівки до вивіски." },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("04.webp"), caption: "Корпоративна каска" }],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Від фактури дерева\nдо чіткої форми.",
    paragraphs: [
      "Лаконічний знак спирається на асоціації зі структурою дерева та точністю його обробки. Вивірена геометрія допомагає зберігати силует упізнаваним у різних масштабах.",
      "Природна гама й фактурні акценти підтримують зв’язок із матеріалом, а стримана типографіка створює відчуття сучасного виробництва. Ці принципи об’єднали рекламні та корпоративні носії.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Природа матеріалу.\nТочність форми.",
    footer: "KAVLORA / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.webp"), caption: "Фірмовий одяг" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.webp"), caption: "Логотип та графічний елемент" },
      { src: m("07.webp"), caption: "Сумка KAVLORA" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна система.\nБагато носіїв.",
    paragraphs: [
    ],
    rules: [
      "Дослідження ринку",
      "Логотип",
      "Візуальна айдентика",
      "Поліграфія",
      "Рекламні носії",
      "Корпоративна продукція",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.webp"), caption: "Брендована кепка" },
      { src: m("09.webp"), caption: "Колірна система та фактури" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Візитівки" },
      { src: m("11.webp"), caption: "Корпоративні футболки" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.webp"), caption: "Мобільна реклама" },
      { src: m("13.webp"), caption: "Фірмовий одяг — застосування графіки" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Вебматеріали KAVLORA" },
      { src: m("15.webp"), caption: "Цифрова реклама" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("16.webp"), caption: "Фірмовий бланк" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("17.webp"), caption: "Айдентика на носіях" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Єдиний образ.\nУ кожній деталі.",
    paragraphs: [
      "Для KAVLORA розроблено логотип, візуальну айдентику, поліграфію, рекламні носії, сувенірну та корпоративну продукцію. Система показує характер виробника у фізичних і цифрових точках контакту.",
      "Завдяки спільним графічним правилам бренд може послідовно представляти себе від документа до вивіски чи робочого одягу. Джерело кейса не наводить кількісних бізнес-показників після впровадження.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nKAVLORA.",
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Нам було важливо показати в бренді те, що ми цінуємо у виробництві: матеріал, точність і відповідальність за результат. Візуальна система мала виглядати сучасно та залишатися практичною.",
      "Запропонований напрям допомагає нам послідовно оформлювати комунікацію — від документації та реклами до корпоративного одягу».",
    ],
    author: "Команда KAVLORA",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const kavloraGalleryCaptionsRu: Record<string, string> = {
  [m("02.webp")]: "Знак на фасаде производства",
  [m("03.webp")]: "Шрифт KAVLORA",
  [m("04.webp")]: "Корпоративная каска",
  [m("05.webp")]: "Фирменная одежда",
  [m("06.webp")]: "Логотип и графический элемент",
  [m("07.webp")]: "Сумка KAVLORA",
  [m("08.webp")]: "Брендированная кепка",
  [m("09.webp")]: "Цветовая система и фактуры",
  [m("10.webp")]: "Визитки",
  [m("11.webp")]: "Корпоративные футболки",
  [m("12.webp")]: "Мобильная реклама",
  [m("13.webp")]: "Фирменная одежда — применение графики",
  [m("14.webp")]: "Веб-материалы KAVLORA",
  [m("15.webp")]: "Цифровая реклама",
  [m("16.webp")]: "Фирменный бланк",
  [m("17.webp")]: "Айдентика на носителях",
};

const kavloraGalleryCaptionsEn: Record<string, string> = {
  [m("02.webp")]: "Mark on the production facade",
  [m("03.webp")]: "KAVLORA typeface",
  [m("04.webp")]: "Corporate hard hat",
  [m("05.webp")]: "Branded apparel",
  [m("06.webp")]: "Logo and graphic element",
  [m("07.webp")]: "KAVLORA bag",
  [m("08.webp")]: "Branded cap",
  [m("09.webp")]: "Color system and textures",
  [m("10.webp")]: "Business cards",
  [m("11.webp")]: "Corporate T-shirts",
  [m("12.webp")]: "Mobile advertising",
  [m("13.webp")]: "Branded apparel — graphics in use",
  [m("14.webp")]: "KAVLORA web materials",
  [m("15.webp")]: "Digital advertising",
  [m("16.webp")]: "Letterhead",
  [m("17.webp")]: "Identity on touchpoints",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Материал,\nкоторому доверяют.",
      paragraphs: [
        "KAVLORA — бренд производства деревянных изделий. Для такого бизнеса важны качество материала, точность обработки и доверие к производителю: эти свойства должны ощущаться уже при первом знакомстве с компанией.",
        "В среднем сегменте визуальная система помогает выразительно представить мастерство команды. Она объединяет продукт и коммуникацию в понятный, последовательный образ.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Показать качество.\nНайти свой характер.",
      paragraphs: [
        "Исследовать конкурентную среду и определить, как KAVLORA может выделиться среди деревообрабатывающих предприятий. На этой основе создать логотип, палитру и шрифтовую систему для современного производителя.",
        "Бренд должен одинаково хорошо работать на визитке, бланке, вывеске, веб-баннере и корпоративной одежде. Нужен был понятный графический язык, который легко применять в ежедневной работе.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "От фактуры дерева\nк чёткой форме.",
      paragraphs: [
        "Лаконичный знак опирается на ассоциации со структурой дерева и точностью его обработки. Выверенная геометрия помогает сохранять силуэт узнаваемым в разных масштабах.",
        "Природная гамма и фактурные акценты поддерживают связь с материалом, а сдержанная типографика создаёт ощущение современного производства. Эти принципы объединили рекламные и корпоративные носители.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Единый образ.\nВ каждой детали.",
      paragraphs: [
        "Для KAVLORA разработаны логотип, визуальная айдентика, полиграфия, рекламные носители, сувенирная и корпоративная продукция. Система показывает характер производителя в физических и цифровых точках контакта.",
        "Благодаря общим графическим правилам бренд может последовательно представлять себя — от документа до вывески или рабочей одежды. Источник кейса не приводит количественных бизнес-показателей после внедрения.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Одна система.\nМного носителей.",
      rules: [
        "Исследование рынка",
        "Логотип",
        "Визуальная айдентика",
        "Полиграфия",
        "Рекламные носители",
        "Корпоративная продукция",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Мастерство", description: "Показать качество материала и точность работы." },
        { title: "Единство", description: "Сохранить общий характер во всех материалах." },
        { title: "Адаптивность", description: "Применить айдентику от визитки до вывески." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Природа материала.\nТочность формы.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nKAVLORA.",
      badge: "Текст для согласования с клиентом",
      paragraphs: [
        "«Нам было важно показать в бренде то, что мы ценим в производстве: материал, точность и ответственность за результат. Визуальная система должна была выглядеть современно и оставаться практичной.",
        "Предложенное направление помогает нам последовательно оформлять коммуникацию — от документации и рекламы до корпоративной одежды».",
      ],
      author: "Команда KAVLORA",
      role: "Место для имени и должности представителя",
      note: "Редакционный пример для макета, не реальный отзыв. Требует согласования клиентом.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Страна", value: "Украина", countryCode: "UA" }
          : item.label === "Ніша"
            ? { ...item, label: "Ниша", value: "деревообработка" }
            : { ...item, label: "Продукт", value: "деревянные изделия" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: kavloraGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "A material\nyou can trust.",
      paragraphs: [
        "KAVLORA is a brand of wooden product manufacturing. For this business, material quality, precision, and trust in the maker matter — those qualities should be felt from the first encounter with the company.",
        "In the mid-market segment, a visual system helps present the team’s craft clearly. It unites product and communication into a coherent, consistent image.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Show quality.\nFind a distinct character.",
      paragraphs: [
        "Research the competitive landscape and define how KAVLORA can stand out among woodworking businesses. On that basis, create a logo, palette, and type system for a modern manufacturer.",
        "The brand had to work equally well on a business card, letterhead, sign, web banner, and corporate apparel. We needed a clear graphic language that’s easy to apply day to day.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "From wood texture\nto clear form.",
      paragraphs: [
        "A concise mark draws on associations with wood grain and precise craftsmanship. Refined geometry keeps the silhouette recognizable at different scales.",
        "Natural tones and textural accents maintain a link to the material, while restrained typography conveys modern production. These principles united advertising and corporate touchpoints.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "One image.\nIn every detail.",
      paragraphs: [
        "For KAVLORA we developed a logo, visual identity, print, advertising touchpoints, and souvenir and corporate products. The system shows the manufacturer’s character across physical and digital contact points.",
        "Shared graphic rules let the brand present itself consistently — from documents to signage or workwear. The source case does not cite post-launch business metrics.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "One system.\nMany touchpoints.",
      rules: [
        "Market research",
        "Logo",
        "Visual identity",
        "Print",
        "Advertising touchpoints",
        "Corporate products",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Craft", description: "Show material quality and precision of work." },
        { title: "Unity", description: "Keep a shared character across all materials." },
        { title: "Adaptability", description: "Apply identity from business cards to signage." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "The nature of the material.\nPrecision of form.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The KAVLORA\nteam’s view.",
      badge: "Text for client approval",
      paragraphs: [
        "“It was important for us to show in the brand what we value in production: material, precision, and accountability for the result. The visual system had to look modern and stay practical.",
        "The proposed direction helps us shape communication consistently — from documentation and advertising to corporate apparel.”",
      ],
      author: "KAVLORA team",
      role: "Placeholder for representative name and role",
      note: "Editorial sample for the layout, not a real review. Requires client approval.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "woodworking" },
        { label: "Product", value: "wooden products" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: kavloraGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getKavloraBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const kavloraShared = {
  slug: "kavlora",
  cover: m("cover.gif"),
  media: kavloraMedia,
  body: `[IMG: media/kavlora/01.webp]`,
};

export const kavloraCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "KAVLORA",
    description:
      "Розробили стратегію та айдентику для KAVLORA — бренду виробника дерев’яних виробів. Логотип, фірмовий стиль, поліграфія та рекламні носії.",
    tagline: "Майстерність дерева.\nМова сучасного бренду.",
    serviceTag: "Стратегія + айдентика",
  },
  ru: {
    title: "KAVLORA",
    description:
      "Разработали стратегию и айдентику для KAVLORA — бренда производителя деревянных изделий. Логотип, фирменный стиль, полиграфия и рекламные носители.",
    tagline: "Мастерство дерева.\nЯзык современного бренда.",
    serviceTag: "Стратегия + айдентика",
  },
  en: {
    title: "KAVLORA",
    description:
      "We developed strategy and identity for KAVLORA — a woodworking brand. Logo, visual system, print, and advertising materials.",
    tagline: "The craft of wood.\nThe language of a modern brand.",
    serviceTag: "Strategy + identity",
  },
};
