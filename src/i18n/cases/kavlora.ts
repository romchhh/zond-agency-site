import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/kavlora/${file}`;

const kavloraMedia = [
  "media/kavlora/hero.gif",
  "media/kavlora/01.webp",
  "media/kavlora/02.webp",
  "media/kavlora/03.webp",
  "media/kavlora/04.webp",
  "media/kavlora/05.webp",
  "media/kavlora/06.webp",
  "media/kavlora/07.webp",
  "media/kavlora/08.webp",
  "media/kavlora/09.webp",
  "media/kavlora/10.webp",
  "media/kavlora/11.webp",
  "media/kavlora/12.webp",
  "media/kavlora/13.webp",
  "media/kavlora/14.webp",
  "media/kavlora/15.webp",
  "media/kavlora/16.webp",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Матеріал, якому\nдовіряють.",
    paragraphs: [
      "KAVLORA — бренд виробництва дерев’яних виробів. Для такого бізнесу важливі якість матеріалу, точність обробки й довіра до виробника: ці властивості повинні відчуватися вже під час першого знайомства з компанією.",
      "У середньому сегменті візуальна система допомагає виразно представити майстерність команди. Вона об’єднує продукт і комунікацію в зрозумілий, послідовний образ.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "деревообробка" },
      { label: "Продукт", value: "дерев’яні вироби" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.webp"), caption: "Знак на фасаді виробництва" },
      { src: m("02.webp"), caption: "Шрифти KAVLORA" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Показати якість.\nЗнайти власний характер.",
    paragraphs: [
      "Дослідити конкурентне середовище й визначити, як KAVLORA може виокремитися серед деревообробних підприємств. На цій основі створити логотип, палітру та шрифтову систему для сучасного виробника.",
      "Бренд мав однаково добре працювати на візитівці, бланку, вивісці, веббанері та корпоративному одязі. Потрібна була зрозуміла графічна мова, яку легко застосовувати у щоденній роботі.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Майстерність", description: "Показати якість матеріалу й точність роботи." },
      { title: "Єдність", description: "Зберегти спільний характер у всіх матеріалах." },
      { title: "Адаптивність", description: "Застосувати айдентику від візитівки до вивіски." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.webp"), caption: "Графічний знак та фактура дерева" },
      { src: m("04.webp"), caption: "Корпоративна каска" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Від фактури дерева\nдо чіткої форми.",
    paragraphs: [
      "Лаконічний знак спирається на асоціації зі структурою дерева та точністю його обробки. Вивірена геометрія допомагає зберігати силует упізнаваним у різних масштабах.",
      "Природна гама й фактурні акценти підтримують зв’язок із матеріалом, а стримана типографіка створює відчуття сучасного виробництва. Ці принципи об’єднали рекламні та корпоративні носії.",
    ],
  },
  {
    type: "manifesto",
    label: "ВІЗУАЛЬНИЙ ПРИНЦИП",
    text: "Природа матеріалу.\nТочність форми.",
    footer: "KAVLORA / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [
      { src: m("05.webp"), caption: "Фірмовий одяг" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.webp"), caption: "Логотип та графічний елемент" },
      { src: m("07.webp"), caption: "Сумка KAVLORA" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна система.\nБагато носіїв.",
    paragraphs: [
    ],
    rules: [
      "Дослідження ринку",
      "Логотип",
      "Візуальна айдентика",
      "Поліграфія",
      "Рекламні носії",
      "Корпоративна продукція",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.webp"), caption: "Брендована кепка" },
      { src: m("09.webp"), caption: "Колірна система та фактури" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.webp"), caption: "Візитівки" },
      { src: m("11.webp"), caption: "Корпоративні футболки" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.webp"), caption: "Мобільна реклама" },
      { src: m("13.webp"), caption: "Фірмовий одяг — застосування графіки" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.webp"), caption: "Вебматеріали KAVLORA" },
      { src: m("15.webp"), caption: "Цифрова реклама" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("16.webp"), caption: "Фірмовий бланк" },
    ],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Єдиний образ.\nУ кожній деталі.",
    paragraphs: [
      "Для KAVLORA розроблено логотип, візуальну айдентику, поліграфію, рекламні носії, сувенірну та корпоративну продукцію. Система показує характер виробника у фізичних і цифрових точках контакту.",
      "Завдяки спільним графічним правилам бренд може послідовно представляти себе від документа до вивіски чи робочого одягу. Джерело кейса не наводить кількісних бізнес-показників після впровадження.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди\nKAVLORA.",
    badge: "Текст для погодження з клієнтом",
    paragraphs: [
      "«Нам було важливо показати в бренді те, що ми цінуємо у виробництві: матеріал, точність і відповідальність за результат. Візуальна система мала виглядати сучасно та залишатися практичною.",
      "Запропонований напрям допомагає нам послідовно оформлювати комунікацію — від документації та реклами до корпоративного одягу».",
    ],
    author: "Команда KAVLORA",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk;
const blocksEn: CaseVisualBlock[] = blocksUk;

export function getKavloraBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const kavloraShared = {
  slug: "kavlora",
  cover: m("cover.gif"),
  media: kavloraMedia,
  body: `[IMG: media/kavlora/hero.gif]`,
};

export const kavloraCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "KAVLORA",
    description:
      "Розробили стратегію та айдентику для KAVLORA — бренду виробника дерев’яних виробів. Логотип, фірмовий стиль, поліграфія та рекламні носії.",
    tagline: "Майстерність дерева.\nМова сучасного бренду.",
    serviceTag: "Стратегія + айдентика",
  },
  ru: {
    title: "KAVLORA",
    description:
      "Разработали стратегию и айдентику для KAVLORA — бренда производителя деревянных изделий. Логотип, фирменный стиль, полиграфия и рекламные носители.",
    tagline: "Мастерство дерева.\nЯзык современного бренда.",
    serviceTag: "Стратегия + айдентика",
  },
  en: {
    title: "KAVLORA",
    description:
      "We developed strategy and identity for KAVLORA — a woodworking brand. Logo, visual system, print, and advertising materials.",
    tagline: "The craft of wood.\nThe language of a modern brand.",
    serviceTag: "Strategy + identity",
  },
};
