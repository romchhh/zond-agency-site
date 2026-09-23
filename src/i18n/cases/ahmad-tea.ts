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
      { src: m("01.jpg"), caption: "Рекламна концепція на міському носії" },
      { src: m("02.jpg"), caption: "Завдання й результати стратегії" },
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
    images: [{ src: m("03.jpg"), caption: "Візуальний напрям кампанії" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("04.jpg"), caption: "Чай із фруктовими нотами" },
      { src: m("05.jpg"), caption: "Продукт у природному середовищі" },
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
    images: [{ src: m("06.jpg"), caption: "Комунікація для цифрових каналів" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("07.jpg"), caption: "Фотоісторія для бренду" },
      { src: m("08.jpg"), caption: "Чаювання вдома" },
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
    images: [{ src: m("09.jpg"), caption: "Комунікаційні повідомлення" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Міський рекламний носій" },
      { src: m("11.webp"), caption: "Фотоісторія на фірмовому матеріалі" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Сімейна історія у міському просторі" },
      { src: m("13.jpg"), caption: "Серія рекламних матеріалів" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("14.jpg"), caption: "Сітілайт із героями кампанії" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("15.jpg"), caption: "Креативна концепція на носіях" },
      { src: m("16.jpg"), caption: "Сюжет із друзями" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("17.jpg"), caption: "Зовнішня реклама AHMAD TEA" }],
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
  cover: m("cover.gif"),
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
