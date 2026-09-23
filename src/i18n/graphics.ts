import type { Locale } from "@/i18n/config";
import type { ServicePageContent } from "@/i18n/logo";

const uk: ServicePageContent = {
  eyebrow: "Послуги / Графіка",
  title: "Графіка",
  titleAccent: "Графічний дизайн для бізнесу",
  lead:
    "Графічний дизайн визначає візуальне сприйняття продукту. Основне завдання — виділити ваш бренд серед інших і привернути увагу споживача.",
  sub: "Створюємо рішення, які утримують увагу, передають характер бренду й підштовхують до дії.",
  cta: "Співпрацювати",
  heroAlt: "Графічний дизайн для бізнесу",
  heroCaption: "Поліграфія, реклама та презентації в єдиному стилі бренду.",
  metricsTitle: "Цифри студії",
  stats: [
    { value: "6", label: "років\nна ринку" },
    { value: "6", label: "експертів\nу команді" },
    { value: "55", label: "брендів\nу портфоліо" },
    { value: "30+", label: "ніш\nу роботі" },
    { value: "300+", label: "графічних\nматеріалів" },
  ],
  audienceTitle: "Де застосовується фірмова графіка",
  audienceItems: [
    { index: "01", title: "Упаковка та друковані матеріали" },
    { index: "02", title: "Зовнішня реклама та вивіски" },
    { index: "03", title: "Презентації та ділова документація" },
    { index: "04", title: "Мерч, офіс, транспорт і digital" },
  ],
  includesTitle: "Що входить у послугу графічного дизайну",
  includes: [
    "Дизайн поліграфії: каталоги, буклети, листівки, бланки",
    "Макети для зовнішньої реклами: білборди, сітілайти, банери",
    "Візуальне оформлення презентацій і комерційних пропозицій",
    "Технічний дизайн: схеми, інфографіка, ілюстрації до інструкцій",
    "Підготовка файлів до друку з профілями кольору та вильотами",
    "Супровід на виробництві та узгодження кольоропроб",
    "Рекомендації щодо застосування графіки на нових носіях",
  ],
  includeCards: [
    {
      index: "01",
      title: "Дизайн поліграфії",
      description:
        "Каталоги, буклети, листівки, фірмові бланки — з правильною підготовкою до друку, розмірами та оздобленням.",
      image: "/branding/hero.png",
      alt: "Дизайн поліграфії",
    },
    {
      index: "02",
      title: "Презентації проєктів",
      description:
        "Комерційні пропозиції, презентації для інвесторів і звіти — структура слайдів працює на переконливість тексту.",
      image: "/services/communication.jpg",
      alt: "Презентації проєктів",
    },
    {
      index: "03",
      title: "Макети для зовнішньої реклами",
      description:
        "Білборди, сітілайти, вивіски, банери — адаптація під відстань перегляду, шрифт і контраст кольорів.",
      image: "/services/graphic.jpg",
      alt: "Макети для зовнішньої реклами",
    },
    {
      index: "04",
      title: "Візуальне оформлення",
      description:
        "Єдиний візуальний стиль матеріалів бренду — щоб кожен носій підсилював впізнаваність.",
      image: "/services/identity.jpg",
      alt: "Візуальне оформлення",
    },
    {
      index: "05",
      title: "Технічний дизайн",
      description:
        "Схеми, інфографіка, ілюстрації до інструкцій — складні процеси простою візуальною мовою.",
      image: "/services/strategy.jpg",
      alt: "Технічний дизайн",
    },
  ],
  casesTitle: "Кейси графічного дизайну",
  processTitle: "Як ми будуємо процес роботи",
  process: [
    {
      index: "01",
      title: "Брифування та аналіз задачі",
      description:
        "З'ясовуємо, де буде використовуватись графіка, хто аудиторія, які матеріали вже є та чи є затверджений фірмовий стиль.",
      duration: "1 день",
    },
    {
      index: "02",
      title: "Пошук концепції",
      description:
        "Пропонуємо кілька напрямків — від стриманих до сміливіших — із поясненням, чому саме такий підхід підходить під задачу.",
      duration: "1–2 дні",
    },
    {
      index: "03",
      title: "Розробка та деталізація",
      description:
        "Доопрацьовуємо обраний напрямок: палітра, шрифтова пара, композиція. Для поліграфії одразу враховуємо параметри друку.",
      duration: "2–4 дні",
    },
    {
      index: "04",
      title: "Підготовка до виробництва",
      description:
        "Передаємо макети у форматах, готових до друку чи публікації: профілі кольору, вильоти, векторні файли.",
      duration: "1–2 дні",
    },
    {
      index: "05",
      title: "Супровід на виробництві",
      description:
        "За потреби узгоджуємо кольоропроби з друкарнею та контролюємо відповідність тиражу затвердженому дизайну.",
      duration: "за потреби",
    },
  ],
  teamTitle: "Хто веде проєкт",
  whyTitle: "Чому варто обрати ZOND",
  whyItems: [
    {
      title: "Дизайн під маркетингову задачу",
      description:
        "Кожне рішення не лише виглядає естетично, а утримує увагу, передає характер бренду й підштовхує до дії.",
    },
    {
      title: "Естетика з практичністю",
      description:
        "Враховуємо, як макет працюватиме в реальному середовищі — на друку, банері чи в руках покупця.",
    },
    {
      title: "Технічна грамотність",
      description:
        "Правильні розміри, підготовка для типографії, профілі кольору, вильоти та вектор для масштабування.",
    },
    {
      title: "Візуальна послідовність",
      description:
        "Формуємо систему, завдяки якій бренд впізнається з першого погляду на будь-якому носії.",
    },
  ],
  compareTitle: "Чому ZOND, а не шаблон чи разовий макет?",
  compareColumns: ["Критерій", "ZOND", "Фриланс", "Шаблон"],
  compareRows: [
    {
      criterion: "Підхід",
      zond: "Під задачу й носій",
      freelance: "Окремий макет",
      generator: "Універсальний шаблон",
    },
    {
      criterion: "Техніка друку",
      zond: "Prepress і супровід",
      freelance: "Не завжди",
      generator: "Немає",
    },
    {
      criterion: "Стиль",
      zond: "Єдина система бренду",
      freelance: "Стиль автора",
      generator: "Схожий на інших",
    },
    {
      criterion: "Результат",
      zond: "Готові до друку файли",
      freelance: "Залежить від досвіду",
      generator: "Потрібна доробка",
    },
  ],
  reviewsTitle: "Відгуки",
  reviewsNote: "Демонстраційні тексти для макета. Не є реальними відгуками клієнтів.",
  reviews: [
    {
      label: "Приклад відгуку 01",
      quote:
        "Потрібна була поліграфія та зовнішня реклама в одному стилі. Отримали макети, готові до друку, без додаткових правок у типографії.",
      name: "Ім'я клієнта · Компанія",
      role: "Поліграфія та реклама",
    },
    {
      label: "Приклад відгуку 02",
      quote:
        "Презентація для інвесторів стала читабельнішою й переконливішою. Структура слайдів працює на текст, а не відволікає від нього.",
      name: "Ім'я клієнта · Компанія",
      role: "Оформлення презентацій",
    },
    {
      label: "Приклад відгуку 03",
      quote:
        "Усі матеріали виглядають як одна система. Легко додавати нові носії, спираючись на рекомендації студії.",
      name: "Ім'я клієнта · Компанія",
      role: "Фірмова графіка",
    },
  ],
  formTitle: "Потрібна графіка, яка працює на впізнаваність?",
  formDescription:
    "Заповніть форму. Розберемо задачу й запропонуємо рішення під ваші носії та бренд.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "Що входить у послугу графічного дизайну?",
      answer:
        "Дизайн поліграфії, макети для зовнішньої реклами, візуальне оформлення презентацій і проєктів, технічний дизайн (схеми, інфографіка), підготовка до друку та за потреби супровід на виробництві.",
    },
    {
      question: "Як побудований процес роботи?",
      answer:
        "Брифування та аналіз → пошук концепції → розробка та деталізація → підготовка до виробництва → супровід на виробництві за потреби.",
    },
    {
      question: "Де застосовується фірмова графіка?",
      answer:
        "На упаковці, у діловій документації, на рекламних носіях, у мерчі, в оформленні офісу чи торгової точки, на транспорті та уніформі, на сайті й у соцмережах.",
    },
    {
      question: "Чому графічний дизайн — це інвестиція?",
      answer:
        "Слабка візуальна подача плутає бренд із конкурентами й знижує ефект реклами. Продуманий дизайн формує візуальну послідовність, завдяки якій бренд впізнається з першого погляду.",
    },
    {
      question: "Що ви отримуєте в результаті?",
      answer:
        "Комплект макетів під кожен носій, файли для друку та digital, візуальну узгодженість між матеріалами та рекомендації для майбутніх носіїв.",
    },
    {
      question: "Чи враховуєте ви технічні вимоги друкарні?",
      answer:
        "Так. Готуємо макети з правильними профілями кольору, вильотами під обріз і векторними файлами. За потреби узгоджуємо кольоропроби.",
    },
    {
      question: "Чи можна замовити лише презентації або лише зовнішню рекламу?",
      answer:
        "Так. Склад робіт визначається задачею: від одного носія до повної системи фірмової графіки.",
    },
    {
      question: "Чи є приклади робіт?",
      answer:
        "Так. Наприклад, фірмова графіка для WIEX — поліграфічні матеріали та сувенірна продукція в єдиному візуальному стилі бренду.",
    },
  ],
  relatedTitle: "Суміжні послуги",
  related: [
    { title: "Брендинг", slug: "branding" },
    { title: "Пакування", slug: "packaging" },
    { title: "Ілюстрація", slug: "illustration" },
  ],
};

const en: ServicePageContent = {
  ...uk,
  eyebrow: "Services / Graphics",
  title: "Graphics",
  titleAccent: "Graphic design for business",
  lead:
    "Graphic design shapes how a product is perceived visually. The main goal is to stand out among competitors and capture consumer attention.",
  sub: "We create solutions that hold attention, convey brand character, and push toward action.",
  cta: "Collaborate",
  heroAlt: "Graphic design for business",
  heroCaption: "Print, advertising, and presentations in one brand style.",
  metricsTitle: "Studio numbers",
  stats: [
    { value: "6", label: "years\non the market" },
    { value: "6", label: "experts\non the team" },
    { value: "55", label: "brands\nin portfolio" },
    { value: "30+", label: "niches\nin work" },
    { value: "300+", label: "graphic\nmaterials" },
  ],
  audienceTitle: "Where brand graphics are used",
  audienceItems: [
    { index: "01", title: "Packaging and print materials" },
    { index: "02", title: "Outdoor advertising and signage" },
    { index: "03", title: "Presentations and business documents" },
    { index: "04", title: "Merch, office, transport, and digital" },
  ],
  includesTitle: "What graphic design service includes",
  includes: [
    "Print design: catalogs, booklets, flyers, letterheads",
    "Outdoor advertising layouts: billboards, citylights, banners",
    "Visual design of presentations and commercial proposals",
    "Technical design: diagrams, infographics, instruction illustrations",
    "Print-ready files with color profiles and bleed",
    "Production support and color proof approval",
    "Guidelines for applying graphics on future media",
  ],
  includeCards: [
    {
      index: "01",
      title: "Print design",
      description:
        "Catalogs, booklets, flyers, letterheads — with correct print preparation, sizes, and finishing.",
      image: "/branding/hero.png",
      alt: "Print design",
    },
    {
      index: "02",
      title: "Project presentations",
      description:
        "Commercial proposals, investor decks, and reports — slide structure supports persuasion.",
      image: "/services/communication.jpg",
      alt: "Project presentations",
    },
    {
      index: "03",
      title: "Outdoor advertising layouts",
      description:
        "Billboards, citylights, signs, banners — adapted for viewing distance, type size, and contrast.",
      image: "/services/graphic.jpg",
      alt: "Outdoor advertising layouts",
    },
    {
      index: "04",
      title: "Visual styling",
      description:
        "A unified visual style for brand materials so every medium strengthens recognition.",
      image: "/services/identity.jpg",
      alt: "Visual styling",
    },
    {
      index: "05",
      title: "Technical design",
      description:
        "Diagrams, infographics, instruction illustrations — complex processes in simple visual language.",
      image: "/services/strategy.jpg",
      alt: "Technical design",
    },
  ],
  casesTitle: "Graphic design cases",
  processTitle: "How we build the process",
  process: [
    { index: "01", title: "Briefing and task analysis", description: "We clarify where graphics will be used, who the audience is, what materials already exist, and whether brand style is approved.", duration: "1 day" },
    { index: "02", title: "Concept search", description: "We propose several directions — from restrained to bolder — with explanations why each fits the task.", duration: "1–2 days" },
    { index: "03", title: "Development and detailing", description: "We refine the chosen direction: palette, type pairing, composition. For print we account for production parameters immediately.", duration: "2–4 days" },
    { index: "04", title: "Production preparation", description: "We deliver layouts ready for print or publication: color profiles, bleed, vector files.", duration: "1–2 days" },
    { index: "05", title: "Production support", description: "If needed, we approve color proofs with the printer and check the run matches the approved design.", duration: "as needed" },
  ],
  teamTitle: "Who leads the project",
  whyTitle: "Why choose ZOND",
  whyItems: [
    { title: "Design for a marketing task", description: "Every solution looks aesthetic and also holds attention, conveys brand character, and drives action." },
    { title: "Aesthetics with practicality", description: "We account for how the layout works in the real world — in print, on a banner, or in a buyer's hands." },
    { title: "Technical literacy", description: "Correct sizes, press preparation, color profiles, bleed, and vectors for scaling." },
    { title: "Visual consistency", description: "We build a system that makes the brand recognizable at first glance on any medium." },
  ],
  compareTitle: "Why ZOND, not a template or one-off layout?",
  compareColumns: ["Criterion", "ZOND", "Freelance", "Template"],
  compareRows: [
    { criterion: "Approach", zond: "For the task and medium", freelance: "Separate layout", generator: "Universal template" },
    { criterion: "Print technique", zond: "Prepress and support", freelance: "Not always", generator: "None" },
    { criterion: "Style", zond: "Unified brand system", freelance: "Author's style", generator: "Similar to others" },
    { criterion: "Result", zond: "Print-ready files", freelance: "Depends on experience", generator: "Needs refinement" },
  ],
  reviewsTitle: "Reviews",
  reviewsNote: "Sample texts for the layout. These are not real client reviews.",
  reviews: [
    { label: "Sample review 01", quote: "We needed print and outdoor ads in one style. We received print-ready layouts with no extra revisions at the printer.", name: "Client name · Company", role: "Print and advertising" },
    { label: "Sample review 02", quote: "The investor presentation became clearer and more persuasive. Slide structure supports the text instead of distracting from it.", name: "Client name · Company", role: "Presentation design" },
    { label: "Sample review 03", quote: "All materials look like one system. Easy to add new media using the studio guidelines.", name: "Client name · Company", role: "Brand graphics" },
  ],
  formTitle: "Need graphics that work for recognition?",
  formDescription: "Fill out the form. We will review the task and propose a solution for your media and brand.",
  faqTitle: "FAQ",
  faq: [
    { question: "What does graphic design service include?", answer: "Print design, outdoor advertising layouts, presentation and project design, technical design, print preparation, and production support if needed." },
    { question: "How is the process structured?", answer: "Briefing and analysis → concept search → development and detailing → production preparation → production support if needed." },
    { question: "Where is brand graphics used?", answer: "On packaging, business documents, advertising media, merch, office or store design, transport and uniforms, website and social media." },
    { question: "Why is graphic design an investment?", answer: "Weak visuals confuse the brand with competitors and weaken advertising. Thoughtful design creates consistency that makes the brand recognizable at first glance." },
    { question: "What do you get as a result?", answer: "A set of layouts for each medium, files for print and digital, visual consistency across materials, and guidelines for future media." },
    { question: "Do you account for printer requirements?", answer: "Yes. We prepare layouts with correct color profiles, bleed, and vector files. Color proofs can be approved if needed." },
    { question: "Can I order only presentations or only outdoor ads?", answer: "Yes. Scope is defined by the task — from one medium to a full brand graphics system." },
    { question: "Are there work examples?", answer: "Yes. For example, brand graphics for WIEX — print materials and merchandise in one visual style." },
  ],
  relatedTitle: "Related services",
  related: [
    { title: "Branding", slug: "branding" },
    { title: "Packaging", slug: "packaging" },
    { title: "Illustration", slug: "illustration" },
  ],
};

const ru: ServicePageContent = {
  ...uk,
  eyebrow: "Услуги / Графика",
  title: "Графика",
  titleAccent: "Графический дизайн для бизнеса",
  lead:
    "Графический дизайн определяет визуальное восприятие продукта. Главная задача — выделить ваш бренд среди других и привлечь внимание потребителя.",
  sub: "Создаём решения, которые удерживают внимание, передают характер бренда и подталкивают к действию.",
  cta: "Сотрудничать",
  heroAlt: "Графический дизайн для бизнеса",
  heroCaption: "Полиграфия, реклама и презентации в едином стиле бренда.",
  metricsTitle: "Цифры студии",
  stats: [
    { value: "6", label: "лет\nна рынке" },
    { value: "6", label: "экспертов\nв команде" },
    { value: "55", label: "брендов\nв портфолио" },
    { value: "30+", label: "ниш\nв работе" },
    { value: "300+", label: "графических\nматериалов" },
  ],
  audienceTitle: "Где применяется фирменная графика",
  audienceItems: [
    { index: "01", title: "Упаковка и печатные материалы" },
    { index: "02", title: "Наружная реклама и вывески" },
    { index: "03", title: "Презентации и деловая документация" },
    { index: "04", title: "Мерч, офис, транспорт и digital" },
  ],
  includesTitle: "Что входит в услугу графического дизайна",
  includes: [
    "Дизайн полиграфии: каталоги, буклеты, листовки, бланки",
    "Макеты для наружной рекламы: билборды, ситилайты, баннеры",
    "Визуальное оформление презентаций и коммерческих предложений",
    "Технический дизайн: схемы, инфографика, иллюстрации к инструкциям",
    "Подготовка файлов к печати с профилями цвета и вылетами",
    "Сопровождение на производстве и согласование цветопроб",
    "Рекомендации по применению графики на новых носителях",
  ],
  includeCards: [
    {
      index: "01",
      title: "Дизайн полиграфии",
      description:
        "Каталоги, буклеты, листовки, фирменные бланки — с правильной подготовкой к печати, размерами и отделкой.",
      image: "/branding/hero.png",
      alt: "Дизайн полиграфии",
    },
    {
      index: "02",
      title: "Презентации проектов",
      description:
        "Коммерческие предложения, презентации для инвесторов и отчёты — структура слайдов работает на убедительность.",
      image: "/services/communication.jpg",
      alt: "Презентации проектов",
    },
    {
      index: "03",
      title: "Макеты для наружной рекламы",
      description:
        "Билборды, ситилайты, вывески, баннеры — адаптация под расстояние просмотра, шрифт и контраст цветов.",
      image: "/services/graphic.jpg",
      alt: "Макеты для наружной рекламы",
    },
    {
      index: "04",
      title: "Визуальное оформление",
      description:
        "Единый визуальный стиль материалов бренда — чтобы каждый носитель усиливал узнаваемость.",
      image: "/services/identity.jpg",
      alt: "Визуальное оформление",
    },
    {
      index: "05",
      title: "Технический дизайн",
      description:
        "Схемы, инфографика, иллюстрации к инструкциям — сложные процессы простым визуальным языком.",
      image: "/services/strategy.jpg",
      alt: "Технический дизайн",
    },
  ],
  casesTitle: "Кейсы графического дизайна",
  processTitle: "Как мы строим процесс работы",
  process: [
    { index: "01", title: "Брифинг и анализ задачи", description: "Выясняем, где будет использоваться графика, кто аудитория, какие материалы уже есть и есть ли утверждённый фирменный стиль.", duration: "1 день" },
    { index: "02", title: "Поиск концепции", description: "Предлагаем несколько направлений — от сдержанных до смелых — с объяснением, почему именно такой подход подходит под задачу.", duration: "1–2 дня" },
    { index: "03", title: "Разработка и детализация", description: "Дорабатываем выбранное направление: палитра, шрифтовая пара, композиция. Для полиграфии сразу учитываем параметры печати.", duration: "2–4 дня" },
    { index: "04", title: "Подготовка к производству", description: "Передаём макеты в форматах, готовых к печати или публикации: профили цвета, вылеты, векторные файлы.", duration: "1–2 дня" },
    { index: "05", title: "Сопровождение на производстве", description: "При необходимости согласуем цветопробы с типографией и контролируем соответствие тиража утверждённому дизайну.", duration: "по необходимости" },
  ],
  teamTitle: "Кто ведёт проект",
  whyTitle: "Почему стоит выбрать ZOND",
  whyItems: [
    { title: "Дизайн под маркетинговую задачу", description: "Каждое решение не только выглядит эстетично, но удерживает внимание, передаёт характер бренда и подталкивает к действию." },
    { title: "Эстетика с практичностью", description: "Учитываем, как макет будет работать в реальной среде — в печати, на баннере или в руках покупателя." },
    { title: "Техническая грамотность", description: "Правильные размеры, подготовка для типографии, профили цвета, вылеты и вектор для масштабирования." },
    { title: "Визуальная последовательность", description: "Формируем систему, благодаря которой бренд узнаётся с первого взгляда на любом носителе." },
  ],
  compareTitle: "Почему ZOND, а не шаблон или разовый макет?",
  compareColumns: ["Критерий", "ZOND", "Фриланс", "Шаблон"],
  compareRows: [
    { criterion: "Подход", zond: "Под задачу и носитель", freelance: "Отдельный макет", generator: "Универсальный шаблон" },
    { criterion: "Техника печати", zond: "Prepress и сопровождение", freelance: "Не всегда", generator: "Нет" },
    { criterion: "Стиль", zond: "Единая система бренда", freelance: "Стиль автора", generator: "Похож на других" },
    { criterion: "Результат", zond: "Готовые к печати файлы", freelance: "Зависит от опыта", generator: "Нужна доработка" },
  ],
  reviewsTitle: "Отзывы",
  reviewsNote: "Демонстрационные тексты для макета. Не являются реальными отзывами клиентов.",
  reviews: [
    { label: "Пример отзыва 01", quote: "Нужна была полиграфия и наружная реклама в одном стиле. Получили макеты, готовые к печати, без дополнительных правок в типографии.", name: "Имя клиента · Компания", role: "Полиграфия и реклама" },
    { label: "Пример отзыва 02", quote: "Презентация для инвесторов стала читабельнее и убедительнее. Структура слайдов работает на текст, а не отвлекает от него.", name: "Имя клиента · Компания", role: "Оформление презентаций" },
    { label: "Пример отзыва 03", quote: "Все материалы выглядят как одна система. Легко добавлять новые носители, опираясь на рекомендации студии.", name: "Имя клиента · Компания", role: "Фирменная графика" },
  ],
  formTitle: "Нужна графика, которая работает на узнаваемость?",
  formDescription: "Заполните форму. Разберём задачу и предложим решение под ваши носители и бренд.",
  faqTitle: "FAQ",
  faq: [
    { question: "Что входит в услугу графического дизайна?", answer: "Дизайн полиграфии, макеты для наружной рекламы, оформление презентаций и проектов, технический дизайн, подготовка к печати и сопровождение на производстве при необходимости." },
    { question: "Как построен процесс работы?", answer: "Брифинг и анализ → поиск концепции → разработка и детализация → подготовка к производству → сопровождение на производстве при необходимости." },
    { question: "Где применяется фирменная графика?", answer: "На упаковке, в деловой документации, на рекламных носителях, в мерче, в оформлении офиса или торговой точки, на транспорте и униформе, на сайте и в соцсетях." },
    { question: "Почему графический дизайн — это инвестиция?", answer: "Слабая визуальная подача путает бренд с конкурентами и снижает эффект рекламы. Продуманный дизайн формирует последовательность, благодаря которой бренд узнаётся с первого взгляда." },
    { question: "Что вы получаете в результате?", answer: "Комплект макетов под каждый носитель, файлы для печати и digital, визуальную согласованность и рекомендации для будущих носителей." },
    { question: "Учитываете ли вы технические требования типографии?", answer: "Да. Готовим макеты с правильными профилями цвета, вылетами и векторными файлами. При необходимости согласуем цветопробы." },
    { question: "Можно ли заказать только презентации или только наружную рекламу?", answer: "Да. Состав работ определяется задачей — от одного носителя до полной системы фирменной графики." },
    { question: "Есть ли примеры работ?", answer: "Да. Например, фирменная графика для WIEX — полиграфические материалы и сувенирная продукция в едином визуальном стиле бренда." },
  ],
  relatedTitle: "Смежные услуги",
  related: [
    { title: "Брендинг", slug: "branding" },
    { title: "Упаковка", slug: "packaging" },
    { title: "Иллюстрация", slug: "illustration" },
  ],
};

export const graphicsPage: Record<Locale, ServicePageContent> = { uk, en, ru };
