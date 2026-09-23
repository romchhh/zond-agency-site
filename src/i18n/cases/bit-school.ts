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
      { src: m("01.jpg"), caption: "Айдентика BIT School" },
      { src: m("02.jpg"), caption: "Фірмовий знак" },
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
      { src: m("03.webp"), caption: "Колірна система" },
      { src: m("04.webp"), caption: "Графіка бренду" },
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
    images: [{ src: m("05.jpg"), caption: "Бренд у комунікації" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.webp"), caption: "Друковані матеріали" },
      { src: m("07.webp"), caption: "Фірмові носії" },
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
      { src: m("08.jpg"), caption: "Мерч і аксесуари" },
      { src: m("09.webp"), caption: "Застосування графіки" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Цифрові матеріали" },
      { src: m("11.webp"), caption: "Візуальні носії" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.jpg"), caption: "Середовище бренду" },
      { src: m("13.jpg"), caption: "Комунікація школи" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Фірмовий стиль у деталях" },
      { src: m("15.jpg"), caption: "Айдентика в дії" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("16.jpg"), caption: "BIT School — цілісний образ" }],
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
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Нам був потрібен бренд, який говорить і з дітьми, і з батьками. Щоб технології виглядали цікаво, а навчання — близьким і зрозумілим.",
      "У цьому рішенні нам близькі яскравість, дружність і чітка система. Айдентика добре працює в різних форматах і допомагає школі звучати послідовно».",
    ],
    author: "Команда BIT School",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk;
const blocksEn: CaseVisualBlock[] = blocksUk;

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
