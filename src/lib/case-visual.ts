import type {
  CaseItem,
  CaseVisualBlock,
  CaseVisualDeliverable,
  CaseVisualFact,
  CaseVisualGalleryLayout,
  CaseVisualImage,
} from "@/i18n/cases/types";
import type { Locale } from "@/i18n/config";
import { getCaseDetailPath } from "@/i18n/routing";
import { isDeliverablesBlock, normalizeArticleContent } from "@/lib/article-blocks";
import { caseMediaSrc } from "@/lib/case-content";

type BodyToken =
  | { type: "heading"; level: number; title: string }
  | { type: "image"; path: string }
  | { type: "text"; content: string };

type CaseContent = {
  client: string[];
  tasks: string[];
  deliverables: string[];
  results: Array<{ title: string; paragraphs: string[] }>;
  images: string[];
};

const COVER_RE = /01_cover/i;

export const DEFAULT_CASE_PALETTE = [
  { name: "Warm ivory", hex: "#F4F1EA", bg: "#f4f1ea", fg: "#242622" },
  { name: "Graphite", hex: "#242622", bg: "#242622", fg: "#f4f1ea" },
  { name: "Hub orange", hex: "#F47A38", bg: "#f47a38", fg: "#242622" },
] as const;

const COUNTRY_CODES: Record<string, string> = {
  україна: "UA",
  украина: "UA",
  ukraine: "UA",
  швеція: "SE",
  швеция: "SE",
  sweden: "SE",
  азербайджан: "AZ",
  azerbaijan: "AZ",
  індонезія: "ID",
  индонезия: "ID",
  indonesia: "ID",
  "велика британія": "GB",
  великобритания: "GB",
  "united kingdom": "GB",
  грузія: "GE",
  грузия: "GE",
  georgia: "GE",
};

const SECTION_PATTERNS: Record<string, RegExp[]> = {
  client: [/клієнт/i, /клиент/i, /^client$/i],
  tasks: [/задач/i, /^tasks?$/i],
  deliverables: [/розробили/i, /разработали/i, /^developed$/i, /^deliverables$/i],
  result: [/результат/i, /^result/i],
};

type LocaleCopy = {
  clientKicker: string;
  clientTitle: string;
  tasksKicker: string;
  tasksTitle: string;
  solutionKicker: string;
  solutionTitle: string;
  resultKicker: string;
  resultTitle: string;
  manifestoLabel: string;
  bannerKicker: string;
  bannerTitle: string;
  bookKicker: string;
  bookTitle: string;
  bookNote: string;
  rules: string[];
  quoteKicker: string;
  quoteHeading: string;
  quoteBadge: string;
  quoteRole: string;
  quoteNote: string;
  factCountry: string;
  factCity: string;
  factIndustry: string;
  factNiche: string;
  factProduct: string;
  defaultTag: string;
  tileDescriptions: string[];
  bannerTags: string[];
  openCase: string;
  ideaStrip: (title: string) => string;
  manifestoFooter: (title: string) => string;
  manifestoText: (title: string, lead: string) => string;
  solutionLead: (title: string) => string;
  quoteAuthor: (title: string) => string;
  quoteParagraphs: (title: string) => string[];
};

const COPY: Record<Locale, LocaleCopy> = {
  uk: {
    clientKicker: "ПРО КЛІЄНТА",
    clientTitle: "Контекст\nпроєкту.",
    tasksKicker: "ЗАДАЧА",
    tasksTitle: "Цілі\nта виклики.",
    solutionKicker: "РІШЕННЯ",
    solutionTitle: "Система,\nщо працює.",
    resultKicker: "РЕЗУЛЬТАТ",
    resultTitle: "Одна система.\nНа всіх носіях.",
    manifestoLabel: "ЦЕНТРАЛЬНА ІДЕЯ",
    bannerKicker: "АЙДЕНТИКА В ДІЇ",
    bannerTitle: "Від ідеї.\nДо реалізації.",
    bookKicker: "СКЛАД РОБОТИ",
    bookTitle: "Від знака\nдо цілісної системи.",
    bookNote: "Візуальна модель брендбуку: 6 напрямів правил.",
    rules: ["Логотип", "Палітра", "Типографіка", "Фотостиль", "Композиція", "Носії"],
    quoteKicker: "ВІДГУК КЛІЄНТА",
    quoteHeading: "Відгук клієнта.",
    quoteBadge: "Демонстраційний відгук",
    quoteRole: "Місце для імені та посади клієнта",
    quoteNote:
      "Приклад тексту для макета. Не є реальним відгуком; перед публікацією замініть погодженою цитатою клієнта.",
    factCountry: "Країна",
    factCity: "Місто",
    factIndustry: "Галузь",
    factNiche: "Ніша",
    factProduct: "Продукт",
    defaultTag: "Брендинг",
    openCase: "відкрити кейс",
    tileDescriptions: [
      "Спільна візуальна мова для всіх точок контакту.",
      "Чітка ієрархія та увага до продукту.",
      "Принципи, які легко масштабувати на нові носії.",
    ],
    bannerTags: ["Брендинг", "Digital", "Поліграфія", "Простір"],
    ideaStrip: (title) => `${title} —\nвізуальна система.`,
    manifestoFooter: (title) => `${title.toUpperCase()} — ZOND`,
    manifestoText: (_title, lead) => {
      const text = lead.replace(/\.$/, "");
      const words = text.split(/\s+/);
      if (words.length > 5) {
        const mid = Math.ceil(words.length / 2);
        return `${words.slice(0, mid).join(" ")}\n${words.slice(mid).join(" ")}`;
      }
      return text;
    },
    solutionLead: (title) =>
      `Для ${title} сформували цілісну візуальну систему: від знака та кольору до правил застосування на різних носіях. Айдентика однаково добре працює в digital, поліграфії та просторових рішеннях.`,
    quoteAuthor: (title) => `Представник ${title}`,
    quoteParagraphs: (title) => [
      `«Нам було важливо, щоб ${title} сприймався як цілісний бренд із власним характером. Хотілося зберегти простоту, але додати впізнаваність і послідовність у всіх матеріалах.`,
      `У цьому рішенні нам близькі логіка системи, чітка ієрархія та увага до деталей. На прикладах різних носіїв добре видно, як айдентика працює в реальних сценаріях комунікації.»`,
    ],
  },
  ru: {
    clientKicker: "О КЛИЕНТЕ",
    clientTitle: "Контекст\nпроекта.",
    tasksKicker: "ЗАДАЧА",
    tasksTitle: "Цели\nи вызовы.",
    solutionKicker: "РЕШЕНИЕ",
    solutionTitle: "Система,\nкоторая работает.",
    resultKicker: "РЕЗУЛЬТАТ",
    resultTitle: "Одна система.\nНа всех носителях.",
    manifestoLabel: "ЦЕНТРАЛЬНАЯ ИДЕЯ",
    bannerKicker: "АЙДЕНТИКА В ДЕЙСТВИИ",
    bannerTitle: "От идеи.\nК реализации.",
    bookKicker: "СОСТАВ РАБОТЫ",
    bookTitle: "От знака\nк целостной системе.",
    bookNote: "Визуальная модель брендбука: 6 направлений правил.",
    rules: ["Логотип", "Палитра", "Типографика", "Фотостиль", "Композиция", "Носители"],
    quoteKicker: "ОТЗЫВ КЛИЕНТА",
    quoteHeading: "Отзыв клиента.",
    quoteBadge: "Демонстрационный отзыв",
    quoteRole: "Место для имени и должности клиента",
    quoteNote:
      "Пример текста для макета. Не является реальным отзывом; перед публикацией замените согласованной цитатой клиента.",
    factCountry: "Страна",
    factCity: "Город",
    factIndustry: "Отрасль",
    factNiche: "Ниша",
    factProduct: "Продукт",
    defaultTag: "Брендинг",
    openCase: "открыть кейс",
    tileDescriptions: [
      "Единый визуальный язык для всех точек контакта.",
      "Чёткая иерархия и внимание к продукту.",
      "Принципы, которые легко масштабировать на новые носители.",
    ],
    bannerTags: ["Брендинг", "Digital", "Полиграфия", "Пространство"],
    ideaStrip: (title) => `${title} —\nвизуальная система.`,
    manifestoFooter: (title) => `${title.toUpperCase()} — ZOND`,
    manifestoText: (_title, lead) => {
      const text = lead.replace(/\.$/, "");
      const words = text.split(/\s+/);
      if (words.length > 5) {
        const mid = Math.ceil(words.length / 2);
        return `${words.slice(0, mid).join(" ")}\n${words.slice(mid).join(" ")}`;
      }
      return text;
    },
    solutionLead: (title) =>
      `Для ${title} сформировали целостную визуальную систему: от знака и цвета до правил применения на разных носителях. Айдентика одинаково хорошо работает в digital, полиграфии и пространственных решениях.`,
    quoteAuthor: (title) => `Представитель ${title}`,
    quoteParagraphs: (title) => [
      `«Нам было важно, чтобы ${title} воспринимался как цельный бренд с собственным характером. Хотелось сохранить простоту, но добавить узнаваемость и последовательность во всех материалах.`,
      `В этом решении нам близки логика системы, чёткая иерархия и внимание к деталям. На примерах разных носителей хорошо видно, как айдентика работает в реальных сценариях коммуникации.»`,
    ],
  },
  en: {
    clientKicker: "ABOUT CLIENT",
    clientTitle: "Project\ncontext.",
    tasksKicker: "TASK",
    tasksTitle: "Goals\nand challenges.",
    solutionKicker: "SOLUTION",
    solutionTitle: "A system\nthat works.",
    resultKicker: "RESULT",
    resultTitle: "One system.\nAcross touchpoints.",
    manifestoLabel: "CORE IDEA",
    bannerKicker: "IDENTITY IN ACTION",
    bannerTitle: "From idea.\nTo execution.",
    bookKicker: "SCOPE OF WORK",
    bookTitle: "From the mark\nto a complete system.",
    bookNote: "Visual brand book model: 6 rule directions.",
    rules: ["Logo", "Palette", "Typography", "Photo style", "Composition", "Touchpoints"],
    quoteKicker: "CLIENT FEEDBACK",
    quoteHeading: "Client feedback.",
    quoteBadge: "Demo testimonial",
    quoteRole: "Placeholder for client name and role",
    quoteNote:
      "Sample text for the layout. Not a real testimonial; replace with an approved client quote before publishing.",
    factCountry: "Country",
    factCity: "City",
    factIndustry: "Industry",
    factNiche: "Niche",
    factProduct: "Product",
    defaultTag: "Branding",
    openCase: "open case",
    tileDescriptions: [
      "A shared visual language across all touchpoints.",
      "Clear hierarchy and focus on the product.",
      "Principles that scale to new formats.",
    ],
    bannerTags: ["Branding", "Digital", "Print", "Space"],
    ideaStrip: (title) => `${title} —\na visual system.`,
    manifestoFooter: (title) => `${title.toUpperCase()} — ZOND`,
    manifestoText: (_title, lead) => {
      const text = lead.replace(/\.$/, "");
      const words = text.split(/\s+/);
      if (words.length > 5) {
        const mid = Math.ceil(words.length / 2);
        return `${words.slice(0, mid).join(" ")}\n${words.slice(mid).join(" ")}`;
      }
      return text;
    },
    solutionLead: (title) =>
      `For ${title}, we built a cohesive visual system—from the mark and color to application rules across touchpoints. The identity works equally well in digital, print, and spatial formats.`,
    quoteAuthor: (title) => `${title} representative`,
    quoteParagraphs: (title) => [
      `"It was important for us that ${title} feels like a cohesive brand with its own character. We wanted to keep things simple while adding recognizability and consistency across all materials.`,
      `In this solution, we value the system logic, clear hierarchy, and attention to detail. The examples across formats show how the identity works in real communication scenarios."`,
    ],
  },
};

function isCoverPath(path: string): boolean {
  return COVER_RE.test(path);
}

function isCoverSrc(src: string): boolean {
  const filename = src.split("/").pop() ?? src;
  return isCoverPath(filename);
}

function normalizeGalleryLayout(imageCount: number): CaseVisualGalleryLayout {
  if (imageCount >= 3) return "triple";
  if (imageCount === 2) return "pair";
  return "wide";
}

function resolveGalleryLayout(
  imageCount: number,
  preferred: CaseVisualGalleryLayout,
): CaseVisualGalleryLayout {
  if (imageCount === 2 && preferred === "pair") return "pair";
  if (imageCount === 1 && preferred === "wide") return "wide";
  if (imageCount === 3 && preferred === "triple") return "triple";
  return normalizeGalleryLayout(imageCount);
}

function dedupeCaseVisualBlocks(
  blocks: CaseVisualBlock[],
  excludeSrc: Array<string | null | undefined>,
): CaseVisualBlock[] {
  const exclude = new Set(excludeSrc.filter((src): src is string => Boolean(src)));
  const deduped: CaseVisualBlock[] = [];

  for (const block of blocks) {
    if (block.type !== "gallery") {
      deduped.push(block);
      continue;
    }

    const images = block.images.filter((image) => !exclude.has(image.src));
    if (!images.length) continue;

    deduped.push({
      ...block,
      layout: resolveGalleryLayout(images.length, block.layout),
      images,
    });
  }

  return deduped;
}

function matchSectionKey(title: string): string | null {
  const normalized = title.trim();
  for (const [key, patterns] of Object.entries(SECTION_PATTERNS)) {
    if (patterns.some((pattern) => pattern.test(normalized))) return key;
  }
  return null;
}

function splitBlocks(body: string): string[] {
  return normalizeArticleContent(body)
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function tokenizeBody(body: string): BodyToken[] {
  const tokens: BodyToken[] = [];

  for (const block of splitBlocks(body)) {
    const imgMatch = block.match(/^\[IMG:\s*(.+?)\]$/);
    if (imgMatch) {
      tokens.push({ type: "image", path: imgMatch[1] });
      continue;
    }

    const headingMatch = block.match(/^(#{1,3})\s+(.+?)(?:\n+([\s\S]*))?$/);
    if (headingMatch) {
      tokens.push({
        type: "heading",
        level: headingMatch[1].length,
        title: headingMatch[2].replace(/:+\s*$/, "").trim(),
      });
      const rest = headingMatch[3]?.trim();
      if (rest) tokens.push({ type: "text", content: rest });
      continue;
    }

    tokens.push({ type: "text", content: block });
  }

  return tokens;
}

function paragraphsFromText(content: string): string[] {
  const paragraphs: string[] = [];

  for (const block of splitBlocks(content)) {
    if (isDeliverablesBlock(block)) continue;
    if (/^#{1,4}\s+/.test(block)) continue;

    if (block.includes("\n") && !block.includes("\n\n")) {
      paragraphs.push(...block.split("\n").map((line) => line.trim()).filter(Boolean));
      continue;
    }

    paragraphs.push(block);
  }

  return paragraphs;
}

function deliverableLinesFromText(content: string): string[] {
  for (const block of splitBlocks(content)) {
    if (!isDeliverablesBlock(block)) continue;
    return block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }
  return [];
}

function uniqueImages(images: string[]): string[] {
  const seen = new Set<string>();
  return images.filter((src) => {
    if (seen.has(src)) return false;
    seen.add(src);
    return true;
  });
}

function extractCaseContent(body: string, caseItem: CaseItem): CaseContent {
  const tokens = tokenizeBody(body);
  const content: CaseContent = {
    client: [],
    tasks: [],
    deliverables: [],
    results: [],
    images: [],
  };

  let currentText = "";
  let currentKey = "intro";
  let currentTitle = "";

  const flushSection = () => {
    const paragraphs = paragraphsFromText(currentText);
    const deliverables = deliverableLinesFromText(currentText);

    if (currentKey === "client") content.client.push(...paragraphs);
    else if (currentKey === "tasks") content.tasks.push(...paragraphs);
    else if (currentKey === "deliverables") content.deliverables.push(...deliverables);
    else if (currentKey === "result" || currentKey === "section") {
      if (paragraphs.length) {
        content.results.push({
          title: currentTitle.replace(/:\s*$/, ""),
          paragraphs,
        });
      }
      if (deliverables.length) content.deliverables.push(...deliverables);
    } else if (currentKey === "intro" && paragraphs.length) {
      content.client.push(...paragraphs);
    }

    currentText = "";
    currentTitle = "";
    currentKey = "intro";
  };

  for (const token of tokens) {
    if (token.type === "heading") {
      flushSection();
      currentKey =
        matchSectionKey(token.title) ??
        (token.level <= 2 ? "result" : "section");
      currentTitle = token.title;
      continue;
    }

    if (token.type === "image") {
      if (!isCoverPath(token.path)) {
        content.images.push(caseMediaSrc(token.path));
      }
      continue;
    }

    currentText = currentText ? `${currentText}\n\n${token.content}` : token.content;
  }

  flushSection();

  const mediaImages = (caseItem.media ?? [])
    .filter((path) => !isCoverPath(path))
    .map((path) => caseMediaSrc(path));

  content.images = uniqueImages([...content.images, ...mediaImages]);

  if (!content.client.length && caseItem.description) {
    content.client.push(caseItem.description);
  }

  return content;
}

function buildHaystack(caseItem: CaseItem, content: CaseContent): string {
  return [
    caseItem.title,
    caseItem.description,
    caseItem.serviceTag ?? "",
    ...content.client,
    ...content.tasks,
    ...content.deliverables,
    ...content.results.flatMap((section) => section.paragraphs),
  ].join(" ");
}

function truncateFact(value: string, max = 42): string {
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1).trimEnd()}…`;
}

function localeValue<T extends Record<Locale, string>>(map: T, locale: Locale): string {
  return map[locale];
}

function countryCodeFor(value: string): string {
  return COUNTRY_CODES[value.toLowerCase()] ?? "UA";
}

function normalizeFactValue(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isDuplicateFact(a: string, b: string): boolean {
  const left = normalizeFactValue(a);
  const right = normalizeFactValue(b);
  if (!left || !right) return false;
  if (left === right) return true;
  return left.includes(right) || right.includes(left);
}

function inferCountry(text: string, locale: Locale): string | null {
  const countries = [
    {
      re: /українськ|украинск|ukrainian/i,
      uk: "Україна",
      ru: "Україна",
      en: "Ukraine",
    },
    {
      re: /азербайджан|azerbaijan|sea breeze/i,
      uk: "Азербайджан",
      ru: "Азербайджан",
      en: "Azerbaijan",
    },
    {
      re: /\bбалі\b|\bbali\b/i,
      uk: "Індонезія",
      ru: "Индонезия",
      en: "Indonesia",
    },
    {
      re: /швеці|sweden|швеция/i,
      uk: "Швеція",
      ru: "Швеция",
      en: "Sweden",
    },
    {
      re: /британ|britain|ahmad tea/i,
      uk: "Велика Британія",
      ru: "Великобритания",
      en: "United Kingdom",
    },
    {
      re: /грузі|georgia|грузинськ|tbiliso/i,
      uk: "Грузія",
      ru: "Грузия",
      en: "Georgia",
    },
  ];

  for (const country of countries) {
    if (country.re.test(text)) return localeValue(country, locale);
  }

  return null;
}

function resolveCountry(text: string, locale: Locale): { value: string; code: string } {
  const detected = inferCountry(text, locale);
  if (detected) {
    return { value: detected, code: countryCodeFor(detected) };
  }

  const defaults = { uk: "Україна", ru: "Україна", en: "Ukraine" };
  const value = localeValue(defaults, locale);
  return { value, code: "UA" };
}

function extractClientIndustry(description: string): string | null {
  const emDash = description.match(/для\s+[^—–-]+[—–-]\s*([^.:]+)/i);
  if (emDash?.[1]) return emDash[1].trim();

  const plainFor = description.match(
    /(?:для|for)\s+(.+?)(?:\s+в\s+|\s+in\s+|\s*[:.]|$)/i,
  );
  if (plainFor?.[1]) {
    return plainFor[1]
      .replace(/^[«"']|[»"']$/g, "")
      .trim();
  }

  return null;
}

function extractScope(description: string, locale: Locale): string | null {
  const patterns =
    locale === "en"
      ? [/^(?:We\s+)?(?:developed|created|updated|refreshed|designed)\s+(.+?)\s+for\s/i]
      : locale === "ru"
        ? [/^(?:Разработали|Обновили|Провели|Создали)\s+(.+?)\s+для\s/i]
        : [/^(?:Розробили|Оновили|Провели|Розробляємо|Створили)\s+(.+?)\s+для\s/i];

  for (const pattern of patterns) {
    const match = description.match(pattern);
    if (match?.[1]) return truncateFact(match[1], 48);
  }

  return null;
}

function extractAlsoDeliverables(description: string): string | null {
  const match = description.match(/(?:Також|Also|Также)\s+(.+?)\.?\s*$/i);
  return match?.[1] ? truncateFact(match[1], 48) : null;
}

function inferProduct(caseItem: CaseItem, content: CaseContent, locale: Locale): string {
  if (content.deliverables.length >= 2) {
    return truncateFact(content.deliverables.slice(0, 2).join(" · "), 48);
  }

  if (content.deliverables.length === 1) {
    return truncateFact(content.deliverables[0], 48);
  }

  const also = extractAlsoDeliverables(caseItem.description);
  if (also) return also;

  const scope = extractScope(caseItem.description, locale);
  if (scope) return scope;

  return truncateFact(caseItem.title, 48);
}

function extractClientNiche(clientLines: string[]): string | null {
  const lead = clientLines[0];
  if (!lead) return null;

  const dashMatch = lead.match(/[—–-]\s*(.+?)(?:[.!?]|$)/);
  if (dashMatch?.[1]) return truncateFact(dashMatch[1], 48);

  const firstSentence = lead.split(/(?<=[.!?])\s+/)[0] ?? lead;
  return truncateFact(firstSentence, 48);
}

function inferNiche(caseItem: CaseItem, content: CaseContent, locale: Locale): string {
  const fromClient = extractClientNiche(content.client);
  if (fromClient) return fromClient;

  const industry = extractClientIndustry(caseItem.description);
  if (industry) return truncateFact(industry, 48);

  const scope = extractScope(caseItem.description, locale);
  if (scope) return scope;

  return truncateFact(caseItem.title, 48);
}

function inferFacts(caseItem: CaseItem, content: CaseContent, locale: Locale): CaseVisualFact[] {
  const copy = COPY[locale];
  const haystack = buildHaystack(caseItem, content);
  const country = resolveCountry(haystack, locale);
  const product = inferProduct(caseItem, content, locale);
  let niche = inferNiche(caseItem, content, locale);

  if (isDuplicateFact(niche, country.value)) {
    const scope = extractScope(caseItem.description, locale);
    niche = scope ? truncateFact(scope, 48) : truncateFact(caseItem.serviceTag ?? copy.defaultTag, 48);
  }

  if (isDuplicateFact(niche, product)) {
    const scope = extractScope(caseItem.description, locale);
    if (scope && !isDuplicateFact(scope, product)) {
      niche = truncateFact(scope, 48);
    }
  }

  return [
    {
      label: copy.factCountry,
      value: country.value,
      accent: true,
      countryCode: country.code,
    },
    { label: copy.factNiche, value: niche },
    { label: copy.factProduct, value: product },
  ];
}

function factsBlock(items: CaseVisualFact[]): CaseVisualBlock {
  return { type: "facts", items };
}

function sectionBlock(
  index: string,
  kicker: string,
  title: string,
  paragraphs: string[],
  extras?: Partial<Extract<CaseVisualBlock, { type: "section" }>>,
): CaseVisualBlock {
  return { type: "section", index, kicker, title, paragraphs, ...extras };
}

function chunkGalleryLayout(count: number): CaseVisualGalleryLayout {
  if (count === 2) return "pair";
  return "wide";
}

function takeImages(images: string[], count: number): CaseVisualImage[] {
  return images.splice(0, count).map((src) => ({ src }));
}

function galleryFromImages(images: CaseVisualImage[], layout: CaseVisualGalleryLayout): CaseVisualBlock {
  return { type: "gallery", layout, images };
}

function chunkGalleries(images: string[]): CaseVisualBlock[] {
  const blocks: CaseVisualBlock[] = [];
  const pool = [...images];

  while (pool.length) {
    const take = pool.length >= 2 ? 2 : 1;
    blocks.push(galleryFromImages(takeImages(pool, take), chunkGalleryLayout(take)));
  }

  return blocks;
}

function buildDeliverableTiles(
  lines: string[],
  locale: Locale,
): CaseVisualDeliverable[] {
  const copy = COPY[locale];
  const items = lines.slice(0, 3);

  while (items.length < 3) {
    items.push(copy.tileDescriptions[items.length] ?? "Deliverable");
  }

  return items.map((title, index) => ({
    title,
    description: copy.tileDescriptions[index] ?? copy.tileDescriptions[0],
  }));
}

function buildHubLayout(caseItem: CaseItem, content: CaseContent, locale: Locale): CaseVisualBlock[] {
  const copy = COPY[locale];
  const blocks: CaseVisualBlock[] = [];
  const images = [...content.images];
  const lead =
    caseItem.tagline?.replace(/\n/g, " ") ??
    caseItem.description.split(/(?<=[.!?])\s+/)[0] ??
    caseItem.description;

  const resultParagraphs =
    content.results.flatMap((section) => section.paragraphs).slice(0, 2);
  const solutionExtra =
    content.results[0]?.paragraphs[0] ??
    copy.solutionLead(caseItem.title);

  blocks.push(
    sectionBlock("01", copy.clientKicker, copy.clientTitle, content.client.slice(0, 2)),
  );
  blocks.push(factsBlock(inferFacts(caseItem, content, locale)));

  if (images.length) {
    blocks.push(...chunkGalleries(images.splice(0, Math.min(images.length, 2))));
  }

  const deliverableLines =
    content.deliverables.length > 0
      ? content.deliverables
      : [
          locale === "en" ? "Logo" : "Логотип",
          locale === "en" ? "Identity" : locale === "ru" ? "Айдентика" : "Айдентика",
          locale === "en" ? "Touchpoints" : locale === "ru" ? "Носители" : "Носії",
        ];

  blocks.push(
    sectionBlock("02", copy.tasksKicker, copy.tasksTitle, content.tasks.slice(0, 2)),
  );
  blocks.push({ type: "deliverables", items: buildDeliverableTiles(deliverableLines, locale) });

  if (images.length >= 2) {
    blocks.push(galleryFromImages(takeImages(images, 2), "pair"));
  }

  blocks.push(
    sectionBlock("03", copy.solutionKicker, copy.solutionTitle, [solutionExtra]),
  );

  blocks.push({
    type: "manifesto",
    label: copy.manifestoLabel,
    text: copy.manifestoText(caseItem.title, lead),
    footer: copy.manifestoFooter(caseItem.title),
  });

  if (images.length >= 1) {
    blocks.push(galleryFromImages(takeImages(images, 1), "wide"));
  }
  if (images.length >= 2) {
    blocks.push(galleryFromImages(takeImages(images, 2), "pair"));
  }

  const bookRules =
    content.deliverables.length >= 3 ? content.deliverables.slice(0, 6) : copy.rules;

  blocks.push(
    sectionBlock("", copy.bookKicker, copy.bookTitle, [], {
      variant: "book",
      rules: bookRules,
    }),
  );

  if (images.length) {
    blocks.push(...chunkGalleries(images.splice(0, images.length)));
  }

  blocks.push(
    sectionBlock("04", copy.resultKicker, copy.resultTitle, resultParagraphs.length
      ? resultParagraphs
      : [caseItem.description]),
  );

  blocks.push({
    type: "quote",
    index: "05",
    kicker: copy.quoteKicker,
    heading: copy.quoteHeading,
    badge: copy.quoteBadge,
    paragraphs: copy.quoteParagraphs(caseItem.title),
    author: copy.quoteAuthor(caseItem.title),
    role: copy.quoteRole,
    note: copy.quoteNote,
  });

  return blocks;
}

export function buildCaseVisualBlocks(
  caseItem: CaseItem,
  body: string,
  locale: Locale,
  heroSrc: string | null,
): CaseVisualBlock[] {
  const content = caseItem.blocks ? null : extractCaseContent(body, caseItem);

  if (content) {
    content.images = content.images.filter(
      (src) => src !== heroSrc && src !== caseItem.cover && !isCoverSrc(src),
    );
  }

  const blocks = caseItem.blocks ?? buildHubLayout(caseItem, content!, locale);
  const excludeSrc = [
    heroSrc,
    caseItem.cover,
    ...(content?.images.filter(isCoverSrc) ?? []),
  ];

  return dedupeCaseVisualBlocks(blocks, excludeSrc);
}

export function collectCaseVisualImages(
  heroSrc: string | null,
  blocks: CaseVisualBlock[],
): string[] {
  const images: string[] = [];
  if (heroSrc) images.push(heroSrc);

  for (const block of blocks) {
    if (block.type === "gallery") {
      images.push(...block.images.map((image) => image.src));
    }
  }

  return images;
}

export function getCaseVisualDefaults(
  locale: Locale,
  description: string,
  tagline?: string,
  serviceTag?: string,
) {
  const copy = COPY[locale];
  const firstSentence = description.split(/(?<=[.!?])\s+/)[0] ?? description;

  return {
    tagline: tagline ?? firstSentence,
    serviceTag: serviceTag ?? copy.defaultTag,
    openCase: copy.openCase,
  };
}

export function getLiveCaseUrl(slug: string, locale: Locale): string {
  return `https://www.zond.agency${getCaseDetailPath(locale, slug)}`;
}
