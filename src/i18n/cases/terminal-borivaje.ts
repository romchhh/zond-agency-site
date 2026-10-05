import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/terminal-borivaje/${file}`;

const terminalMedia = [
  "media/terminal-borivaje/cover.jpg",
  "media/terminal-borivaje/01.jpg",
  ...Array.from({ length: 16 }, (_, i) =>
    `media/terminal-borivaje/${String(i + 2).padStart(2, "0")}.jpg`,
  ),
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Між полем,\nтерміналом і морем.",
    paragraphs: [
      "Terminal Borivaje — зерноперевалочний термінал у селищі Нові Білярі Одеської області, в акваторії Аджалицького лиману порту Южний. Його робота пов’язує аграрний сектор із портовою логістикою.",
      "Для такого бізнесу візуальна ідентичність має говорити зрозуміло й упевнено: партнери бачать інфраструктурну компанію, якій можна довірити складний процес.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "агробізнес / логістика" },
      { label: "Продукт", value: "зерновий термінал" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("02.jpg"), caption: "Логотип у середовищі" },
      { src: m("03.jpg"), caption: "Типографіка бренду" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Показати силу\nсучасного терміналу.",
    paragraphs: [
      "Створити впізнаваний бренд, який відображає інноваційність, екологічний підхід та надійність Terminal Borivaje. Потрібен знак, що передає специфіку агротерміналу без складного пояснення.",
      "Підібрати гармонійну палітру й універсальну типографіку для використання на різних платформах і носіях — від поліграфії до фірмової продукції.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Надійність", description: "Передати стабільність інфраструктурного бізнесу." },
      { title: "Система", description: "Поєднати аграрну й логістичну складові." },
      { title: "Масштаб", description: "Працювати від документа до великого носія." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("04.jpg"), caption: "Корпоративна каска" },
      { src: m("05.jpg"), caption: "Фірмові стікери" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Єдина мова\nдля великої системи.",
    paragraphs: [
      "Розробили брендинг і логотип, кольорову систему, типографіку та графічні принципи. Айдентика поєднує образ аграрної сфери з точністю промислової логістики.",
      "Показали, як система працює на поліграфічних матеріалах і сувенірній продукції. Носії залишаються впізнаваними, коли змінюються формат, масштаб чи контекст використання.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Рух зерна.\nТочність кожної лінії.",
    footer: "TERMINAL BORIVAJE / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("06.jpg"), caption: "Колірна палітра" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("07.jpg"), caption: "Настільний календар" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Рекламний буклет" },
      { src: m("09.jpg"), caption: "Оформлення соцмереж" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна система.\nКожен носій.",
    paragraphs: [],
    rules: [
      "Брендинг",
      "Логотип",
      "Кольорова система",
      "Типографіка",
      "Фірмовий стиль",
      "Поліграфія",
      "Сувенірна продукція",
      "Масштабовані носії",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Корпоративна брошура" },
      { src: m("11.jpg"), caption: "Стікерпак" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Фірмові пакети" },
      { src: m("13.jpg"), caption: "Корпоративна футболка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.jpg"), caption: "Рекламна комунікація" },
      { src: m("15.jpg"), caption: "Візитівки" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("16.jpg"), caption: "Брендований мерч" },
      { src: m("17.jpg"), caption: "Корпоративний буклет" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("cover.jpg"), caption: "Презентація на ноутбуці" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Бренд, який працює\nна різних носіях.",
    paragraphs: [
      "Створено логотип і комплексний фірмовий стиль для Terminal Borivaje. У кейсі показано застосування айдентики на документах, поліграфії та сувенірній продукції.",
      "Термінал отримав узгоджену візуальну систему для представлення бізнесу й комунікації з партнерами. Кількісні показники після запуску бренду вихідне джерело не наводить.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nTerminal Borivaje.",
    paragraphs: [
      "«Нам був потрібен бренд, який відображає масштаб роботи терміналу й водночас лишається чітким у щоденних матеріалах. Ми хотіли говорити з партнерами сучасною та впізнаваною візуальною мовою.",
      "Нова система допомагає послідовно представляти Terminal Borivaje на різних носіях — від ділових документів до фірмової продукції».",
    ],
    author: "Команда Terminal Borivaje",
    role: "",
  },
];

const terminalGalleryCaptionsRu: Record<string, string> = {
  [m("02.jpg")]: "Логотип в среде",
  [m("03.jpg")]: "Типографика бренда",
  [m("04.jpg")]: "Корпоративная каска",
  [m("05.jpg")]: "Фирменные стикеры",
  [m("06.jpg")]: "Цветовая палитра",
  [m("07.jpg")]: "Настольный календарь",
  [m("08.jpg")]: "Рекламный буклет",
  [m("09.jpg")]: "Оформление соцсетей",
  [m("10.jpg")]: "Корпоративная брошюра",
  [m("11.jpg")]: "Стикерпак",
  [m("12.jpg")]: "Фирменные пакеты",
  [m("13.jpg")]: "Корпоративная футболка",
  [m("14.jpg")]: "Рекламная коммуникация",
  [m("15.jpg")]: "Визитки",
  [m("16.jpg")]: "Брендированный мерч",
  [m("17.jpg")]: "Корпоративный буклет",
  [m("cover.jpg")]: "Презентация на ноутбуке",
};

const terminalGalleryCaptionsEn: Record<string, string> = {
  [m("02.jpg")]: "Logo in context",
  [m("03.jpg")]: "Brand typography",
  [m("04.jpg")]: "Corporate hard hat",
  [m("05.jpg")]: "Brand stickers",
  [m("06.jpg")]: "Color palette",
  [m("07.jpg")]: "Desk calendar",
  [m("08.jpg")]: "Advertising booklet",
  [m("09.jpg")]: "Social media design",
  [m("10.jpg")]: "Corporate brochure",
  [m("11.jpg")]: "Sticker pack",
  [m("12.jpg")]: "Branded bags",
  [m("13.jpg")]: "Corporate T-shirt",
  [m("14.jpg")]: "Advertising communication",
  [m("15.jpg")]: "Business cards",
  [m("16.jpg")]: "Branded merch",
  [m("17.jpg")]: "Corporate booklet",
  [m("cover.jpg")]: "Laptop presentation",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Между полем,\nтерминалом и морем.",
      paragraphs: [
        "Terminal Borivaje — зерновой перевалочный терминал в посёлке Новые Беляры Одесской области, в акватории Аджалыцкого лимана порта Южный. Его работа связывает аграрный сектор с портовой логистикой.",
        "Для такого бизнеса визуальная идентичность должна говорить понятно и уверенно: партнёры видят инфраструктурную компанию, которой можно доверить сложный процесс.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Показать силу\nсовременного терминала.",
      paragraphs: [
        "Создать узнаваемый бренд, отражающий инновационность, экологический подход и надёжность Terminal Borivaje. Нужен знак, передающий специфику агротерминала без сложных объяснений.",
        "Подобрать гармоничную палитру и универсальную типографику для разных платформ и носителей — от полиграфии до фирменной продукции.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Единый язык\nдля большой системы.",
      paragraphs: [
        "Разработали брендинг и логотип, цветовую систему, типографику и графические принципы. Айдентика сочетает образ аграрной сферы с точностью промышленной логистики.",
        "Показали, как система работает на полиграфических материалах и сувенирной продукции. Носители остаются узнаваемыми при смене формата, масштаба и контекста.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Бренд, который работает\nна разных носителях.",
      paragraphs: [
        "Созданы логотип и комплексный фирменный стиль для Terminal Borivaje. В кейсе показано применение айдентики на документах, полиграфии и сувенирной продукции.",
        "Терминал получил согласованную визуальную систему для представления бизнеса и коммуникации с партнёрами. Количественные показатели после запуска источник не приводит.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Одна система.\nКаждый носитель.",
      rules: [
        "Брендинг",
        "Логотип",
        "Цветовая система",
        "Типографика",
        "Фирменный стиль",
        "Полиграфия",
        "Сувенирная продукция",
        "Масштабируемые носители",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Надёжность", description: "Передать стабильность инфраструктурного бизнеса." },
        { title: "Система", description: "Объединить аграрную и логистическую составляющие." },
        { title: "Масштаб", description: "Работать от документа до крупного носителя." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Движение зерна.\nТочность каждой линии.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nTerminal Borivaje.",
      paragraphs: [
        "«Нам нужен был бренд, который отражает масштаб работы терминала и при этом остаётся чётким в ежедневных материалах. Мы хотели говорить с партнёрами современным узнаваемым визуальным языком.",
        "Новая система помогает последовательно представлять Terminal Borivaje на разных носителях — от деловых документов до фирменной продукции».",
      ],
      author: "Команда Terminal Borivaje",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Страна", value: "Украина", countryCode: "UA" }
          : item.label === "Ніша"
            ? { ...item, label: "Ниша", value: "агробизнес / логистика" }
            : { ...item, label: "Продукт", value: "зерновой терминал" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: terminalGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "Between field,\nterminal, and sea.",
      paragraphs: [
        "Terminal Borivaje is a grain transshipment terminal in Novi Bilyari, Odesa region, in the waters of the Adzhalyk estuary at Port Pivdennyi. Its work links agriculture with port logistics.",
        "For this business, visual identity must speak clearly and confidently: partners should see an infrastructure company they can trust with a complex process.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Show the strength\nof a modern terminal.",
      paragraphs: [
        "Create a recognisable brand reflecting innovation, sustainability, and reliability. The mark should convey what an agro terminal does without lengthy explanation.",
        "Develop a harmonious palette and versatile typography for every platform and touchpoint — from print to branded merchandise.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "One language\nfor a large system.",
      paragraphs: [
        "We developed branding, a logo, colour system, typography, and graphic principles. The identity combines agriculture with the precision of industrial logistics.",
        "We showed how the system works on print and souvenirs. Touchpoints stay recognisable across format, scale, and context.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A brand that works\nacross touchpoints.",
      paragraphs: [
        "Terminal Borivaje received a logo and a full visual identity system. The case shows applications on documents, print, and souvenir products.",
        "The terminal gained a consistent system for representing the business and communicating with partners. The source cites no post-launch metrics.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "One system.\nEvery touchpoint.",
      rules: [
        "Branding",
        "Logo",
        "Colour system",
        "Typography",
        "Visual identity",
        "Print",
        "Souvenir products",
        "Scalable applications",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Reliability", description: "Convey stability of an infrastructure business." },
        { title: "System", description: "Unite agricultural and logistics aspects." },
        { title: "Scale", description: "Work from documents to large-format applications." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "The flow of grain.\nPrecision in every line.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT FEEDBACK",
      heading: "The Terminal Borivaje\nteam’s view.",
      paragraphs: [
        "“We needed a brand that reflects the scale of the terminal’s operations while staying clear in everyday materials. We wanted to speak to partners in a modern, recognisable visual language.",
        "The new system helps us present Terminal Borivaje consistently — from business documents to branded products.”",
      ],
      author: "Terminal Borivaje team",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Country", value: "Ukraine", countryCode: "UA" }
          : item.label === "Ніша"
            ? { ...item, label: "Niche", value: "agribusiness / logistics" }
            : { ...item, label: "Product", value: "grain terminal" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: terminalGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getTerminalBorivajeBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const terminalBorivajeShared = {
  slug: "terminal-borivaje",
  cover: m("cover.jpg"),
  listCover: m("cover.mp4"),
  media: terminalMedia,
  body: `[IMG: media/terminal-borivaje/01.jpg]`,
};

export const terminalBorivajeCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Terminal Borivaje",
    description:
      "Розробили брендинг і логотип для Terminal Borivaje — агротермінала в Одеській області. Також поліграфія та сувенірна продукція.",
    tagline: "Масштаб логістики.\nТочність бренду.",
    serviceTag: "Брендинг · логотип · айдентика",
  },
  ru: {
    title: "Terminal Borivaje",
    description:
      "Разработали брендинг и логотип для Terminal Borivaje — агротерминала в Одесской области. Также полиграфия и сувенирная продукция.",
    tagline: "Масштаб логистики.\nТочность бренда.",
    serviceTag: "Брендинг · логотип · айдентика",
  },
  en: {
    title: "Terminal Borivaje",
    description:
      "We developed branding and a logo for Terminal Borivaje — an agro terminal in Odesa region. Also print and souvenir products.",
    tagline: "Logistics at scale.\nBrand precision.",
    serviceTag: "Branding · logo · identity",
  },
};
