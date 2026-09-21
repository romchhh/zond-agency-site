import type { Dictionary } from "@/i18n/dictionary";

const uk: Dictionary = {
  meta: {
    title: "ZOND — Branding Agency",
    description:
      "ZOND — агенція брендингу з 2021 року. Стратегія, айдентика, дизайн, SMM, упаковка, брендбук та цифрові рішення для бізнесу в Україні та світі.",
    keywords: [
      "брендинг",
      "айдентика",
      "дизайн",
      "SMM",
      "неймінг",
      "логотип",
      "брендбук",
      "упаковка",
      "веб-дизайн",
      "агенція брендингу",
      "ZOND",
      "Україна",
    ],
    ogImageAlt: "ZOND Agency — брендинг та дизайн",
  },
  nav: {
    services: "Послуги",
    projects: "Проєкти",
    blog: "Блог",
    contact: "Контакти",
  },
  a11y: {
    mainNav: "Головна навігація",
    mobileNav: "Мобільна навігація",
    language: "Вибір мови",
    languages: "Мови",
    consultation: "Консультація",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
    clients: "Наші клієнти",
    vision: "Vision",
    playVideo: "Відтворити відео ZOND",
    teamMember: "команда ZOND Agency",
  },
  hero: {
    services: [
      "Брендинг",
      "Інфлюенс маркетинг",
      "Графічний дизайн",
      "SMM",
      "Ілюстрація",
      "Пакування",
      "Брендбук",
      "Логотип",
    ],
    more: "і багато іншого",
    slogan: "Спочатку ви створюєте бренд, а потім він працює на вас❤️",
    videoLabel: "ZOND Works",
  },
  mission: {
    title: "Mission possible",
    description: "Наша місія — розвивати продукти через силу бренду.",
    stats: [
      { value: "5+", label: "років\nна ринку" },
      { value: "300+", label: "реалізованих\nпроєктів" },
      { value: "30+", label: "ніш\nу 8 країнах" },
      { value: "95%", label: "клієнтів\nрекомендують нас" },
    ],
    clientsTrust: "нам довіряють",
  },
  projects: {
    title: "Бренди, які надихають",
    allProjects: "Всі проєкти",
  },
  vision: {
    title: "Vision",
    description:
      "ZOND — це команда маркетологів, дизайнерів і креативних мислителів, яка з 2021 року створює бренди та комунікації.",
    highlight:
      "Сильний бренд — це більше, ніж красивий візуал, це стратегічна перевага, яка відкриває нові горизонти!",
    videoTitle: "ZOND — відео",
  },
  services: {
    title: "Комплексні рішення для вашого бренду",
    items: [
      { index: "01", title: "Стратегія бренду", description: "Аналіз цілей і можливостей.", image: "/services/strategy.jpg" },
      { index: "02", title: "Позиціонування", description: "Унікальна роль бренду на ринку.", image: "/services/positioning.jpg" },
      { index: "03", title: "Неймінг", description: "Назва, що запам’ятовується.", image: "/services/naming.jpg" },
      { index: "04", title: "Логотип", description: "Лаконічний візуальний знак.", image: "/services/logo.jpg" },
      { index: "05", title: "Айдентика", description: "Цілісна візуальна система.", image: "/services/identity.jpg" },
      { index: "06", title: "Брендбук", description: "Правила використання бренду.", image: "/services/brandbook.jpg" },
      { index: "07", title: "Слоган і комунікація", description: "Єдиний тон і меседжі.", image: "/services/communication.jpg" },
      { index: "08", title: "Персонаж бренду", description: "Унікальний герой за потреби.", image: "/services/character.jpg" },
      { index: "09", title: "Упаковка", description: "Дизайн, який продає.", image: "/services/packaging.jpg" },
      { index: "10", title: "Графічний дизайн", description: "Візуальні рішення для носіїв.", image: "/services/graphic.jpg" },
      { index: "11", title: "Веб-дизайн", description: "Сучасні сайти.", image: "/services/web.jpg" },
      { index: "12", title: "SMM", description: "Контент, що працює.", image: "/services/smm.jpg" },
    ],
  },
  team: {
    title: "Люди, які створюють сенси",
    items: [
      { name: "Олександр Крутих", role: "CEO", image: "/assets/team/oleksandr-krutykh.jpg" },
      { name: "Жасмін Мустафа", role: "SMM", image: "/assets/team/zhasmin-mustafa.jpg" },
      { name: "Марія Саніна", role: "Дизайнер", image: "/assets/team/maria-sanina.jpg" },
      { name: "Марія Супряга", role: "Арт-директор", image: "/assets/team/maria-supriaha-v2.jpg" },
      { name: "Анастасія Грищенко", role: "SMM", image: "/assets/team/anastasiia-hryshchenko.jpg" },
      { name: "Наталія Машталер", role: "SMM", image: "/assets/team/natalia-mashtaler.jpg" },
      { name: "Віталій Заєць", role: "Project management", image: "/assets/team/vitalii-zaiets.jpg" },
      { name: "Софія Писанчишин", role: "Sales manager", image: "/assets/team/sofia-pysanchyshyn.jpg" },
    ],
    joinTitle: "Податись до екіпажу ZOND Team",
    joinHint: "Написати на ask@zond.agency",
  },
  cta: {
    title: "Створимо щось особливе разом?",
    description:
      "Розкажіть про ваш бізнес. І ми запропонуємо рішення, яке працює саме для вас.",
    button: "Консультація",
  },
  consultationForm: {
    title: "Безкоштовна консультація",
    description: "Ми будемо раді почути вас. Давайте працювати разом.",
    nameLabel: "Ваше ім’я",
    namePlaceholder: "Ваше ім’я",
    contactLabel: "Телефон або Telegram",
    contactPlaceholder: "+380 (__) ___-__-__",
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    submit: "Замовити консультацію",
    close: "Закрити",
    successTitle: "Дякуємо!",
    successDescription:
      "Ми отримали вашу заявку. Продовжіть спілкування в Telegram — там ми швидше відповімо.",
    telegramCta: "Перейти в Telegram",
    errors: {
      name: "Введіть ім’я (мінімум 2 символи)",
      contact: "Введіть телефон або Telegram (@username)",
      email: "Введіть коректний email",
    },
  },
  footer: {
    rights: "Всі права захищено.",
  },
  notFound: {
    title: "Сторінку не знайдено",
    description:
      "Здається, ви потрапили на неіснуючу сторінку, або вона була переміщена.",
    backHome: "На головну",
    viewCases: "Переглянути кейси",
    ourServices: "Наші послуги",
  },
  blog: {
    eyebrow: "ZOND Blog",
    title: "Блог",
    lead: "Статті про брендинг, логотипи, брендбуки та дизайн від команди ZOND.",
    readMore: "Читати далі",
    backToBlog: "Повернутися до блогу",
    home: "Головна",
    articlesCount: "{count} статей",
    relatedPosts: "Схожі статті",
  },
  contactPage: {
    title: "Контакти",
    lead:
      "Ми відкриті до співпраці та нових проєктів. Оберіть зручний спосіб зв’язку — відповімо якнайшвидше.",
    channelsTitle: "Як з нами зв’язатися",
    channelsLead:
      "Пишіть, телефонуйте або залишайте заявку в Telegram. Розкажіть про задачу — допоможемо знайти рішення.",
    emailLabel: "Email",
    phoneLabel: "Телефон",
    telegramLabel: "Telegram",
    telegramValue: "@ZOND_Agency_Bot",
    telegramDescription: "Швидка заявка та консультація в боті",
    instagramLabel: "Instagram",
    instagramValue: "@zond.agency",
  },
  cases: {
    title: "Проєкти",
    lead: "Наші реалізовані проєкти дизайн-студії ZOND.",
    backToCases: "Повернутися до проєктів",
    relatedCases: "Інші проєкти",
  },
};

export default uk;
