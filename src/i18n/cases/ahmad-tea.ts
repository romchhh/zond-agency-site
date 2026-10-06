import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/ahmad-tea/${file}`;

const ahmadTeaMedia = [
  "media/ahmad-tea/hero.jpg",
  "media/ahmad-tea/01.jpg",
  "media/ahmad-tea/02.jpg",
  "media/ahmad-tea/03.jpg",
  "media/ahmad-tea/04.jpg",
  "media/ahmad-tea/05.jpg",
  "media/ahmad-tea/06.jpg",
  "media/ahmad-tea/07.jpg",
  "media/ahmad-tea/08.jpg",
  "media/ahmad-tea/09.jpg",
  "media/ahmad-tea/10.webp",
  "media/ahmad-tea/11.webp",
  "media/ahmad-tea/12.jpg",
  "media/ahmad-tea/13.jpg",
  "media/ahmad-tea/14.jpg",
  "media/ahmad-tea/15.jpg",
  "media/ahmad-tea/16.jpg",
  "media/ahmad-tea/17.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Традиція, знайома\nрізним поколінням.",
    paragraphs: [
      "AHMAD TEA — міжнародний британський бренд преміального чаю. Він поєднує традиції англійського чаювання з увагою до якості, естетики та емоційного досвіду споживання.",
      "Бренд прагне залишатися близьким і новій аудиторії, і тим, хто вже знає його багато років. Це завдання стосується насамперед того, як бренд говорить із людьми та які моменти обирає для цієї розмови.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Велика Британія", accent: true, countryCode: "GB" },
      { label: "Ніша", value: "чай / FMCG" },
      { label: "Продукт", value: "преміальний чай" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.jpg"), caption: "Склад роботи над проєктом" },
      { src: m("02.jpg"), caption: "Результат стратегії" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Зберегти спадщину.\nОновити розмову.",
    paragraphs: [
      "Переосмислити комунікацію AHMAD TEA для сучасного ринку, зберігаючи преміальність і впізнаваність. Визначити, що цінує лояльна аудиторія і які потреби та бар’єри є у нових сегментів.",
      "Дослідити конкурентне середовище, споживчі звички, мотиви вибору й канали комунікації. На основі цього сформувати стратегію, яка допоможе створювати цілісні рекламні кампанії.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Спадщина", description: "Зберегти характер британського чайного бренду." },
      { title: "Актуальність", description: "Знайти близьку мову для різних поколінь." },
      { title: "Послідовність", description: "Об’єднати кампанії спільною стратегією." },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("03.jpg"), caption: "Матеріали дослідження" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("04.jpg"), caption: "Контент для соцмереж" },
      { src: m("05.jpg"), caption: "Фотоісторія для бренду" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Бренд говорить\nчерез відчуття.",
    paragraphs: [
      "Ми вибудували комунікаційну платформу навколо дослідження аудиторії та місця бренду на ринку. Позиціонування, tone of voice й ключові повідомлення задають послідовну мову для різних сегментів.",
      "Креативна стратегія й візуальний напрям допомагають говорити про чай через атмосферу та досвід. Окремо визначено підхід до рекламних каналів та співпраці з інфлюенсерами, щоб нові ідеї працювали як частина однієї системи.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Традиції чаювання.\nМова сьогодення.",
    footer: "AHMAD TEA / COMMUNICATION STRATEGY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("06.jpg"), caption: "Серія міських носіїв" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("07.jpg"), caption: "Сітілайт із креативом" },
      { src: m("08.jpg"), caption: "Фотоісторія — пікнік" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна стратегія.\nРізні точки контакту.",
    paragraphs: [],
    rules: [
      "Дослідження ринку",
      "Аналіз аудиторії",
      "Позиціонування",
      "Tone of voice",
      "Креативна стратегія",
      "Візуальний напрям",
      "Комунікаційна стратегія",
      "Інфлюенсери",
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("09.jpg"), caption: "Серія життєвих сюжетів" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Сітілайт у міському просторі" },
      { src: m("11.webp"), caption: "Lifestyle-зйомка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Візуальний напрям кампанії" },
      { src: m("13.jpg"), caption: "Стратегічні матеріали" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("14.jpg"), caption: "Зовнішня реклама — серія" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("15.jpg"), caption: "Реклама в міському середовищі" },
      { src: m("16.jpg"), caption: "Чаювання вдома" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("17.jpg"), caption: "Білборд у парку" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Система комунікації.\nОснова для нових кампаній.",
    paragraphs: [
      "Для AHMAD TEA підготовлено дослідження ринку й аудиторії, аналіз конкурентів і SWOT, позиціонування, tone of voice, комунікаційну та креативну стратегії, візуальний напрям і підхід до співпраці з інфлюенсерами.",
      "Отримані матеріали допомагають планувати повідомлення для лояльної та нової аудиторії в єдиній логіці. Кейс показує стратегічну основу для розвитку реклами; кількісних показників ефективності після впровадження джерело не наводить.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nAHMAD TEA.",
    paragraphs: [
      "«Ми прагнули зберегти впізнаваний характер AHMAD TEA й водночас знайти способи говорити з новими поколіннями. Для нас було важливо почати з розуміння аудиторії та її щоденних звичок.",
      "Стратегічний напрям дає спільну основу для повідомлень, візуальних ідей та майбутніх кампаній. Він допомагає бренду звучати послідовно в різних каналах».",
    ],
    author: "Команда AHMAD TEA",
    role: "",
  },
];

const ahmadTeaGalleryCaptionsRu: Record<string, string> = {
  [m("01.jpg")]: "Состав работы над проектом",
  [m("02.jpg")]: "Результат стратегии",
  [m("03.jpg")]: "Материалы исследования",
  [m("04.jpg")]: "Контент для соцсетей",
  [m("05.jpg")]: "Фотоистория для бренда",
  [m("06.jpg")]: "Серия городских носителей",
  [m("07.jpg")]: "Ситилайт с креативом",
  [m("08.jpg")]: "Фотоистория — пикник",
  [m("09.jpg")]: "Серия жизненных сюжетов",
  [m("10.webp")]: "Ситилайт в городском пространстве",
  [m("11.webp")]: "Lifestyle-съемка",
  [m("12.jpg")]: "Визуальное направление кампании",
  [m("13.jpg")]: "Стратегические материалы",
  [m("14.jpg")]: "Наружная реклама — серия",
  [m("15.jpg")]: "Реклама в городской среде",
  [m("16.jpg")]: "Чаепитие дома",
  [m("17.jpg")]: "Билборд в парке",
};

const ahmadTeaGalleryCaptionsEn: Record<string, string> = {
  [m("01.jpg")]: "Project deliverables",
  [m("02.jpg")]: "Strategy outcome",
  [m("03.jpg")]: "Research materials",
  [m("04.jpg")]: "Social media content",
  [m("05.jpg")]: "Photo story for the brand",
  [m("06.jpg")]: "Series of urban media",
  [m("07.jpg")]: "Citylight with creative",
  [m("08.jpg")]: "Photo story — picnic",
  [m("09.jpg")]: "Lifestyle story series",
  [m("10.webp")]: "Citylight in the city",
  [m("11.webp")]: "Lifestyle shoot",
  [m("12.jpg")]: "Campaign visual direction",
  [m("13.jpg")]: "Strategy materials",
  [m("14.jpg")]: "Outdoor ads — series",
  [m("15.jpg")]: "Ads in the urban environment",
  [m("16.jpg")]: "Tea at home",
  [m("17.jpg")]: "Billboard in the park",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Традиция, знакомая\nразным поколениям.",
      paragraphs: [
        "AHMAD TEA — международный британский бренд премиального чая. Он сочетает традиции английского чаепития с вниманием к качеству, эстетике и эмоциональному опыту потребления.",
        "Бренд стремится оставаться близким и новой аудитории, и тем, кто знает его много лет. Эта задача касается прежде всего того, как бренд говорит с людьми и какие моменты выбирает для этого разговора.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Сохранить наследие.\nОбновить разговор.",
      paragraphs: [
        "Переосмыслить коммуникацию AHMAD TEA для современного рынка, сохраняя премиальность и узнаваемость. Определить, что ценит лояльная аудитория и какие потребности и барьеры есть у новых сегментов.",
        "Исследовать конкурентную среду, потребительские привычки, мотивы выбора и каналы коммуникации. На этой основе сформировать стратегию, которая поможет создавать целостные рекламные кампании.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Бренд говорит\nчерез ощущения.",
      paragraphs: [
        "Мы выстроили коммуникационную платформу вокруг исследования аудитории и места бренда на рынке. Позиционирование, tone of voice и ключевые сообщения задают последовательный язык для разных сегментов.",
        "Креативная стратегия и визуальное направление помогают говорить о чае через атмосферу и опыт. Отдельно определён подход к рекламным каналам и сотрудничеству с инфлюенсерами, чтобы новые идеи работали как часть одной системы.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Система коммуникации.\nОснова для новых кампаний.",
      paragraphs: [
        "Для AHMAD TEA подготовлены исследование рынка и аудитории, анализ конкурентов и SWOT, позиционирование, tone of voice, коммуникационная и креативная стратегии, визуальное направление и подход к сотрудничеству с инфлюенсерами.",
        "Полученные материалы помогают планировать сообщения для лояльной и новой аудитории в единой логике. Кейс показывает стратегическую основу для развития рекламы; количественных показателей эффективности после внедрения источник не приводит.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Одна стратегия.\nРазные точки контакта.",
      rules: [
        "Исследование рынка",
        "Анализ аудитории",
        "Позиционирование",
        "Tone of voice",
        "Креативная стратегия",
        "Визуальное направление",
        "Коммуникационная стратегия",
        "Инфлюенсеры",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Наследие", description: "Сохранить характер британского чайного бренда." },
        { title: "Актуальность", description: "Найти близкий язык для разных поколений." },
        { title: "Последовательность", description: "Объединить кампании общей стратегией." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Традиции чаепития.\nЯзык сегодняшнего дня.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nAHMAD TEA.",
      paragraphs: [
        "«Мы стремились сохранить узнаваемый характер AHMAD TEA и одновременно найти способы говорить с новыми поколениями. Для нас было важно начать с понимания аудитории и её ежедневных привычек.",
        "Стратегическое направление даёт общую основу для сообщений, визуальных идей и будущих кампаний. Оно помогает бренду звучать последовательно в разных каналах».",
      ],
      author: "Команда AHMAD TEA",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Страна", value: "Великобритания", countryCode: "GB" }
          : item.label === "Ніша"
            ? { ...item, label: "Ниша", value: "чай / FMCG" }
            : { ...item, label: "Продукт", value: "премиальный чай" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: ahmadTeaGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "A tradition familiar\nacross generations.",
      paragraphs: [
        "AHMAD TEA is an international British premium tea brand. It combines English tea traditions with attention to quality, aesthetics, and the emotional experience of drinking tea.",
        "The brand aims to stay close to new audiences and those who have known it for years. That challenge is mainly about how the brand speaks to people and which moments it chooses for that conversation.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Preserve heritage.\nRefresh the conversation.",
      paragraphs: [
        "Rethink AHMAD TEA communication for today’s market while keeping premium quality and recognition. Define what loyal audiences value and what needs and barriers new segments have.",
        "Research competitors, consumption habits, purchase motives, and communication channels. On that basis, shape a strategy that supports cohesive advertising campaigns.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "The brand speaks\nthrough feeling.",
      paragraphs: [
        "We built a communication platform around audience research and the brand’s place in the market. Positioning, tone of voice, and key messages set a consistent language for different segments.",
        "Creative strategy and visual direction help talk about tea through atmosphere and experience. We also defined approaches to ad channels and influencer partnerships so new ideas work as one system.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A communication system.\nA base for new campaigns.",
      paragraphs: [
        "For AHMAD TEA we prepared market and audience research, competitor and SWOT analysis, positioning, tone of voice, communication and creative strategies, visual direction, and an influencer approach.",
        "The deliverables help plan messages for loyal and new audiences within one logic. The case shows the strategic foundation for growing advertising; post-launch performance metrics are not cited in the source.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "One strategy.\nMany touchpoints.",
      rules: [
        "Market research",
        "Audience analysis",
        "Positioning",
        "Tone of voice",
        "Creative strategy",
        "Visual direction",
        "Communication strategy",
        "Influencers",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Heritage", description: "Preserve the character of a British tea brand." },
        { title: "Relevance", description: "Find a relatable language for different generations." },
        { title: "Consistency", description: "Unite campaigns with a shared strategy." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "Tea traditions.\nThe language of today.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The AHMAD TEA\nteam’s view.",
      paragraphs: [
        "“We wanted to keep AHMAD TEA’s recognizable character while finding ways to speak to new generations. It was important for us to start by understanding the audience and their daily habits.",
        "The strategic direction gives a shared foundation for messages, visual ideas, and future campaigns. It helps the brand sound consistent across channels.”",
      ],
      author: "AHMAD TEA team",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "United Kingdom", accent: true, countryCode: "GB" },
        { label: "Niche", value: "tea / FMCG" },
        { label: "Product", value: "premium tea" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: ahmadTeaGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getAhmadTeaBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const ahmadTeaShared = {
  slug: "ahmad-tea",
  cover: m("cover.webp"),
  listCover: m("cover.mp4"),
  media: ahmadTeaMedia,
  body: `[IMG: media/ahmad-tea/hero.jpg]`,
};

export const ahmadTeaCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "AHMAD TEA",
    description:
      "Комунікаційна стратегія для британського чайного бренду: дослідження ринку й аудиторії, позиціонування, tone of voice, креативна стратегія та візуальний напрям.",
    tagline: "Британська традиція.\nНова мова спілкування.",
    serviceTag: "Комунікаційна стратегія",
  },
  ru: {
    title: "AHMAD TEA",
    description:
      "Коммуникационная стратегия для британского чайного бренда: исследование рынка и аудитории, позиционирование, tone of voice, креативная стратегия и визуальное направление.",
    tagline: "Британская традиция.\nНовый язык общения.",
    serviceTag: "Коммуникационная стратегия",
  },
  en: {
    title: "AHMAD TEA",
    description:
      "Communication strategy for a British premium tea brand: market and audience research, positioning, tone of voice, creative strategy, and visual direction.",
    tagline: "British tradition.\nA new language of connection.",
    serviceTag: "Communication strategy",
  },
};
