import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/bit-school/${file}`;

const bitSchoolMedia = [
  "media/bit-school/hero.jpg",
  "media/bit-school/01.jpg",
  "media/bit-school/02.jpg",
  "media/bit-school/03.webp",
  "media/bit-school/04.webp",
  "media/bit-school/05.jpg",
  "media/bit-school/06.webp",
  "media/bit-school/07.webp",
  "media/bit-school/08.jpg",
  "media/bit-school/09.webp",
  "media/bit-school/10.jpg",
  "media/bit-school/11.webp",
  "media/bit-school/12.jpg",
  "media/bit-school/13.jpg",
  "media/bit-school/14.webp",
  "media/bit-school/15.jpg",
  "media/bit-school/16.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Школа, де технології\nстають грою.",
    paragraphs: [
      "BIT School — школа програмування та конструювання для дітей. Тут технологічність зустрічається з цікавістю, а навчання виглядає як відкриття нового світу.",
      "Бренд має бути зрозумілим і дітям, і батькам: дружнім за характером, сучасним за формою й достатньо сильним, щоб працювати онлайн і офлайн.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "освіта / IT" },
      { label: "Продукт", value: "дитяча школа" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.jpg"), caption: "Логотип і персонаж" },
      { src: m("02.jpg"), caption: "Типографіка бренду" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Поєднати технології\nі дитячу допитливість.",
    paragraphs: [
      "Створити яскравий, сучасний і водночас дружній бренд для школи програмування та конструювання. Важливо було передати цінності розвитку, гри й освіти.",
      "Айдентика мала легко адаптуватися до онлайн- і офлайн-форматів — від цифрових матеріалів до простору класів.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Логотип", description: "Дружній і технологічний знак першого враження." },
      { title: "Айдентика", description: "Система, зрозуміла дітям і батькам." },
      { title: "Носії", description: "Єдина мова для екранів і фізичного простору." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Рекламний флаєр" },
      { src: m("04.webp"), caption: "Фірмова сумка" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Ігровість.\nІз сучасною точністю.",
    paragraphs: [
      "Логотип — перше знайомство зі школою. Для BIT School ми шукали баланс між ігровістю та технологічністю: елементи, що нагадують пікселі й цифрові інтерфейси, у м’якій, доброзичливій формі.",
      "Брендинг охоплює палітру, шрифти, ілюстративний стиль і тон спілкування. Він передає ідею розвитку та креативного майбутнього, залишаючись привабливим для дітей і зрозумілим для батьків.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Технології.\nЧерез гру й цікавість.",
    footer: "BIT SCHOOL / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.jpg"), caption: "Персонаж бренду" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.webp"), caption: "Рекламний флаєр" },
      { src: m("07.webp"), caption: "Візитівки" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Від знака\nдо освітнього простору.",
    paragraphs: [],
    rules: ["Брендинг", "Стратегія", "Фірмовий стиль", "Логотип", "Дизайн"],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Презентація бренду" },
      { src: m("09.webp"), caption: "Стікерпак" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Фірмовий одяг" },
      { src: m("11.webp"), caption: "Рекламні флаєри" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Бейджі співробітників" },
      { src: m("13.jpg"), caption: "Фірмовий бланк" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Брендована клавіша" },
      { src: m("15.jpg"), caption: "Чохол для телефону" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("16.jpg"), caption: "Презентація на ноутбуці" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Яскравий бренд.\nЗрозумілий системі.",
    paragraphs: [
      "BIT School отримала логотип, фірмовий стиль і візуальну систему, яка підтримує довіру до освітнього простору. Бренд звучить однаково в цифрових і фізичних точках контакту.",
      "Комплексний підхід допомагає школі залучати учнів і будувати впізнавану освітню екосистему з чіткою ідентичністю.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nBIT School.",
    paragraphs: [
      "«Нам був потрібен бренд, який говорить і з дітьми, і з батьками. Щоб технології виглядали цікаво, а навчання — близьким і зрозумілим.",
      "У цьому рішенні нам близькі яскравість, дружність і чітка система. Айдентика добре працює в різних форматах і допомагає школі звучати послідовно».",
    ],
    author: "Команда BIT School",
    role: "",
  },
];

const bitSchoolGalleryCaptionsRu: Record<string, string> = {
  [m("01.jpg")]: "Логотип и персонаж",
  [m("02.jpg")]: "Типографика бренда",
  [m("03.webp")]: "Рекламный флаер",
  [m("04.webp")]: "Фирменная сумка",
  [m("05.jpg")]: "Персонаж бренда",
  [m("06.webp")]: "Рекламный флаер",
  [m("07.webp")]: "Визитки",
  [m("08.jpg")]: "Презентация бренда",
  [m("09.webp")]: "Стикерпак",
  [m("10.jpg")]: "Фирменная одежда",
  [m("11.webp")]: "Рекламные флаеры",
  [m("12.jpg")]: "Бейджи сотрудников",
  [m("13.jpg")]: "Фирменный бланк",
  [m("14.webp")]: "Брендированная клавиша",
  [m("15.jpg")]: "Чехол для телефона",
  [m("16.jpg")]: "Презентация на ноутбуке",
};

const bitSchoolGalleryCaptionsEn: Record<string, string> = {
  [m("01.jpg")]: "Logo and character",
  [m("02.jpg")]: "Brand typography",
  [m("03.webp")]: "Promo flyer",
  [m("04.webp")]: "Branded tote bag",
  [m("05.jpg")]: "Brand character",
  [m("06.webp")]: "Promo flyer",
  [m("07.webp")]: "Business cards",
  [m("08.jpg")]: "Brand presentation",
  [m("09.webp")]: "Sticker pack",
  [m("10.jpg")]: "Branded apparel",
  [m("11.webp")]: "Promo flyers",
  [m("12.jpg")]: "Staff badges",
  [m("13.jpg")]: "Letterhead",
  [m("14.webp")]: "Branded keycap",
  [m("15.jpg")]: "Phone case",
  [m("16.jpg")]: "Presentation on a laptop",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Школа, где технологии\nстановятся игрой.",
      paragraphs: [
        "BIT School — школа программирования и конструирования для детей. Здесь технологичность встречается с интересом, а обучение выглядит как открытие нового мира.",
        "Бренд должен быть понятным и детям, и родителям: дружелюбным по характеру, современным по форме и достаточно сильным, чтобы работать онлайн и офлайн.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Сочетать технологии\nи детское любопытство.",
      paragraphs: [
        "Создать яркий, современный и в то же время дружелюбный бренд для школы программирования и конструирования. Важно было передать ценности развития, игры и образования.",
        "Айдентика должна была легко адаптироваться к онлайн- и офлайн-форматам — от цифровых материалов до пространства классов.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Игровость.\nС современной точностью.",
      paragraphs: [
        "Логотип — первое знакомство со школой. Для BIT School мы искали баланс между игровостью и технологичностью: элементы, напоминающие пиксели и цифровые интерфейсы, в мягкой, доброжелательной форме.",
        "Брендинг охватывает палитру, шрифты, иллюстративный стиль и тон общения. Он передаёт идею развития и творческого будущего, оставаясь привлекательным для детей и понятным для родителей.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Яркий бренд.\nПонятный системе.",
      paragraphs: [
        "BIT School получила логотип, фирменный стиль и визуальную систему, которая поддерживает доверие к образовательному пространству. Бренд звучит одинаково в цифровых и физических точках контакта.",
        "Комплексный подход помогает школе привлекать учеников и строить узнаваемую образовательную экосистему с чёткой идентичностью.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "От знака\nк образовательному пространству.",
      rules: ["Брендинг", "Стратегия", "Фирменный стиль", "Логотип", "Дизайн"],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Логотип", description: "Дружелюбный и технологичный знак первого впечатления." },
        { title: "Айдентика", description: "Система, понятная детям и родителям." },
        { title: "Носители", description: "Единый язык для экранов и физического пространства." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Технологии.\nЧерез игру и любопытство.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nBIT School.",
      paragraphs: [
        "«Нам был нужен бренд, который говорит и с детьми, и с родителями. Чтобы технологии выглядели интересно, а обучение — близким и понятным.",
        "В этом решении нам близки яркость, дружелюбность и чёткая система. Айдентика хорошо работает в разных форматах и помогает школе звучать последовательно».",
      ],
      author: "Команда BIT School",
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
            ? { ...item, label: "Ниша", value: "образование / IT" }
            : { ...item, label: "Продукт", value: "детская школа" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: bitSchoolGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "A school where tech\nbecomes play.",
      paragraphs: [
        "BIT School is a programming and construction school for kids. Technology meets curiosity here, and learning feels like discovering a new world.",
        "The brand must be clear to children and parents alike: friendly in character, modern in form, and strong enough to work online and offline.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Combine technology\nand childlike curiosity.",
      paragraphs: [
        "Create a bright, modern, yet friendly brand for a programming and construction school. It was important to convey the values of growth, play, and education.",
        "The identity had to adapt easily to online and offline formats — from digital materials to classroom spaces.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Playfulness.\nWith modern precision.",
      paragraphs: [
        "The logo is the first meeting with the school. For BIT School we sought a balance between play and tech: elements reminiscent of pixels and digital interfaces in a soft, welcoming form.",
        "Branding covers palette, type, illustration style, and tone of voice. It conveys growth and a creative future while staying appealing to kids and clear to parents.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A vibrant brand.\nClear as a system.",
      paragraphs: [
        "BIT School received a logo, visual identity, and a system that supports trust in the learning space. The brand sounds the same across digital and physical touchpoints.",
        "A comprehensive approach helps the school attract students and build a recognizable educational ecosystem with a clear identity.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "From the mark\nto the learning space.",
      rules: ["Branding", "Strategy", "Visual identity", "Logo", "Design"],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Logo", description: "A friendly, tech-forward mark for first impressions." },
        { title: "Identity", description: "A system that makes sense to kids and parents." },
        { title: "Touchpoints", description: "One language for screens and physical space." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "Technology.\nThrough play and curiosity.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The BIT School\nteam’s view.",
      paragraphs: [
        "“We needed a brand that speaks to both children and parents. Technology should look exciting, and learning — close and understandable.",
        "In this solution we value the brightness, friendliness, and clear system. The identity works well across formats and helps the school sound consistent.”",
      ],
      author: "BIT School team",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "education / IT" },
        { label: "Product", value: "children’s school" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: bitSchoolGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getBitSchoolBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const bitSchoolShared = {
  slug: "bit-school",
  cover: m("cover.gif"),
  media: bitSchoolMedia,
  body: `[IMG: media/bit-school/hero.jpg]`,
};

export const bitSchoolCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "BIT School",
    description:
      "Розробили брендинг, стратегію, фірмовий стиль і логотип для BIT School — школи програмування та конструювання для дітей.",
    tagline: "Технології.\nЧерез гру й цікавість.",
    serviceTag: "Брендинг + стратегія",
  },
  ru: {
    title: "BIT School",
    description:
      "Разработали брендинг, стратегию, фирменный стиль и логотип для BIT School — школы программирования и конструирования для детей.",
    tagline: "Технологии.\nЧерез игру и любопытство.",
    serviceTag: "Брендинг + стратегия",
  },
  en: {
    title: "BIT School",
    description:
      "We developed branding, strategy, identity, and a logo for BIT School — a programming and construction school for kids.",
    tagline: "Technology.\nThrough play and curiosity.",
    serviceTag: "Branding + strategy",
  },
};
