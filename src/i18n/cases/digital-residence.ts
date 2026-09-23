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
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Ми шукали візуальну мову, яка передасть технологічність резиденції та збереже відчуття преміального простору. Важливо було поєднати архітектуру, інновації та спосіб життя в одному образі.",
      "Цей напрям допомагає розповідати про проєкт послідовно. Знак, матеріали й об’ємна графіка дають спільний характер презентаціям, рекламі та корпоративним носіям».",
    ],
    author: "Команда Digital Residence",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk;
const blocksEn: CaseVisualBlock[] = blocksUk;

export function getDigitalResidenceBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const digitalResidenceShared = {
  slug: "digital-residence",
  cover: m("cover.gif"),
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
