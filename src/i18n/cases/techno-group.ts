import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/techno-group/${file}`;

const technoGroupMedia = [
  "media/techno-group/cover.jpeg",
  "media/techno-group/hero.webp",
  "media/techno-group/01.jpeg",
  ...Array.from({ length: 15 }, (_, i) => `media/techno-group/${String(i + 2).padStart(2, "0")}.webp`),
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Інженерна експертиза.\nСучасний образ.",
    paragraphs: [
      "Техно Груп — інженерна компанія з досвідом в електромонтажних і сантехнічних роботах. Її робота вимагає технічної точності, відповідальності та довіри замовників.",
      "Компанія звернулася до ZOND, щоб оновити бренд і відобразити рівень своєї експертизи. Візуальна система мала передавати надійність та сучасний підхід до інженерних задач.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "інженерія" },
      { label: "Продукт", value: "інженерні послуги" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.jpeg"), caption: "Логотип Techno Group: знак, контурна версія та застосування на фірмовому фоні" },
      { src: m("02.webp"), caption: "Палітра Techno Group: Indigo Dye #091E89, чорний #000000 і білий #FFFFFF" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Типографіка Montserrat: великі заголовки, українська абетка та застосування" },
      { src: m("04.webp"), caption: "Презентаційна папка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("05.webp"), caption: "Брендований автомобіль" },
      { src: m("06.webp"), caption: "Фірмовий знак на фасадній табличці" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Зробити професіоналізм\nвидимим.",
    paragraphs: [
      "Оновити візуальний образ компанії та побудувати впізнавану систему комунікації. Бренд мав відповідати якості послуг і допомагати послідовно представляти команду, її компетенції та проєкти.",
      "Важливо було об’єднати цифрові й фізичні носії: соціальні мережі, поліграфію та сувенірну продукцію. Для кожного контакту з клієнтом потрібна одна зрозуміла візуальна мова.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Характер", description: "Точність, компетентність і надійність." },
      { title: "Послідовність", description: "Спільні правила для всіх носіїв." },
      { title: "Масштаб", description: "Система для розвитку комунікації." },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Система, що тримає\nвсі елементи разом.",
    paragraphs: [
      "Розробили айдентику, в якій логотип, кольори, типографіка та композиція працюють узгоджено. Стримана графіка й виразні акценти формують образ технічної компетентності.",
      "Зафіксували принципи у брендбуку та адаптували стиль до друкованих матеріалів, сувенірної продукції й SMM. Це дає команді спільну основу для підготовки нових носіїв.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ БРЕНДУ",
    text: "Точність.\nУ кожній деталі.",
    footer: "ТЕХНО ГРУП / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("07.webp"), caption: "Кошторис і візитівки Techno Group" },
      { src: m("08.webp"), caption: "Фірмовий скотч Techno Group" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("09.webp"), caption: "Футболка на співробітнику зі спини: фірмовий принт і слоган" },
      { src: m("10.webp"), caption: "Захисна каска з логотипом" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "ЕЛЕМЕНТИ СИСТЕМИ",
    title: "Один брендбук.\nСпільні правила.",
    paragraphs: [],
    rules: [
      "Логотип",
      "Палітра кольорів",
      "Типографіка",
      "Правила композиції",
      "Поліграфія",
      "Сувенірна продукція",
      "Соціальні мережі",
      "Приклади застосування",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("11.webp"), caption: "Брендований банер на майданчику" },
      { src: m("12.webp"), caption: "Ситилайт Techno Group із рекламною фотографією електромонтажних робіт" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("13.webp"), caption: "Білборд Techno Group із рекламною фотографією інженерних систем" },
      { src: m("14.webp"), caption: "Презентація Techno Group: інженерні рішення для бізнесу" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("15.webp"), caption: "Соціальні мережі на телефоні" },
      { src: m("16.webp"), caption: "Брендування інструментів" },
    ],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Цілісний бренд.\nНа кожному носії.",
    paragraphs: [
      "Техно Груп отримала оновлену айдентику та брендбук із правилами використання логотипу, палітри, шрифтів і візуальних матеріалів. Комунікація компанії набула єдиного характеру.",
      "Поліграфія, сувенірна продукція та соціальні мережі підтримують спільний образ бренду. Результат — система, яка допомагає презентувати компанію послідовно та розвивати її комунікацію.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК",
    heading: "Слово команді\nТехно Груп.",
    paragraphs: [
      "Ми хотіли, щоб бренд відповідав рівню нашої роботи: був сучасним, зрозумілим і впевненим. Важливо було зберегти відчуття надійності та об’єднати всі матеріали компанії.",
      "Нова айдентика дала нам цілісний образ, а брендбук — спільні правила для команди. Тепер друковані матеріали й цифрова комунікація працюють в одному стилі.",
    ],
    author: "Адміністрація Техно Груп",
    role: "",
  },
];

const technoGroupGalleryCaptionsRu: Record<string, string> = {
  [m("01.jpeg")]: "Логотип Techno Group: знак, контурная версия и применение на фирменном фоне",
  [m("02.webp")]: "Палитра Techno Group: Indigo Dye #091E89, чёрный #000000 и белый #FFFFFF",
  [m("03.webp")]: "Типографика Montserrat: крупные заголовки, украинский алфавит и применение",
  [m("04.webp")]: "Презентационная папка",
  [m("05.webp")]: "Брендированный автомобиль",
  [m("06.webp")]: "Фирменный знак на фасадной табличке",
  [m("07.webp")]: "Смета и визитки Techno Group",
  [m("08.webp")]: "Фирменный скотч Techno Group",
  [m("09.webp")]: "Футболка на сотруднике со спины: фирменный принт и слоган",
  [m("10.webp")]: "Защитная каска с логотипом",
  [m("11.webp")]: "Брендированный баннер на площадке",
  [m("12.webp")]: "Ситилайт Techno Group с рекламной фотографией электромонтажных работ",
  [m("13.webp")]: "Билборд Techno Group с рекламной фотографией инженерных систем",
  [m("14.webp")]: "Презентация Techno Group: инженерные решения для бизнеса",
  [m("15.webp")]: "Социальные сети на телефоне",
  [m("16.webp")]: "Брендирование инструментов",
};

const technoGroupGalleryCaptionsEn: Record<string, string> = {
  [m("01.jpeg")]: "Techno Group logo: mark, outline version, and application on a branded background",
  [m("02.webp")]: "Techno Group palette: Indigo Dye #091E89, black #000000, and white #FFFFFF",
  [m("03.webp")]: "Montserrat typography: large headlines, Ukrainian alphabet, and application",
  [m("04.webp")]: "Presentation folder",
  [m("05.webp")]: "Branded company vehicle",
  [m("06.webp")]: "Brand mark on a facade sign",
  [m("07.webp")]: "Techno Group estimate sheet and business cards",
  [m("08.webp")]: "Branded Techno Group tape",
  [m("09.webp")]: "T-shirt on an employee, back view: branded print and tagline",
  [m("10.webp")]: "Safety helmet with the logo",
  [m("11.webp")]: "Branded banner on site",
  [m("12.webp")]: "Techno Group citylight with an electrical work advertising photo",
  [m("13.webp")]: "Techno Group billboard with an engineering systems advertising photo",
  [m("14.webp")]: "Techno Group presentation: engineering solutions for business",
  [m("15.webp")]: "Social media on a phone",
  [m("16.webp")]: "Branded tools",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Инженерная экспертиза.\nСовременный образ.",
      paragraphs: [
        "Техно Груп — инженерная компания с опытом в электромонтажных и сантехнических работах. Её работа требует технической точности, ответственности и доверия заказчиков.",
        "Компания обратилась к ZOND, чтобы обновить бренд и отразить уровень своей экспертизы. Визуальная система должна была передавать надёжность и современный подход к инженерным задачам.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Сделать профессионализм\nвидимым.",
      paragraphs: [
        "Обновить визуальный образ компании и построить узнаваемую систему коммуникации. Бренд должен был соответствовать качеству услуг и помогать последовательно представлять команду, её компетенции и проекты.",
        "Важно было объединить цифровые и физические носители: социальные сети, полиграфию и сувенирную продукцию. Для каждого контакта с клиентом нужен один понятный визуальный язык.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Система, которая держит\nвсе элементы вместе.",
      paragraphs: [
        "Разработали айдентику, в которой логотип, цвета, типографика и композиция работают согласованно. Сдержанная графика и выразительные акценты формируют образ технической компетентности.",
        "Зафиксировали принципы в брендбуке и адаптировали стиль к печатным материалам, сувенирной продукции и SMM. Это даёт команде общую основу для подготовки новых носителей.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Целостный бренд.\nНа каждом носителе.",
      paragraphs: [
        "Техно Груп получила обновлённую айдентику и брендбук с правилами использования логотипа, палитры, шрифтов и визуальных материалов. Коммуникация компании приобрела единый характер.",
        "Полиграфия, сувенирная продукция и социальные сети поддерживают общий образ бренда. Результат — система, которая помогает презентовать компанию последовательно и развивать её коммуникацию.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "ЭЛЕМЕНТЫ СИСТЕМЫ",
      title: "Один брендбук.\nОбщие правила.",
      rules: [
        "Логотип",
        "Палитра цветов",
        "Типографика",
        "Правила композиции",
        "Полиграфия",
        "Сувенирная продукция",
        "Социальные сети",
        "Примеры применения",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Характер", description: "Точность, компетентность и надёжность." },
        { title: "Последовательность", description: "Общие правила для всех носителей." },
        { title: "Масштаб", description: "Система для развития коммуникации." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ БРЕНДА",
      text: "Точность.\nВ каждой детали.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ",
      heading: "Слово команде\nТехно Груп.",
      paragraphs: [
        "Мы хотели, чтобы бренд соответствовал уровню нашей работы: был современным, понятным и уверенным. Важно было сохранить ощущение надёжности и объединить все материалы компании.",
        "Новая айдентика дала нам целостный образ, а брендбук — общие правила для команды. Теперь печатные материалы и цифровая коммуникация работают в одном стиле.",
      ],
      author: "Администрация Техно Груп",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Страна", value: "Украина", accent: true, countryCode: "UA" },
        { label: "Ниша", value: "инженерия" },
        { label: "Продукт", value: "инженерные услуги" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: technoGroupGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "Engineering expertise.\nA modern look.",
      paragraphs: [
        "Techno Group is an engineering company with experience in electrical and plumbing works. Its work demands technical precision, accountability, and client trust.",
        "The company came to ZOND to refresh its brand and reflect its level of expertise. The visual system needed to convey reliability and a modern approach to engineering tasks.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Make professionalism\nvisible.",
      paragraphs: [
        "Refresh the company's visual image and build a recognizable communication system. The brand needed to match the quality of its services and consistently represent the team, its expertise, and its projects.",
        "It was important to unite digital and physical carriers: social media, print, and branded merchandise. Every client touchpoint needed one clear visual language.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "A system that holds\nevery element together.",
      paragraphs: [
        "We developed an identity where the logo, colors, typography, and composition work in harmony. Restrained graphics and expressive accents shape an image of technical competence.",
        "We codified the principles in a brand book and adapted the style to print materials, branded merchandise, and SMM. This gives the team a shared foundation for producing new carriers.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A cohesive brand.\nOn every carrier.",
      paragraphs: [
        "Techno Group received an updated identity and brand book with rules for the logo, palette, fonts, and visual materials. The company's communication gained a unified character.",
        "Print, branded merchandise, and social media now support one shared brand image. The result is a system that helps present the company consistently and grow its communication.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SYSTEM ELEMENTS",
      title: "One brand book.\nShared rules.",
      rules: [
        "Logo",
        "Color palette",
        "Typography",
        "Composition rules",
        "Print",
        "Branded merchandise",
        "Social media",
        "Application examples",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Character", description: "Precision, competence, and reliability." },
        { title: "Consistency", description: "Shared rules across every carrier." },
        { title: "Scale", description: "A system built to grow communication." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "BRAND IDEA",
      text: "Precision.\nIn every detail.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT FEEDBACK",
      heading: "The Techno Group\nteam's word.",
      paragraphs: [
        "We wanted a brand that matched the level of our work: modern, clear, and confident. It was important to keep a sense of reliability and unite all of the company's materials.",
        "The new identity gave us a cohesive image, and the brand book gave the team shared rules. Now print materials and digital communication work in one style.",
      ],
      author: "Techno Group administration",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "engineering" },
        { label: "Product", value: "engineering services" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: technoGroupGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getTechnoGroupBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const technoGroupShared = {
  slug: "techno-group",
  cover: m("hero.webp"),
  listCover: m("hero.webp"),
  media: technoGroupMedia,
  body: `[IMG: media/techno-group/hero.webp]`,
};

export const technoGroupCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Техно Груп",
    description:
      "Провели ребрендинг Техно Груп — інженерної компанії: нова айдентика, брендбук, поліграфія, сувенірна продукція та SMM.",
    tagline: "Точність у роботі.\nВпевненість у бренді.",
    serviceTag: "Ребрендинг · айдентика · брендбук",
  },
  ru: {
    title: "Техно Груп",
    description:
      "Провели ребрендинг Техно Груп — инженерной компании: новая айдентика, брендбук, полиграфия, сувенирная продукция и SMM.",
    tagline: "Точность в работе.\nУверенность в бренде.",
    serviceTag: "Ребрендинг · айдентика · брендбук",
  },
  en: {
    title: "Techno Group",
    description:
      "We rebranded Techno Group — an engineering company: new identity, brand book, print, branded merchandise, and SMM.",
    tagline: "Precision at work.\nConfidence in the brand.",
    serviceTag: "Rebranding · identity · brand book",
  },
};
