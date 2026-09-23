import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/ahmad-tea/${file}`;

const ahmadTeaMedia = [
  "media/ahmad-tea/hero.gif",
  "media/ahmad-tea/ahmad-2.webp",
  "media/ahmad-tea/ahmad-3.webp",
  "media/ahmad-tea/ahmad-4.webp",
  "media/ahmad-tea/ahmad-5.webp",
  "media/ahmad-tea/ahmad-6.webp",
  "media/ahmad-tea/ahmad-7.webp",
  "media/ahmad-tea/ahmad-8.webp",
  "media/ahmad-tea/ahmad-9.webp",
  "media/ahmad-tea/ahmad-10.webp",
  "media/ahmad-tea/ahmad-11.webp",
  "media/ahmad-tea/ahmad-12.webp",
  "media/ahmad-tea/ahmad-13.webp",
  "media/ahmad-tea/ahmad-14.webp",
  "media/ahmad-tea/ahmad-15.webp",
  "media/ahmad-tea/ahmad-16.webp",
  "media/ahmad-tea/ahmad-17.webp",
  "media/ahmad-tea/ahmad-18.webp",
  "media/ahmad-tea/ahmad-19.webp",
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
      { src: m("ahmad-2.webp"), caption: "Рекламна концепція на міському носії" },
      { src: m("ahmad-3.webp"), caption: "Завдання й результати стратегії" },
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
    layout: "pair",
    images: [
      { src: m("ahmad-4.webp"), caption: "Візуальний напрям кампанії" },
      { src: m("ahmad-5.webp"), caption: "Чай із фруктовими нотами" },
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
    images: [
      { src: m("ahmad-6.webp"), caption: "Продукт у природному середовищі" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("ahmad-7.webp"), caption: "Комунікація для цифрових каналів" },
      { src: m("ahmad-8.webp"), caption: "Фотоісторія для бренду" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна стратегія.\nРізні точки контакту.",
    paragraphs: [
    ],
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
    layout: "pair",
    images: [
      { src: m("ahmad-9.webp"), caption: "Чаювання вдома" },
      { src: m("ahmad-10.webp"), caption: "Комунікаційні повідомлення" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("ahmad-11.webp"), caption: "Сімейна історія у міському просторі" },
      { src: m("ahmad-12.webp"), caption: "Серія рекламних матеріалів" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("ahmad-13.webp"), caption: "Сітілайт із героями кампанії" },
      { src: m("ahmad-14.webp"), caption: "Креативна концепція на носіях" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("ahmad-15.webp"), caption: "Сюжет із друзями" },
      { src: m("ahmad-16.webp"), caption: "Зовнішня реклама AHMAD TEA" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("ahmad-17.webp"), caption: "Цифровий сюжет для нової аудиторії" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("ahmad-18.webp"), caption: "Міський рекламний носій" },
      { src: m("ahmad-19.webp"), caption: "Фотоісторія на фірмовому матеріалі" },
    ],
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
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Ми прагнули зберегти впізнаваний характер AHMAD TEA й водночас знайти способи говорити з новими поколіннями. Для нас було важливо почати з розуміння аудиторії та її щоденних звичок.",
      "Стратегічний напрям дає спільну основу для повідомлень, візуальних ідей та майбутніх кампаній. Він допомагає бренду звучати послідовно в різних каналах».",
    ],
    author: "Команда AHMAD TEA",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk;
const blocksEn: CaseVisualBlock[] = blocksUk;

export function getAhmadTeaBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const ahmadTeaShared = {
  slug: "ahmad-tea",
  cover: m("01_cover_Ахмад_гіф_1_1.gif"),
  media: ahmadTeaMedia,
  body: `[IMG: media/ahmad-tea/hero.gif]`,
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
