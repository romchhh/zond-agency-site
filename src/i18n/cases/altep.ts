import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/altep/${file}`;

const cap = (n: number) => `ALTEP — айдентика та застосування ${n}`;

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
      { src: m("02.webp"), caption: cap(2) },
      { src: m("03.webp"), caption: cap(3) },
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
      { src: m("04.webp"), caption: cap(4) },
      { src: m("05.webp"), caption: cap(5) },
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
    images: [{ src: m("06.webp"), caption: cap(6) }],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("07.webp"), caption: cap(7) }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.webp"), caption: cap(8) },
      { src: m("09.webp"), caption: cap(9) },
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
      { src: m("10.webp"), caption: cap(10) },
      { src: m("11.webp"), caption: cap(11) },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.webp"), caption: cap(12) },
      { src: m("13.webp"), caption: cap(13) },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: cap(14) },
      { src: m("15.webp"), caption: cap(15) },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("16.webp"), caption: cap(16) },
      { src: m("17.webp"), caption: cap(17) },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("18.webp"), caption: cap(18) }],
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
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Ми хотіли оновити бренд так, щоб він відповідав сучасній компанії й залишався впізнаваним для наших партнерів. Для нас важливо було поєднати надійність виробника та цілісний вигляд матеріалів.",
      "Нова візуальна система дає зрозумілі правила для сайту, презентацій, поліграфії та мерчу. Так ми можемо послідовно представляти ALTEP в різних каналах».",
    ],
    author: "Команда ALTEP",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk;
const blocksEn: CaseVisualBlock[] = blocksUk;

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
