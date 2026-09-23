import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/kyiv-tourism-department/${file}`;

const kyivTourismMedia = [
  "media/kyiv-tourism-department/hero.jpg",
  "media/kyiv-tourism-department/01.webp",
  "media/kyiv-tourism-department/02.jpg",
  "media/kyiv-tourism-department/03.webp",
  "media/kyiv-tourism-department/04.webp",
  "media/kyiv-tourism-department/05.jpg",
  "media/kyiv-tourism-department/06.webp",
  "media/kyiv-tourism-department/07.webp",
  "media/kyiv-tourism-department/08.jpg",
  "media/kyiv-tourism-department/09.webp",
  "media/kyiv-tourism-department/10.webp",
  "media/kyiv-tourism-department/11.jpg",
  "media/kyiv-tourism-department/12.jpg",
  "media/kyiv-tourism-department/13.webp",
  "media/kyiv-tourism-department/14.webp",
  "media/kyiv-tourism-department/15.webp",
  "media/kyiv-tourism-department/16.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Київ об’єднує.\nКиїв надихає.",
    paragraphs: [
      "Управління туризму КМДА працює над туристичним образом столиці та міськими комунікаціями. Для цього проєкту важливо було звернутися насамперед до людей, які живуть у Києві.",
      "Кампанія запрошує побачити місто через особисті історії та відчуття. Знайомі місця, щоденні маршрути й теплі спогади стають приводом відчути себе частиною спільноти.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "туризм / місто" },
      { label: "Продукт", value: "соціальна кампанія" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.webp"), caption: "Листівки з малюнками Києва" },
      { src: m("02.jpg"), caption: "Шрифти кампанії" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Говорити з містом.\nМовою людей.",
    paragraphs: [
      "Розробити соціальну кампанію, яка створює емоційний зв’язок із Києвом. Повідомлення мало бути зрозумілим із першого погляду й однаково близьким людям із різним досвідом.",
      "Потрібна була гнучка візуальна система для вулиць та екранів. Великі рекламні площини, листівки, сайт і промоматеріали мали підтримувати одну ідею, зберігаючи впізнаваний характер.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Емоція", description: "Показати місто близьким через щирі людські історії." },
      { title: "Єдність", description: "Об’єднати різні повідомлення спільною ідеєю." },
      { title: "Гнучкість", description: "Адаптувати концепцію до вулиць, екранів і друку." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Місто у деталях" },
      { src: m("04.webp"), caption: "Сітілайт у міському просторі" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Велике місто.\nЩирий погляд.",
    paragraphs: [
      "В основі кампанії — ідея «Київ — місто кожного» та дитячі малюнки з київських навчальних закладів. Їхня безпосередність додає комунікації людяності й пов’язує її з громадою.",
      "Ми поєднали малюнки з виразними заголовками та чіткою композицією. Кожен носій залишає простір для власної історії, але повторює спільний принцип: місто відкрите для кожного.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Київ —\nмісто кожного.",
    footer: "КИЇВ / СОЦІАЛЬНА КАМПАНІЯ",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.jpg"), caption: "Кампанія на білборді" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.webp"), caption: "Комунікація в метро" },
      { src: m("07.webp"), caption: "Друковані матеріали" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Від повідомлення\nдо міського простору.",
    paragraphs: [],
    rules: [
      "Візуальна концепція",
      "Листівки",
      "Білборди",
      "Банери та сітібокси",
      "Дизайн сайту",
      "Мерч і промоматеріали",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Вуличні банери" },
      { src: m("09.webp"), caption: "Листівка кампанії" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Малюнки, що об’єднують" },
      { src: m("11.jpg"), caption: "Міська реклама" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Київ із характером" },
      { src: m("13.webp"), caption: "Вертикальний рекламний носій" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Київ очима дітей" },
      { src: m("15.webp"), caption: "Вуличний сітілайт" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("16.jpg"), caption: "Кампанія в міському просторі" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Одна ідея.\nБагато точок зустрічі.",
    paragraphs: [
      "Створено візуальну концепцію, макети міської реклами, листівки, дизайн сайту та промоматеріали. Різні формати складаються в послідовну систему комунікації.",
      "Кампанія показує Київ через людей і їхній погляд на місто. Спільна графічна мова допомагає переносити цю ідею з білборда на екран і з рекламного повідомлення на річ, яку можна взяти із собою.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Місто починається\nз людей.",
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Нам важливо, щоб міська комунікація була близькою та зрозумілою. Щоб у ній мешканці бачили не лише знайомі вулиці, а й власне місце в житті Києва.",
      "Цей напрям поєднує щирість малюнків і ясність повідомлення. Він допомагає говорити про місто тепло, відкрито й послідовно в різних форматах».",
    ],
    author: "Команда проєкту",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Киев объединяет.\nКиев вдохновляет.",
      paragraphs: [
        "Управление туризма КГГА работает над туристическим образом столицы и городскими коммуникациями. Для этого проекта важно было обратиться прежде всего к людям, которые живут в Киеве.",
        "Кампания предлагает увидеть город через личные истории и чувства. Знакомые места, ежедневные маршруты и тёплые воспоминания становятся поводом почувствовать себя частью сообщества.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Говорить с городом.\nЯзыком людей.",
      paragraphs: [
        "Разработать социальную кампанию, которая создаёт эмоциональную связь с Киевом. Сообщение должно было быть понятным с первого взгляда и одинаково близким людям с разным опытом.",
        "Нужна была гибкая визуальная система для улиц и экранов. Большие рекламные площади, листовки, сайт и промоматериалы должны были поддерживать одну идею, сохраняя узнаваемый характер.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Большой город.\nИскренний взгляд.",
      paragraphs: [
        "В основе кампании — идея «Киев — город каждого» и детские рисунки из киевских учебных заведений. Их непосредственность добавляет коммуникации человечности и связывает её с сообществом.",
        "Мы сочетали рисунки с выразительными заголовками и чёткой композицией. Каждый носитель оставляет пространство для собственной истории, но повторяет общий принцип: город открыт для каждого.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Одна идея.\nМного точек встречи.",
      paragraphs: [
        "Создана визуальная концепция, макеты городской рекламы, листовки, дизайн сайта и промоматериалы. Разные форматы складываются в последовательную систему коммуникации.",
        "Кампания показывает Киев через людей и их взгляд на город. Общий графический язык помогает переносить эту идею с билборда на экран и с рекламного сообщения на вещь, которую можно взять с собой.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "От сообщения\nк городскому пространству.",
      rules: [
        "Визуальная концепция",
        "Листовки",
        "Билборды",
        "Баннеры и ситибоксы",
        "Дизайн сайта",
        "Мерч и промоматериалы",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Эмоция", description: "Показать город близким через искренние человеческие истории." },
        { title: "Единство", description: "Объединить разные сообщения общей идеей." },
        { title: "Гибкость", description: "Адаптировать концепцию к улицам, экранам и печати." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Киев —\nгород каждого.",
      footer: "КИЕВ / СОЦИАЛЬНАЯ КАМПАНИЯ",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Страна", value: "Украина" }
          : item.label === "Ніша"
            ? { ...item, label: "Ниша", value: "туризм / город" }
            : item.label === "Продукт"
              ? { ...item, label: "Продукт", value: "социальная кампания" }
              : item,
      ),
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Город начинается\nс людей.",
      badge: "Текст для согласования с клиентом",
      paragraphs: [
        "«Нам важно, чтобы городская коммуникация была близкой и понятной. Чтобы в ней жители видели не только знакомые улицы, но и собственное место в жизни Киева.",
        "Это направление сочетает искренность рисунков и ясность сообщения. Оно помогает говорить о городе тепло, открыто и последовательно в разных форматах».",
      ],
      author: "Команда проекта",
      role: "Место для имени и должности представителя",
      note: "Редакционный пример для макета, не реальный отзыв. Требует согласования клиентом.",
    };
  }
  return block;
});

const blocksEn: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "ABOUT THE CLIENT",
      title: "Kyiv unites.\nKyiv inspires.",
      paragraphs: [
        "The Kyiv City Tourism Department works on the capital's tourism image and urban communications. For this project, it was important to speak first to the people who live in Kyiv.",
        "The campaign invites viewers to see the city through personal stories and feelings. Familiar places, daily routes, and warm memories become a reason to feel part of the community.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "THE CHALLENGE",
      title: "Speak to the city.\nIn people's language.",
      paragraphs: [
        "Develop a social campaign that creates an emotional connection with Kyiv. The message had to be clear at first glance and equally close to people with different experiences.",
        "A flexible visual system was needed for streets and screens. Large advertising surfaces, leaflets, the website, and promotional materials had to support one idea while keeping a recognizable character.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "THE SOLUTION",
      title: "A big city.\nAn honest view.",
      paragraphs: [
        "At the heart of the campaign is the idea “Kyiv is everyone's city” and children's drawings from Kyiv schools. Their directness adds humanity to the communication and connects it with the community.",
        "We combined the drawings with expressive headlines and clear composition. Each format leaves room for a personal story but repeats the shared principle: the city is open to everyone.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "THE RESULT",
      title: "One idea.\nMany meeting points.",
      paragraphs: [
        "We created a visual concept, urban advertising layouts, leaflets, website design, and promotional materials. Different formats form a consistent communication system.",
        "The campaign shows Kyiv through people and their view of the city. A shared graphic language helps carry this idea from a billboard to a screen and from an ad message to something you can take with you.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "From message\nto urban space.",
      rules: [
        "Visual concept",
        "Leaflets",
        "Billboards",
        "Banners and citylights",
        "Website design",
        "Merch and promotional materials",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Emotion", description: "Show the city as close through sincere human stories." },
        { title: "Unity", description: "Unite different messages around one shared idea." },
        { title: "Flexibility", description: "Adapt the concept to streets, screens, and print." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "Kyiv is\neveryone's city.",
      footer: "KYIV / SOCIAL CAMPAIGN",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Country", value: "Ukraine" }
          : item.label === "Ніша"
            ? { ...item, label: "Niche", value: "tourism / city" }
            : item.label === "Продукт"
              ? { ...item, label: "Product", value: "social campaign" }
              : item,
      ),
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The city starts\nwith people.",
      badge: "Text pending client approval",
      paragraphs: [
        "“For us, it is important that urban communication feels close and understandable. That residents see not only familiar streets but also their own place in Kyiv life.",
        "This direction combines the sincerity of the drawings with the clarity of the message. It helps speak about the city warmly, openly, and consistently across different formats.”",
      ],
      author: "Project team",
      role: "Placeholder for representative name and role",
      note: "Editorial sample for the layout, not a real testimonial. Requires client approval.",
    };
  }
  return block;
});

export function getKyivTourismBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const kyivTourismShared = {
  slug: "kyiv-tourism-department",
  cover: m("cover.jpg"),
  media: kyivTourismMedia,
  tagline: "Місто, у якому\nє місце тобі.",
  serviceTag: "Соціальна кампанія",
  body: `[IMG: media/kyiv-tourism-department/hero.jpg]`,
};

export const kyivTourismCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Київ — місто кожного",
    description:
      "Соціальна кампанія для Управління туризму КМДА: візуальна концепція, міська реклама, digital та промоматеріали.",
    tagline: "Місто, у якому\nє місце тобі.",
    serviceTag: "Соціальна кампанія",
  },
  ru: {
    title: "Киев — город каждого",
    description:
      "Социальная кампания для Управления туризма КГГА: визуальная концепция, городская реклама, digital и промоматериалы.",
    tagline: "Город, в котором\nесть место тебе.",
    serviceTag: "Социальная кампания",
  },
  en: {
    title: "Kyiv — everyone's city",
    description:
      "Social campaign for the Kyiv City Tourism Department: visual concept, urban advertising, digital, and promotional materials.",
    tagline: "A city where\nthere is room for you.",
    serviceTag: "Social campaign",
  },
};
