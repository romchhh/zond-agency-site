import type { Locale } from "@/i18n/config";
import type { ServicePageContent } from "@/i18n/logo";
import { withServiceProductImages } from "@/i18n/service-products";

const uk: ServicePageContent = {
  eyebrow: "Послуги / Інфлюенс маркетинг",
  title: "Інфлюенс маркетинг",
  titleAccent: "Реклама у блогерів, якій довіряють",
  lead:
    "Ефективне просування бізнесу через співпрацю з блогерами та лідерами думок. Допоможемо підібрати оптимальний варіант під ваш бюджет і цілі.",
  sub: "Замовляйте інфлюенс маркетинг уже зараз — і отримайте нових клієнтів через потужність соціальних мереж.",
  cta: "Співпрацювати",
  heroAlt: "Інфлюенс маркетинг і реклама у блогерів",
  heroCaption: "Підбір інфлюенсерів, запуск кампанії та прозора аналітика.",
  metricsTitle: "Цифри студії",
  stats: [
    { value: "6", label: "років\nна ринку" },
    { value: "6", label: "експертів\nу команді" },
    { value: "55", label: "брендів\nу портфоліо" },
    { value: "30+", label: "ніш\nу роботі" },
    { value: "4", label: "ключові\nплатформи" },
  ],
  audienceTitle: "Мікро- та макроінфлюенсери: як обрати формат",
  audienceItems: [
    { index: "01", title: "Мікроблогери — висока залученість аудиторії" },
    { index: "02", title: "Макроінфлюенсери — швидке масштабне охоплення" },
    { index: "03", title: "E-commerce, beauty, lifestyle і IT-проєкти" },
    { index: "04", title: "Бренди з гнучким бюджетом на digital" },
  ],
  includesTitle: "Що входить у послугу",
  includes: [
    "Робота з блогерами під нішу, аудиторію та бюджет",
    "Просування у Instagram, TikTok, YouTube і Telegram",
    "Аналіз ринку та підбір релевантних інфлюенсерів",
    "Узгодження креативу та форматів інтеграцій",
    "Запуск кампанії за погодженим графіком",
    "Звіт з охопленнями, кліками та конверсіями",
  ],
  includeCards: [
    {
      index: "01",
      title: "Робота з блогерами",
      description:
        "Підбираємо інфлюенсерів під нішу, географію та інтереси аудиторії — від мікроблогерів до топ-інфлюенсерів.",
      image: "/services/web.jpg",
      alt: "Робота з блогерами",
    },
    {
      index: "02",
      title: "Просування у соціальних мережах",
      description:
        "Кампанії в Instagram, TikTok, YouTube і Telegram: пости, сторіз, огляди, інтеграції та колаборації.",
      image: "/services/smm.jpg",
      alt: "Просування у соціальних мережах",
    },
    {
      index: "03",
      title: "Аналіз ринку",
      description:
        "Аналізуємо продукт і цільову аудиторію, щоб обрати платформи та формат для максимальної ефективності.",
      image: "/services/strategy.jpg",
      alt: "Аналіз ринку",
    },
  ],
  casesTitle: "Результати наших кампаній",
  processTitle: "Як ми будуємо процес роботи",
  process: [
    {
      index: "01",
      title: "Заявка та брифування",
      description: "Ви залишаєте заявку, ми детально обговорюємо продукт, нішу та бюджет.",
      duration: "1 день",
      image: "/services/strategy.jpg",
      alt: "Заявка та брифування",
    },
    {
      index: "02",
      title: "Підбір блогерів і форматів",
      description:
        "Формуємо список інфлюенсерів, які відповідають цілям кампанії та бюджету клієнта.",
      duration: "2–5 днів",
      image: "/services/smm.jpg",
      alt: "Підбір блогерів і форматів",
    },
    {
      index: "03",
      title: "Узгодження креативу",
      description:
        "Розробляємо план кампанії та узгоджуємо концепцію інтеграцій із блогерами.",
      duration: "1–3 дні",
      image: "/services/communication.jpg",
      alt: "Узгодження креативу",
    },
    {
      index: "04",
      title: "Запуск реклами",
      description: "Кампанія стартує згідно з погодженим графіком публікацій.",
      duration: "1–4 тижні",
      image: "/services/web.jpg",
      alt: "Запуск реклами у блогерів",
    },
    {
      index: "05",
      title: "Звіт з аналітикою",
      description:
        "Після завершення кампанії надаємо статистику: охоплення, перегляди, кліки та конверсії.",
      duration: "1–2 дні",
      image: "/services/positioning.jpg",
      alt: "Звіт з аналітикою кампанії",
    },
  ],
  teamTitle: "Хто веде проєкт",
  whyTitle: "Переваги роботи з блогерами",
  whyItems: [
    {
      title: "Довіра аудиторії",
      description:
        "Рекомендація блогера сприймається як порада знайомого, а не нав'язливе рекламне повідомлення.",
    },
    {
      title: "Вищі конверсії",
      description:
        "Інфлюенс-маркетинг часто дає кращі показники продажів і впізнаваності порівняно з класичними каналами.",
    },
    {
      title: "Точний підбір",
      description:
        "Обираємо блогерів за нішею, географією, інтересами аудиторії та бюджетом кампанії.",
    },
    {
      title: "Гнучкий бюджет",
      description:
        "Від доступних розміщень у мікроблогерів до масштабних кампаній із топ-інфлюенсерами.",
    },
  ],
  compareTitle: "Мікро- чи макроінфлюенсери?",
  compareColumns: ["Критерій", "ZOND", "Мікро", "Макро"],
  compareRows: [
    {
      criterion: "Аудиторія",
      zond: "Підбираємо під ціль",
      freelance: "5–50 тис.",
      generator: "100 тис.+",
    },
    {
      criterion: "Сильна сторона",
      zond: "Баланс під задачу",
      freelance: "Висока залученість",
      generator: "Швидке охоплення",
    },
    {
      criterion: "Бюджет",
      zond: "Оптимізуємо під KPI",
      freelance: "Доступніший",
      generator: "Вищий",
    },
    {
      criterion: "Коли обирати",
      zond: "За цілями кампанії",
      freelance: "Глибока взаємодія",
      generator: "Масштаб і впізнаваність",
    },
  ],
  reviewsTitle: "Відгуки",
  reviewsNote: "Демонстраційні тексти для макета. Не є реальними відгуками клієнтів.",
  reviews: [
    {
      label: "Приклад відгуку 01",
      quote:
        "Підібрали мікроблогерів під нашу нішу. Охоплення перевищило очікування, а продажі зросли вже в перший місяць кампанії.",
      name: "Ім'я клієнта · Компанія",
      role: "E-commerce кампанія",
    },
    {
      label: "Приклад відгуку 02",
      quote:
        "Прозорий процес: від брифу до звіту з аналітикою. Зрозуміло, куди пішов бюджет і який результат дав кожен блогер.",
      name: "Ім'я клієнта · Компанія",
      role: "Інфлюенс-маркетинг",
    },
    {
      label: "Приклад відгуку 03",
      quote:
        "Комбінація Instagram і TikTok спрацювала краще за класичну таргетовану рекламу. Аудиторія реально довіряла інтеграціям.",
      name: "Ім'я клієнта · Компанія",
      role: "Запуск продукту",
    },
  ],
  productTitle: "Кампанія, яку видно всюди.",
  productNote: "Інтеграції та бренд у точках контакту з аудиторією.",
  products: withServiceProductImages([
    { alt: "Брендовані носії для кампанії", caption: "Брендовані носії" },
    { alt: "Мерч для колаборацій", caption: "Мерч" },
    { alt: "Інтеграції в соцмережах", caption: "Соцмережі" },
    { alt: "Брендований одяг для інфлюенсерів", caption: "Одяг" },
    { alt: "Продукт у пакуванні для оглядів", caption: "Пакування" },
    { alt: "Кампанія на зовнішніх носіях", caption: "Outdoor" },
  ]),
  formTitle: "Готові запускати рекламу у блогерів?",
  formDescription:
    "Заповніть форму. Підберемо інфлюенсерів і формат під ваш бюджет та цілі.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "Скільки коштує реклама у блогерів в Україні?",
      answer:
        "Точна вартість розраховується індивідуально залежно від бюджету, цілей та цільової аудиторії. Розміщення у мікроблогера в Instagram може коштувати від 50–100$, співпраця з топ-інфлюенсером — від кількох сотень до тисячі доларів.",
    },
    {
      question: "Скільки часу триває кампанія?",
      answer:
        "Зазвичай від 1 тижня до 1 місяця, залежно від кількості обраних блогерів та формату співпраці. Масштабні проєкти можуть тривати кілька місяців.",
    },
    {
      question: "Як обираються блогери для кампанії?",
      answer:
        "За критеріями тематики, географії, охоплення, активності аудиторії та вартості розміщення — це гарантує релевантність реклами вашій цільовій аудиторії.",
    },
    {
      question: "Як оцінюється результат кампанії?",
      answer:
        "Після завершення ви отримуєте звіт зі статистикою переглядів, охоплення, кліків та конверсій, а також рекомендації для наступних запусків.",
    },
    {
      question: "Що таке інфлюенс-маркетинг?",
      answer:
        "Це формат просування, у якому бренд співпрацює з блогерами з активною аудиторією. Реклама подається нативно — через огляди, інтеграції, пости чи сторіз — і сприймається як рекомендація, а не класичне оголошення.",
    },
    {
      question: "На яких платформах ви працюєте?",
      answer:
        "Instagram, TikTok, YouTube і Telegram. Аналізуємо продукт і аудиторію, щоб підібрати платформу або комбінацію кількох каналів.",
    },
    {
      question: "Мікро- чи макроінфлюенсери — що краще?",
      answer:
        "Якщо потрібна глибока залученість — краще мікроблогери (5–50 тис.). Якщо масштабне охоплення й швидка впізнаваність — макроінфлюенсери (100 тис.+). Часто комбінуємо обидва формати.",
    },
    {
      question: "Які формати співпраці доступні?",
      answer:
        "Пости й сторіз в Instagram, короткі відео в TikTok, огляди та інтеграції в YouTube, реклама в Telegram-каналах, а також колаборації — конкурси, акції чи ексклюзивні продукти.",
    },
  ],
  relatedTitle: "Суміжні послуги",
  related: [
    { title: "SMM", slug: "smm" },
    { title: "Брендинг", slug: "branding" },
    { title: "Marketing 360", slug: "marketing-360" },
  ],
};

const en: ServicePageContent = {
  ...uk,
  eyebrow: "Services / Influence marketing",
  title: "Influence marketing",
  titleAccent: "Blogger ads people trust",
  lead:
    "Effective business promotion through collaboration with bloggers and opinion leaders. We help choose the optimal option for your budget and goals.",
  sub: "Order influence marketing now and get new clients through the power of social networks.",
  cta: "Collaborate",
  heroAlt: "Influence marketing and blogger advertising",
  heroCaption: "Influencer selection, campaign launch, and transparent analytics.",
  metricsTitle: "Studio numbers",
  stats: [
    { value: "6", label: "years\non the market" },
    { value: "6", label: "experts\non the team" },
    { value: "55", label: "brands\nin portfolio" },
    { value: "30+", label: "niches\nin work" },
    { value: "4", label: "key\nplatforms" },
  ],
  audienceTitle: "Micro and macro influencers: how to choose",
  audienceItems: [
    { index: "01", title: "Micro-bloggers — high audience engagement" },
    { index: "02", title: "Macro influencers — fast large-scale reach" },
    { index: "03", title: "E-commerce, beauty, lifestyle, and IT projects" },
    { index: "04", title: "Brands with a flexible digital budget" },
  ],
  includesTitle: "What the service includes",
  includes: [
    "Blogger collaboration matched to niche, audience, and budget",
    "Promotion on Instagram, TikTok, YouTube, and Telegram",
    "Market analysis and relevant influencer selection",
    "Creative approval and integration formats",
    "Campaign launch on an agreed schedule",
    "Report with reach, clicks, and conversions",
  ],
  includeCards: [
    {
      index: "01",
      title: "Working with bloggers",
      description:
        "We select influencers by niche, geography, and audience interests — from micro-bloggers to top creators.",
      image: "/services/web.jpg",
      alt: "Working with bloggers",
    },
    {
      index: "02",
      title: "Social media promotion",
      description:
        "Campaigns on Instagram, TikTok, YouTube, and Telegram: posts, stories, reviews, integrations, and collaborations.",
      image: "/services/smm.jpg",
      alt: "Social media promotion",
    },
    {
      index: "03",
      title: "Market analysis",
      description:
        "We analyze the product and target audience to choose platforms and formats for maximum efficiency.",
      image: "/services/strategy.jpg",
      alt: "Market analysis",
    },
  ],
  casesTitle: "Our campaign results",
  processTitle: "How we build the process",
  process: [
    {
      index: "01",
      title: "Request and briefing",
      description: "You submit a request; we discuss the product, niche, and budget in detail.",
      duration: "1 day",
      image: "/services/strategy.jpg",
      alt: "Request and briefing",
    },
    {
      index: "02",
      title: "Influencer and format selection",
      description: "We build a list of influencers that match campaign goals and budget.",
      duration: "2–5 days",
      image: "/services/smm.jpg",
      alt: "Influencer and format selection",
    },
    {
      index: "03",
      title: "Creative approval",
      description: "We develop the campaign plan and approve integration concepts with bloggers.",
      duration: "1–3 days",
      image: "/services/communication.jpg",
      alt: "Creative approval",
    },
    {
      index: "04",
      title: "Campaign launch",
      description: "The campaign starts according to the agreed publishing schedule.",
      duration: "1–4 weeks",
      image: "/services/web.jpg",
      alt: "Campaign launch with bloggers",
    },
    {
      index: "05",
      title: "Analytics report",
      description: "After the campaign we provide stats: reach, views, clicks, and conversions.",
      duration: "1–2 days",
      image: "/services/positioning.jpg",
      alt: "Campaign analytics report",
    },
  ],
  teamTitle: "Who leads the project",
  whyTitle: "Benefits of working with bloggers",
  whyItems: [
    { title: "Audience trust", description: "A blogger recommendation feels like advice from someone you know, not a pushy brand ad." },
    { title: "Higher conversions", description: "Influence marketing often delivers better sales and recognition than classic channels." },
    { title: "Precise matching", description: "We choose bloggers by niche, geography, audience interests, and campaign budget." },
    { title: "Flexible budget", description: "From affordable micro-blogger placements to large campaigns with top influencers." },
  ],
  compareTitle: "Micro or macro influencers?",
  compareColumns: ["Criterion", "ZOND", "Micro", "Macro"],
  compareRows: [
    { criterion: "Audience", zond: "Matched to the goal", freelance: "5–50k", generator: "100k+" },
    { criterion: "Strength", zond: "Balance for the task", freelance: "High engagement", generator: "Fast reach" },
    { criterion: "Budget", zond: "Optimized for KPIs", freelance: "More affordable", generator: "Higher" },
    { criterion: "When to choose", zond: "By campaign goals", freelance: "Deep interaction", generator: "Scale and recognition" },
  ],
  reviewsTitle: "Reviews",
  reviewsNote: "Sample texts for the layout. These are not real client reviews.",
  reviews: [
    { label: "Sample review 01", quote: "They selected micro-bloggers for our niche. Reach exceeded expectations, and sales grew in the first campaign month.", name: "Client name · Company", role: "E-commerce campaign" },
    { label: "Sample review 02", quote: "Transparent process from brief to analytics report. Clear where the budget went and what each blogger delivered.", name: "Client name · Company", role: "Influence marketing" },
    { label: "Sample review 03", quote: "The Instagram and TikTok mix outperformed classic paid ads. The audience really trusted the integrations.", name: "Client name · Company", role: "Product launch" },
  ],
  productTitle: "A campaign you can see everywhere.",
  productNote: "Integrations and brand at audience touchpoints.",
  products: withServiceProductImages([
    { alt: "Branded media for the campaign", caption: "Branded media" },
    { alt: "Merch for collaborations", caption: "Merch" },
    { alt: "Integrations on social media", caption: "Social" },
    { alt: "Branded apparel for influencers", caption: "Apparel" },
    { alt: "Product packaging for reviews", caption: "Packaging" },
    { alt: "Campaign on outdoor media", caption: "Outdoor" },
  ]),
  formTitle: "Ready to launch blogger advertising?",
  formDescription: "Fill out the form. We will select influencers and formats for your budget and goals.",
  faqTitle: "FAQ",
  faq: [
    { question: "How much does blogger advertising cost in Ukraine?", answer: "The exact price is calculated individually based on budget, goals, and audience. Micro-blogger Instagram placements can start from $50–100; top influencers from hundreds to a thousand dollars." },
    { question: "How long does a campaign last?", answer: "Usually from 1 week to 1 month, depending on the number of bloggers and collaboration format. Larger projects may run for several months." },
    { question: "How are bloggers selected for a campaign?", answer: "By topic, geography, reach, audience activity, and placement cost — to keep ads relevant to your target audience." },
    { question: "How is campaign performance measured?", answer: "After completion you receive a report with views, reach, clicks, and conversions, plus recommendations for the next launches." },
    { question: "What is influence marketing?", answer: "A promotion format where a brand collaborates with bloggers who have an active audience. Ads are native — reviews, integrations, posts, or stories — and feel like recommendations." },
    { question: "Which platforms do you work with?", answer: "Instagram, TikTok, YouTube, and Telegram. We analyze the product and audience to choose one platform or a combination." },
    { question: "Micro or macro influencers — which is better?", answer: "For deep engagement — micro-bloggers (5–50k). For large reach and fast recognition — macro influencers (100k+). We often combine both." },
    { question: "What collaboration formats are available?", answer: "Instagram posts and stories, TikTok short videos, YouTube reviews and integrations, Telegram channel ads, plus collaborations — contests, promos, or exclusive products." },
  ],
  relatedTitle: "Related services",
  related: [
    { title: "SMM", slug: "smm" },
    { title: "Branding", slug: "branding" },
    { title: "Marketing 360", slug: "marketing-360" },
  ],
};

const ru: ServicePageContent = {
  ...uk,
  eyebrow: "Услуги / Инфлюенс маркетинг",
  title: "Инфлюенс маркетинг",
  titleAccent: "Реклама у блогеров, которой доверяют",
  lead:
    "Эффективное продвижение бизнеса через сотрудничество с блогерами и лидерами мнений. Поможем подобрать оптимальный вариант под ваш бюджет и цели.",
  sub: "Заказывайте инфлюенс маркетинг уже сейчас — и получите новых клиентов через силу социальных сетей.",
  cta: "Сотрудничать",
  heroAlt: "Инфлюенс маркетинг и реклама у блогеров",
  heroCaption: "Подбор инфлюенсеров, запуск кампании и прозрачная аналитика.",
  metricsTitle: "Цифры студии",
  stats: [
    { value: "6", label: "лет\nна рынке" },
    { value: "6", label: "экспертов\nв команде" },
    { value: "55", label: "брендов\nв портфолио" },
    { value: "30+", label: "ниш\nв работе" },
    { value: "4", label: "ключевые\nплатформы" },
  ],
  audienceTitle: "Микро- и макроинфлюенсеры: как выбрать формат",
  audienceItems: [
    { index: "01", title: "Микроблогеры — высокая вовлечённость аудитории" },
    { index: "02", title: "Макроинфлюенсеры — быстрый масштабный охват" },
    { index: "03", title: "E-commerce, beauty, lifestyle и IT-проекты" },
    { index: "04", title: "Бренды с гибким бюджетом на digital" },
  ],
  includesTitle: "Что входит в услугу",
  includes: [
    "Работа с блогерами под нишу, аудиторию и бюджет",
    "Продвижение в Instagram, TikTok, YouTube и Telegram",
    "Анализ рынка и подбор релевантных инфлюенсеров",
    "Согласование креатива и форматов интеграций",
    "Запуск кампании по согласованному графику",
    "Отчёт с охватами, кликами и конверсиями",
  ],
  includeCards: [
    {
      index: "01",
      title: "Работа с блогерами",
      description:
        "Подбираем инфлюенсеров под нишу, географию и интересы аудитории — от микроблогеров до топ-инфлюенсеров.",
      image: "/services/web.jpg",
      alt: "Работа с блогерами",
    },
    {
      index: "02",
      title: "Продвижение в социальных сетях",
      description:
        "Кампании в Instagram, TikTok, YouTube и Telegram: посты, сторис, обзоры, интеграции и коллаборации.",
      image: "/services/smm.jpg",
      alt: "Продвижение в социальных сетях",
    },
    {
      index: "03",
      title: "Анализ рынка",
      description:
        "Анализируем продукт и целевую аудиторию, чтобы выбрать платформы и формат для максимальной эффективности.",
      image: "/services/strategy.jpg",
      alt: "Анализ рынка",
    },
  ],
  casesTitle: "Результаты наших кампаний",
  processTitle: "Как мы строим процесс работы",
  process: [
    {
      index: "01",
      title: "Заявка и брифинг",
      description: "Вы оставляете заявку, мы детально обсуждаем продукт, нишу и бюджет.",
      duration: "1 день",
      image: "/services/strategy.jpg",
      alt: "Заявка и брифинг",
    },
    {
      index: "02",
      title: "Подбор блогеров и форматов",
      description: "Формируем список инфлюенсеров, которые соответствуют целям кампании и бюджету клиента.",
      duration: "2–5 дней",
      image: "/services/smm.jpg",
      alt: "Подбор блогеров и форматов",
    },
    {
      index: "03",
      title: "Согласование креатива",
      description: "Разрабатываем план кампании и согласуем концепцию интеграций с блогерами.",
      duration: "1–3 дня",
      image: "/services/communication.jpg",
      alt: "Согласование креатива",
    },
    {
      index: "04",
      title: "Запуск рекламы",
      description: "Кампания стартует согласно согласованному графику публикаций.",
      duration: "1–4 недели",
      image: "/services/web.jpg",
      alt: "Запуск рекламы у блогеров",
    },
    {
      index: "05",
      title: "Отчёт с аналитикой",
      description: "После завершения кампании предоставляем статистику: охваты, просмотры, клики и конверсии.",
      duration: "1–2 дня",
      image: "/services/positioning.jpg",
      alt: "Отчёт с аналитикой кампании",
    },
  ],
  teamTitle: "Кто ведёт проект",
  whyTitle: "Преимущества работы с блогерами",
  whyItems: [
    { title: "Доверие аудитории", description: "Рекомендация блогера воспринимается как совет знакомого, а не навязчивое рекламное сообщение." },
    { title: "Выше конверсии", description: "Инфлюенс-маркетинг часто даёт лучшие показатели продаж и узнаваемости по сравнению с классическими каналами." },
    { title: "Точный подбор", description: "Выбираем блогеров по нише, географии, интересам аудитории и бюджету кампании." },
    { title: "Гибкий бюджет", description: "От доступных размещений у микроблогеров до масштабных кампаний с топ-инфлюенсерами." },
  ],
  compareTitle: "Микро или макроинфлюенсеры?",
  compareColumns: ["Критерий", "ZOND", "Микро", "Макро"],
  compareRows: [
    { criterion: "Аудитория", zond: "Подбираем под цель", freelance: "5–50 тыс.", generator: "100 тыс.+" },
    { criterion: "Сильная сторона", zond: "Баланс под задачу", freelance: "Высокая вовлечённость", generator: "Быстрый охват" },
    { criterion: "Бюджет", zond: "Оптимизируем под KPI", freelance: "Доступнее", generator: "Выше" },
    { criterion: "Когда выбирать", zond: "По целям кампании", freelance: "Глубокое взаимодействие", generator: "Масштаб и узнаваемость" },
  ],
  reviewsTitle: "Отзывы",
  reviewsNote: "Демонстрационные тексты для макета. Не являются реальными отзывами клиентов.",
  reviews: [
    { label: "Пример отзыва 01", quote: "Подобрали микроблогеров под нашу нишу. Охват превысил ожидания, а продажи выросли уже в первый месяц кампании.", name: "Имя клиента · Компания", role: "E-commerce кампания" },
    { label: "Пример отзыва 02", quote: "Прозрачный процесс: от брифа до отчёта с аналитикой. Понятно, куда ушёл бюджет и какой результат дал каждый блогер.", name: "Имя клиента · Компания", role: "Инфлюенс-маркетинг" },
    { label: "Пример отзыва 03", quote: "Комбинация Instagram и TikTok сработала лучше классической таргетированной рекламы. Аудитория реально доверяла интеграциям.", name: "Имя клиента · Компания", role: "Запуск продукта" },
  ],
  productTitle: "Кампания, которую видно везде.",
  productNote: "Интеграции и бренд в точках контакта с аудиторией.",
  products: withServiceProductImages([
    { alt: "Брендированные носители для кампании", caption: "Брендированные носители" },
    { alt: "Мерч для коллабораций", caption: "Мерч" },
    { alt: "Интеграции в соцсетях", caption: "Соцсети" },
    { alt: "Брендированная одежда для инфлюенсеров", caption: "Одежда" },
    { alt: "Продукт в упаковке для обзоров", caption: "Упаковка" },
    { alt: "Кампания на наружных носителях", caption: "Outdoor" },
  ]),
  formTitle: "Готовы запускать рекламу у блогеров?",
  formDescription: "Заполните форму. Подберём инфлюенсеров и формат под ваш бюджет и цели.",
  faqTitle: "FAQ",
  faq: [
    { question: "Сколько стоит реклама у блогеров в Украине?", answer: "Точная стоимость рассчитывается индивидуально в зависимости от бюджета, целей и целевой аудитории. Размещение у микроблогера в Instagram может стоить от 50–100$, сотрудничество с топ-инфлюенсером — от нескольких сотен до тысячи долларов." },
    { question: "Сколько времени длится кампания?", answer: "Обычно от 1 недели до 1 месяца, в зависимости от количества выбранных блогеров и формата сотрудничества. Масштабные проекты могут длиться несколько месяцев." },
    { question: "Как выбираются блогеры для кампании?", answer: "По критериям тематики, географии, охвата, активности аудитории и стоимости размещения — это гарантирует релевантность рекламы вашей целевой аудитории." },
    { question: "Как оценивается результат кампании?", answer: "После завершения вы получаете отчёт со статистикой просмотров, охвата, кликов и конверсий, а также рекомендации для следующих запусков." },
    { question: "Что такое инфлюенс-маркетинг?", answer: "Это формат продвижения, в котором бренд сотрудничает с блогерами с активной аудиторией. Реклама подаётся нативно — через обзоры, интеграции, посты или сторис — и воспринимается как рекомендация." },
    { question: "На каких платформах вы работаете?", answer: "Instagram, TikTok, YouTube и Telegram. Анализируем продукт и аудиторию, чтобы подобрать платформу или комбинацию нескольких каналов." },
    { question: "Микро или макроинфлюенсеры — что лучше?", answer: "Если нужна глубокая вовлечённость — лучше микроблогеры (5–50 тыс.). Если масштабный охват и быстрая узнаваемость — макроинфлюенсеры (100 тыс.+). Часто комбинируем оба формата." },
    { question: "Какие форматы сотрудничества доступны?", answer: "Посты и сторис в Instagram, короткие видео в TikTok, обзоры и интеграции в YouTube, реклама в Telegram-каналах, а также коллаборации — конкурсы, акции или эксклюзивные продукты." },
  ],
  relatedTitle: "Смежные услуги",
  related: [
    { title: "SMM", slug: "smm" },
    { title: "Брендинг", slug: "branding" },
    { title: "Marketing 360", slug: "marketing-360" },
  ],
};

export const influenceMarketingPage: Record<Locale, ServicePageContent> = {
  uk,
  en,
  ru,
};
