import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/altep/${file}`;

const altepMedia = Array.from({ length: 18 }, (_, index) => {
  const n = index + 1;
  return `media/altep/${String(n).padStart(2, "0")}.webp`;
});

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Обладнання,\nякому довіряють.",
    paragraphs: [
      "«Альтеп-Центр» виробляє та реалізує опалювальне обладнання з 2008 року. Компанія працює з партнерами та покупцями, для яких важливі якість продукції і виконання зобов’язань.",
      "Оновлений бренд мав зберегти відчуття надійності виробника й показати сучасний масштаб його роботи у цифрових і фізичних каналах.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "опалювальне обладнання" },
      { label: "Продукт", value: "котли / системи опалення" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("02.webp"), caption: "3D-логотип" },
      { src: m("03.webp"), caption: "Типографіка бренду" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Оновити впізнаваність.\nЗберегти довіру.",
    paragraphs: [
      "Створити новий логотип та візуальну мову ALTEP, яка передає професійність і сучасний підхід компанії до опалювального обладнання.",
      "Поширити систему на сторінки в соцмережах, сайт, презентації, поліграфічні матеріали та фірмовий мерч, щоб бренд виглядав цілісно на кожному носії.",
    ],
  },
  {
    type: "deliverables",
    items: [
      {
        title: "Надійність",
        description: "Підкреслити якість і відповідальність виробника.",
      },
      {
        title: "Впізнаваність",
        description: "Створити єдиний образ в усіх каналах.",
      },
      {
        title: "Гнучкість",
        description: "Адаптувати стиль для сайту, друку й мерчу.",
      },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("04.webp"), caption: "Каталог продукції" },
      { src: m("05.webp"), caption: "Дизайн сайту" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Один характер\nу кожній деталі.",
    paragraphs: [
      "Ми розробили емблему, айдентику й дизайн систему. Вона задає правила для логотипу, типографіки, графіки й застосування на цифрових та друкованих носіях.",
      "Окремі рішення підготовлено для дизайну сайту, презентацій проєктів, поліграфії та мерчу. Візуальні приклади показують, як фірмовий стиль зберігає єдність у різних форматах.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Тепло в основі.\nСистема в деталях.",
    footer: "ALTEP / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("06.webp"), caption: "Колірна палітра" }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("07.webp"), caption: "Рекламна комунікація" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.webp"), caption: "Зовнішня реклама" },
      { src: m("09.webp"), caption: "Сітілайт" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Один бренд.\nРізні формати.",
    paragraphs: [],
    rules: [
      "Емблема",
      "Дизайн система",
      "Айдентика",
      "3D-модель",
      "Сайт",
      "Презентації",
      "Поліграфія",
      "Фірмовий мерч",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Брендування смартфона" },
      { src: m("11.webp"), caption: "Фірмова пакувальна стрічка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.webp"), caption: "Розворот каталогу" },
      { src: m("13.webp"), caption: "Фасадна вивіска" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Брендування обладнання" },
      { src: m("15.webp"), caption: "Оформлення соцмереж" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("16.webp"), caption: "Презентація на планшеті" },
      { src: m("17.webp"), caption: "Брендована кепка" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("18.webp"), caption: "Презентація на ноутбуці" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Оновлений бренд.\nГотовий до застосування.",
    paragraphs: [
      "ALTEP отримав нову емблему й айдентику, дизайн систему, матеріали для сайту та презентацій, поліграфію і фірмову продукцію. У кейсі видно роботу стилю на різних носіях.",
      "Це основа для послідовного представлення компанії партнерам і покупцям. Кількісних показників впливу ребрендингу вихідний кейс не наводить.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nALTEP.",
    paragraphs: [
      "«Ми хотіли оновити бренд так, щоб він відповідав сучасній компанії й залишався впізнаваним для наших партнерів. Для нас важливо було поєднати надійність виробника та цілісний вигляд матеріалів.",
      "Нова візуальна система дає зрозумілі правила для сайту, презентацій, поліграфії та мерчу. Так ми можемо послідовно представляти ALTEP в різних каналах».",
    ],
    author: "Команда ALTEP",
    role: "",
  },
];

const altepGalleryCaptionsRu: Record<string, string> = {
  [m("02.webp")]: "3D-логотип",
  [m("03.webp")]: "Типографика бренда",
  [m("04.webp")]: "Каталог продукции",
  [m("05.webp")]: "Дизайн сайта",
  [m("06.webp")]: "Цветовая палитра",
  [m("07.webp")]: "Рекламная коммуникация",
  [m("08.webp")]: "Наружная реклама",
  [m("09.webp")]: "Ситилайт",
  [m("10.webp")]: "Брендирование смартфона",
  [m("11.webp")]: "Фирменная упаковочная лента",
  [m("12.webp")]: "Разворот каталога",
  [m("13.webp")]: "Фасадная вывеска",
  [m("14.webp")]: "Брендирование оборудования",
  [m("15.webp")]: "Оформление соцсетей",
  [m("16.webp")]: "Презентация на планшете",
  [m("17.webp")]: "Брендированная кепка",
  [m("18.webp")]: "Презентация на ноутбуке",
};

const altepGalleryCaptionsEn: Record<string, string> = {
  [m("02.webp")]: "3D logo",
  [m("03.webp")]: "Brand typography",
  [m("04.webp")]: "Product catalog",
  [m("05.webp")]: "Website design",
  [m("06.webp")]: "Color palette",
  [m("07.webp")]: "Advertising communication",
  [m("08.webp")]: "Outdoor advertising",
  [m("09.webp")]: "City light",
  [m("10.webp")]: "Phone branding",
  [m("11.webp")]: "Branded packing tape",
  [m("12.webp")]: "Catalog spread",
  [m("13.webp")]: "Facade signage",
  [m("14.webp")]: "Equipment branding",
  [m("15.webp")]: "Social media design",
  [m("16.webp")]: "Tablet presentation",
  [m("17.webp")]: "Branded cap",
  [m("18.webp")]: "Laptop presentation",
};

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Оборудование,\nкоторому доверяют.",
      paragraphs: [
        "«Альтеп-Центр» производит и реализует отопительное оборудование с 2008 года. Компания работает с партнёрами и покупателями, для которых важны качество продукции и выполнение обязательств.",
        "Обновлённый бренд должен был сохранить ощущение надёжности производителя и показать современный масштаб его работы в цифровых и физических каналах.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Обновить узнаваемость.\nСохранить доверие.",
      paragraphs: [
        "Создать новый логотип и визуальный язык ALTEP, который передаёт профессионализм и современный подход компании к отопительному оборудованию.",
        "Распространить систему на страницы в соцсетях, сайт, презентации, полиграфические материалы и фирменный мерч, чтобы бренд выглядел целостно на каждом носителе.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Один характер\nв каждой детали.",
      paragraphs: [
        "Мы разработали эмблему, айдентику и дизайн-систему. Она задаёт правила для логотипа, типографики, графики и применения на цифровых и печатных носителях.",
        "Отдельные решения подготовлены для дизайна сайта, презентаций проектов, полиграфии и мерча. Визуальные примеры показывают, как фирменный стиль сохраняет единство в разных форматах.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Обновлённый бренд.\nГотов к применению.",
      paragraphs: [
        "ALTEP получил новую эмблему и айдентику, дизайн-систему, материалы для сайта и презентаций, полиграфию и фирменную продукцию. В кейсе видна работа стиля на разных носителях.",
        "Это основа для последовательного представления компании партнёрам и покупателям. Количественных показателей влияния ребрендинга исходный кейс не приводит.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Один бренд.\nРазные форматы.",
      rules: [
        "Эмблема",
        "Дизайн-система",
        "Айдентика",
        "3D-модель",
        "Сайт",
        "Презентации",
        "Полиграфия",
        "Фирменный мерч",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        {
          title: "Надёжность",
          description: "Подчеркнуть качество и ответственность производителя.",
        },
        {
          title: "Узнаваемость",
          description: "Создать единый образ во всех каналах.",
        },
        {
          title: "Гибкость",
          description: "Адаптировать стиль для сайта, печати и мерча.",
        },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
      text: "Тепло в основе.\nСистема в деталях.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды\nALTEP.",
      paragraphs: [
        "«Мы хотели обновить бренд так, чтобы он соответствовал современной компании и оставался узнаваемым для наших партнёров. Для нас было важно сочетать надёжность производителя и целостный вид материалов.",
        "Новая визуальная система даёт понятные правила для сайта, презентаций, полиграфии и мерча. Так мы можем последовательно представлять ALTEP в разных каналах».",
      ],
      author: "Команда ALTEP",
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
            ? { ...item, label: "Ниша", value: "отопительное оборудование" }
            : { ...item, label: "Продукт", value: "котлы / системы отопления" },
      ),
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: altepGalleryCaptionsRu[img.src] ?? img.caption,
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
      title: "Equipment\nyou can trust.",
      paragraphs: [
        "Altep Center has manufactured and supplied heating equipment since 2008. The company works with partners and customers who value product quality and reliable commitments.",
        "The refreshed brand had to keep the feel of a dependable manufacturer and show the modern scale of its work across digital and physical channels.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Refresh recognition.\nKeep trust.",
      paragraphs: [
        "Create a new logo and visual language for ALTEP that conveys professionalism and the company’s modern approach to heating equipment.",
        "Extend the system to social pages, the website, presentations, print materials, and branded merch so the brand looks cohesive on every touchpoint.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "One character\nin every detail.",
      paragraphs: [
        "We developed an emblem, identity, and design system. It sets rules for the logo, typography, graphics, and use on digital and print touchpoints.",
        "Separate solutions were prepared for website design, project presentations, print, and merch. Visual examples show how the brand style stays unified across formats.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A refreshed brand.\nReady to apply.",
      paragraphs: [
        "ALTEP received a new emblem and identity, a design system, website and presentation materials, print, and branded products. The case shows the style across touchpoints.",
        "This is a foundation for presenting the company consistently to partners and customers. The source case does not cite quantitative rebranding impact metrics.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "One brand.\nMany formats.",
      rules: [
        "Emblem",
        "Design system",
        "Identity",
        "3D model",
        "Website",
        "Presentations",
        "Print",
        "Branded merch",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        {
          title: "Reliability",
          description: "Highlight the manufacturer’s quality and accountability.",
        },
        {
          title: "Recognition",
          description: "Build a single image across all channels.",
        },
        {
          title: "Flexibility",
          description: "Adapt the style for web, print, and merch.",
        },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "VISUAL PRINCIPLE",
      text: "Warmth at the core.\nSystem in the details.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The ALTEP\nteam’s view.",
      paragraphs: [
        "“We wanted to refresh the brand so it matched a modern company and stayed recognizable to our partners. It was important for us to combine the manufacturer’s reliability with a cohesive look across materials.",
        "The new visual system gives clear rules for the website, presentations, print, and merch. That lets us represent ALTEP consistently across channels.”",
      ],
      author: "ALTEP team",
      role: "",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "heating equipment" },
        { label: "Product", value: "boilers / heating systems" },
      ],
    };
  }
  if (block.type === "gallery") {
    return {
      ...block,
      images: block.images.map((img) => ({
        ...img,
        caption: altepGalleryCaptionsEn[img.src] ?? img.caption,
      })),
    };
  }
  return block;
});

export function getAltepBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const altepShared = {
  slug: "altep",
  cover: m("01.webp"),
  media: altepMedia,
  body: `[IMG: media/altep/01.webp]`,
};

export const altepCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "ALTEP",
    description:
      "Оновили бренд і логотип для «Альтеп-Центру» — виробника опалювального обладнання. Також дизайн сайту, презентації та поліграфія.",
    tagline: "Нова енергія\nвідомого виробника.",
    serviceTag: "Ребрендинг · айдентика · дизайн",
  },
  ru: {
    title: "ALTEP",
    description:
      "Обновили бренд и логотип для «Альтеп-Центра» — производителя отопительного оборудования. Также дизайн сайта, презентации и полиграфия.",
    tagline: "Новая энергия\nизвестного производителя.",
    serviceTag: "Ребрендинг · айдентика · дизайн",
  },
  en: {
    title: "ALTEP",
    description:
      "We updated the brand and logo for Altep Center — a heating equipment manufacturer. Also website design, presentations, and print materials.",
    tagline: "New energy\nfor a known manufacturer.",
    serviceTag: "Rebranding · identity · design",
  },
};
