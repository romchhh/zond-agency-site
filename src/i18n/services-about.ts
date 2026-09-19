import type { Locale } from "@/i18n/config";

export type ServicesAboutContent = {
  introTitle: string;
  intro: string[];
  specialistsTitle: string;
  specialistsLead: string;
  specialists: string[];
  specialistsNote: string;
  whyTitle: string;
  why: string[];
  office: string[];
  offeringsTitle: string;
  offeringsLead: string;
  offerings: string[];
  closing: string[];
};

export const servicesAbout: Record<Locale, ServicesAboutContent> = {
  uk: {
    introTitle: "Про ZOND",
    intro: [
      "Ми — дизайн-студія ZOND. 5 років тому нас об’єднала одна спільна ідея — робити бренди такими, що запам’ятовуються. А саме: розкривати їхній характер, включаючи сучасні тренди.",
      "Щодня наша команда створює нові креативні ідеї та втілює їх у форму, виступаючи провідниками вашого задуму та формуючи те, що наповнено емоційною силою.",
      "Ми точно знаємо, як, коли і чому люди зроблять вибір на вашу користь.",
    ],
    specialistsTitle: "Хто працює над проєктом",
    specialistsLead:
      "Під час роботи у ваш проєкт максимально зануряться такі фахівці:",
    specialists: [
      "Акаунт-менеджер",
      "Бренд-дизайнер",
      "Моушн-дизайнер",
      "Ілюстратор",
      "Копірайтер",
      "І звичайно особисто я — Олександр Крутих, засновник студії",
    ],
    specialistsNote:
      "Адже ми працюємо лише з проєктами, які нам цікаві, максимально заглиблюючись та вивчаючи їх. Увага та емпатія — ключові інструменти у нашій команді.",
    whyTitle: "Чому обирають нас?",
    why: [
      "Ми одразу приступаємо до роботи та безперервно підтримуємо з вами зв’язок",
      "Надаємо договір з точними термінами та ціною",
      "Вміємо робити бізнес переконливим та привабливим",
      "Працюємо не на вас, а з вами",
    ],
    office: [
      "Ви, напевно, чули фразу, що друзі — це ті, хто піднімає настрій і кличе в гості. Ми робимо те саме!",
      "Ми маємо затишний офіс, де за чашкою кави з видом на Київ ми можемо обговорити всі деталі проєкту. Завітайте до нас на безкоштовну консультацію!",
    ],
    offeringsTitle: "Послуги під ваш бізнес",
    offeringsLead:
      "У нас ви можете вибрати послуги залежно від потреб та розміру вашого бізнесу:",
    offerings: [
      "Безкоштовні первинні консультації",
      "Підготовка технічного завдання",
      "Розробка маркетинг-стратегій",
      "Аналіз ринку та конкурентів",
      "Розробка брендингу та брендбуку",
      "Розробка креативного дизайну",
      "3D-моделювання",
      "Розробка ескізів",
      "Ілюстрація",
      "Розробка та дизайн упаковки",
      "Підбір матеріалів",
      "SMM",
      "Комплексні дизайн-послуги з повним супроводом бренду",
      "Сервісне обслуговування та консалтинг",
    ],
    closing: [
      "Про нашу дизайн-студію можна розповідати довго, але ніщо не переконує краще, ніж розділ «Кейси».",
      "Пропонуємо створювати нове та підвищувати впізнаваність уже існуючого разом!",
    ],
  },
  en: {
    introTitle: "About ZOND",
    intro: [
      "We are the ZOND design studio. Five years ago we were united by one shared idea — to create brands that are impossible to forget. That means revealing their character while embracing modern trends.",
      "Every day our team shapes new creative ideas and turns them into form, guiding your vision and building what is filled with emotional power.",
      "We know exactly how, when, and why people will choose you.",
    ],
    specialistsTitle: "Who works on your project",
    specialistsLead:
      "These specialists will dive deep into your project:",
    specialists: [
      "Account manager",
      "Brand designer",
      "Motion designer",
      "Illustrator",
      "Copywriter",
      "And of course me personally — Oleksandr Krutykh, studio founder",
    ],
    specialistsNote:
      "We only take on projects that interest us, diving in and studying them closely. Attention and empathy are key tools on our team.",
    whyTitle: "Why choose us?",
    why: [
      "We start work right away and stay in continuous contact with you",
      "We provide a contract with clear timelines and pricing",
      "We know how to make a business convincing and attractive",
      "We work with you — not just for you",
    ],
    office: [
      "You’ve probably heard that friends are the ones who lift your mood and invite you over. We do the same!",
      "We have a cozy office where, over coffee with a view of Kyiv, we can discuss every detail of your project. Visit us for a free consultation!",
    ],
    offeringsTitle: "Services for your business",
    offeringsLead:
      "You can choose services based on the needs and size of your business:",
    offerings: [
      "Free initial consultations",
      "Brief and technical assignment preparation",
      "Marketing strategy development",
      "Market and competitor analysis",
      "Branding and brand book development",
      "Creative design development",
      "3D modeling",
      "Sketch development",
      "Illustration",
      "Packaging design",
      "Material selection",
      "SMM",
      "Full brand design services with ongoing support",
      "Service maintenance and consulting",
    ],
    closing: [
      "We could talk about our studio for a long time, but nothing is more convincing than the Cases section.",
      "Let’s create something new and raise the recognition of what already exists — together!",
    ],
  },
  ru: {
    introTitle: "О ZOND",
    intro: [
      "Мы — дизайн-студия ZOND. 5 лет назад нас объединила одна общая идея — делать бренды такими, что запоминаются. А именно: раскрывать их характер, включая современные тренды.",
      "Каждый день наша команда создаёт новые креативные идеи и воплощает их в форму, выступая проводниками вашего замысла и формируя то, что наполнено эмоциональной силой.",
      "Мы точно знаем, как, когда и почему люди сделают выбор в вашу пользу.",
    ],
    specialistsTitle: "Кто работает над проектом",
    specialistsLead:
      "Во время работы в ваш проект максимально погрузятся такие специалисты:",
    specialists: [
      "Аккаунт-менеджер",
      "Бренд-дизайнер",
      "Моушн-дизайнер",
      "Иллюстратор",
      "Копирайтер",
      "И конечно лично я — Александр Крутих, основатель студии",
    ],
    specialistsNote:
      "Ведь мы работаем только с проектами, которые нам интересны, максимально углубляясь и изучая их. Внимание и эмпатия — ключевые инструменты в нашей команде.",
    whyTitle: "Почему выбирают нас?",
    why: [
      "Мы сразу приступаем к работе и непрерывно поддерживаем с вами связь",
      "Предоставляем договор с точными сроками и ценой",
      "Умеем делать бизнес убедительным и привлекательным",
      "Работаем не на вас, а с вами",
    ],
    office: [
      "Вы, наверное, слышали фразу, что друзья — это те, кто поднимает настроение и зовёт в гости. Мы делаем то же самое!",
      "У нас уютный офис, где за чашкой кофе с видом на Киев мы можем обсудить все детали проекта. Заходите к нам на бесплатную консультацию!",
    ],
    offeringsTitle: "Услуги под ваш бизнес",
    offeringsLead:
      "У нас вы можете выбрать услуги в зависимости от потребностей и размера вашего бизнеса:",
    offerings: [
      "Бесплатные первичные консультации",
      "Подготовка технического задания",
      "Разработка маркетинг-стратегий",
      "Анализ рынка и конкурентов",
      "Разработка брендинга и брендбука",
      "Разработка креативного дизайна",
      "3D-моделирование",
      "Разработка эскизов",
      "Иллюстрация",
      "Разработка и дизайн упаковки",
      "Подбор материалов",
      "SMM",
      "Комплексные дизайн-услуги с полным сопровождением бренда",
      "Сервисное обслуживание и консалтинг",
    ],
    closing: [
      "О нашей дизайн-студии можно рассказывать долго, но ничто не убеждает лучше, чем раздел «Кейсы».",
      "Предлагаем создавать новое и повышать узнаваемость уже существующего вместе!",
    ],
  },
};
