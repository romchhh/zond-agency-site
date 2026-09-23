import type { CaseVisualBlock } from "./types";
import type { Locale } from "@/i18n/config";

const m = (file: string) => `/assets/cases/carbit/${file}`;

const carbitMedia = [
  "media/carbit/hero.jpg",
  "media/carbit/01.jpg",
  "media/carbit/02.webp",
  "media/carbit/03.jpg",
  "media/carbit/04.webp",
  "media/carbit/05.webp",
  "media/carbit/06.jpg",
  "media/carbit/07.jpg",
  "media/carbit/08.webp",
  "media/carbit/09.jpg",
  "media/carbit/10.jpg",
  "media/carbit/11.webp",
  "media/carbit/12.webp",
  "media/carbit/13.webp",
  "media/carbit/14.jpg",
  "media/carbit/15.webp",
  "media/carbit/16.webp",
  "media/carbit/17.webp",
  "media/carbit/18.jpg",
];

const blocksUk: CaseVisualBlock[] = [
  {
    type: "section",
    index: "01",
    kicker: "ПРО КЛІЄНТА",
    title: "Пошук авто.\nВ одному просторі.",
    paragraphs: [
      "Carbit — онлайн-сервіс, що збирає автомобільні оголошення з різних майданчиків. Він допомагає порівнювати пропозиції та знаходити варіанти, які відповідають запиту користувача.",
      "Для такого продукту важливий зрозумілий перший контакт. Айдентика має швидко пояснювати сферу сервісу, добре читатися на екрані й підтримувати довіру до цифрового інструмента.",
    ],
  },
  {
    type: "facts",
    items: [
      { label: "Країна", value: "Україна", accent: true, countryCode: "UA" },
      { label: "Ніша", value: "AutoTech" },
      { label: "Продукт", value: "пошук автомобілів" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("01.jpg"), caption: "Carbit у мобільному середовищі" },
      { src: m("02.webp"), caption: "Логотип і автомобільний характер бренду" },
    ],
  },
  {
    type: "section",
    index: "02",
    kicker: "ЗАДАЧА",
    title: "Передати швидкість.\nЗберегти простоту.",
    paragraphs: [
      "Завдання ZOND — створити впізнаваний образ Carbit і поєднати в ньому технологічність, динаміку та зручність. Від знака до рекламного макета бренд мав сприйматися послідовно.",
      "Потрібна була система для різних масштабів: невеликої іконки, мобільного екрана, презентації та друкованого носія. Тому в центрі роботи — виразна форма, чітка ієрархія та контраст.",
    ],
  },
  {
    type: "deliverables",
    items: [
      { title: "Упізнаваність", description: "Знак, який зберігає характер навіть у малому розмірі." },
      { title: "Єдність", description: "Спільний принцип для екранів, реклами та друку." },
      { title: "Динаміка", description: "Візуальна мова, пов’язана з рухом і пошуком." },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("03.jpg"), caption: "Рекламна комунікація" },
      { src: m("04.webp"), caption: "Презентація на планшеті" },
    ],
  },
  {
    type: "section",
    index: "03",
    kicker: "РІШЕННЯ",
    title: "Рух закладено\nу саму форму.",
    paragraphs: [
      "Відкритий округлий знак читається як літера C. Короткий графічний елемент праворуч задає напрямок і робить силует характерним. Поруч із назвою він утворює компактну композицію, а окремо працює як маркер бренду.",
      "Чорний фон, біла типографіка та зелений акцент створюють чітку ієрархію. Автомобільна фотографія додає емоцію, а стримана верстка залишає головне місце продукту та повідомленню.",
    ],
  },
  {
    type: "manifesto",
    label: "ІДЕЯ КОМУНІКАЦІЇ",
    text: "Менше зайвого.\nБлижче до свого авто.",
    footer: "CARBIT / BRAND IDENTITY",
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("05.webp"), caption: "Кольорова система та варіанти знака" }],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("06.jpg"), caption: "Мобільна комунікація" },
      { src: m("07.jpg"), caption: "Вебматеріали Carbit" },
    ],
  },
  {
    type: "section",
    index: "",
    variant: "book",
    kicker: "СКЛАД РОБОТИ",
    title: "Одна айдентика.\nРізні формати.",
    paragraphs: [],
    rules: [
      "Логотип і знак",
      "Візуальна айдентика",
      "Презентація",
      "Друковані матеріали",
      "Вебматеріали",
      "Відеогенерація",
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("08.webp"), caption: "Презентація бренду в просторі" },
      { src: m("09.jpg"), caption: "Оформлення соціальних мереж" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("10.jpg"), caption: "Зовнішня реклама" },
      { src: m("11.webp"), caption: "Рекламна конструкція" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("12.webp"), caption: "Фірмовий брелок" },
      { src: m("13.webp"), caption: "Фірмова пляшка" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("14.jpg"), caption: "Футболка команди" },
      { src: m("15.webp"), caption: "Брендований одяг" },
    ],
  },
  {
    type: "gallery",
    layout: "pair",
    images: [
      { src: m("16.webp"), caption: "Кепка зі знаком Carbit" },
      { src: m("17.webp"), caption: "Фірмовий рушник" },
    ],
  },
  {
    type: "gallery",
    layout: "wide",
    images: [{ src: m("18.jpg"), caption: "Автомобільне оголошення" }],
  },
  {
    type: "section",
    index: "04",
    kicker: "РЕЗУЛЬТАТ",
    title: "Цілісний образ.\nВід екрана до мерчу.",
    paragraphs: [
      "Для Carbit розроблено логотип і візуальну айдентику, презентаційні, друковані та вебматеріали, а також відеогенерацію. Кейс показує систему в цифрових і фізичних форматах.",
      "У кожному носії повторюються ключові елементи: знак, контрастна палітра та лаконічна типографіка. Це дає команді зрозумілий напрям для наступних комунікацій. Бізнес-показники після впровадження в джерелі не наведені.",
    ],
  },
  {
    type: "quote",
    index: "05",
    kicker: "ВІДГУК КЛІЄНТА",
    heading: "Погляд команди Carbit.",
    paragraphs: [
      "«Нам важливо, щоб Carbit був зрозумілим із першого знайомства. У візуальній мові ми шукали відчуття швидкості, впевненість і простоту, які відповідають самому сервісу.",
      "Цей напрям об’єднує сайт, презентації та рекламні матеріали. Знак і кольори допомагають зберігати характер бренду в різних форматах — від маленької іконки до великої рекламної площини».",
    ],
    badge: "Текст для погодження з клієнтом",
    author: "Команда Carbit",
    role: "Місце для імені та посади представника",
    note: "Редакційний приклад для макета, не реальний відгук. Потребує погодження клієнтом.",
  },
];

const blocksRu: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "О КЛИЕНТЕ",
      title: "Поиск авто.\nВ одном пространстве.",
      paragraphs: [
        "Carbit — онлайн-сервис, который собирает автомобильные объявления с разных площадок. Он помогает сравнивать предложения и находить варианты, соответствующие запросу пользователя.",
        "Для такого продукта важен понятный первый контакт. Айдентика должна быстро объяснять сферу сервиса, хорошо читаться на экране и поддерживать доверие к цифровому инструменту.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "ЗАДАЧА",
      title: "Передать скорость.\nСохранить простоту.",
      paragraphs: [
        "Задача ZOND — создать узнаваемый образ Carbit и объединить в нём технологичность, динамику и удобство. От знака до рекламного макета бренд должен восприниматься последовательно.",
        "Нужна была система для разных масштабов: небольшой иконки, мобильного экрана, презентации и печатного носителя. Поэтому в центре работы — выразительная форма, чёткая иерархия и контраст.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "РЕШЕНИЕ",
      title: "Движение заложено\nв саму форму.",
      paragraphs: [
        "Открытый округлый знак читается как буква C. Короткий графический элемент справа задаёт направление и делает силуэт характерным. Рядом с названием он образует компактную композицию, а отдельно работает как маркер бренда.",
        "Чёрный фон, белая типографика и зелёный акцент создают чёткую иерархию. Автомобильная фотография добавляет эмоцию, а сдержанная вёрстка оставляет главное место продукту и сообщению.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "РЕЗУЛЬТАТ",
      title: "Целостный образ.\nОт экрана до мерча.",
      paragraphs: [
        "Для Carbit разработаны логотип и визуальная айдентика, презентационные, печатные и веб-материалы, а также видеогенерация. Кейс показывает систему в цифровых и физических форматах.",
        "В каждом носителе повторяются ключевые элементы: знак, контрастная палитра и лаконичная типографика. Это даёт команде понятное направление для следующих коммуникаций. Бизнес-показатели после внедрения в источнике не приведены.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "СОСТАВ РАБОТЫ",
      title: "Одна айдентика.\nРазные форматы.",
      rules: [
        "Логотип и знак",
        "Визуальная айдентика",
        "Презентация",
        "Печатные материалы",
        "Веб-материалы",
        "Видеогенерация",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Узнаваемость", description: "Знак, который сохраняет характер даже в малом размере." },
        { title: "Единство", description: "Общий принцип для экранов, рекламы и печати." },
        { title: "Динамика", description: "Визуальный язык, связанный с движением и поиском." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "ИДЕЯ КОММУНИКАЦИИ",
      text: "Меньше лишнего.\nБлиже к своему авто.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "ОТЗЫВ КЛИЕНТА",
      heading: "Взгляд команды Carbit.",
      paragraphs: [
        "«Нам важно, чтобы Carbit был понятным с первого знакомства. В визуальном языке мы искали ощущение скорости, уверенность и простоту, которые соответствуют самому сервису.",
        "Это направление объединяет сайт, презентации и рекламные материалы. Знак и цвета помогают сохранять характер бренда в разных форматах — от маленькой иконки до большой рекламной площади».",
      ],
      badge: "Текст для согласования с клиентом",
      author: "Команда Carbit",
      role: "Место для имени и должности представителя",
      note: "Редакционный пример для макета, не реальный отзыв. Требует согласования клиентом.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: block.items.map((item) =>
        item.label === "Країна"
          ? { ...item, label: "Страна", value: "Украина", countryCode: "UA" }
          : item.label === "Ніша"
            ? { ...item, label: "Ниша", value: "AutoTech" }
            : { ...item, label: "Продукт", value: "поиск автомобилей" },
      ),
    };
  }
  return block;
});

const blocksEn: CaseVisualBlock[] = blocksUk.map((block) => {
  if (block.type === "section" && block.index === "01") {
    return {
      ...block,
      kicker: "ABOUT CLIENT",
      title: "Car search.\nIn one space.",
      paragraphs: [
        "Carbit is an online service that aggregates car listings from different platforms. It helps users compare offers and find options that match their needs.",
        "For such a product, a clear first contact matters. The identity must quickly explain the service domain, read well on screen, and support trust in the digital tool.",
      ],
    };
  }
  if (block.type === "section" && block.index === "02") {
    return {
      ...block,
      kicker: "TASK",
      title: "Convey speed.\nKeep it simple.",
      paragraphs: [
        "ZOND's task was to create a recognizable Carbit image that combines technology, dynamism, and convenience. From the mark to the ad layout, the brand had to feel consistent.",
        "The system needed to work across scales: a small icon, mobile screen, presentation, and print. The focus was on a distinctive form, clear hierarchy, and contrast.",
      ],
    };
  }
  if (block.type === "section" && block.index === "03") {
    return {
      ...block,
      kicker: "SOLUTION",
      title: "Movement built\ninto the form.",
      paragraphs: [
        "The open rounded mark reads as the letter C. A short graphic element on the right sets direction and makes the silhouette distinctive. Next to the name it forms a compact composition; on its own it works as a brand marker.",
        "Black background, white typography, and green accent create clear hierarchy. Automotive photography adds emotion, while restrained layout keeps focus on the product and message.",
      ],
    };
  }
  if (block.type === "section" && block.index === "04") {
    return {
      ...block,
      kicker: "RESULT",
      title: "A cohesive image.\nFrom screen to merch.",
      paragraphs: [
        "For Carbit we developed a logo and visual identity, presentation, print and web materials, and video generation. The case shows the system across digital and physical formats.",
        "Each touchpoint repeats key elements: the mark, contrasting palette, and concise typography. This gives the team a clear direction for future communications. Post-launch business metrics are not cited in the source.",
      ],
    };
  }
  if (block.type === "section" && block.variant === "book") {
    return {
      ...block,
      kicker: "SCOPE OF WORK",
      title: "One identity.\nMany formats.",
      rules: [
        "Logo and symbol",
        "Visual identity",
        "Presentation",
        "Print materials",
        "Web materials",
        "Video generation",
      ],
    };
  }
  if (block.type === "deliverables") {
    return {
      ...block,
      items: [
        { title: "Recognition", description: "A mark that keeps its character even at small sizes." },
        { title: "Unity", description: "A shared principle for screens, advertising, and print." },
        { title: "Dynamism", description: "A visual language linked to movement and search." },
      ],
    };
  }
  if (block.type === "manifesto") {
    return {
      ...block,
      label: "COMMUNICATION IDEA",
      text: "Less clutter.\nCloser to your car.",
    };
  }
  if (block.type === "quote") {
    return {
      ...block,
      kicker: "CLIENT REVIEW",
      heading: "The Carbit team’s view.",
      paragraphs: [
        "“It’s important to us that Carbit is clear from the first encounter. In the visual language we looked for a sense of speed, confidence, and simplicity that matches the service itself.",
        "This direction unites the website, presentations, and advertising materials. The mark and colors help preserve the brand character across formats — from a small icon to a large ad surface.”",
      ],
      badge: "Text for client approval",
      author: "Carbit team",
      role: "Placeholder for representative name and role",
      note: "Editorial sample for the layout, not a real review. Requires client approval.",
    };
  }
  if (block.type === "facts") {
    return {
      ...block,
      items: [
        { label: "Country", value: "Ukraine", accent: true, countryCode: "UA" },
        { label: "Niche", value: "AutoTech" },
        { label: "Product", value: "car search" },
      ],
    };
  }
  return block;
});

export function getCarbitBlocks(locale: Locale): CaseVisualBlock[] {
  if (locale === "ru") return blocksRu;
  if (locale === "en") return blocksEn;
  return blocksUk;
}

export const carbitShared = {
  slug: "carbit",
  cover: m("cover.gif"),
  media: carbitMedia,
  tagline: "Бренд, що рухає\nпошук уперед.",
  serviceTag: "Брендинг + айдентика",
  body: `[IMG: media/carbit/hero.jpg]`,
};

export const carbitCopy: Record<
  Locale,
  { title: string; description: string; tagline: string; serviceTag: string }
> = {
  uk: {
    title: "Carbit",
    description:
      "Розробили логотип, візуальну айдентику та презентацію для Carbit — сервісу пошуку автомобілів. Також друкована продукція, вебматеріали й відео.",
    tagline: "Бренд, що рухає\nпошук уперед.",
    serviceTag: "Брендинг + айдентика",
  },
  ru: {
    title: "Carbit",
    description:
      "Разработали логотип, визуальную айдентику и презентацию для Carbit — сервиса поиска автомобилей. Также печатная продукция, веб-материалы и видео.",
    tagline: "Бренд, который двигает\nпоиск вперёд.",
    serviceTag: "Брендинг + айдентика",
  },
  en: {
    title: "Carbit",
    description:
      "We developed a logo, visual identity, and presentation for Carbit — a car search service. Plus print, web materials, and video.",
    tagline: "A brand that moves\nsearch forward.",
    serviceTag: "Branding + identity",
  },
};
