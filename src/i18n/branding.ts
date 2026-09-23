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
  includesEyebrow: string;
  includesTitle: string;
  items: Array<{ index: string; title: string; description: string; image: string; alt: string }>;
  casesTitle: string;
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

const brandingIncludeImageOrder = [
  "/branding/include-strategy.png",
  "/branding/include-positioning.png",
  "/branding/include-naming.png",
  "/branding/include-logo.png",
  "/branding/include-identity.jpg",
  "/branding/include-brandbook.jpg",
  "/branding/include-communication.jpg",
  "/branding/include-character.jpg",
] as const;

type IncludeItemInput = {
  index: string;
  title: string;
  description: string;
  alt: string;
};

function withBrandingImages(items: IncludeItemInput[]) {
  return items.map((item, index) => ({
    ...item,
    image: brandingIncludeImageOrder[index] ?? brandingIncludeImageOrder[0],
  }));
}

const products = [
  { src: "/branding/product-mug.jpg", key: "mug" },
  { src: "/branding/product-stickers.jpg", key: "stickers" },
  { src: "/branding/product-social.jpg", key: "social" },
  { src: "/branding/product-cap.jpg", key: "cap" },
  { src: "/branding/product-packaging.jpg", key: "packaging" },
  { src: "/branding/product-outdoor.jpg", key: "outdoor" },
] as const;

const uk: BrandingPageContent = {
  eyebrow: "Послуги / Брендинг",
  title: "Розробка бренду\nта брендинг",
  titleAccent: "для бізнесу.",
  lead: "Створюємо бренди, які мають чітке позиціонування, впізнавану айдентику та працюють на бізнес-цілі.",
  sub: "Від дослідження ринку та стратегії до неймінгу, логотипу, фірмового стилю й брендбуку.",
  cta: "Обговорити проєкт",
  heroCaption: "Від першої ідеї — до цілісної системи.",
  heroAlt: "Робота над айдентикою бренду: візитівка, палітра кольорів і друковані носії",
  metricsTitle: "Наші переваги в цифрах",
  includesEyebrow: "Що входить",
  includesTitle: "Що входить у розробку бренду",
  items: withBrandingImages([
    { index: "01", title: "Стратегія бренду", description: "Досліджуємо ринок, конкурентів, аудиторію та бізнес-контекст. Визначаємо основу, на якій буде будуватися бренд.", alt: "Стратегія бренду" },
    { index: "02", title: "Позиціонування", description: "Формуємо ключову ідею бренду, його цінність для аудиторії, характер та відмінності від конкурентів.", alt: "Позиціонування бренду" },
    { index: "03", title: "Неймінг", description: "Створюємо назву, яка відповідає позиціонуванню, легко сприймається та може розвиватися разом із бізнесом.", alt: "Неймінг бренду" },
    { index: "04", title: "Логотип", description: "Розробляємо візуальний знак, який відображає характер бренду та залишається актуальним незалежно від короткострокових дизайн-трендів.", alt: "Розробка логотипу" },
    { index: "05", title: "Айдентика", description: "Створюємо систему візуальних елементів: кольори, типографіку, графіку, композиційні принципи, фотостиль та інші носії бренду.", alt: "Візуальна айдентика" },
    { index: "06", title: "Брендбук", description: "Систематизуємо правила використання бренду, щоб його комунікація залишалася цілісною у digital, print, рекламі, соцмережах та інших каналах.", alt: "Брендбук" },
    { index: "07", title: "Слоган і комунікація", description: "Формуємо повідомлення та принципи комунікації, які допомагають бренду говорити з аудиторією послідовно й упізнавано.", alt: "Слоган і комунікація бренду" },
    { index: "08", title: "Персонаж бренду", description: "За потреби створюємо бренд-персонажа, який додає комунікації емоційності та допомагає вибудовувати сильніший зв’язок з аудиторією.", alt: "Персонаж бренду" },
  ]),
  casesTitle: "Реалізовані кейси",
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
    { src: products[0].src, alt: "Брендована керамічна кружка з логотипом", caption: "Брендовані носії" },
    { src: products[1].src, alt: "Наліпки та мерч на ноутбуці", caption: "Мерч" },
    { src: products[2].src, alt: "Оформлення сторінки бренду в соцмережах", caption: "Соцмережі" },
    { src: products[3].src, alt: "Брендований кепка з вишитим логотипом", caption: "Одяг" },
    { src: products[4].src, alt: "Пакування з фірмовою стрічкою та логотипом", caption: "Пакування" },
    { src: products[5].src, alt: "Зовнішня реклама з айдентикою бренду", caption: "Outdoor" },
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
  heroAlt: "Brand identity work: business card, color palette, and printed media",
  metricsTitle: "Our advantages in numbers",
  includesEyebrow: "What’s included",
  includesTitle: "What’s included in brand development",
  items: withBrandingImages([
    { index: "01", title: "Brand strategy", description: "We research the market, competitors, audience, and business context to define the foundation of the brand.", alt: "Brand strategy" },
    { index: "02", title: "Positioning", description: "We shape the core idea, value for the audience, character, and differences from competitors.", alt: "Brand positioning" },
    { index: "03", title: "Naming", description: "We create a name that matches the positioning, is easy to perceive, and can grow with the business.", alt: "Brand naming" },
    { index: "04", title: "Logo", description: "We design a visual mark that reflects the brand character and stays relevant beyond short-term trends.", alt: "Logo design" },
    { index: "05", title: "Identity", description: "We build a visual system: colors, typography, graphics, composition, photo style, and other brand media.", alt: "Visual identity" },
    { index: "06", title: "Brand book", description: "We systematize brand usage rules so communication stays consistent across digital, print, ads, and social.", alt: "Brand book" },
    { index: "07", title: "Slogan and communication", description: "We form messages and communication principles that help the brand speak consistently and recognizably.", alt: "Slogan and communication" },
    { index: "08", title: "Brand character", description: "When needed, we create a brand character that adds emotion and a stronger connection with the audience.", alt: "Brand character" },
  ]),
  casesTitle: "Completed cases",
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
    { src: products[0].src, alt: "Branded ceramic mug with logo", caption: "Branded media" },
    { src: products[1].src, alt: "Stickers and merch on a laptop", caption: "Merch" },
    { src: products[2].src, alt: "Brand page design on social media", caption: "Social" },
    { src: products[3].src, alt: "Branded cap with embroidered logo", caption: "Apparel" },
    { src: products[4].src, alt: "Packaging with branded tape and logo", caption: "Packaging" },
    { src: products[5].src, alt: "Outdoor advertising with brand identity", caption: "Outdoor" },
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
  heroAlt: "Работа над айдентикой бренда: визитка, палитра цветов и печатные носители",
  metricsTitle: "Наши преимущества в цифрах",
  includesEyebrow: "Что входит",
  includesTitle: "Что входит в разработку бренда",
  items: withBrandingImages([
    { index: "01", title: "Стратегия бренда", description: "Исследуем рынок, конкурентов, аудиторию и бизнес-контекст. Определяем основу, на которой будет строиться бренд.", alt: "Стратегия бренда" },
    { index: "02", title: "Позиционирование", description: "Формируем ключевую идею бренда, его ценность для аудитории, характер и отличия от конкурентов.", alt: "Позиционирование бренда" },
    { index: "03", title: "Нейминг", description: "Создаём название, которое соответствует позиционированию, легко воспринимается и может развиваться вместе с бизнесом.", alt: "Нейминг бренда" },
    { index: "04", title: "Логотип", description: "Разрабатываем визуальный знак, который отражает характер бренда и остаётся актуальным вне краткосрочных трендов.", alt: "Разработка логотипа" },
    { index: "05", title: "Айдентика", description: "Создаём систему визуальных элементов: цвета, типографику, графику, композиционные принципы, фотостиль и другие носители бренда.", alt: "Визуальная айдентика" },
    { index: "06", title: "Брендбук", description: "Систематизируем правила использования бренда, чтобы коммуникация оставалась целостной в digital, print, рекламе и соцсетях.", alt: "Брендбук" },
    { index: "07", title: "Слоган и коммуникация", description: "Формируем сообщения и принципы коммуникации, которые помогают бренду говорить с аудиторией последовательно и узнаваемо.", alt: "Слоган и коммуникация бренда" },
    { index: "08", title: "Персонаж бренда", description: "При необходимости создаём бренд-персонажа, который добавляет коммуникации эмоциональности и помогает выстраивать более сильную связь с аудиторией.", alt: "Персонаж бренда" },
  ]),
  casesTitle: "Реализованные кейсы",
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
    { src: products[0].src, alt: "Брендированная керамическая кружка с логотипом", caption: "Брендированные носители" },
    { src: products[1].src, alt: "Наклейки и мерч на ноутбуке", caption: "Мерч" },
    { src: products[2].src, alt: "Оформление страницы бренда в соцсетях", caption: "Соцсети" },
    { src: products[3].src, alt: "Брендированная кепка с вышитым логотипом", caption: "Одежда" },
    { src: products[4].src, alt: "Упаковка с фирменной лентой и логотипом", caption: "Упаковка" },
    { src: products[5].src, alt: "Наружная реклама с айдентикой бренда", caption: "Outdoor" },
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
