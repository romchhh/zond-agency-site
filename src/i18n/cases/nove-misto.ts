import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/nove-misto/${file}`;

const noveMistoMedia = [
  "media/nove-misto/cover.gif",
  "media/nove-misto/hero.jpg",
  "media/nove-misto/01.jpg",
  "media/nove-misto/02.webp",
  "media/nove-misto/03.webp",
  "media/nove-misto/04.webp",
  "media/nove-misto/05.webp",
  "media/nove-misto/06.jpg",
  "media/nove-misto/07.jpg",
  "media/nove-misto/08.jpg",
  "media/nove-misto/09.jpg",
  "media/nove-misto/10.webp",
  "media/nove-misto/11.webp",
  "media/nove-misto/12.jpg",
  "media/nove-misto/13.jpg",
  "media/nove-misto/14.jpg",
  "media/nove-misto/15.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Місто для життя.\nПростір для ідей.",
    paragraphs: [
      "Нове місто — преміум-забудовник у Бучі. У фокусі проєкту — житлові апартаменти, бізнес-простори та спільнота людей, які цінують сучасний міський досвід.",
      "Бренд звертається до майбутніх мешканців, підприємців та інвесторів. Його образ має поєднувати емоцію нового дому з відчуттям продуманості кожного рішення.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "нерухомість" },
      { label: "Продукт", value: "житло / бізнес-простори" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.jpg"), caption: "Зовнішня реклама" },
      { src: m("02.webp"), caption: "Логотип у просторі" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Преміальність.\nБез зайвих слів.",
    paragraphs: [
      "Створити цілісну ідентичність і брендбук, які розкривають архітектурний характер проєкту. Знак, палітра й композиція мають підтримувати однакове враження в усіх точках контакту.",
      "Система повинна працювати на екрані, у міському просторі та друці: від компактної візитівки до великої рекламної площини. Важливі впізнаваність, чіткість і стриманий тон.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Характер", description: "Виразний знак із відчуттям архітектурної структури." },
      { title: "Послідовність", description: "Єдина логіка для комунікації й фірмових носіїв." },
      { title: "Масштаб", description: "Упізнаваність від невеликої деталі до простору." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Фірмовий шопер" },
      { src: m("04.webp"), caption: "Брендована каска" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Архітектура\nстає айдентикою.",
    paragraphs: [
      "Гострі кути та геометрія знака перегукуються з конструкцією будівлі. Такий силует створює відчуття опори, порядку й точності — якостей, важливих для девелоперського бренду.",
      "Темні поверхні та виразний помаранчевий акцент поєднують стриманість із енергією. Фактури мармуру, бетону й металу пов’язують айдентику з архітектурою, а шрифти Feature Mono та Inter підтримують чітку ієрархію.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Чітка форма.\nТеплий характер.",
    footer: "НОВЕ МІСТО / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.webp"), caption: "Кольори та матеріали" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.jpg"), caption: "Вивіска" },
      { src: m("07.jpg"), caption: "Рекламні постери" },
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
      "Поліграфія",
      "Рекламні носії",
      "Корпоративна продукція",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Брендбук" },
      { src: m("09.jpg"), caption: "Ділова документація" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Фірмова чашка" },
      { src: m("11.webp"), caption: "Фірмова пляшка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Корпоративний одяг" },
      { src: m("13.jpg"), caption: "Футболка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.jpg"), caption: "Одяг команди" },
      { src: m("15.jpg"), caption: "Друковані матеріали" },
    ],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Бренд, який\nтримає форму.",
    paragraphs: [
      "Нове місто отримало узгоджену візуальну систему: від логотипа до брендбуку, рекламних матеріалів і корпоративних речей. Архітектурний мотив об’єднує різні носії в один образ.",
      "Брендбук дає команді основу для подальшої роботи: як зберігати пропорції знака, використовувати кольори та будувати композицію. Це допомагає розвивати комунікацію без втрати характеру бренду.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nНового міста.",
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Для нас важливо, щоб бренд передавав якість простору ще до першого знайомства з ним. Ми шукали стриманий, упевнений образ, у якому відчувається архітектура та увага до деталей.",
      "Цей візуальний напрям поєднує характер проєкту й практичність. Знак, матеріали та композиція створюють спільну мову для презентацій, реклами й щоденної комунікації».",
    ],
    author: "Команда «Нове місто»",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Город для жизни.\nПространство для идей.",
      paragraphs: [
        "Нове Місто — премиум-застройщик в Буче. В фокусе проекта — жилые апартаменты, бизнес-пространства и сообщество людей, ценящих современный городской опыт.",
        "Бренд обращается к будущим жителям, предпринимателям и инвесторам. Его образ должен сочетать эмоцию нового дома с ощущением продуманности каждого решения.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Премиальность.\nБез лишних слов.",
      paragraphs: [
        "Создать целостную идентичность и брендбук, раскрывающие архитектурный характер проекта. Знак, палитра и композиция должны поддерживать одинаковое впечатление во всех точках контакта.",
        "Система должна работать на экране, в городском пространстве и в печати: от компактной визитки до большой рекламной площади. Важны узнаваемость, чёткость и сдержанный тон.",
      ],
      deliverables: [
        { title: "Характер", description: "Выразительный знак с ощущением архитектурной структуры." },
        { title: "Последовательность", description: "Единая логика для коммуникации и фирменных носителей." },
        { title: "Масштаб", description: "Узнаваемость от небольшой детали до пространства." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Архитектура\nстановится айдентикой.",
      paragraphs: [
        "Острые углы и геометрия знака перекликаются с конструкцией здания. Такой силуэт создаёт ощущение опоры, порядка и точности — качеств, важных для девелоперского бренда.",
        "Тёмные поверхности и выразительный оранжевый акцент сочетают сдержанность с энергией. Фактуры мрамора, бетона и металла связывают айдентику с архитектурой, а шрифты Feature Mono и Inter поддерживают чёткую иерархию.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТ",
      title: "От знака\nк целостной системе.",
      rules: [
        "Логотип и знак",
        "Визуальная айдентика",
        "Брендбук",
        "Полиграфия",
        "Рекламные носители",
        "Корпоративная продукция",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Бренд, который\nдержит форму.",
      paragraphs: [
        "Нове Місто получило согласованную визуальную систему: от логотипа до брендбука, рекламных материалов и корпоративных вещей. Архитектурный мотив объединяет разные носители в один образ.",
        "Брендбук даёт команде основу для дальнейшей работы: как сохранять пропорции знака, использовать цвета и строить композицию. Это помогает развивать коммуникацию без потери характера бренда.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Чёткая форма.\nТёплый характер.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Страна", value: "Украина", accent: true, countryCode: "UA" },
        { label: "Ниша", value: "недвижимость" },
        { label: "Продукт", value: "жильё / бизнес-пространства" },
      ],
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nНового Міста.",
      badge: "Текст для согласования с клиентом",
      paragraphs: [
        "«Для нас важно, чтобы бренд передавал качество пространства ещё до первого знакомства с ним. Мы искали сдержанный, уверенный образ, в котором чувствуется архитектура и внимание к деталям.",
        "Это визуальное направление сочетает характер проекта и практичность. Знак, материалы и композиция создают общий язык для презентаций, рекламы и ежедневной коммуникации».",
      ],
      author: "Команда «Нове Місто»",
      role: "Место для имени и должности представителя",
      note: "Редакционный пример для макета, не реальный отзыв. Требует согласования с клиентом.",
    };
  }
  return block;
});

const blocksEn: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "ABOUT CLIENT",
      title: "A city to live in.\nA space for ideas.",
      paragraphs: [
        "Nove Misto is a premium developer in Bucha. The project focuses on residential apartments, business spaces, and a community of people who value a modern urban experience.",
        "The brand speaks to future residents, entrepreneurs, and investors. Its image must combine the emotion of a new home with a sense of thoughtful decision-making.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Premium feel.\nWithout excess words.",
      paragraphs: [
        "Create a cohesive identity and brand book that reveal the architectural character of the project. The mark, palette, and composition must support the same impression across all touchpoints.",
        "The system must work on screen, in urban space, and in print — from a compact business card to a large advertising surface. Recognizability, clarity, and a restrained tone are essential.",
      ],
      deliverables: [
        { title: "Character", description: "A distinctive mark with a sense of architectural structure." },
        { title: "Consistency", description: "A single logic for communication and branded touchpoints." },
        { title: "Scale", description: "Recognizability from a small detail to full space." },
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Architecture\nbecomes identity.",
      paragraphs: [
        "Sharp angles and the geometry of the mark echo the building's structure. This silhouette creates a sense of support, order, and precision — qualities essential for a development brand.",
        "Dark surfaces and a vivid orange accent combine restraint with energy. Marble, concrete, and metal textures connect the identity to architecture, while Feature Mono and Inter support a clear hierarchy.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "From the mark\nto a complete system.",
      rules: [
        "Logo and emblem",
        "Visual identity",
        "Brand book",
        "Print materials",
        "Advertising media",
        "Corporate products",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A brand that\nholds its shape.",
      paragraphs: [
        "Nove Misto received a cohesive visual system: from the logo to the brand book, advertising materials, and corporate items. The architectural motif unites different touchpoints into one image.",
        "The brand book gives the team a foundation for future work: how to preserve mark proportions, use colors, and build composition. This helps develop communication without losing brand character.",
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "Clear form.\nWarm character.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "real estate" },
        { label: "Product", value: "housing / business spaces" },
      ],
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The Nove Misto\nteam's perspective.",
      badge: "Text pending client approval",
      paragraphs: [
        "“For us, it is important that the brand conveys the quality of the space before the first encounter with it. We sought a restrained, confident image in which architecture and attention to detail are felt.",
        "This visual direction combines the character of the project with practicality. The mark, materials, and composition create a shared language for presentations, advertising, and everyday communication.”",
      ],
      author: "Nove Misto team",
      role: "Placeholder for representative name and role",
      note: "Editorial sample for the layout, not a real testimonial. Requires client approval.",
    };
  }
  return block;
});

export function getNoveMistoBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const noveMistoShared = {
  slug: "nove-misto",
  cover: m("cover.gif"),
  media: noveMistoMedia,
  tagline: "Архітектура бренду.\nХарактер простору.",
  serviceTag: "Брендинг + брендбук",
  body: `[IMG: media/nove-misto/hero.jpg]`,
};

export const noveMistoCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Нове місто",
    description:
      "Розробили логотип, візуальну ідентичність і брендбук для «Нове місто» — забудовника в Бучі. Також поліграфія, рекламні носії та корпоративна продукція.",
    tagline: "Архітектура бренду.\nХарактер простору.",
    serviceTag: "Брендинг + брендбук",
  },
  ru: {
    title: "Нове Місто",
    description:
      "Разработали логотип, визуальную идентичность и брендбук для «Нове Місто» — застройщика в Буче. Также полиграфия, рекламные носители и корпоративная продукция.",
    tagline: "Архитектура бренда.\nХарактер пространства.",
    serviceTag: "Брендинг + брендбук",
  },
  en: {
    title: "Nove Misto",
    description:
      "We developed the logo, visual identity, and brand book for Nove Misto — a premium developer in Bucha. Also print materials and corporate merch.",
    tagline: "Brand architecture.\nCharacter of space.",
    serviceTag: "Branding + brand book",
  },
};
