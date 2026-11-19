import type { Locale } from "@/i18n/config";
import type { StatItem } from "@/i18n/dictionary";
import { withServiceProductImages } from "@/i18n/service-products";

export type ServiceIncludeCard = {
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  sub: string;
  cta: string;
  heroAlt: string;
  heroCaption: string;
  metricsTitle: string;
  stats: StatItem[];
  audienceTitle: string;
  audienceItems: Array<{ index: string; title: string; description?: string }>;
  /** Trade show preparation block, same layout as the audience block (optional). */
  exhibition?: {
    title: string;
    items: Array<{ index: string; title: string; description?: string }>;
  };
  /** Dark feature strip from service page prototypes (optional). */
  featureStrip?: {
    eyebrow: string;
    titleLine: string;
    titleAccent: string;
    body: string;
  };
  includesTitle: string;
  /** Prototype service pages: intro under includes heading */
  includesSubtitle?: string;
  includes: string[];
  includeCards?: ServiceIncludeCard[];
  /** Prototype: «09 / РЕЗУЛЬТАТ» — Що ви отримуєте */
  deliverablesEyebrow?: string;
  deliverablesTitle?: string;
  deliverablesNote?: string;
  deliverables?: string[];
  casesTitle: string;
  casesSubtitle?: string;
  processTitle: string;
  process: Array<{
    index: string;
    title: string;
    description: string;
    duration: string;
    image?: string;
    alt?: string;
  }>;
  teamTitle: string;
  whyTitle: string;
  whyItems: Array<{ title: string; description: string }>;
  compareTitle: string;
  compareColumns: [string, string, string, string];
  compareRows: Array<{
    criterion: string;
    zond: string;
    freelance: string;
    generator: string;
  }>;
  reviewsEyebrow?: string;
  reviewsTitle: string;
  reviewsNote: string;
  reviews: Array<{ label: string; quote: string; name: string; role: string; href?: string }>;
  productTitle: string;
  productNote: string;
  products: Array<{ src: string; alt: string; caption: string }>;
  formTitle: string;
  formDescription: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  related: Array<{ title: string; slug: string }>;
};

const uk: ServicePageContent = {
  eyebrow: "Послуги / Логотип",
  title: "Дизайн логотипів",
  titleAccent: "Розробка логотипа для компанії",
  lead: "Створюємо логотипи, які легко впізнати, неможливо сплутати й складно забути.",
  sub: "",
  cta: "Обговорити проєкт",
  heroAlt: "Розробка логотипа для компанії",
  heroCaption: "Від ідеї — до впізнаваного знака бренду.",
  metricsTitle: "Цифри, що говорять про наш професіоналізм",
  stats: [
    { value: "6", label: "років досвіду\nна ринку" },
    { value: "6", label: "експертів\nу команді" },
    { value: "300+", label: "унікальних\nлоготипів" },
    { value: "50+", label: "фірмових\nстилів" },
    { value: "55", label: "успішних\nбренд-історій" },
  ],
  audienceTitle: "Коли час створити або оновити логотип?",
  audienceItems: [
    { index: "01", title: "Коли запускаєте новий бізнес" },
    { index: "02", title: "Коли масштабуєтесь або виходите на нові ринки" },
    { index: "03", title: "Коли змінюєте продукти чи цінності" },
    { index: "04", title: "Коли переросли старий дизайн" },
  ],
  includesTitle: "Що ви отримаєте після співпраці з ZOND",
  includes: [
    "Фінальну версію логотипа",
    "Кольорову, монохромну та інверсійну версії логотипа",
    "Фірмову палітру кольорів із кодами",
    "Пакет векторних і растрових файлів",
    "Logobook із правилами використання логотипа",
    "Майнові права на фінальну версію логотипа",
  ],
  includeCards: [
    {
      index: "01",
      title: "Фінальна версія логотипа",
      description: "Затверджений знак бренду, готовий до використання на всіх носіях.",
      image: "/assets/photography/logo-1.webp",
      alt: "Фінальна версія логотипа",
    },
    {
      index: "02",
      title: "Кольорові версії",
      description: "Кольорова, монохромна та інверсійна версії для друку й digital.",
      image: "/assets/real-cases/carbit-05.webp",
      alt: "Кольорові версії логотипа",
    },
    {
      index: "03",
      title: "Фірмова палітра",
      description: "Палітра кольорів із кодами для коректного відтворення бренду.",
      image: "/assets/photography/identity-1.webp",
      alt: "Фірмова палітра кольорів",
    },
    {
      index: "04",
      title: "Пакет файлів",
      description: "Векторні та растрові формати, зручні для команди й підрядників.",
      image: "/assets/photography/graphics-3.webp",
      alt: "Пакет файлів логотипа",
    },
    {
      index: "05",
      title: "Logobook",
      description: "Правила використання логотипа, щоб стиль лишався цілісним.",
      image: "/assets/photography/logo-2.webp",
      alt: "Logobook із правилами використання",
    },
    {
      index: "06",
      title: "Майнові права",
      description: "Права на фінальну версію логотипа передаються вам.",
      image: "/assets/photography/brandbook-3.webp",
      alt: "Майнові права на логотип",
    },
  ],
  casesTitle: "Наші кейси з розробки логотипа",
  processTitle: "Як народжується логотип",
  process: [
    { index: "01", title: "Знайомимося", description: "Занурюємося у бізнес, вивчаємо цілі, слухаємо побажання.", duration: "1 день" },
    { index: "02", title: "Вивчаємо контекст", description: "Аналізуємо ринок, конкурентів і цільову аудиторію.", duration: "1 день" },
    { index: "03", title: "Народжуємо ідею", description: "Шукаємо образ, що запам'ятається, і формуємо концепцію.", duration: "1–2 дні" },
    { index: "04", title: "Створюємо ескізи", description: "Презентуємо прототипи лого й відбираємо найкращі варіанти.", duration: "1–2 дні" },
    { index: "05", title: "Надаємо форму", description: "Доопрацьовуємо обрану концепцію та вносимо правки.", duration: "1–2 дні" },
    { index: "06", title: "Презентуємо", description: "Показуємо фінальний логотип і передаємо всі файли.", duration: "1 день" },
  ],
  teamTitle: "Хто веде проєкт",
  whyTitle: "Чому обирають ZOND",
  whyItems: [
    { title: "Досвід, що працює", description: "За нашими плечима сотні проєктів у різних нішах і на різних ринках." },
    { title: "Авторські рішення", description: "Кожен логотип створюємо з нуля під конкретний бізнес." },
    { title: "Логіка в кожній деталі", description: "Кожен елемент логотипа працює на впізнаваність бренду." },
    { title: "Дизайн поза часом", description: "Створюємо логотипи, що залишаються актуальними незалежно від трендів." },
  ],
  compareTitle: "Чому ZOND, а не генератор чи фриланс?",
  compareColumns: ["Критерій", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: [
    { criterion: "Команда", zond: "Артдиректор та графічні дизайнери", freelance: "Одна людина", generator: "Алгоритм" },
    { criterion: "Основа рішення", zond: "Аналіз ніші, сенсів та носіїв бренду", freelance: "Власний смак і бачення виконавця", generator: "Промпт" },
    { criterion: "Результат", zond: "Логотип із пакетом файлів і правилами", freelance: "Проста красива картинка", generator: "Випадкова графіка без сенсу" },
    { criterion: "Унікальність", zond: "100% авторський знак з можливістю реєстрації ТМ", freelance: "Ризик збігів та використання стоків", generator: "Відсутність авторських прав" },
  ],
  reviewsTitle: "Відгуки",
  reviewsNote: "Демонстраційні тексти для макета. Не є реальними відгуками клієнтів.",
  reviews: [
    { label: "Приклад відгуку 01", quote: "Потрібен був логотип, який одразу передає характер бренду. Отримали кілька сильних концепцій і чітке пояснення, чому саме цей варіант працює найкраще.", name: "Ім'я клієнта · Компанія", role: "Розробка логотипа" },
    { label: "Приклад відгуку 02", quote: "Важливо було отримати не лише картинку, а повний пакет файлів і правила використання. Усе передали вчасно й у зручному форматі для команди.", name: "Ім'я клієнта · Компанія", role: "Logobook та файли" },
    { label: "Приклад відгуку 03", quote: "Процес був прозорим: від брифу до фінальної версії ми бачили логіку кожного кроку. Результат виглядає професійно на всіх носіях.", name: "Ім'я клієнта · Компанія", role: "Айдентика та носії" },
  ],
  productTitle: "Логотип на реальних носіях.",
  productNote: "Як знак виглядає на продуктах, мерчі та в комунікації.",
  products: withServiceProductImages([
    { alt: "Брендована кружка з логотипом", caption: "Брендовані носії" },
    { alt: "Наліпки з логотипом на ноутбуці", caption: "Мерч" },
    { alt: "Логотип у оформленні соцмереж", caption: "Соцмережі" },
    { alt: "Кепка з вишитим логотипом", caption: "Одяг" },
    { alt: "Логотип на упаковці", caption: "Упаковка" },
    { alt: "Логотип на зовнішній рекламі", caption: "Outdoor" },
  ]),
  formTitle: "Настав час створити обличчя вашого бренду",
  formDescription: "Заповніть форму нижче, і ми розробимо логотип, який розповість про вашу компанію краще, ніж слова.",
  faqTitle: "FAQ",
  faq: [
    { question: "Скільки коштує розробка логотипа і від чого залежить ціна?", answer: "Орієнтовна вартість — 12–45 тис. грн. Остаточний кошторис залежить від обсягу завдання та погодженого складу робіт." },
    { question: "Які послуги включає розробка логотипа та фірмового стилю?", answer: "В послугу входить розробка логотипа, фірмової кольорової палітри, логобуку, а також підготовка файлів для друку й digital." },
    { question: "Які етапи включає процес розробки логотипа?", answer: "Процес розробки дизайну логотипа в ZOND складається з кількох етапів: брифінгу, аналізу ніші та конкурентів, пошуку ідей і створення скетчів. Після цього обрану концепцію доопрацьовують у векторі, презентують клієнту та за потреби вносять правки. На фінальному етапі замовник отримує повний пакет файлів і логобук із правилами використання логотипа." },
    { question: "Чому якісний логотип важливий для бізнесу?", answer: "Ваші клієнти можуть бути ще навіть не знайомі з вашим продуктом, але вже оцінити його за логотипом. Саме він формує перше враження про ваш товар чи послугу, допомагає запам'ятатися, викликає довіру та робить бренд впізнаваним серед конкурентів." },
    { question: "Що входить у фінальний пакет файлів після розробки логотипа?", answer: "Після співпраці з ZOND ви отримаєте фінальну версію дизайну лого в кольоровому та монохромному виконанні, палітру фірмових кольорів із кодами, пакет векторних і растрових файлів, а також логобук." },
    { question: "Які існують типи логотипів?", answer: "Логотипи можуть бути текстовими, графічними та комбінованими. Вибір конкретного типу залежить від сфери діяльності компанії, її позиціонування на ринку, цільової аудиторії та особливостей бренду." },
    { question: "Які терміни розробки логотипа?", answer: "У середньому розробка логотипа займає від 7 до 21 робочих днів. Точний термін залежить від складності проєкту, кількості концепцій і швидкості погодження." },
    { question: "Як обрати кольори та шрифти для логотипа?", answer: "Колір привертає увагу, шрифт формує характер, а разом ці елементи створюють перше враження про компанію. Саме тому в ZOND ми обираємо їх не інтуїтивно, а з урахуванням позиціонування бренду, історії, яку він хоче розповісти, та емоцій, які має викликати у своєї цільової аудиторії." },
  ],
  relatedTitle: "Суміжні послуги",
  related: [
    { title: "Брендинг", slug: "branding" },
    { title: "Брендбук", slug: "brandbook" },
    { title: "Айдентика", slug: "identity" },
  ],
};

const en: ServicePageContent = {
  eyebrow: "Services / Logo",
  title: "Logo design",
  titleAccent: "Logo design for your company",
  lead: "We create logos that are easy to recognize, impossible to confuse, and hard to forget.",
  sub: "",
  cta: "Discuss the project",
  heroAlt: "Logo design for your company",
  heroCaption: "From an idea to a recognizable brand mark.",
  metricsTitle: "Numbers that show our expertise",
  stats: [
    { value: "6", label: "years\non the market" },
    { value: "6", label: "experts\non the team" },
    { value: "300+", label: "original\nlogos" },
    { value: "50+", label: "corporate\nidentities" },
    { value: "55", label: "successful\nbrand stories" },
  ],
  audienceTitle: "When is it time to create or update a logo?",
  audienceItems: [
    { index: "01", title: "When you launch a new business" },
    { index: "02", title: "When you scale or enter new markets" },
    { index: "03", title: "When your products or values change" },
    { index: "04", title: "When you have outgrown the old design" },
  ],
  includesTitle: "What you get from working with ZOND",
  includes: [
    "The final logo",
    "Color, monochrome, and inverted logo versions",
    "A brand color palette with color codes",
    "A package of vector and raster files",
    "A logobook with logo usage rules",
    "Property rights to the final logo",
  ],
  includeCards: [
    {
      index: "01",
      title: "Final logo",
      description: "The approved brand mark, ready to use on any media.",
      image: "/assets/photography/logo-1.webp",
      alt: "Final logo",
    },
    {
      index: "02",
      title: "Color versions",
      description: "Color, monochrome, and inverted versions for print and digital.",
      image: "/assets/real-cases/carbit-05.webp",
      alt: "Color versions of the logo",
    },
    {
      index: "03",
      title: "Brand palette",
      description: "A color palette with codes so the brand is reproduced correctly.",
      image: "/assets/photography/identity-1.webp",
      alt: "Brand color palette",
    },
    {
      index: "04",
      title: "File package",
      description: "Vector and raster formats that are easy for your team and contractors to use.",
      image: "/assets/photography/graphics-3.webp",
      alt: "Logo file package",
    },
    {
      index: "05",
      title: "Logobook",
      description: "Logo usage rules that keep the style consistent.",
      image: "/assets/photography/logo-2.webp",
      alt: "Logobook with usage rules",
    },
    {
      index: "06",
      title: "Property rights",
      description: "The rights to the final logo are transferred to you.",
      image: "/assets/photography/brandbook-3.webp",
      alt: "Property rights to the logo",
    },
  ],
  casesTitle: "Our logo design cases",
  processTitle: "How a logo is born",
  process: [
    { index: "01", title: "We get to know you", description: "We dive into the business, study its goals, and listen to your wishes.", duration: "1 day" },
    { index: "02", title: "We study the context", description: "We analyze the market, competitors, and target audience.", duration: "1 day" },
    { index: "03", title: "We find the idea", description: "We look for a memorable image and shape the concept.", duration: "1-2 days" },
    { index: "04", title: "We sketch", description: "We present logo drafts and pick the strongest options.", duration: "1-2 days" },
    { index: "05", title: "We give it shape", description: "We refine the chosen concept and make revisions.", duration: "1-2 days" },
    { index: "06", title: "We present", description: "We show the final logo and hand over all the files.", duration: "1 day" },
  ],
  teamTitle: "Who leads the project",
  whyTitle: "Why clients choose ZOND",
  whyItems: [
    { title: "Experience that works", description: "We have hundreds of projects behind us across different niches and markets." },
    { title: "Original solutions", description: "We create every logo from scratch for a specific business." },
    { title: "Logic in every detail", description: "Every element of the logo works for brand recognition." },
    { title: "Timeless design", description: "We create logos that stay relevant whatever the trends." },
  ],
  compareTitle: "Why ZOND and not a generator or a freelancer?",
  compareColumns: ["Criterion", "ZOND", "Freelancer", "Generator (AI)"],
  compareRows: [
    { criterion: "Team", zond: "Art director and graphic designers", freelance: "One person", generator: "An algorithm" },
    { criterion: "What the solution is based on", zond: "Analysis of the niche, brand meaning, and media", freelance: "The designer's own taste and vision", generator: "A prompt" },
    { criterion: "Result", zond: "A logo with a file package and usage rules", freelance: "A simple, pretty picture", generator: "Random graphics with no meaning" },
    { criterion: "Uniqueness", zond: "A 100% original mark that can be registered as a trademark", freelance: "Risk of lookalikes and stock graphics", generator: "No copyright" },
  ],
  reviewsTitle: "Reviews",
  reviewsNote: "Sample texts for the layout. These are not real client reviews.",
  reviews: [
    { label: "Sample review 01", quote: "We needed a logo that shows the brand's character right away. We got several strong concepts and a clear explanation of why this option works best.", name: "Client name · Company", role: "Logo design" },
    { label: "Sample review 02", quote: "We wanted more than a picture: a full file package and usage rules. Everything arrived on time and in a format that is easy for the team to use.", name: "Client name · Company", role: "Logobook and files" },
    { label: "Sample review 03", quote: "The process was transparent: from the brief to the final version we could see the logic of every step. The result looks professional on every medium.", name: "Client name · Company", role: "Identity and media" },
  ],
  productTitle: "The logo on real media.",
  productNote: "How the mark looks on products, merch, and in communication.",
  products: withServiceProductImages([
    { alt: "Branded mug with the logo", caption: "Branded items" },
    { alt: "Logo stickers on a laptop", caption: "Merch" },
    { alt: "The logo in social media design", caption: "Social media" },
    { alt: "Cap with an embroidered logo", caption: "Apparel" },
    { alt: "The logo on packaging", caption: "Packaging" },
    { alt: "The logo on outdoor advertising", caption: "Outdoor" },
  ]),
  formTitle: "It's time to create the face of your brand",
  formDescription: "Fill out the form below, and we will design a logo that tells your company's story better than words.",
  faqTitle: "FAQ",
  faq: [
    { question: "How much does logo design cost, and what affects the price?", answer: "The approximate cost is UAH 12,000-45,000. The final estimate depends on the scope of the task and the agreed list of work." },
    { question: "What does a logo and corporate identity design service include?", answer: "The service includes the logo, a brand color palette, a logobook, and files prepared for print and digital." },
    { question: "What are the stages of logo design?", answer: "Logo design at ZOND goes through several stages: the brief, an analysis of the niche and competitors, the search for ideas, and sketches. After that, the chosen concept is refined in vector, presented to the client, and revised if needed. At the final stage, the client receives the full file package and a logobook with logo usage rules." },
    { question: "Why does a business need a good logo?", answer: "Your customers may not know your product yet, but they already judge it by the logo. The logo shapes the first impression of your product or service, helps people remember you, builds trust, and makes the brand stand out from competitors." },
    { question: "What files do I get after the logo is designed?", answer: "After working with ZOND, you get the final logo in color and monochrome versions, a brand color palette with codes, a package of vector and raster files, and a logobook." },
    { question: "What types of logos are there?", answer: "A logo can be text-based, graphic, or combined. The right type depends on the company's industry, its market positioning, its target audience, and the specifics of the brand." },
    { question: "How long does logo design take?", answer: "On average, logo design takes 7 to 21 working days. The exact time depends on the complexity of the project, the number of concepts, and how quickly they are approved." },
    { question: "How do you choose colors and fonts for a logo?", answer: "Color catches the eye, the typeface sets the character, and together they create the first impression of the company. That is why at ZOND we do not choose them by intuition. We base the choice on the brand's positioning, the story it wants to tell, and the emotions it should evoke in its target audience." },
  ],
  relatedTitle: "Related services",
  related: [
    { title: "Branding", slug: "branding" },
    { title: "Brand book", slug: "brandbook" },
    { title: "Identity", slug: "identity" },
  ],
};

const ru: ServicePageContent = {
  ...uk,
  eyebrow: "Услуги / Логотип",
  title: "Дизайн логотипов",
  titleAccent: "Разработка логотипа для компании",
  lead: "Создаем логотипы, которые легко узнать, невозможно спутать и сложно забыть.",
  cta: "Обсудить проект",
  heroAlt: "Разработка логотипа для компании",
  heroCaption: "От идеи — к узнаваемому знаку бренда.",
  metricsTitle: "Цифры, которые говорят о нашем профессионализме",
  stats: [
    { value: "6", label: "лет опыта\nна рынке" },
    { value: "6", label: "экспертов\nв команде" },
    { value: "300+", label: "уникальных\nлоготипов" },
    { value: "50+", label: "фирменных\nстилей" },
    { value: "55", label: "успешных\nбренд-историй" },
  ],
  audienceTitle: "Когда пора создать или обновить логотип?",
  audienceItems: [
    { index: "01", title: "Когда запускаете новый бизнес" },
    { index: "02", title: "Когда масштабируетесь или выходите на новые рынки" },
    { index: "03", title: "Когда меняете продукты или ценности" },
    { index: "04", title: "Когда переросли старый дизайн" },
  ],
  includesTitle: "Что вы получите после сотрудничества с ZOND",
  includes: [
    "Финальную версию логотипа",
    "Цветную, монохромную и инверсную версии логотипа",
    "Фирменную палитру цветов с кодами",
    "Пакет векторных и растровых файлов",
    "Logobook с правилами использования логотипа",
    "Имущественные права на финальную версию логотипа",
  ],
  includeCards: [
    {
      index: "01",
      title: "Финальная версия логотипа",
      description: "Утверждённый знак бренда, готовый к использованию на всех носителях.",
      image: "/assets/photography/logo-1.webp",
      alt: "Финальная версия логотипа",
    },
    {
      index: "02",
      title: "Цветные версии",
      description: "Цветная, монохромная и инверсная версии для печати и digital.",
      image: "/assets/real-cases/carbit-05.webp",
      alt: "Цветные версии логотипа",
    },
    {
      index: "03",
      title: "Фирменная палитра",
      description: "Палитра цветов с кодами для корректного воспроизведения бренда.",
      image: "/assets/photography/identity-1.webp",
      alt: "Фирменная палитра цветов",
    },
    {
      index: "04",
      title: "Пакет файлов",
      description: "Векторные и растровые форматы, удобные для команды и подрядчиков.",
      image: "/assets/photography/graphics-3.webp",
      alt: "Пакет файлов логотипа",
    },
    {
      index: "05",
      title: "Logobook",
      description: "Правила использования логотипа, чтобы стиль оставался целостным.",
      image: "/assets/photography/logo-2.webp",
      alt: "Logobook с правилами использования",
    },
    {
      index: "06",
      title: "Имущественные права",
      description: "Права на финальную версию логотипа передаются вам.",
      image: "/assets/photography/brandbook-3.webp",
      alt: "Имущественные права на логотип",
    },
  ],
  casesTitle: "Наши кейсы по разработке логотипа",
  processTitle: "Как рождается логотип",
  process: [
    { index: "01", title: "Знакомимся", description: "Погружаемся в бизнес, изучаем цели, слушаем пожелания.", duration: "1 день" },
    { index: "02", title: "Изучаем контекст", description: "Анализируем рынок, конкурентов и целевую аудиторию.", duration: "1 день" },
    { index: "03", title: "Рождаем идею", description: "Ищем образ, который запомнится, и формируем концепцию.", duration: "1–2 дня" },
    { index: "04", title: "Создаем эскизы", description: "Презентуем прототипы лого и отбираем лучшие варианты.", duration: "1–2 дня" },
    { index: "05", title: "Придаем форму", description: "Дорабатываем выбранную концепцию и вносим правки.", duration: "1–2 дня" },
    { index: "06", title: "Презентуем", description: "Показываем финальный логотип и передаем все файлы.", duration: "1 день" },
  ],
  teamTitle: "Кто ведет проект",
  whyTitle: "Почему выбирают ZOND",
  whyItems: [
    { title: "Опыт, который работает", description: "За нашими плечами сотни проектов в разных нишах и на разных рынках." },
    { title: "Авторские решения", description: "Каждый логотип создаем с нуля под конкретный бизнес." },
    { title: "Логика в каждой детали", description: "Каждый элемент логотипа работает на узнаваемость бренда." },
    { title: "Дизайн вне времени", description: "Создаем логотипы, которые остаются актуальными независимо от трендов." },
  ],
  compareTitle: "Почему ZOND, а не генератор или фриланс?",
  compareColumns: ["Критерий", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: uk.compareRows.map((row, index) => ({
    ...row,
    criterion: ["Команда", "Основа решения", "Результат", "Уникальность"][index],
    zond: [
      "Арт-директор и графические дизайнеры",
      "Анализ ниши, смыслов и носителей бренда",
      "Логотип с пакетом файлов и правилами",
      "100% авторский знак с возможностью регистрации ТМ",
    ][index],
    freelance: [
      "Один человек",
      "Собственный вкус и видение исполнителя",
      "Просто красивая картинка",
      "Риск совпадений и использования стоков",
    ][index],
    generator: ["Алгоритм", "Промпт", "Случайная графика без смысла", "Отсутствие авторских прав"][index],
  })),
  reviewsTitle: "Отзывы",
  reviewsNote: "Демонстрационные тексты для макета. Не являются реальными отзывами клиентов.",
  reviews: [
    { label: "Пример отзыва 01", quote: "Нужен был логотип, который сразу передаёт характер бренда. Получили несколько сильных концепций и чёткое объяснение, почему именно этот вариант работает лучше всего.", name: "Имя клиента · Компания", role: "Разработка логотипа" },
    { label: "Пример отзыва 02", quote: "Важно было получить не только картинку, но и полный пакет файлов и правила использования. Всё передали вовремя и в удобном формате для команды.", name: "Имя клиента · Компания", role: "Logobook и файлы" },
    { label: "Пример отзыва 03", quote: "Процесс был прозрачным: от брифа до финальной версии мы видели логику каждого шага. Результат выглядит профессионально на всех носителях.", name: "Имя клиента · Компания", role: "Айдентика и носители" },
  ],
  productTitle: "Логотип на реальных носителях.",
  productNote: "Как знак выглядит на продуктах, мерче и в коммуникации.",
  products: withServiceProductImages([
    { alt: "Брендированная кружка с логотипом", caption: "Брендированные носители" },
    { alt: "Наклейки с логотипом на ноутбуке", caption: "Мерч" },
    { alt: "Логотип в оформлении соцсетей", caption: "Соцсети" },
    { alt: "Кепка с вышитым логотипом", caption: "Одежда" },
    { alt: "Логотип на упаковке", caption: "Упаковка" },
    { alt: "Логотип на наружной рекламе", caption: "Outdoor" },
  ]),
  formTitle: "Пришло время создать лицо вашего бренда",
  formDescription: "Заполните форму ниже, и мы разработаем логотип, который расскажет о вашей компании лучше, чем слова.",
  faqTitle: "FAQ",
  faq: [
    { question: "Сколько стоит разработка логотипа и от чего зависит цена?", answer: "Ориентировочная стоимость — 12–45 тыс. грн. Итоговая смета зависит от объёма задачи и согласованного состава работ." },
    { question: "Какие услуги включает разработка логотипа и фирменного стиля?", answer: "В услугу входит разработка логотипа, фирменной цветовой палитры, логобука, а также подготовка файлов для печати и digital." },
    { question: "Какие этапы включает процесс разработки логотипа?", answer: "Процесс разработки дизайна логотипа в ZOND состоит из нескольких этапов: брифинга, анализа ниши и конкурентов, поиска идей и создания скетчей. После этого выбранную концепцию дорабатывают в векторе, презентуют клиенту и при необходимости вносят правки. На финальном этапе заказчик получает полный пакет файлов и логобук с правилами использования логотипа." },
    { question: "Почему качественный логотип важен для бизнеса?", answer: "Ваши клиенты могут быть еще даже не знакомы с вашим продуктом, но уже оценить его по логотипу. Именно он формирует первое впечатление о вашем товаре или услуге, помогает запомниться, вызывает доверие и делает бренд узнаваемым среди конкурентов." },
    { question: "Что входит в финальный пакет файлов после разработки логотипа?", answer: "После сотрудничества с ZOND вы получите финальную версию дизайна лого в цветном и монохромном исполнении, палитру фирменных цветов с кодами, пакет векторных и растровых файлов, а также логобук." },
    { question: "Какие существуют типы логотипов?", answer: "Логотипы могут быть текстовыми, графическими и комбинированными. Выбор конкретного типа зависит от сферы деятельности компании, ее позиционирования на рынке, целевой аудитории и особенностей бренда." },
    { question: "Какие сроки разработки логотипа?", answer: "В среднем разработка логотипа занимает от 7 до 21 рабочего дня. Точный срок зависит от сложности проекта, количества концепций и скорости согласования." },
    { question: "Как выбрать цвета и шрифты для логотипа?", answer: "Цвет привлекает внимание, шрифт формирует характер, а вместе эти элементы создают первое впечатление о компании. Именно поэтому в ZOND мы выбираем их не интуитивно, а с учетом позиционирования бренда, истории, которую он хочет рассказать, и эмоций, которые должен вызывать у своей целевой аудитории." },
  ],
  relatedTitle: "Смежные услуги",
  related: [
    { title: "Брендинг", slug: "branding" },
    { title: "Брендбук", slug: "brandbook" },
    { title: "Айдентика", slug: "identity" },
  ],
};

export type LogoPageContent = ServicePageContent;

export const logoPage: Record<Locale, ServicePageContent> = { uk, en, ru };
