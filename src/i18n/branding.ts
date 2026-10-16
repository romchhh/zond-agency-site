import type { Locale } from "@/i18n/config";
import type { ServiceCompareContent } from "@/i18n/service-compare";

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
    href?: string;
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
  whyTitle: string;
  whyItems: Array<{ title: string; description: string }>;
  compare: ServiceCompareContent;
  faqEyebrow: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  finalEyebrow: string;
  finalTitle: string;
  finalCopy: string;
};

const brandingIncludeImageOrder = [
  "/assets/photography/positioning-3.webp",
  "/assets/photography/branding-1.webp",
  "/assets/photography/branding-2.webp",
  "/assets/photography/logo-1.webp",
  "/assets/photography/identity-3.webp",
  "/assets/photography/brandbook-0.webp",
  "/assets/photography/communication-2.webp",
  "/assets/real-cases/bit-school-05.webp"
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
  { src: "/assets/photography/application-stationery.webp", key: "stationery" },
  { src: "/assets/photography/application-merch.webp", key: "merch" },
  { src: "/assets/photography/application-social.webp", key: "social" },
  { src: "/assets/photography/application-clothing.webp", key: "clothing" },
  { src: "/assets/photography/application-package.webp", key: "packaging" },
  { src: "/assets/photography/application-outdoor.webp", key: "outdoor" },
] as const;

const uk: BrandingPageContent = {
  eyebrow: "Послуги / Брендинг",
  title: "Розробка бренду\nі брендинг",
  titleAccent: "компанії.",
  lead: "Створюємо бренди, які впізнають, запам'ятовують і обирають серед тисячі конкурентів.",
  sub: "Від 100 000 грн, термін 10–20 робочих днів. Дослідження, позиціювання, неймінг, логотип, айдентика й брендбук.",
  cta: "Обговорити проєкт",
  heroCaption: "Від першої ідеї — до цілісної системи.",
  heroAlt: "Робота над айдентикою бренду: візитівка, палітра кольорів і друковані носії",
  metricsTitle: "Краще, ніж слова, за нас скажуть цифри",
  includesEyebrow: "Що входить",
  includesTitle: "Що ви отримаєте",
  items: withBrandingImages([
    { index: "01", title: "Дослідження ринку", description: "Аналізуємо ринок, конкурентів і цільову аудиторію — основу для рішень бренду.", alt: "Команда формує стратегічну платформу" },
    { index: "02", title: "Позиціювання", description: "Формуємо платформу та позиціювання: чим бренд відрізняється і для кого працює.", alt: "Порівняння продуктів і напрямів позиціонування" },
    { index: "03", title: "Неймінг і слоган", description: "Створюємо назву та слоган, які відповідають позиціюванню й легко сприймаються.", alt: "Пошук ідей та формулювань на папері" },
    { index: "04", title: "Логотип", description: "Розробляємо знак і його адаптивні версії для друку та digital.", alt: "Фінальні версії логотипа на папері" },
    { index: "05", title: "Айдентика", description: "Палітра з кодами, шрифтова система та оформлення ключових носіїв.", alt: "Айдентика на упаковці та фірмових носіях" },
    { index: "06", title: "Брендбук", description: "Brandbook із правилами використання системи для команди й підрядників.", alt: "Правила використання бренду в друкованому гайді" },
    { index: "07", title: "Слоган і комунікація", description: "Повідомлення та принципи спілкування, щоб бренд говорив однією мовою.", alt: "Слоган на зовнішньому рекламному носії" },
    { index: "08", title: "Персонаж бренду", description: "За потреби створюємо бренд-персонажа для сильнішого звʼязку з аудиторією.", alt: "Персонаж бренду" },
  ]),
  casesTitle: "Наші кейси з розробки бренду",
  reviewsEyebrow: "Досвід співпраці",
  reviewsTitle: "Відгуки клієнтів",
  reviewsNote: "Реальні відгуки клієнтів із реалізованих проєктів ZOND.",
  reviews: [
    { label: "Приклад відгуку 01", quote: "На старті нам було важливо зрозуміти, чим бренд відрізняється від конкурентів. У результаті отримали чітку ідею та візуальний напрям, навколо яких легко будувати комунікацію.", name: "Імʼя клієнта · Компанія", role: "Стратегія та позиціонування" },
    { label: "Приклад відгуку 02", quote: "Хотіли, щоб бренд виглядав цілісно на всіх носіях. Логотип, кольори й типографіка склалися в єдину систему, з якою зручно працювати нашій команді.", name: "Імʼя клієнта · Компанія", role: "Логотип та айдентика" },
    { label: "Приклад відгуку 03", quote: "Для нас було важливо побачити дизайн на самому продукті. Продумана упаковка й увага до деталей допомогли передати характер бренду та підготувати його до запуску.", name: "Імʼя клієнта · Компанія", role: "Упаковка та носії" },
    { label: "Приклад відгуку 04", quote: "Ми отримали зрозумілі правила використання айдентики. Тепер простіше готувати нові матеріали, ставити завдання підрядникам і зберігати єдиний стиль бренду.", name: "Імʼя клієнта · Компанія", role: "Брендбук та розвиток" },
  ],
  productEyebrow: "Бренд у кожній деталі",
  productTitle: "Від айдентики — до продукту.",
  productNote: "Як бренд виглядає на носіях і в комунікації.",
  products: [
    { src: products[0].src, alt: "Фірмові бланки, папки та візитки", caption: "Брендовані носії" },
    { src: products[1].src, alt: "Брендовані сумка та кепка", caption: "Мерч" },
    { src: products[2].src, alt: "Бренд у соціальних мережах на екрані телефона", caption: "Соцмережі" },
    { src: products[3].src, alt: "Фірмовий одяг", caption: "Одяг" },
    { src: products[4].src, alt: "Брендована упаковка", caption: "Упаковка" },
    { src: products[5].src, alt: "Зовнішня реклама бренду", caption: "Outdoor" },
  ],
  processEyebrow: "Процес",
  processTitle: "Як ми будуємо бренди",
  process: [
    { index: "01", title: "Слухаємо", description: "Визначаємо цілі, задачі та очікування бізнесу. · 1 день" },
    { index: "02", title: "Дивимося ширше", description: "Вивчаємо ринок, цільову аудиторію і тих, з ким вас порівнюють. · 2–3 дні" },
    { index: "03", title: "Виділяємо головне", description: "Знаходимо ваші сильні сторони та відмінності від конкурентів. · 1–2 дні" },
    { index: "04", title: "Створюємо основу", description: "Формуємо позиціювання, характер, місію та цінності бренду. · 2–3 дні" },
    { index: "05", title: "Перетворюємо стратегію на айдентику", description: "Розробляємо неймінг, логотип і фірмовий стиль. · 3–8 днів" },
    { index: "06", title: "Готуємо бренд до роботи", description: "Формуємо брендбук, готуємо всі файли та передаємо повний комплект матеріалів вашій команді. · 1–3 дні" },
  ],
  needEyebrow: "Коли потрібно",
  needTitle: "Кому час будувати бренд?",
  needs: [
    { index: "01", title: "Новому бізнесу, що хоче гучно зайти на ринок", description: "Потрібен сильний старт і дорослий образ з першого дня." },
    { index: "02", title: "Компаніям, що губляться серед конкурентів", description: "Потрібна чітка відмінність від інших у категорії." },
    { index: "03", title: "Бізнесу, що випускає новий продукт", description: "Новий продукт потребує окремого впізнаваного образу." },
    { index: "04", title: "Компаніям, що масштабуються", description: "Ріст і вихід на нові ринки потребують цілісної бренд-системи." },
  ],
  receiveEyebrow: "Результат",
  receiveTitle: "Що ви отримаєте",
  receive: [
    "Дослідження ринку, конкурентів і цільової аудиторії",
    "Платформу та позиціювання бренду",
    "Неймінг і слоган",
    "Логотип та його адаптивні версії",
    "Палітру фірмових кольорів із кодами",
    "Систему фірмових шрифтів",
    "Приклади оформлення ключових носіїв",
    "Brandbook із правилами використання системи",
    "Файли у форматах AI, SVG, PNG і PDF",
  ],
  whyTitle: "Чому бізнес довіряє ZOND",
  whyItems: [
    { title: "Починаємо зі стратегії", description: "Щоб кожне рішення мало чітку бізнес-логіку." },
    { title: "Відчуваємо ринок і тренди", description: "Щоб бренд був актуальним і близьким вашій аудиторії." },
    { title: "Створюємо цілісну концепцію", description: "Щоб сайт, реклама, соцмережі й упаковка говорили однією мовою." },
    { title: "Фокусуємося на результаті", description: "Щоб бренд допомагав залучати клієнтів і продавати більше." },
  ],
  compare: {
    compareTitle: "Чому ZOND, а не генератор чи фриланс?",
    compareColumns: ["Критерій", "ZOND", "Фриланс", "Генератор (AI)"],
    compareRows: [
      { criterion: "Команда", zond: "Профільні фахівці", freelance: "Одна людина", generator: "Алгоритми" },
      { criterion: "Основа рішення", zond: "Дослідження та аналітика", freelance: "Особистий досвід і смак", generator: "Готові шаблони" },
      { criterion: "Результат", zond: "Цілісна бренд-система", freelance: "Окремі макети", generator: "Випадкова графіка" },
      { criterion: "Унікальність", zond: "100% унікальність з можливістю реєстрації ТМ", freelance: "Високий ризик використання чужих ідей", generator: "Не гарантована" },
    ],
  },
  faqEyebrow: "FAQ",
  faqTitle: "Часті питання",
  faq: [
    { question: "Що потрібно для створення (розробки) бренду?", answer: "Для створення бренду достатньо одного — бажання розвивати свій бізнес. Усе інше візьме на себе команда ZOND. Ми проведемо бриф, проаналізуємо ваші особливості та сильні сторони, вивчимо ринок і конкурентів, після чого розробимо бренд, який відповідатиме вашим бізнес-цілям." },
    { question: "Як розробити свій бренд?", answer: "Перший крок — зрозуміти, чим ваш бізнес відрізняється від інших. Далі формується стратегія, позиціювання, характер та візуальний стиль. Саме така послідовність допомагає створити бренд, який працює на бізнес, а не просто гарно виглядає." },
    { question: "Що входить в розробку брендбуку?", answer: "Розробка брендбуку включає створення головного документа компанії, який об'єднує її філософію, правила візуального оформлення та стиль спілкування. До базового складу входять ідеологічна платформа, стандарти логотипа, колірна гама, шрифти, правила комунікації (Tone of Voice) та приклади оформлення носіїв (поліграфії, цифрового контенту, мерчу, упаковки тощо)." },
    { question: "Скільки коштує розробка бренду або брендбуку?", answer: "Вартість розробки бренду або брендбуку в ZOND залежить від масштабу проєкту, кількості послуг і складності задачі. Щоб отримати точний розрахунок, залиште заявку на нашому сайті." },
    { question: "Що таке бренд і навіщо він потрібен бізнесу?", answer: "Попри поширену думку, бренд — це не просто яскравий логотип чи креативна назва. Це цілісний образ компанії у свідомості людей, який поєднує емоції, асоціації та обіцянку якості. Він допомагає бізнесу виділитися серед конкурентів, сформувати довіру, утримати клієнтів та продавати товари чи послуги дорожче завдяки додатковій цінності." },
    { question: "Які етапи включає розробка бренду?", answer: "Розробка бренду включає шість основних етапів, а саме, постановку цілей і планування, маркетингове дослідження ринку та конкурентів, формування стратегії й позиціювання, розробку візуальної ідентичності (айдентики), створення правил у брендбуці та подальше просування з оцінкою ефективності." },
    { question: "Які елементи складають сильний бренд?", answer: "Сильний бренд складається з фундаменту сенсів (місія, цінності), чіткого візуального та вербального образу (назва, логотип, стиль, голос) та стратегії позиціювання." },
    { question: "Які послуги входять у розробку брендингу?", answer: "Розробка брендингу в Україні включає маркетплейс-дослідження, створення стратегії і позиціювання, вибір назви (неймінг), розробку візуального стилю (логотип, кольори, шрифти) та оформлення правил у брендбук." },
  ],
  finalEyebrow: "Почнемо?",
  finalTitle: "Настав час створити сильний бренд, який обирають",
  finalCopy: "Заповніть форму нижче і ми зробимо це разом!",
};


const en: BrandingPageContent = {
  ...uk,
  eyebrow: "Services / Branding",
  title: "Brand development\nand company",
  titleAccent: "branding.",
  lead: "We create brands that people recognize, remember, and choose among thousands of competitors.",
  sub: "From UAH 100,000 · 10–20 working days. Research, positioning, naming, logo, identity, and brand book.",
  cta: "Discuss the project",
  heroCaption: "From the first idea to a complete system.",
  heroAlt: "Brand identity work: business card, color palette, and printed media",
  metricsTitle: "Numbers say more than words",
  includesEyebrow: "What’s included",
  includesTitle: "What you get",
  items: withBrandingImages([
    { index: "01", title: "Market research", description: "We analyze the market, competitors, and audience — the foundation for brand decisions.", alt: "Team shaping a strategic platform" },
    { index: "02", title: "Positioning", description: "We form the platform and positioning: how the brand differs and who it serves.", alt: "Comparing products and positioning directions" },
    { index: "03", title: "Naming and slogan", description: "A name and slogan that match the positioning and are easy to remember.", alt: "Exploring ideas and wording on paper" },
    { index: "04", title: "Logo", description: "The mark and adaptive versions for print and digital.", alt: "Final logo versions on paper" },
    { index: "05", title: "Identity", description: "Color palette with codes, type system, and key media layouts.", alt: "Identity on packaging and brand media" },
    { index: "06", title: "Brand book", description: "A brand book with usage rules for your team and vendors.", alt: "Brand usage rules in a printed guide" },
    { index: "07", title: "Slogan and communication", description: "Messages and principles so the brand speaks in one voice.", alt: "Slogan on an outdoor advertising medium" },
    { index: "08", title: "Brand character", description: "When needed, a brand character for a stronger audience bond.", alt: "Brand character" },
  ]),
  casesTitle: "Our brand development cases",
  reviewsEyebrow: "Collaboration",
  reviewsTitle: "Client reviews",
  reviewsNote: "Client feedback from delivered ZOND projects.",
  reviews: [
    { label: "Sample review 01", quote: "At the start it was important to understand how the brand differs from competitors. We got a clear idea and a visual direction that is easy to build communication around.", name: "Client name · Company", role: "Strategy and positioning" },
    { label: "Sample review 02", quote: "We wanted the brand to look consistent across all media. Logo, colors, and typography became one system that our team can actually use.", name: "Client name · Company", role: "Logo and identity" },
    { label: "Sample review 03", quote: "It was important to see the design on the product itself. Thoughtful packaging and attention to detail helped convey the brand character and prepare it for launch.", name: "Client name · Company", role: "Packaging and media" },
    { label: "Sample review 04", quote: "We received clear rules for using the identity. It is now easier to prepare new materials, brief vendors, and keep a unified brand style.", name: "Client name · Company", role: "Brand book and growth" },
  ],
  productEyebrow: "Brand in every detail",
  productTitle: "From identity to product.",
  productNote: "How the brand looks on media and in communication.",
  products: [
    { src: products[0].src, alt: "Branded letterheads, folders, and business cards", caption: "Branded media" },
    { src: products[1].src, alt: "Branded bag and cap", caption: "Merch" },
    { src: products[2].src, alt: "Brand on social media on a phone screen", caption: "Social" },
    { src: products[3].src, alt: "Branded apparel", caption: "Apparel" },
    { src: products[4].src, alt: "Branded packaging", caption: "Packaging" },
    { src: products[5].src, alt: "Outdoor brand advertising", caption: "Outdoor" },
  ],
  processEyebrow: "Process",
  processTitle: "How we build brands",
  process: [
    { index: "01", title: "We listen", description: "Goals, tasks, and business expectations. · 1 day" },
    { index: "02", title: "We look wider", description: "Market, audience, and those you are compared with. · 2–3 days" },
    { index: "03", title: "We extract the core", description: "Your strengths and differences from competitors. · 1–2 days" },
    { index: "04", title: "We build the foundation", description: "Positioning, character, mission, and values. · 2–3 days" },
    { index: "05", title: "Strategy becomes identity", description: "Naming, logo, and corporate style. · 3–8 days" },
    { index: "06", title: "We prepare the brand for work", description: "Brand book, files, and a full handoff to your team. · 1–3 days" },
  ],
  needEyebrow: "When you need it",
  needTitle: "Who is ready to build a brand?",
  needs: [
    { index: "01", title: "New business", description: "Wants a strong market entry and a mature look from day one." },
    { index: "02", title: "Lost among competitors", description: "Needs a clear difference from others in the category." },
    { index: "03", title: "New product", description: "Launching a product that needs its own image." },
    { index: "04", title: "Scaling", description: "Growing into new markets or directions." },
  ],
  receiveEyebrow: "Result",
  receiveTitle: "What you get",
  receive: [
    "Market, competitor, and audience research",
    "Brand platform and positioning",
    "Naming and slogan",
    "Logo and adaptive versions",
    "Brand color palette with codes",
    "Type system",
    "Key media layout examples",
    "Brand book with usage rules",
    "Files in AI, SVG, PNG, and PDF",
  ],
  whyTitle: "Why businesses trust ZOND",
  whyItems: [
    { title: "We start with strategy", description: "So every decision has clear business logic." },
    { title: "We feel the market and trends", description: "So the brand stays relevant and close to your audience." },
    { title: "We build a complete concept", description: "So website, ads, social, and packaging speak one language." },
    { title: "We focus on results", description: "So the brand helps attract clients and sell more." },
  ],
  compare: {
    compareTitle: "Why ZOND, not a generator or freelance?",
    compareColumns: ["Criterion", "ZOND", "Freelance", "Generator (AI)"],
    compareRows: [
      { criterion: "Team", zond: "Specialist team", freelance: "One person", generator: "Algorithms" },
      { criterion: "Decision base", zond: "Research and analytics", freelance: "Personal taste and experience", generator: "Ready-made templates" },
      { criterion: "Result", zond: "Full brand system", freelance: "Separate layouts", generator: "Random graphics" },
      { criterion: "Uniqueness", zond: "100% unique, TM-ready", freelance: "High risk of borrowed ideas", generator: "Not guaranteed" },
    ],
  },
  faqEyebrow: "FAQ",
  faqTitle: "FAQ",
  faq: [
    { question: "What do you need to create a brand?", answer: "One thing: the desire to grow your business. ZOND handles the rest — brief, strengths, market and competitors, then a brand aligned with your goals." },
    { question: "How much does brand or brand-book development cost?", answer: "It depends on project scale and scope. Guide price from UAH 100,000 · 10–20 working days. Leave a request for an exact quote." },
    { question: "How do you develop a brand?", answer: "First understand how the business differs. Then strategy, positioning, character, and visual style — so the brand works for business, not only looks good." },
    { question: "What is included in a brand book?", answer: "The company’s core document: philosophy, visual rules, and communication style — platform, logo standards, colors, fonts, Tone of Voice, and media examples." },
    { question: "What is a brand and why does business need it?", answer: "Not just a logo or name — the whole image in people’s minds. It builds trust, retention, and higher perceived value." },
    { question: "What stages does brand development include?", answer: "Goals and planning, market research, strategy and positioning, visual identity, brand-book rules, then promotion and performance review." },
    { question: "What elements make a strong brand?", answer: "Meaning foundation (mission, values), clear visual and verbal image (name, logo, style, voice), and positioning strategy." },
    { question: "What services are included in branding?", answer: "Market research, strategy and positioning, naming, visual style (logo, colors, fonts), and rules in a brand book." },
  ],
  finalEyebrow: "Shall we start?",
  finalTitle: "Time to create a strong brand people choose",
  finalCopy: "Fill in the form below and we’ll do it together!",
};


const ru: BrandingPageContent = {
  ...uk,
  eyebrow: "Услуги / Брендинг",
  title: "Разработка бренда\nи брендинг",
  titleAccent: "компании.",
  lead: "Создаем бренды, которые узнают, запоминают и выбирают среди тысячи конкурентов.",
  sub: "От 100 000 грн, срок 10–20 рабочих дней. Исследование, позиционирование, нейминг, логотип, айдентика и брендбук.",
  cta: "Обсудить проект",
  heroCaption: "От первой идеи — к целостной системе.",
  heroAlt: "Работа над айдентикой бренда: визитка, палитра цветов и печатные носители",
  metricsTitle: "Лучше, чем слова, за нас скажут цифры",
  includesEyebrow: "Что входит",
  includesTitle: "Что вы получите",
  items: withBrandingImages([
    { index: "01", title: "Исследование рынка", description: "Анализируем рынок, конкурентов и целевую аудиторию — основу для решений бренда.", alt: "Команда формирует стратегическую платформу" },
    { index: "02", title: "Позиционирование", description: "Формируем платформу и позиционирование: чем бренд отличается и для кого работает.", alt: "Сравнение продуктов и направлений позиционирования" },
    { index: "03", title: "Нейминг и слоган", description: "Создаём название и слоган, которые соответствуют позиционированию и легко воспринимаются.", alt: "Поиск идей и формулировок на бумаге" },
    { index: "04", title: "Логотип", description: "Разрабатываем знак и его адаптивные версии для печати и digital.", alt: "Финальные версии логотипа на бумаге" },
    { index: "05", title: "Айдентика", description: "Палитра с кодами, шрифтовая система и оформление ключевых носителей.", alt: "Айдентика на упаковке и фирменных носителях" },
    { index: "06", title: "Брендбук", description: "Brandbook с правилами использования системы для команды и подрядчиков.", alt: "Правила использования бренда в печатном гайде" },
    { index: "07", title: "Слоган и коммуникация", description: "Сообщения и принципы общения, чтобы бренд говорил на одном языке.", alt: "Слоган на наружном рекламном носителе" },
    { index: "08", title: "Персонаж бренда", description: "При необходимости создаём бренд-персонажа для более сильной связи с аудиторией.", alt: "Персонаж бренда" },
  ]),
  casesTitle: "Наши кейсы по разработке бренда",
  reviewsEyebrow: "Опыт сотрудничества",
  reviewsTitle: "Отзывы клиентов",
  reviewsNote: "Реальные отзывы клиентов с реализованных проектов ZOND.",
  reviews: [
    { label: "Пример отзыва 01", quote: "На старте нам было важно понять, чем бренд отличается от конкурентов. В результате получили чёткую идею и визуальное направление, вокруг которых легко строить коммуникацию.", name: "Имя клиента · Компания", role: "Стратегия и позиционирование" },
    { label: "Пример отзыва 02", quote: "Хотели, чтобы бренд выглядел целостно на всех носителях. Логотип, цвета и типографика сложились в единую систему, с которой удобно работать нашей команде.", name: "Имя клиента · Компания", role: "Логотип и айдентика" },
    { label: "Пример отзыва 03", quote: "Для нас было важно увидеть дизайн на самом продукте. Продуманная упаковка и внимание к деталям помогли передать характер бренда и подготовить его к запуску.", name: "Имя клиента · Компания", role: "Упаковка и носители" },
    { label: "Пример отзыва 04", quote: "Мы получили понятные правила использования айдентики. Теперь проще готовить новые материалы, ставить задачи подрядчикам и сохранять единый стиль бренда.", name: "Имя клиента · Компания", role: "Брендбук и развитие" },
  ],
  productEyebrow: "Бренд в каждой детали",
  productTitle: "От айдентики — к продукту.",
  productNote: "Как бренд выглядит на носителях и в коммуникации.",
  products: [
    { src: products[0].src, alt: "Фирменные бланки, папки и визитки", caption: "Брендированные носители" },
    { src: products[1].src, alt: "Брендированные сумка и кепка", caption: "Мерч" },
    { src: products[2].src, alt: "Бренд в социальных сетях на экране телефона", caption: "Соцсети" },
    { src: products[3].src, alt: "Фирменная одежда", caption: "Одежда" },
    { src: products[4].src, alt: "Брендированная упаковка", caption: "Упаковка" },
    { src: products[5].src, alt: "Наружная реклама бренда", caption: "Outdoor" },
  ],
  processEyebrow: "Процесс",
  processTitle: "Как мы строим бренды",
  process: [
    { index: "01", title: "Слушаем", description: "Определяем цели, задачи и ожидания бизнеса. · 1 день" },
    { index: "02", title: "Смотрим шире", description: "Изучаем рынок, целевую аудиторию и тех, с кем вас сравнивают. · 2–3 дня" },
    { index: "03", title: "Выделяем главное", description: "Находим ваши сильные стороны и отличия от конкурентов. · 1–2 дня" },
    { index: "04", title: "Создаём основу", description: "Формируем позиционирование, характер, миссию и ценности бренда. · 2–3 дня" },
    { index: "05", title: "Превращаем стратегию в айдентику", description: "Разрабатываем нейминг, логотип и фирменный стиль. · 3–8 дней" },
    { index: "06", title: "Готовим бренд к работе", description: "Формируем брендбук, готовим все файлы и передаём полный комплект материалов вашей команде. · 1–3 дня" },
  ],
  needEyebrow: "Когда нужно",
  needTitle: "Кому пора строить бренд?",
  needs: [
    { index: "01", title: "Новому бизнесу, который хочет громко зайти на рынок", description: "Нужен сильный старт и взрослый образ с первого дня." },
    { index: "02", title: "Компаниям, которые теряются среди конкурентов", description: "Нужно чёткое отличие от других в категории." },
    { index: "03", title: "Бизнесу, который выпускает новый продукт", description: "Новый продукт нуждается в отдельном узнаваемом образе." },
    { index: "04", title: "Компаниям, которые масштабируются", description: "Рост и выход на новые рынки требуют целостной бренд-системы." },
  ],
  receiveEyebrow: "Результат",
  receiveTitle: "Что вы получите",
  receive: [
    "Исследование рынка, конкурентов и целевой аудитории",
    "Платформу и позиционирование бренда",
    "Нейминг и слоган",
    "Логотип и его адаптивные версии",
    "Палитру фирменных цветов с кодами",
    "Систему фирменных шрифтов",
    "Примеры оформления ключевых носителей",
    "Brandbook с правилами использования системы",
    "Файлы в форматах AI, SVG, PNG и PDF",
  ],
  whyTitle: "Почему бизнес доверяет ZOND",
  whyItems: [
    { title: "Начинаем со стратегии", description: "Чтобы каждое решение имело четкую бизнес-логику." },
    { title: "Чувствуем рынок и тренды", description: "Чтобы бренд был актуальным и близким вашей аудитории." },
    { title: "Создаем целостную концепцию", description: "Чтобы сайт, реклама, соцсети и упаковка говорили на одном языке." },
    { title: "Фокусируемся на результате", description: "Чтобы бренд помогал привлекать клиентов и продавать больше." },
  ],
  compare: {
    compareTitle: "Почему ZOND, а не генератор или фриланс?",
    compareColumns: ["Критерий", "ZOND", "Фриланс", "Генератор (AI)"],
    compareRows: [
      { criterion: "Команда", zond: "Профильные специалисты", freelance: "Один человек", generator: "Алгоритмы" },
      { criterion: "Основа решения", zond: "Исследование и аналитика", freelance: "Личный опыт и вкус", generator: "Готовые шаблоны" },
      { criterion: "Результат", zond: "Целостная бренд-система", freelance: "Отдельные макеты", generator: "Случайная графика" },
      { criterion: "Уникальность", zond: "100% уникальность с возможностью регистрации ТМ", freelance: "Высокий риск использования чужих идей", generator: "Не гарантирована" },
    ],
  },
  faqEyebrow: "FAQ",
  faqTitle: "Частые вопросы",
  faq: [
    { question: "Что нужно для создания (разработки) бренда?", answer: "Для создания бренда достаточно одного — желания развивать свой бизнес. Все остальное возьмет на себя команда ZOND. Мы проведем бриф, проанализируем ваши особенности и сильные стороны, изучим рынок и конкурентов, после чего разработаем бренд, который будет соответствовать вашим бизнес-целям." },
    { question: "Как разработать свой бренд?", answer: "Первый шаг — понять, чем ваш бизнес отличается от других. Дальше формируется стратегия, позиционирование, характер и визуальный стиль. Именно такая последовательность помогает создать бренд, который работает на бизнес, а не просто красиво выглядит." },
    { question: "Что входит в разработку брендбука?", answer: "Разработка брендбука включает создание главного документа компании, который объединяет ее философию, правила визуального оформления и стиль общения. В базовый состав входят идеологическая платформа, стандарты логотипа, цветовая гамма, шрифты, правила коммуникации (Tone of Voice) и примеры оформления носителей (полиграфии, цифрового контента, мерча, упаковки и прочего)." },
    { question: "Сколько стоит разработка бренда или брендбука?", answer: "Стоимость разработки бренда или брендбука в ZOND зависит от масштаба проекта, количества услуг и сложности задачи. Чтобы получить точный расчет, оставьте заявку на нашем сайте." },
    { question: "Что такое бренд и зачем он нужен бизнесу?", answer: "Вопреки распространенному мнению, бренд — это не просто яркий логотип или креативное название. Это целостный образ компании в сознании людей, который объединяет эмоции, ассоциации и обещание качества. Он помогает бизнесу выделиться среди конкурентов, сформировать доверие, удержать клиентов и продавать товары или услуги дороже благодаря дополнительной ценности." },
    { question: "Какие этапы включает разработка бренда?", answer: "Разработка бренда включает шесть основных этапов, а именно постановку целей и планирование, маркетинговое исследование рынка и конкурентов, формирование стратегии и позиционирования, разработку визуальной идентичности (айдентики), создание правил в брендбуке и дальнейшее продвижение с оценкой эффективности." },
    { question: "Какие элементы составляют сильный бренд?", answer: "Сильный бренд состоит из фундамента смыслов (миссия, ценности), четкого визуального и вербального образа (название, логотип, стиль, голос) и стратегии позиционирования." },
    { question: "Какие услуги входят в разработку брендинга?", answer: "Разработка брендинга в Украине включает маркетплейс-исследование, создание стратегии и позиционирования, выбор названия (нейминг), разработку визуального стиля (логотип, цвета, шрифты) и оформление правил в брендбук." },
  ],
  finalEyebrow: "Начнём?",
  finalTitle: "Пришло время создать сильный бренд, который выбирают",
  finalCopy: "Заполните форму ниже, и мы сделаем это вместе!",
};


export const brandingPage: Record<Locale, BrandingPageContent> = { uk, en, ru };
