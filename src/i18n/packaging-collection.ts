import type { CaseVisualBlock } from "@/i18n/cases/types";
import type { Locale } from "@/i18n/config";

const ASSET = "/assets/services/packaging";
const m = (file: string) => `${ASSET}/${file}`;

function photoCaption(locale: Locale, index: number): string {
  const word = locale === "en" ? "Packaging" : locale === "ru" ? "Упаковка" : "Пакування";
  const suffix =
    index === 1 && locale === "en"
      ? " — collection cover"
      : index === 1 && locale === "ru"
        ? " — обложка подборки"
        : index === 1
          ? " — обкладинка добірки"
          : "";
  return `${word} ${String(index).padStart(2, "0")}${suffix}`;
}

function buildBlocks(locale: Locale): CaseVisualBlock[] {
  const photo = (index: number) => ({
    src: m(`${String(index).padStart(2, "0")}.jpg`),
    caption: photoCaption(locale, index),
  });

  const copy =
    locale === "en"
      ? {
          statsAria: "Collection contents",
          stats: [
            { value: "14", label: "images from the original case study", variant: "default" as const },
            { value: "05", label: "additional concepts for this page", variant: "orange" as const },
            {
              value: "04",
              label: "focus areas: design, DTP, concept, layout",
              variant: "dark" as const,
            },
          ],
          facts: [
            { label: "Format", value: "Collection", highlight: true },
            { label: "Niche", value: "various categories" },
            { label: "Deliverable", value: "packaging design" },
          ],
          s01k: "ABOUT THE COLLECTION",
          s01t: "Different products.\nOne approach.",
          s01p: [
            "This is a packaging selection for different brands and product categories. The first part shows work from the ZOND portfolio; next — five separately marked visual concepts created to expand this presentation.",
            "Dairy, snacks, beverages, pet products, and professional goods have different sales contexts. Each needs its own balance of expression, usability, and readable information.",
          ],
          s02k: "CHALLENGE",
          s02t: "Stand out on shelf.\nHelp with choice.",
          s02p: [
            "Combine brand character, audience needs, and product specifics in one solution. On shelf, packaging must quickly signal category, explain the product, and make it memorable.",
            "A beverage label, flexible snack pouch, and professional container each demand different structure, information hierarchy, and use scenarios.",
          ],
          tiles: [
            { title: "Character", description: "Reflect the brand idea in form and color." },
            { title: "Function", description: "Make information visible and clear." },
            { title: "Material", description: "Account for construction and usage conditions." },
          ],
          s03k: "SOLUTION",
          s03t: "The idea takes\nphysical form.",
          s03p: [
            "The ZOND case lists four work areas: concept, design, layout, and DTP. Graphics, color, and typography follow the product and how it is sold.",
            "The gallery includes boxes, jars, bottles, cups, and flexible pouches. Each carrier needs checks for scale, legibility, and real-world appearance.",
          ],
          manifestoLabel: "VISUAL PRINCIPLE",
          manifestoText: "First encounter.\nIn one touch.",
          manifestoFooter: "Packaging / BRAND IDENTITY",
          bookK: "SCOPE",
          bookT: "Every category.\nIts own form.",
          rules: [
            "Concept",
            "Label",
            "Cardboard",
            "Glass",
            "Flexible pack",
            "Jars & tubes",
            "Layout",
            "DTP / prep",
          ],
          conceptK: "EXTRA SERIES · 05 CONCEPTS",
          conceptT: "Different formats.\nNew ideas.",
          conceptP: [
            "Five visual concepts for different product categories and packaging formats.",
            "These images demonstrate possible packaging directions. They are not published ZOND client projects.",
          ],
          s04k: "RESULT",
          s04t: "Packaging with\nits own character.",
          s04p: [
            "The selection shows practical design applied across products and carriers. Each outcome is a cohesive packaging image suited to a specific use scenario.",
            "The five-image extra series is demonstrative, not delivered client work. The source case does not include sales or performance data.",
          ],
          quoteK: "LAYOUT NOTE",
          quoteT: "How packaging\nworks for the brand.",
          quoteBadge: "Copy pending client approval",
          quoteP: [
            "«It was important that packaging stood out among other products and stayed practical to use. Every decision — from color to information placement — had to support a clear brand image.",
            "In the new design the product looks cohesive on shelf and in communication».",
          ],
          quoteAuthor: "Sample testimonial",
          quoteRole: "Placeholder for a confirmed client quote",
          quoteNote: "Editorial sample for the layout, not a real review. Requires client approval.",
        }
      : locale === "ru"
        ? {
            statsAria: "Состав подборки",
            stats: [
              { value: "14", label: "изображений работ из исходного кейса", variant: "default" as const },
              { value: "05", label: "дополнительных концептов для этой страницы", variant: "orange" as const },
              {
                value: "04",
                label: "направления работы: дизайн, DTP, концепт, вёрстка",
                variant: "dark" as const,
              },
            ],
            facts: [
              { label: "Формат", value: "Подборка", highlight: true },
              { label: "Ниша", value: "разные категории" },
              { label: "Продукт", value: "дизайн упаковки" },
            ],
            s01k: "О ПОДБОРКЕ",
            s01t: "Разные продукты.\nЕдиный подход.",
            s01p: [
              "Это подборка упаковки для разных брендов и продуктовых категорий. В первой части — работы из портфолио ZOND; далее — пять отдельно отмеченных визуальных концептов для расширения этой презентации.",
              "Молочные продукты, снеки, напитки, товары для животных и профессиональные средства продаются в разных условиях. Для каждого нужен свой баланс выразительности, удобства и читаемой информации.",
            ],
            s02k: "ЗАДАЧА",
            s02t: "Заинтересовать на полке.\nПомочь в выборе.",
            s02p: [
              "Объединить характер бренда, потребности аудитории и особенности продукта в одном решении. На полке упаковка должна быстро помогать распознать категорию, понять продукт и запомнить его.",
              "Этикетка для напитка, гибкий пакет для снека и тара для профессионального средства имеют разные требования к конструкции, иерархии информации и сценарию использования.",
            ],
            tiles: [
              { title: "Характер", description: "Отразить идею бренда в форме и цвете." },
              { title: "Функция", description: "Сделать информацию заметной и понятной." },
              { title: "Материал", description: "Учесть конструкцию и условия использования." },
            ],
            s03k: "РЕШЕНИЕ",
            s03t: "Идея обретает\nматериальную форму.",
            s03p: [
              "В кейсе ZOND указаны четыре направления работы: концепт, дизайн, вёрстка и DTP. Графика, цвета и типографика подчинены конкретному продукту и способу его продажи.",
              "В галерее — коробки, банки, бутылки, стаканчики и гибкие пакеты. Каждый носитель требует проверки масштаба элементов, читаемости и вида в реальной среде.",
            ],
            manifestoLabel: "ВИЗУАЛЬНЫЙ ПРИНЦИП",
            manifestoText: "Первое знакомство.\nВ одном прикосновении.",
            manifestoFooter: "Упаковка / BRAND IDENTITY",
            bookK: "СОСТАВ РАБОТЫ",
            bookT: "Каждая категория.\nСвоя форма.",
            rules: [
              "Концепт",
              "Этикетка",
              "Картон",
              "Стекло",
              "Гибкая упаковка",
              "Банки и тубусы",
              "Вёрстка",
              "DTP / подготовка",
            ],
            conceptK: "ДОПОЛНИТЕЛЬНАЯ СЕРИЯ · 05 КОНЦЕПТОВ",
            conceptT: "Разные форматы.\nНовые идеи.",
            conceptP: [
              "Пять визуальных концептов для разных продуктовых категорий и форматов упаковки.",
              "Эти изображения созданы для демонстрации возможных направлений упаковки. Это не опубликованные клиентские проекты ZOND.",
            ],
            s04k: "РЕЗУЛЬТАТ",
            s04t: "Упаковка с\nсобственным характером.",
            s04p: [
              "В подборке показано практическое применение дизайна для разных продуктов и носителей. Результат каждой работы — цельный визуальный образ упаковки для конкретного сценария использования.",
              "Дополнительная серия из пяти изображений — демонстрационные концепты, а не выполненные заказы. Исходный кейс не содержит данных о продажах или измеримой эффективности.",
            ],
            quoteK: "КОММЕНТАРИЙ К МАКЕТУ",
            quoteT: "Как упаковка\nработает для бренда.",
            quoteBadge: "Текст для согласования с клиентом",
            quoteP: [
              "«Нам было важно, чтобы упаковка выделялась среди других продуктов и оставалась удобной в использовании. Каждое решение — от цвета до размещения информации — должно было работать на понятный образ бренда.",
              "В новом дизайне продукт выглядит цельно на полке и в коммуникации».",
            ],
            quoteAuthor: "Пример отзыва",
            quoteRole: "Место для подтверждённого отзыва клиента",
            quoteNote:
              "Редакционный пример для макета, не реальный отзыв. Требует согласования с клиентом.",
          }
        : {
            statsAria: "Склад добірки",
            stats: [
              { value: "14", label: "зображень робіт з оригінального кейса", variant: "default" as const },
              { value: "05", label: "додаткових концептів для цієї сторінки", variant: "orange" as const },
              {
                value: "04",
                label: "напрями роботи: дизайн, DTP, концепт, верстка",
                variant: "dark" as const,
              },
            ],
            facts: [
              { label: "Формат", value: "Добірка", highlight: true },
              { label: "Ніша", value: "різні категорії" },
              { label: "Продукт", value: "дизайн пакування" },
            ],
            s01k: "ПРО ДОБІРКУ",
            s01t: "Різні продукти.\nЄдиний підхід.",
            s01p: [
              "Це добірка пакування для різних брендів і продуктових категорій. У першій частині показані роботи з портфоліо ZOND; далі — п’ять окремо позначених візуальних концептів, створених для розширення цієї презентації.",
              "Молочні продукти, снеки, напої, товари для тварин і професійні засоби мають різні умови продажу. Для кожного потрібен власний баланс виразності, зручності та читабельної інформації.",
            ],
            s02k: "ЗАДАЧА",
            s02t: "Зацікавити на полиці.\nДопомогти у виборі.",
            s02p: [
              "Поєднати характер бренду, потреби аудиторії та особливості продукту в одному рішенні. На полиці пакування має швидко допомагати розпізнати категорію, зрозуміти продукт і запам’ятати його.",
              "Етикетка для напою, гнучкий пакет для снеку й тара для професійного засобу мають різні вимоги до конструкції, інформаційної ієрархії та способу використання.",
            ],
            tiles: [
              { title: "Характер", description: "Відобразити ідею бренду у формі та кольорі." },
              { title: "Функція", description: "Зробити інформацію помітною та зрозумілою." },
              { title: "Матеріал", description: "Врахувати конструкцію й умови використання." },
            ],
            s03k: "РІШЕННЯ",
            s03t: "Ідея набуває\nматеріальної форми.",
            s03p: [
              "У кейсі ZOND вказані чотири напрями роботи: концепт, дизайн, верстка та DTP. Графіка, кольори й типографіка підпорядковуються конкретному продукту й способу його продажу.",
              "У галереї є коробки, банки, пляшки, стаканчики й гнучкі пакети. Кожен носій потребує перевірки масштабу елементів, читабельності та вигляду в реальному середовищі.",
            ],
            manifestoLabel: "ВІЗУАЛЬНИЙ ПРИНЦИП",
            manifestoText: "Перше знайомство.\nВ одному дотику.",
            manifestoFooter: "Пакування / BRAND IDENTITY",
            bookK: "СКЛАД РОБОТИ",
            bookT: "Кожна категорія.\nСвоя форма.",
            rules: [
              "Концепт",
              "Етикетка",
              "Картон",
              "Скло",
              "Гнучке пакування",
              "Банки й тубуси",
              "Верстка",
              "DTP / підготовка",
            ],
            conceptK: "ДОДАТКОВА СЕРІЯ · 05 КОНЦЕПТІВ",
            conceptT: "Різні формати.\nНові ідеї.",
            conceptP: [
              "П’ять візуальних концептів для різних продуктових категорій і форматів пакування.",
              "Ці зображення створено для демонстрації можливих напрямів пакування. Вони не є опублікованими клієнтськими проєктами ZOND.",
            ],
            s04k: "РЕЗУЛЬТАТ",
            s04t: "Пакування, що має\nвласний характер.",
            s04p: [
              "У добірці показано практичне застосування дизайну для різних продуктів і носіїв. Результат кожної роботи — цілісний візуальний образ упаковки, придатний до конкретного сценарію використання.",
              "Додаткова серія з п’яти зображень є демонстраційними концептами, а не виконаними замовленнями. Даних про продажі чи вимірювану ефективність вихідний кейс не містить.",
            ],
            quoteK: "КОМЕНТАР ДО МАКЕТА",
            quoteT: "Як пакування\nпрацює для бренду.",
            quoteBadge: "Текст для погодження з клієнтом",
            quoteP: [
              "«Нам було важливо, щоб упаковка вирізнялася серед інших продуктів і залишалася зручною у використанні. Кожне рішення — від кольору до розміщення інформації — мало працювати на зрозумілий образ бренду.",
              "У новому дизайні продукт виглядає цілісно на полиці та в комунікації».",
            ],
            quoteAuthor: "Приклад відгуку",
            quoteRole: "Місце для підтвердженого відгуку клієнта",
            quoteNote:
              "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
          };

  return [
    {
      type: "section",
      index: "01",
      kicker: copy.s01k,
      title: copy.s01t,
      paragraphs: copy.s01p,
    },
    {
      type: "facts",
      items: copy.facts,
    },
    {
      type: "collectionStats",
      ariaLabel: copy.statsAria,
      items: copy.stats,
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(2), photo(3)],
    },
    {
      type: "section",
      index: "02",
      kicker: copy.s02k,
      title: copy.s02t,
      paragraphs: copy.s02p,
    },
    {
      type: "deliverables",
      items: copy.tiles,
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(4), photo(5)],
    },
    {
      type: "section",
      index: "03",
      kicker: copy.s03k,
      title: copy.s03t,
      paragraphs: copy.s03p,
    },
    {
      type: "manifesto",
      label: copy.manifestoLabel,
      text: copy.manifestoText,
      footer: copy.manifestoFooter,
    },
    {
      type: "gallery",
      layout: "wide",
      images: [photo(6)],
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(7), photo(8)],
    },
    {
      type: "section",
      index: "",
      kicker: copy.bookK,
      title: copy.bookT,
      paragraphs: [],
      variant: "book",
      rules: copy.rules,
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(9), photo(10)],
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(11), photo(12)],
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(13), photo(14)],
    },
    {
      type: "gallery",
      layout: "wide",
      images: [photo(15)],
    },
    {
      type: "section",
      index: "+",
      kicker: copy.conceptK,
      title: copy.conceptT,
      paragraphs: copy.conceptP,
      variant: "concept",
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(16), photo(17)],
    },
    {
      type: "gallery",
      layout: "pair",
      images: [photo(18), photo(19)],
    },
    {
      type: "gallery",
      layout: "wide",
      images: [photo(20)],
    },
    {
      type: "section",
      index: "04",
      kicker: copy.s04k,
      title: copy.s04t,
      paragraphs: copy.s04p,
    },
    {
      type: "quote",
      index: "05",
      kicker: copy.quoteK,
      heading: copy.quoteT,
      badge: copy.quoteBadge,
      paragraphs: copy.quoteP,
      author: copy.quoteAuthor,
      role: copy.quoteRole,
      note: copy.quoteNote,
    },
  ];
}

const titles: Record<Locale, string> = {
  uk: "Пакування",
  en: "Packaging",
  ru: "Упаковка",
};

const taglines: Record<Locale, string> = {
  uk: "Форма, яку помічають.\nДеталі, які відчувають.",
  en: "Form people notice.\nDetails they feel.",
  ru: "Форма, которую замечают.\nДетали, которые чувствуют.",
};

const serviceTags: Record<Locale, string> = {
  uk: "Дизайн · концепт · верстка",
  en: "Design · concept · layout",
  ru: "Дизайн · концепт · вёрстка",
};

export const packagingCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: titles.uk,
    description:
      "Добірка дизайнів пакування ZOND: харчові продукти, напої, товари для тварин та інші категорії. 20 зображень: 14 робіт і 5 додаткових концептів.",
    tagline: taglines.uk,
    serviceTag: serviceTags.uk,
  },
  en: {
    title: titles.en,
    description:
      "ZOND packaging design collection: food, beverages, pet products, and more. 20 images: 14 portfolio works and 5 concept visuals.",
    tagline: taglines.en,
    serviceTag: serviceTags.en,
  },
  ru: {
    title: titles.ru,
    description:
      "Подборка дизайнов упаковки ZOND: продукты питания, напитки, товары для животных и другие категории. 20 изображений: 14 работ и 5 концептов.",
    tagline: taglines.ru,
    serviceTag: serviceTags.ru,
  },
};

export const packagingShared = {
  slug: "packaging",
  cover: m("01.jpg"),
  media: [] as string[],
  body: `[IMG: ${m("01.jpg")}]`,
};

export function getPackagingBlocks(locale: Locale): CaseVisualBlock[] {
  return buildBlocks(locale);
}
