import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/digital-residence/${file}`;

const digitalResidenceMedia = [
  "media/digital-residence/hero.jpg",
  "media/digital-residence/01.webp",
  "media/digital-residence/02.jpg",
  "media/digital-residence/03.webp",
  "media/digital-residence/04.webp",
  "media/digital-residence/05.jpg",
  "media/digital-residence/06.webp",
  "media/digital-residence/07.webp",
  "media/digital-residence/08.jpg",
  "media/digital-residence/09.jpg",
  "media/digital-residence/10.jpg",
  "media/digital-residence/11.jpg",
  "media/digital-residence/12.jpg",
  "media/digital-residence/13.jpg",
  "media/digital-residence/14.webp",
  "media/digital-residence/15.jpg",
  "media/digital-residence/16.jpg",
  "media/digital-residence/17.jpg",
  "media/digital-residence/18.jpg",
  "media/digital-residence/19.jpg",
  "media/digital-residence/20.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Новий погляд\nна життя біля моря.",
    paragraphs: [
      "Digital Residence — технологічна резиденція в Sea Breeze, Азербайджан. Проєкт об’єднує житлові апартаменти, бізнес-простори та спільноту IT-фахівців, креативних команд й інвесторів.",
      "Архітектура та цифрові рішення тут формують єдиний досвід. Візуальний образ має передавати цю ідею ще до знайомства з простором: через форму, матеріал і характер комунікації.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Азербайджан", accent: true, countryCode: "AZ" },
      { label: "Ніша", value: "нерухомість" },
      { label: "Продукт", value: "технологічна резиденція" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.webp"), caption: "Архітектура та знак" },
      { src: m("02.jpg"), caption: "Типографіка бренду" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Показати майбутнє.\nЗберегти ясність.",
    paragraphs: [
      "Створити айдентику преміального проєкту з міжнародними амбіціями. Потрібен був образ, який поєднує інноваційність із відчуттям надійності та зрозуміло представляє резиденцію різним аудиторіям.",
      "Система мала працювати на екранах, у просторі й у друці. Від логотипа до об’ємного знака та корпоративних матеріалів — усі елементи повинні підтримувати одну архітектурну логіку.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Інновації", description: "Передати технологічну ідею через форму й матеріали." },
      { title: "Послідовність", description: "Єдина логіка для комунікації й фірмових носіїв." },
      { title: "Масштаб", description: "Упізнаваність від невеликої деталі до простору." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Об’ємний фірмовий брелок" },
      { src: m("04.webp"), caption: "Корпоративна футболка" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Архітектурна логіка.\nЦифрова виразність.",
    paragraphs: [
      "Основа знака — трикутна форма, пов’язана зі структурою архітектури. Її чіткий силует дає впізнаваний контур, який можна переносити між пласкою графікою та об’ємними візуалізаціями.",
      "Метал, скло й бетон стали матеріальними орієнтирами айдентики. Робота зі світлом, прозорістю та глибиною додає технологічного характеру, а стримані композиції зберігають преміальне відчуття.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Архітектура.\nУ новому вимірі.",
    footer: "DIGITAL RESIDENCE / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.jpg"), caption: "Презентаційний буклет" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.webp"), caption: "Фірмовий шопер" },
      { src: m("07.webp"), caption: "Ділові матеріали" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Від знака\nдо цілісної системи.",
    paragraphs: [],
    rules: [
      "Логотип і знак",
      "Візуальна айдентика",
      "Брендбук",
      "3D-логотип",
      "Поліграфія та реклама",
      "Корпоративна продукція",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Кольорова система" },
      { src: m("09.jpg"), caption: "Одяг спільноти" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Мобільна комунікація" },
      { src: m("11.jpg"), caption: "Зовнішня реклама" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Персонажі та стікери" },
      { src: m("13.jpg"), caption: "Оформлення соціальних мереж" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Цифрові презентації" },
      { src: m("15.jpg"), caption: "Фірмові блокноти" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("16.jpg"), caption: "Графіка та стікери" },
      { src: m("17.jpg"), caption: "Візитівки" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("18.jpg"), caption: "Корпоративні матеріали" },
      { src: m("19.jpg"), caption: "Фірмові носії" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("20.jpg"), caption: "Бренд у просторі" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Єдиний характер.\nУ кожному вимірі.",
    paragraphs: [
      "Для Digital Residence розроблено логотип, візуальну систему, брендбук, 3D-логотип, друковані й рекламні матеріали, сувенірну та корпоративну продукцію. Кейс демонструє застосування бренду в різних форматах.",
      "Брендбук об’єднує елементи в практичну основу для подальших комунікацій. Архітектурний знак і спільна візуальна мова допомагають зберігати характер резиденції — від презентації до фізичного носія.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nDigital Residence.",
    paragraphs: [
      "«Ми шукали візуальну мову, яка передасть технологічність резиденції та збереже відчуття преміального простору. Важливо було поєднати архітектуру, інновації та спосіб життя в одному образі.",
      "Цей напрям допомагає розповідати про проєкт послідовно. Знак, матеріали й об’ємна графіка дають спільний характер презентаціям, рекламі та корпоративним носіям».",
    ],
    author: "Команда Digital Residence",
    role: "",
  },
];

const digitalResidenceGalleryCaptionsRu: Record<string, string> = {
  [m("01.webp")]: "Архитектура и знак",
  [m("02.jpg")]: "Типографика бренда",
  [m("03.webp")]: "Объёмный фирменный брелок",
  [m("04.webp")]: "Корпоративная футболка",
  [m("05.jpg")]: "Презентационный буклет",
  [m("06.webp")]: "Фирменный шопер",
  [m("07.webp")]: "Деловые материалы",
  [m("08.jpg")]: "Цветовая система",
  [m("09.jpg")]: "Одежда сообщества",
  [m("10.jpg")]: "Мобильная коммуникация",
  [m("11.jpg")]: "Наружная реклама",
  [m("12.jpg")]: "Персонажи и стикеры",
  [m("13.jpg")]: "Оформление социальных сетей",
  [m("14.webp")]: "Цифровые презентации",
  [m("15.jpg")]: "Фирменные блокноты",
  [m("16.jpg")]: "Графика и стикеры",
  [m("17.jpg")]: "Визитки",
  [m("18.jpg")]: "Корпоративные материалы",
  [m("19.jpg")]: "Фирменные носители",
  [m("20.jpg")]: "Бренд в пространстве",
};

const digitalResidenceGalleryCaptionsEn: Record<string, string> = {
  [m("01.webp")]: "Architecture and mark",
  [m("02.jpg")]: "Brand typography",
  [m("03.webp")]: "3D branded keychain",
  [m("04.webp")]: "Corporate T-shirt",
  [m("05.jpg")]: "Presentation booklet",
  [m("06.webp")]: "Branded tote bag",
  [m("07.webp")]: "Business materials",
  [m("08.jpg")]: "Color system",
  [m("09.jpg")]: "Community apparel",
  [m("10.jpg")]: "Mobile communication",
  [m("11.jpg")]: "Outdoor advertising",
  [m("12.jpg")]: "Characters and stickers",
  [m("13.jpg")]: "Social media design",
  [m("14.webp")]: "Digital presentations",
  [m("15.jpg")]: "Branded notebooks",
  [m("16.jpg")]: "Graphics and stickers",
  [m("17.jpg")]: "Business cards",
  [m("18.jpg")]: "Corporate materials",
  [m("19.jpg")]: "Branded touchpoints",
  [m("20.jpg")]: "Brand in space",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Новый взгляд\nна жизнь у моря.",
      paragraphs: [
        "Digital Residence — технологичная резиденция в Sea Breeze, Азербайджан. Проект объединяет жилые апартаменты, бизнес-пространства и сообщество IT-специалистов, креативных команд и инвесторов.",
        "Архитектура и цифровые решения формируют здесь единый опыт. Визуальный образ должен передавать эту идею ещё до знакомства с пространством — через форму, материал и характер коммуникации.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Показать будущее.\nСохранить ясность.",
      paragraphs: [
        "Создать айдентику премиального проекта с международными амбициями. Нужен был образ, который сочетает инновационность с ощущением надёжности и понятно представляет резиденцию разным аудиториям.",
        "Система должна была работать на экранах, в пространстве и в печати. От логотипа до объёмного знака и корпоративных материалов — все элементы должны поддерживать одну архитектурную логику.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Архитектурная логика.\nЦифровая выразительность.",
      paragraphs: [
        "Основа знака — треугольная форма, связанная со структурой архитектуры. Её чёткий силуэт даёт узнаваемый контур, который можно переносить между плоской графикой и объёмными визуализациями.",
        "Металл, стекло и бетон стали материальными ориентирами айдентики. Работа со светом, прозрачностью и глубиной добавляет технологичного характера, а сдержанные композиции сохраняют премиальное ощущение.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Единый характер.\nВ каждом измерении.",
      paragraphs: [
        "Для Digital Residence разработаны логотип, визуальная система, брендбук, 3D-логотип, печатные и рекламные материалы, сувенирная и корпоративная продукция. Кейс демонстрирует применение бренда в разных форматах.",
        "Брендбук объединяет элементы в практическую основу для дальнейших коммуникаций. Архитектурный знак и общий визуальный язык помогают сохранять характер резиденции — от презентации до физического носителя.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "От знака\nк целостной системе.",
      rules: [
        "Логотип и знак",
        "Визуальная айдентика",
        "Брендбук",
        "3D-логотип",
        "Полиграфия и реклама",
        "Корпоративная продукция",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Инновации", description: "Передать технологичную идею через форму и материалы." },
        { title: "Последовательность", description: "Единая логика для коммуникации и фирменных носителей." },
        { title: "Масштаб", description: "Узнаваемость от небольшой детали до пространства." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Архитектура.\nВ новом измерении.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nDigital Residence.",
      paragraphs: [
        "«Мы искали визуальный язык, который передаст технологичность резиденции и сохранит ощущение премиального пространства. Важно было сочетать архитектуру, инновации и образ жизни в одном образе.",
        "Это направление помогает рассказывать о проекте последовательно. Знак, материалы и объёмная графика дают общий характер презентациям, рекламе и корпоративным носителям».",
      ],
      author: "Команда Digital Residence",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Страна", value: "Азербайджан", countryCode: "AZ" }
          : item.label === "Ніша"
            ? { ...item, label: "Ниша", value: "недвижимость" }
            : { ...item, label: "Продукт", value: "технологичная резиденция" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: digitalResidenceGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "A new perspective\non life by the sea.",
      paragraphs: [
        "Digital Residence is a tech-forward residence in Sea Breeze, Azerbaijan. The project combines residential apartments, business spaces, and a community of IT professionals, creative teams, and investors.",
        "Architecture and digital solutions shape a single experience here. The visual image must convey that idea before you enter the space — through form, material, and the tone of communication.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Show the future.\nKeep it clear.",
      paragraphs: [
        "Create identity for a premium project with international ambitions. The image had to combine innovation with a sense of reliability and represent the residence clearly to different audiences.",
        "The system had to work on screens, in space, and in print. From the logo to the 3D mark and corporate materials — every element had to support one architectural logic.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Architectural logic.\nDigital expression.",
      paragraphs: [
        "The mark is built on a triangular form tied to the architecture’s structure. Its clear silhouette gives a recognizable contour that moves between flat graphics and 3D visuals.",
        "Metal, glass, and concrete became material anchors for the identity. Work with light, transparency, and depth adds a tech character, while restrained layouts preserve a premium feel.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "One character.\nIn every dimension.",
      paragraphs: [
        "For Digital Residence we developed a logo, visual system, brand book, 3D logo, print and advertising materials, and souvenir and corporate products. The case shows the brand across formats.",
        "The brand book unites the elements into a practical base for future communications. The architectural mark and shared visual language help preserve the residence’s character — from presentations to physical touchpoints.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "From the mark\nto a full system.",
      rules: [
        "Logo and symbol",
        "Visual identity",
        "Brand book",
        "3D logo",
        "Print and advertising",
        "Corporate products",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Innovation", description: "Convey the tech idea through form and materials." },
        { title: "Consistency", description: "One logic for communication and branded touchpoints." },
        { title: "Scale", description: "Recognition from small details to full space." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "Architecture.\nIn a new dimension.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The Digital Residence\nteam’s view.",
      paragraphs: [
        "“We looked for a visual language that would convey the residence’s technology and keep the feel of a premium space. It was important to combine architecture, innovation, and lifestyle in one image.",
        "This direction helps us tell the project story consistently. The mark, materials, and 3D graphics give presentations, advertising, and corporate touchpoints a shared character.”",
      ],
      author: "Digital Residence team",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Azerbaijan", accent: true, countryCode: "AZ" },
        { label: "Niche", value: "real estate" },
        { label: "Product", value: "tech residence" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: digitalResidenceGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getDigitalResidenceBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const digitalResidenceShared = {
  slug: "digital-residence",
  cover: m("cover.webp"),
  listCover: m("cover.mp4"),
  media: digitalResidenceMedia,
  body: `[IMG: media/digital-residence/hero.jpg]`,
};

export const digitalResidenceCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Digital Residence",
    description:
      "Розробили логотип, айдентику та брендбук для Digital Residence в Азербайджані. Також 3D-логотип, поліграфія та корпоративна продукція.",
    tagline: "Технології.\nЯк спосіб життя.",
    serviceTag: "Брендинг + брендбук",
  },
  ru: {
    title: "Digital Residence",
    description:
      "Разработали логотип, айдентику и брендбук для Digital Residence в Азербайджане. Также 3D-логотип, полиграфия и корпоративная продукция.",
    tagline: "Технологии.\nКак образ жизни.",
    serviceTag: "Брендинг + брендбук",
  },
  en: {
    title: "Digital Residence",
    description:
      "We developed a logo, identity, and brand book for Digital Residence in Azerbaijan. Plus a 3D logo, print, and corporate materials.",
    tagline: "Technology.\nAs a way of life.",
    serviceTag: "Branding + brand book",
  },
};
