import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/tbiliso/${file}`;

const tbilisoMedia = [
  "media/tbiliso/cover.jpg",
  "media/tbiliso/01.jpg",
  ...Array.from({ length: 10 }, (_, i) => `media/tbiliso/${String(i + 2).padStart(2, "0")}.jpg`),
  ...Array.from({ length: 4 }, (_, i) => `media/tbiliso/${String(i + 14).padStart(2, "0")}.jpg`),
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Частинка Грузії\nв серці Києва.",
    paragraphs: [
      "Tbiliso — ресторан грузинської кухні в Києві. Його характер тримається на їжі, теплій атмосфері та гостинності, до якої хочеться повертатися.",
      "Ребрендинг мав допомогти передати ці відчуття в кожній точці контакту: у візуальному стилі, упаковці, матеріалах ресторану й цифровій комунікації.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "ресторани / HoReCa" },
      { label: "Продукт", value: "грузинська кухня" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("02.jpg"), caption: "Ключовий візуальний образ" },
      { src: m("03.jpg"), caption: "Типографіка бренду" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Оновити образ.\nЗберегти тепло.",
    paragraphs: [
      "Переосмислити візуальний образ Tbiliso, щоб виразніше показати грузинську кухню й атмосферу закладу. Оновити упаковку та супровідні матеріали, зберігши впізнаваний характер ресторану.",
      "Посилити позиціонування місця, куди приходять по їжу й досвід грузинської гостинності. Зробити бренд зрозумілим новим гостям і близьким постійним.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Смак", description: "Передати характер грузинської кухні." },
      { title: "Атмосфера", description: "Зберегти відчуття гостинності у деталях." },
      { title: "Цілісність", description: "Поєднати упаковку, соцмережі та простір." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("04.jpg"), caption: "Фірмовий пакет" },
      { src: m("05.jpg"), caption: "Рекламний постер" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Гостинність стала\nвізуальною мовою.",
    paragraphs: [
      "Команда дослідила ринок та вподобання аудиторії, а тоді побудувала цілісну систему бренду. Тепла палітра, графіка й фотографії страв допомагають передати смак та затишок ресторану.",
      "Стиль застосували в упаковці, поліграфії, SMM і фірмовому мерчі. Усі носії працюють разом і підтримують автентичний образ Tbiliso.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Смак Грузії.\nВідчуття дому.",
    footer: "TBILISO / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("06.jpg"), caption: "Колірна палітра" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("07.jpg"), caption: "Візитівки" }],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна атмосфера.\nУ кожній деталі.",
    paragraphs: [],
    rules: [
      "Брендинг",
      "Айдентика",
      "Упаковка",
      "Меню",
      "Поліграфія",
      "SMM",
      "Мерч",
      "Фотостиль",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.jpg"), caption: "Упаковка takeaway" },
      { src: m("09.jpg"), caption: "Брендована кава" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Уніформа персоналу" },
      { src: m("11.jpg"), caption: "Подарунковий сертифікат" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.jpg"), caption: "Одяг команди" },
      { src: m("15.jpg"), caption: "Промофлаєр" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("16.jpg"), caption: "Упаковка та вивіска" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("17.jpg"), caption: "Чекхолдер" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Впізнаваний стиль.\nНовий привід завітати.",
    paragraphs: [
      "Ресторан отримав оновлену айдентику, упаковку, друковані матеріали, візуальний напрям для соцмереж і фірмовий мерч. Кейс показує застосування системи на різних носіях.",
      "У вихідному описі ZOND відзначає зростання зацікавленості й кількості гостей у перший місяць після ребрендингу, а також позитивні відгуки. Точних чисел джерело не наводить.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nTbiliso.",
    paragraphs: [
      "«Ми хотіли, щоб гості відчували атмосферу Грузії ще до першого замовлення. Для нас було важливо зберегти теплий характер ресторану та зробити його помітним у всіх матеріалах.",
      "Оновлений стиль допомагає говорити з гостями однією мовою — від упаковки до соціальних мереж».",
    ],
    author: "Команда Tbiliso",
    role: "",
  },
];

const tbilisoGalleryCaptionsRu: Record<string, string> = {
  [m("02.jpg")]: "Ключевой визуальный образ",
  [m("03.jpg")]: "Типографика бренда",
  [m("04.jpg")]: "Фирменный пакет",
  [m("05.jpg")]: "Рекламный постер",
  [m("06.jpg")]: "Цветовая палитра",
  [m("07.jpg")]: "Визитки",
  [m("08.jpg")]: "Упаковка takeaway",
  [m("09.jpg")]: "Брендированный кофе",
  [m("10.jpg")]: "Униформа персонала",
  [m("11.jpg")]: "Подарочный сертификат",
  [m("14.jpg")]: "Одежда команды",
  [m("15.jpg")]: "Промофлаер",
  [m("16.jpg")]: "Упаковка и вывеска",
  [m("17.jpg")]: "Чекхолдер",
};

const tbilisoGalleryCaptionsEn: Record<string, string> = {
  [m("02.jpg")]: "Key visual",
  [m("03.jpg")]: "Brand typography",
  [m("04.jpg")]: "Branded shopping bag",
  [m("05.jpg")]: "Advertising poster",
  [m("06.jpg")]: "Color palette",
  [m("07.jpg")]: "Business cards",
  [m("08.jpg")]: "Takeaway packaging",
  [m("09.jpg")]: "Branded coffee cup",
  [m("10.jpg")]: "Staff uniform",
  [m("11.jpg")]: "Gift certificate",
  [m("14.jpg")]: "Team apparel",
  [m("15.jpg")]: "Promo flyer",
  [m("16.jpg")]: "Packaging and signage",
  [m("17.jpg")]: "Bill holder",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Частица Грузии\nв сердце Киева.",
      paragraphs: [
        "Tbiliso — ресторан грузинской кухни в Киеве. Его характер держится на еде, тёплой атмосфере и гостеприимстве, к которому хочется возвращаться.",
        "Ребрендинг должен был помочь передать эти ощущения в каждой точке контакта: в визуальном стиле, упаковке, материалах ресторана и цифровой коммуникации.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Обновить образ.\nСохранить тепло.",
      paragraphs: [
        "Переосмыслить визуальный образ Tbiliso, чтобы выразительнее показать грузинскую кухню и атмосферу заведения. Обновить упаковку и сопутствующие материалы, сохранив узнаваемый характер ресторана.",
        "Усилить позиционирование места, куда приходят за едой и опытом грузинского гостеприимства. Сделать бренд понятным новым гостям и близким постоянным.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Гостеприимство стало\nвизуальным языком.",
      paragraphs: [
        "Команда исследовала рынок и предпочтения аудитории, затем построила целостную систему бренда. Тёплая палитра, графика и фотографии блюд помогают передать вкус и уют ресторана.",
        "Стиль применили в упаковке, полиграфии, SMM и фирменном мерче. Все носители работают вместе и поддерживают аутентичный образ Tbiliso.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Узнаваемый стиль.\nНовый повод заглянуть.",
      paragraphs: [
        "Ресторан получил обновлённую айдентику, упаковку, печатные материалы, визуальное направление для соцсетей и фирменный мерч. Кейс показывает применение системы на разных носителях.",
        "В исходном описании ZOND отмечает рост интереса и числа гостей в первый месяц после ребрендинга, а также положительные отзывы. Точных цифр источник не приводит.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Одна атмосфера.\nВ каждой детали.",
      rules: [
        "Брендинг",
        "Айдентика",
        "Упаковка",
        "Меню",
        "Полиграфия",
        "SMM",
        "Мерч",
        "Фотостиль",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Вкус", description: "Передать характер грузинской кухни." },
        { title: "Атмосфера", description: "Сохранить ощущение гостеприимства в деталях." },
        { title: "Целостность", description: "Объединить упаковку, соцсети и пространство." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Вкус Грузии.\nОщущение дома.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nTbiliso.",
      paragraphs: [
        "«Мы хотели, чтобы гости чувствовали атмосферу Грузии ещё до первого заказа. Для нас было важно сохранить тёплый характер ресторана и сделать его заметным во всех материалах.",
        "Обновлённый стиль помогает говорить с гостями на одном языке — от упаковки до социальных сетей».",
      ],
      author: "Команда Tbiliso",
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
            ? { ...item, label: "Ниша", value: "рестораны / HoReCa" }
            : { ...item, label: "Продукт", value: "грузинская кухня" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: tbilisoGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "A piece of Georgia\nin the heart of Kyiv.",
      paragraphs: [
        "Tbiliso is a Georgian restaurant in Kyiv. Its character rests on food, a warm atmosphere, and hospitality guests want to return to.",
        "The rebrand needed to carry those feelings into every touchpoint: visual style, packaging, in-restaurant materials, and digital communication.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Refresh the look.\nKeep the warmth.",
      paragraphs: [
        "Rethink Tbiliso’s visual identity to express Georgian cuisine and the restaurant’s atmosphere more clearly. Update packaging and supporting materials while keeping a recognizable character.",
        "Strengthen positioning as a place for food and the experience of Georgian hospitality — clear to newcomers and familiar to regulars.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Hospitality became\nthe visual language.",
      paragraphs: [
        "The team researched the market and audience preferences, then built a cohesive brand system. A warm palette, graphics, and food photography convey taste and comfort.",
        "The style was applied across packaging, print, social media, and branded merch. Every touchpoint works together to support an authentic Tbiliso image.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A recognizable style.\nA new reason to visit.",
      paragraphs: [
        "The restaurant received updated identity, packaging, print, a social visual direction, and branded merch. The case shows the system across different touchpoints.",
        "ZOND’s project description notes growing interest and guest numbers in the first month after the rebrand, plus positive feedback. No exact figures are cited.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "One atmosphere.\nIn every detail.",
      rules: [
        "Branding",
        "Identity",
        "Packaging",
        "Menu",
        "Print",
        "SMM",
        "Merch",
        "Photo style",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Taste", description: "Convey the character of Georgian cuisine." },
        { title: "Atmosphere", description: "Keep hospitality tangible in the details." },
        { title: "Cohesion", description: "Unite packaging, social, and space." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "The taste of Georgia.\nA sense of home.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT FEEDBACK",
      heading: "The Tbiliso\nteam’s view.",
      paragraphs: [
        "“We wanted guests to feel Georgia before the first order. It was important to keep the restaurant’s warm character and make it visible across materials.",
        "The updated style helps us speak to guests in one voice — from packaging to social media.”",
      ],
      author: "Tbiliso team",
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
            ? { ...item, label: "Niche", value: "restaurants / HoReCa" }
            : { ...item, label: "Product", value: "Georgian cuisine" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: tbilisoGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getTbilisoBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const tbilisoShared = {
  slug: "tbiliso",
  cover: m("cover.jpg"),
  listCover: m("cover.mp4"),
  media: tbilisoMedia,
  body: `[IMG: media/tbiliso/01.jpg]`,
};

export const tbilisoCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Tbiliso",
    description:
      "Провели ребрендинг Tbiliso — грузинського ресторану в Києві: нова айдентика, упаковка, поліграфія, SMM та фірмовий мерч.",
    tagline: "Грузія ближче.\nГостинність відчутна.",
    serviceTag: "Ребрендинг · упаковка · дизайн",
  },
  ru: {
    title: "Tbiliso",
    description:
      "Провели ребрендинг Tbiliso — грузинского ресторана в Киеве: новая айдентика, упаковка, полиграфия, SMM и фирменный мерч.",
    tagline: "Грузия ближе.\nГостеприимство ощутимо.",
    serviceTag: "Ребрендинг · упаковка · дизайн",
  },
  en: {
    title: "Tbiliso",
    description:
      "We rebranded Tbiliso — a Georgian restaurant in Kyiv: new identity, packaging, print, SMM, and branded merch.",
    tagline: "Georgia feels closer.\nHospitality you can sense.",
    serviceTag: "Rebranding · packaging · design",
  },
};
