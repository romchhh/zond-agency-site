import type { Locale } from "@/i18n/config";

export type BrandingPageContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  sub: string;
  cta: string;
  heroCaption: string;
  heroAlt: string;
  metricsTitle: string;
  aboutEyebrow: string;
  aboutTitle: string;
  about: string[];
  includesEyebrow: string;
  includesTitle: string;
  gallery: Array<{ src: string; alt: string; caption: string }>;
  items: Array<{ index: string; title: string; description: string }>;
  casesEyebrow: string;
  casesTitle: string;
  casesCopy: string[];
  reviewsEyebrow: string;
  reviewsTitle: string;
  reviewsNote: string;
  reviews: Array<{
    label: string;
    quote: string;
    name: string;
    role: string;
  }>;
  productEyebrow: string;
  productTitle: string;
  productNote: string;
  products: Array<{ src: string; alt: string; caption: string }>;
  processEyebrow: string;
  processTitle: string;
  process: Array<{ index: string; title: string; description: string }>;
  needEyebrow: string;
  needTitle: string;
  needs: Array<{ index: string; title: string; description: string }>;
  whyEyebrow: string;
  whyTitle: string;
  why: Array<{ title: string; description: string }>;
  peopleAlt: string[];
  receiveEyebrow: string;
  receiveTitle: string;
  receive: string[];
  faqEyebrow: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  finalEyebrow: string;
  finalTitle: string;
  finalCopy: string;
};

const gallery = [
  { src: "/branding/logo-sketches.png", altKey: "sketches" },
  { src: "/branding/color-palette.png", altKey: "palette" },
  { src: "/branding/brand-stationery.png", altKey: "stationery" },
  { src: "/branding/brand-guidelines.png", altKey: "guidelines" },
] as const;

const products = [
  { src: "/branding/product-skincare.png", key: "skincare" },
  { src: "/branding/product-coffee.png", key: "coffee" },
  { src: "/branding/product-tea.png", key: "tea" },
  { src: "/branding/product-drinks.png", key: "drinks" },
  { src: "/branding/product-retail.png", key: "retail" },
  { src: "/branding/product-stationery.png", key: "stationery" },
] as const;

const people = [
  "/branding/people-creative.png",
  "/branding/people-founder.png",
  "/branding/people-team.png",
] as const;

const uk: BrandingPageContent = {
  eyebrow: "Послуги / Брендинг",
  title: "Розробка бренду\nта брендинг",
  titleAccent: "для бізнесу.",
  lead: "Створюємо бренди, які мають чітке позиціонування, впізнавану айдентику та працюють на бізнес-цілі.",
  sub: "Від дослідження ринку та стратегії до неймінгу, логотипу, фірмового стилю й брендбуку.",
  cta: "Обговорити проєкт",
  heroCaption: "Від першої ідеї — до цілісної системи.",
  heroAlt: "Робота над візуальною системою бренду: ескізи, палітра та друковані носії",
  metricsTitle: "Наші переваги в цифрах",
  aboutEyebrow: "Про брендинг",
  aboutTitle: "Створюємо не просто логотип. Створюємо бренд.",
  about: [
    "Сильний бренд — це система, у якій стратегія, позиціонування, назва, візуальний стиль і комунікація працюють як одне ціле.",
    "У ZOND ми починаємо не з дизайну, а з розуміння бізнесу, продукту, аудиторії та конкурентного середовища.",
    "Так з’являється бренд, який не просто виглядає актуально, а має власний характер, зрозумілу ідею та впізнаваний образ.",
  ],
  includesEyebrow: "Що входить",
  includesTitle: "Що входить у розробку бренду",
  gallery: [
    { src: gallery[0].src, alt: "Ескізи логотипу", caption: "Пошук форми" },
    { src: gallery[1].src, alt: "Підбір кольорів бренду", caption: "Колір і типографіка" },
    { src: gallery[2].src, alt: "Фірмові друковані носії", caption: "Айдентика в деталях" },
    { src: gallery[3].src, alt: "Розворот брендбуку", caption: "Правила бренду" },
  ],
  items: [
    { index: "01", title: "Стратегія бренду", description: "Досліджуємо ринок, конкурентів, аудиторію та бізнес-контекст. Визначаємо основу, на якій буде будуватися бренд." },
    { index: "02", title: "Позиціонування", description: "Формуємо ключову ідею бренду, його цінність для аудиторії, характер та відмінності від конкурентів." },
    { index: "03", title: "Неймінг", description: "Створюємо назву, яка відповідає позиціонуванню, легко сприймається та може розвиватися разом із бізнесом." },
    { index: "04", title: "Логотип", description: "Розробляємо візуальний знак, який відображає характер бренду та залишається актуальним незалежно від короткострокових дизайн-трендів." },
    { index: "05", title: "Айдентика", description: "Створюємо систему візуальних елементів: кольори, типографіку, графіку, композиційні принципи, фотостиль та інші носії бренду." },
    { index: "06", title: "Брендбук", description: "Систематизуємо правила використання бренду, щоб його комунікація залишалася цілісною у digital, print, рекламі, соцмережах та інших каналах." },
    { index: "07", title: "Слоган і комунікація", description: "Формуємо повідомлення та принципи комунікації, які допомагають бренду говорити з аудиторією послідовно й упізнавано." },
    { index: "08", title: "Персонаж бренду", description: "За потреби створюємо бренд-персонажа, який додає комунікації емоційності та допомагає вибудовувати сильніший зв’язок з аудиторією." },
  ],
  casesEyebrow: "Реальні результати",
  casesTitle: "Брендинг, який працює в реальному бізнесі",
  casesCopy: [
    "Для нас бренд — не презентація, яка закінчується на логотипі.",
    "Ми створюємо систему, яку можна масштабувати на сайт, соціальні мережі, упаковку, рекламу, простір, друковані матеріали та нові продукти.",
  ],
  reviewsEyebrow: "Досвід співпраці",
  reviewsTitle: "Відгуки клієнтів",
  reviewsNote: "Демонстраційні тексти для макета. Не є реальними відгуками клієнтів.",
  reviews: [
    { label: "Приклад відгуку 01", quote: "На старті нам було важливо зрозуміти, чим бренд відрізняється від конкурентів. У результаті отримали чітку ідею та візуальний напрям, навколо яких легко будувати комунікацію.", name: "Ім’я клієнта · Компанія", role: "Стратегія та позиціонування" },
    { label: "Приклад відгуку 02", quote: "Хотіли, щоб бренд виглядав цілісно на всіх носіях. Логотип, кольори й типографіка склалися в єдину систему, з якою зручно працювати нашій команді.", name: "Ім’я клієнта · Компанія", role: "Логотип та айдентика" },
    { label: "Приклад відгуку 03", quote: "Для нас було важливо побачити дизайн на самому продукті. Продумане пакування й увага до деталей допомогли передати характер бренду та підготувати його до запуску.", name: "Ім’я клієнта · Компанія", role: "Пакування та носії" },
    { label: "Приклад відгуку 04", quote: "Ми отримали зрозумілі правила використання айдентики. Тепер простіше готувати нові матеріали, ставити завдання підрядникам і зберігати єдиний стиль бренду.", name: "Ім’я клієнта · Компанія", role: "Брендбук та розвиток" },
  ],
  productEyebrow: "Бренд у кожній деталі",
  productTitle: "Від айдентики — до продукту.",
  productNote: "Ілюстративні концепти пакування та брендованих носіїв.",
  products: [
    { src: products[0].src, alt: "Косметичні туби, флакон і баночка у світлому пакуванні", caption: "Косметика" },
    { src: products[1].src, alt: "Пакет кави та стакан із фірмовим оформленням", caption: "Кава" },
    { src: products[2].src, alt: "Мінімалістичне пакування чаю", caption: "Чай" },
    { src: products[3].src, alt: "Скляні пляшки напоїв із лаконічними етикетками", caption: "Напої" },
    { src: products[4].src, alt: "Пакет, коробка та бирка у єдиному стилі", caption: "Ритейл" },
    { src: products[5].src, alt: "Блокнот, ручка та візитівки", caption: "Брендовані носії" },
  ],
  processEyebrow: "Процес",
  processTitle: "Як ми створюємо бренд",
  process: [
    { index: "01", title: "Знайомство", description: "Знайомимося з бізнесом, продуктом, командою та майбутніми задачами бренду." },
    { index: "02", title: "Дослідження", description: "Аналізуємо категорію, ринок, конкурентів, аудиторію та контекст, у якому бренд буде розвиватися." },
    { index: "03", title: "Стратегія", description: "Формуємо позиціонування, характер бренду, ключові переваги та центральну ідею." },
    { index: "04", title: "Концепція", description: "Шукаємо візуальний та вербальний напрям, який найточніше передає ідею бренду." },
    { index: "05", title: "Айдентика", description: "Створюємо логотип, кольорову систему, типографіку, графічну мову та ключові носії." },
    { index: "06", title: "Система", description: "Об’єднуємо всі елементи у цілісну систему та готуємо бренд до запуску й масштабування." },
  ],
  needEyebrow: "Коли потрібно",
  needTitle: "Коли бізнесу потрібен брендинг",
  needs: [
    { index: "01", title: "Запуск нового бренду", description: "Допомагаємо сформувати сильну основу ще до виходу продукту на ринок." },
    { index: "02", title: "Ребрендинг", description: "Оновлюємо бренд, якщо старий образ більше не відповідає бізнесу, продукту або аудиторії." },
    { index: "03", title: "Запуск нового продукту", description: "Створюємо окрему айдентику, sub-brand або новий бренд у межах існуючого бізнесу." },
    { index: "04", title: "Масштабування", description: "Систематизуємо бренд перед виходом на нові ринки, запуском нових напрямів або активним ростом компанії." },
  ],
  whyEyebrow: "Чому ZOND",
  whyTitle: "Чому ZOND",
  why: [
    { title: "Стратегія + дизайн", description: "Поєднуємо маркетингове мислення та сильну візуальну складову." },
    { title: "Повний цикл", description: "Від дослідження та позиціонування до айдентики, брендбуку і запуску." },
    { title: "Не працюємо за шаблоном", description: "Рішення створюються навколо конкретного бізнесу, продукту та його аудиторії." },
    { title: "Бренд, який можна масштабувати", description: "Одразу думаємо про те, як система працюватиме на сайті, у рекламі, соцмережах, упаковці, просторі та інших носіях." },
  ],
  peopleAlt: [
    "Усміхнені колеги обговорюють дизайн",
    "Підприємиця тримає пакування продукту",
    "Колеги радіють спільному результату",
  ],
  receiveEyebrow: "Результат",
  receiveTitle: "Що ви отримуєте",
  receive: [
    "Стратегічну основу бренду.",
    "Чітке позиціонування.",
    "Візуальну концепцію.",
    "Логотип та айдентику.",
    "Систему кольорів і типографіки.",
    "Ключові бренд-носії.",
    "Правила комунікації.",
    "Брендбук або guideline.",
    "Готову систему для подальшого розвитку бренду.",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Відповідаємо на запитання",
  faq: [
    { question: "Скільки коштує розробка бренду?", answer: "Вартість залежить від масштабу задачі та складу робіт. Для одного проєкту достатньо айдентики та брендбуку, для іншого потрібні дослідження, стратегія, позиціонування, неймінг, комунікація та повний набір носіїв.\n\nПісля знайомства з проєктом ми формуємо оптимальний склад робіт і кошторис." },
    { question: "Скільки часу займає створення бренду?", answer: "Термін залежить від обсягу проєкту. Комплексний брендинг включає кілька послідовних етапів: дослідження, стратегію, концепцію, розробку айдентики та підготовку фінальної системи." },
    { question: "Чим брендинг відрізняється від розробки логотипу?", answer: "Логотип — лише один із елементів бренду.\n\nБрендинг охоплює позиціонування, характер, комунікацію, візуальну систему та правила, за якими бренд взаємодіє з аудиторією." },
    { question: "Чи можна замовити тільки айдентику або логотип?", answer: "Так. Склад робіт визначається залежно від задачі та поточного стану бренду." },
    { question: "Чи займаєтеся ви ребрендингом?", answer: "Так. Ми можемо оновити як окремі елементи існуючого бренду, так і повністю переглянути його позиціонування та візуальну систему." },
    { question: "Чи працюєте ви з брендами за межами України?", answer: "Так. Процес брендингу може повністю проходити онлайн, тому ми можемо працювати з командами та компаніями з різних країн." },
  ],
  finalEyebrow: "Почнемо?",
  finalTitle: "Побудуємо бренд, який буде складно не помітити.",
  finalCopy: "Розкажіть про ваш бізнес, продукт або ідею.\nМи запропонуємо формат роботи, який найкраще відповідає задачі.",
};

const en: BrandingPageContent = {
  ...uk,
  eyebrow: "Services / Branding",
  title: "Brand development\nand branding",
  titleAccent: "for business.",
  lead: "We create brands with clear positioning, distinctive identity, and a system that works for business goals.",
  sub: "From market research and strategy to naming, logo, visual identity, and a brand book.",
  cta: "Discuss the project",
  heroCaption: "From the first idea to a complete system.",
  heroAlt: "Work on a brand visual system: sketches, palette, and printed media",
  metricsTitle: "Our advantages in numbers",
  aboutEyebrow: "About branding",
  aboutTitle: "We don’t just make a logo. We build a brand.",
  about: [
    "A strong brand is a system where strategy, positioning, name, visual style, and communication work as one.",
    "At ZOND we start not with design, but with an understanding of the business, product, audience, and competitive landscape.",
    "That’s how a brand appears that doesn’t just look current, but has its own character, a clear idea, and a recognizable image.",
  ],
  includesEyebrow: "What’s included",
  includesTitle: "What’s included in brand development",
  gallery: [
    { src: gallery[0].src, alt: "Logo sketches", caption: "Form exploration" },
    { src: gallery[1].src, alt: "Brand color palette", caption: "Color and typography" },
    { src: gallery[2].src, alt: "Brand stationery", caption: "Identity in detail" },
    { src: gallery[3].src, alt: "Brand book spread", caption: "Brand rules" },
  ],
  items: [
    { index: "01", title: "Brand strategy", description: "We research the market, competitors, audience, and business context to define the foundation of the brand." },
    { index: "02", title: "Positioning", description: "We shape the core idea, value for the audience, character, and differences from competitors." },
    { index: "03", title: "Naming", description: "We create a name that matches the positioning, is easy to perceive, and can grow with the business." },
    { index: "04", title: "Logo", description: "We design a visual mark that reflects the brand character and stays relevant beyond short-term trends." },
    { index: "05", title: "Identity", description: "We build a visual system: colors, typography, graphics, composition, photo style, and other brand media." },
    { index: "06", title: "Brand book", description: "We systematize brand usage rules so communication stays consistent across digital, print, ads, and social." },
    { index: "07", title: "Slogan and communication", description: "We form messages and communication principles that help the brand speak consistently and recognizably." },
    { index: "08", title: "Brand character", description: "When needed, we create a brand character that adds emotion and a stronger connection with the audience." },
  ],
  casesEyebrow: "Real results",
  casesTitle: "Branding that works in real business",
  casesCopy: [
    "For us a brand is not a presentation that ends with a logo.",
    "We create a system that can scale to a website, social media, packaging, advertising, space, print, and new products.",
  ],
  reviewsEyebrow: "Collaboration",
  reviewsTitle: "Client reviews",
  reviewsNote: "Sample texts for the layout. These are not real client reviews.",
  reviews: [
    { label: "Sample review 01", quote: "At the start it was important to understand how the brand differs from competitors. We got a clear idea and a visual direction that is easy to build communication around.", name: "Client name · Company", role: "Strategy and positioning" },
    { label: "Sample review 02", quote: "We wanted the brand to look consistent across all media. Logo, colors, and typography became one system that our team can actually use.", name: "Client name · Company", role: "Logo and identity" },
    { label: "Sample review 03", quote: "It was important to see the design on the product itself. Thoughtful packaging and attention to detail helped convey the brand character and prepare it for launch.", name: "Client name · Company", role: "Packaging and media" },
    { label: "Sample review 04", quote: "We received clear rules for using the identity. It is now easier to prepare new materials, brief vendors, and keep a unified brand style.", name: "Client name · Company", role: "Brand book and growth" },
  ],
  productEyebrow: "Brand in every detail",
  productTitle: "From identity to product.",
  productNote: "Illustrative concepts of packaging and branded media.",
  products: [
    { src: products[0].src, alt: "Cosmetic tubes, bottle, and jar in light packaging", caption: "Skincare" },
    { src: products[1].src, alt: "Coffee bag and cup with branded design", caption: "Coffee" },
    { src: products[2].src, alt: "Minimal tea packaging", caption: "Tea" },
    { src: products[3].src, alt: "Glass drink bottles with concise labels", caption: "Drinks" },
    { src: products[4].src, alt: "Bag, box, and tag in one style", caption: "Retail" },
    { src: products[5].src, alt: "Notebook, pen, and business cards", caption: "Branded media" },
  ],
  processEyebrow: "Process",
  processTitle: "How we create a brand",
  process: [
    { index: "01", title: "Introduction", description: "We get to know the business, product, team, and future brand tasks." },
    { index: "02", title: "Research", description: "We analyze the category, market, competitors, audience, and the context in which the brand will grow." },
    { index: "03", title: "Strategy", description: "We form positioning, brand character, key advantages, and the central idea." },
    { index: "04", title: "Concept", description: "We look for a visual and verbal direction that best expresses the brand idea." },
    { index: "05", title: "Identity", description: "We create the logo, color system, typography, graphic language, and key media." },
    { index: "06", title: "System", description: "We unite all elements into a complete system and prepare the brand for launch and scale." },
  ],
  needEyebrow: "When you need it",
  needTitle: "When a business needs branding",
  needs: [
    { index: "01", title: "Launching a new brand", description: "We help build a strong foundation before the product enters the market." },
    { index: "02", title: "Rebranding", description: "We update the brand when the old image no longer matches the business, product, or audience." },
    { index: "03", title: "Launching a new product", description: "We create a separate identity, sub-brand, or a new brand within an existing business." },
    { index: "04", title: "Scaling", description: "We systematize the brand before entering new markets, launching new directions, or active growth." },
  ],
  whyEyebrow: "Why ZOND",
  whyTitle: "Why ZOND",
  why: [
    { title: "Strategy + design", description: "We combine marketing thinking with a strong visual layer." },
    { title: "Full cycle", description: "From research and positioning to identity, brand book, and launch." },
    { title: "No templates", description: "Solutions are built around a specific business, product, and audience." },
    { title: "A brand you can scale", description: "We think from the start about how the system will work on the website, in ads, social, packaging, space, and other media." },
  ],
  peopleAlt: [
    "Colleagues discussing design",
    "Founder holding product packaging",
    "Team celebrating a shared result",
  ],
  receiveEyebrow: "Result",
  receiveTitle: "What you get",
  receive: [
    "A strategic brand foundation.",
    "Clear positioning.",
    "A visual concept.",
    "Logo and identity.",
    "A color and typography system.",
    "Key brand media.",
    "Communication rules.",
    "A brand book or guideline.",
    "A ready system for further brand growth.",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Answers to common questions",
  faq: [
    { question: "How much does brand development cost?", answer: "The cost depends on the scale of the task and the scope of work. One project may need identity and a brand book; another may need research, strategy, positioning, naming, communication, and a full set of media.\n\nAfter we get to know the project, we form the right scope and estimate." },
    { question: "How long does it take to create a brand?", answer: "The timeline depends on the project scope. Comprehensive branding includes several stages: research, strategy, concept, identity development, and the final system." },
    { question: "How is branding different from logo design?", answer: "A logo is only one element of a brand.\n\nBranding covers positioning, character, communication, the visual system, and the rules by which the brand meets its audience." },
    { question: "Can I order only identity or a logo?", answer: "Yes. The scope of work is defined by the task and the current state of the brand." },
    { question: "Do you do rebranding?", answer: "Yes. We can update separate elements of an existing brand or fully revisit its positioning and visual system." },
    { question: "Do you work with brands outside Ukraine?", answer: "Yes. The branding process can run fully online, so we can work with teams and companies from different countries." },
  ],
  finalEyebrow: "Shall we start?",
  finalTitle: "Let’s build a brand that’s hard not to notice.",
  finalCopy: "Tell us about your business, product, or idea.\nWe’ll suggest a format that fits the task best.",
};

const ru: BrandingPageContent = {
  ...uk,
  eyebrow: "Услуги / Брендинг",
  title: "Разработка бренда\nи брендинг",
  titleAccent: "для бизнеса.",
  lead: "Создаём бренды с чётким позиционированием, узнаваемой айдентикой и системой, которая работает на бизнес-цели.",
  sub: "От исследования рынка и стратегии до нейминга, логотипа, фирменного стиля и брендбука.",
  cta: "Обсудить проект",
  heroCaption: "От первой идеи — к целостной системе.",
  heroAlt: "Работа над визуальной системой бренда: эскизы, палитра и печатные носители",
  metricsTitle: "Наши преимущества в цифрах",
  aboutEyebrow: "О брендинге",
  aboutTitle: "Создаём не просто логотип. Создаём бренд.",
  about: [
    "Сильный бренд — это система, в которой стратегия, позиционирование, название, визуальный стиль и коммуникация работают как одно целое.",
    "В ZOND мы начинаем не с дизайна, а с понимания бизнеса, продукта, аудитории и конкурентной среды.",
    "Так появляется бренд, который не просто выглядит актуально, а имеет собственный характер, понятную идею и узнаваемый образ.",
  ],
  includesEyebrow: "Что входит",
  includesTitle: "Что входит в разработку бренда",
  gallery: [
    { src: gallery[0].src, alt: "Эскизы логотипа", caption: "Поиск формы" },
    { src: gallery[1].src, alt: "Подбор цветов бренда", caption: "Цвет и типографика" },
    { src: gallery[2].src, alt: "Фирменные печатные носители", caption: "Айдентика в деталях" },
    { src: gallery[3].src, alt: "Разворот брендбука", caption: "Правила бренда" },
  ],
  items: [
    { index: "01", title: "Стратегия бренда", description: "Исследуем рынок, конкурентов, аудиторию и бизнес-контекст. Определяем основу, на которой будет строиться бренд." },
    { index: "02", title: "Позиционирование", description: "Формируем ключевую идею бренда, его ценность для аудитории, характер и отличия от конкурентов." },
    { index: "03", title: "Нейминг", description: "Создаём название, которое соответствует позиционированию, легко воспринимается и может развиваться вместе с бизнесом." },
    { index: "04", title: "Логотип", description: "Разрабатываем визуальный знак, который отражает характер бренда и остаётся актуальным вне краткосрочных трендов." },
    { index: "05", title: "Айдентика", description: "Создаём систему визуальных элементов: цвета, типографику, графику, композиционные принципы, фотостиль и другие носители бренда." },
    { index: "06", title: "Брендбук", description: "Систематизируем правила использования бренда, чтобы коммуникация оставалась целостной в digital, print, рекламе и соцсетях." },
    { index: "07", title: "Слоган и коммуникация", description: "Формируем сообщения и принципы коммуникации, которые помогают бренду говорить с аудиторией последовательно и узнаваемо." },
    { index: "08", title: "Персонаж бренда", description: "При необходимости создаём бренд-персонажа, который добавляет коммуникации эмоциональности и помогает выстраивать более сильную связь с аудиторией." },
  ],
  casesEyebrow: "Реальные результаты",
  casesTitle: "Брендинг, который работает в реальном бизнесе",
  casesCopy: [
    "Для нас бренд — не презентация, которая заканчивается на логотипе.",
    "Мы создаём систему, которую можно масштабировать на сайт, социальные сети, упаковку, рекламу, пространство, печатные материалы и новые продукты.",
  ],
  reviewsEyebrow: "Опыт сотрудничества",
  reviewsTitle: "Отзывы клиентов",
  reviewsNote: "Демонстрационные тексты для макета. Не являются реальными отзывами клиентов.",
  reviews: [
    { label: "Пример отзыва 01", quote: "На старте нам было важно понять, чем бренд отличается от конкурентов. В результате получили чёткую идею и визуальное направление, вокруг которых легко строить коммуникацию.", name: "Имя клиента · Компания", role: "Стратегия и позиционирование" },
    { label: "Пример отзыва 02", quote: "Хотели, чтобы бренд выглядел целостно на всех носителях. Логотип, цвета и типографика сложились в единую систему, с которой удобно работать нашей команде.", name: "Имя клиента · Компания", role: "Логотип и айдентика" },
    { label: "Пример отзыва 03", quote: "Для нас было важно увидеть дизайн на самом продукте. Продуманная упаковка и внимание к деталям помогли передать характер бренда и подготовить его к запуску.", name: "Имя клиента · Компания", role: "Упаковка и носители" },
    { label: "Пример отзыва 04", quote: "Мы получили понятные правила использования айдентики. Теперь проще готовить новые материалы, ставить задачи подрядчикам и сохранять единый стиль бренда.", name: "Имя клиента · Компания", role: "Брендбук и развитие" },
  ],
  productEyebrow: "Бренд в каждой детали",
  productTitle: "От айдентики — к продукту.",
  productNote: "Иллюстративные концепты упаковки и брендированных носителей.",
  products: [
    { src: products[0].src, alt: "Косметические тубы, флакон и баночка в светлой упаковке", caption: "Косметика" },
    { src: products[1].src, alt: "Пакет кофе и стакан с фирменным оформлением", caption: "Кофе" },
    { src: products[2].src, alt: "Минималистичная упаковка чая", caption: "Чай" },
    { src: products[3].src, alt: "Стеклянные бутылки напитков с лаконичными этикетками", caption: "Напитки" },
    { src: products[4].src, alt: "Пакет, коробка и бирка в едином стиле", caption: "Ритейл" },
    { src: products[5].src, alt: "Блокнот, ручка и визитки", caption: "Брендированные носители" },
  ],
  processEyebrow: "Процесс",
  processTitle: "Как мы создаём бренд",
  process: [
    { index: "01", title: "Знакомство", description: "Знакомимся с бизнесом, продуктом, командой и будущими задачами бренда." },
    { index: "02", title: "Исследование", description: "Анализируем категорию, рынок, конкурентов, аудиторию и контекст, в котором бренд будет развиваться." },
    { index: "03", title: "Стратегия", description: "Формируем позиционирование, характер бренда, ключевые преимущества и центральную идею." },
    { index: "04", title: "Концепция", description: "Ищем визуальное и вербальное направление, которое точнее всего передаёт идею бренда." },
    { index: "05", title: "Айдентика", description: "Создаём логотип, цветовую систему, типографику, графический язык и ключевые носители." },
    { index: "06", title: "Система", description: "Объединяем все элементы в целостную систему и готовим бренд к запуску и масштабированию." },
  ],
  needEyebrow: "Когда нужно",
  needTitle: "Когда бизнесу нужен брендинг",
  needs: [
    { index: "01", title: "Запуск нового бренда", description: "Помогаем сформировать сильную основу ещё до выхода продукта на рынок." },
    { index: "02", title: "Ребрендинг", description: "Обновляем бренд, если старый образ больше не соответствует бизнесу, продукту или аудитории." },
    { index: "03", title: "Запуск нового продукта", description: "Создаём отдельную айдентику, sub-brand или новый бренд в рамках существующего бизнеса." },
    { index: "04", title: "Масштабирование", description: "Систематизируем бренд перед выходом на новые рынки, запуском новых направлений или активным ростом компании." },
  ],
  whyEyebrow: "Почему ZOND",
  whyTitle: "Почему ZOND",
  why: [
    { title: "Стратегия + дизайн", description: "Соединяем маркетинговое мышление и сильную визуальную составляющую." },
    { title: "Полный цикл", description: "От исследования и позиционирования до айдентики, брендбука и запуска." },
    { title: "Не работаем по шаблону", description: "Решения создаются вокруг конкретного бизнеса, продукта и его аудитории." },
    { title: "Бренд, который можно масштабировать", description: "Сразу думаем о том, как система будет работать на сайте, в рекламе, соцсетях, упаковке, пространстве и других носителях." },
  ],
  peopleAlt: [
    "Коллеги обсуждают дизайн",
    "Предпринимательница держит упаковку продукта",
    "Команда радуется общему результату",
  ],
  receiveEyebrow: "Результат",
  receiveTitle: "Что вы получаете",
  receive: [
    "Стратегическую основу бренда.",
    "Чёткое позиционирование.",
    "Визуальную концепцию.",
    "Логотип и айдентику.",
    "Систему цветов и типографики.",
    "Ключевые бренд-носители.",
    "Правила коммуникации.",
    "Брендбук или guideline.",
    "Готовую систему для дальнейшего развития бренда.",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Отвечаем на вопросы",
  faq: [
    { question: "Сколько стоит разработка бренда?", answer: "Стоимость зависит от масштаба задачи и состава работ. Для одного проекта достаточно айдентики и брендбука, для другого нужны исследования, стратегия, позиционирование, нейминг, коммуникация и полный набор носителей.\n\nПосле знакомства с проектом мы формируем оптимальный состав работ и смету." },
    { question: "Сколько времени занимает создание бренда?", answer: "Срок зависит от объёма проекта. Комплексный брендинг включает несколько последовательных этапов: исследование, стратегию, концепцию, разработку айдентики и подготовку финальной системы." },
    { question: "Чем брендинг отличается от разработки логотипа?", answer: "Логотип — лишь один из элементов бренда.\n\nБрендинг охватывает позиционирование, характер, коммуникацию, визуальную систему и правила, по которым бренд взаимодействует с аудиторией." },
    { question: "Можно ли заказать только айдентику или логотип?", answer: "Да. Состав работ определяется в зависимости от задачи и текущего состояния бренда." },
    { question: "Занимаетесь ли вы ребрендингом?", answer: "Да. Мы можем обновить как отдельные элементы существующего бренда, так и полностью пересмотреть его позиционирование и визуальную систему." },
    { question: "Работаете ли вы с брендами за пределами Украины?", answer: "Да. Процесс брендинга может полностью проходить онлайн, поэтому мы можем работать с командами и компаниями из разных стран." },
  ],
  finalEyebrow: "Начнём?",
  finalTitle: "Построим бренд, который будет сложно не заметить.",
  finalCopy: "Расскажите о вашем бизнесе, продукте или идее.\nМы предложим формат работы, который лучше всего соответствует задаче.",
};

export const brandingPage: Record<Locale, BrandingPageContent> = { uk, en, ru };

export const brandingPeople = people;
