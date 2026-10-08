import type { Locale } from "@/i18n/config";

export type HomeSeoBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

const uk: HomeSeoBlock[] = [
  {
    type: "p",
    text: "Ми — дизайн-студія ZOND. Ще 5 років тому нас об’єднала одна спільна ідея — робити бренди незабутніми. А саме розкривати їх характер, у тому числі й сучасні тенденції. Щодня наша команда створює нові креативні ідеї та втілює їх у форму, виступаючи провідниками вашої ідеї та формуючи те, що наповнене емоційною силою. Ми точно знаємо, як, коли і чому люди зроблять вибір на вашу користь.",
  },
  {
    type: "p",
    text: "Під час роботи у вашому проєкті працюють такі фахівці, як:",
  },
  {
    type: "ul",
    items: [
      "менеджер по роботі з клієнтами;",
      "3D-дизайнер;",
      "моушн-дизайнер;",
      "ілюстратор;",
      "копірайтер;",
      "та звичайно особисто я — Олександр Крутих, засновник студії.",
    ],
  },
  {
    type: "p",
    text: "Адже ми працюємо тільки з проєктами, які нам цікаві, заглиблюючись якомога глибше і вивчаючи їх. Увага та емпатія є ключовими інструментами в нашій команді.",
  },
  { type: "h2", text: "Чому обирають нас?" },
  {
    type: "ul",
    items: [
      "ми негайно приступаємо до роботи і постійно підтримуємо з вами зв’язок;",
      "надаємо договір з точними умовами і ціною;",
      "ми знаємо, як зробити бізнес переконливим і привабливим;",
      "ми працюємо не для вас, а з вами!",
    ],
  },
  {
    type: "p",
    text: "Ви напевно чули фразу про те, що друзі — це ті, хто піднімає настрій і запрошує в гості. Робимо те ж саме! У нас затишний офіс, де за чашкою кави з видом на Київ ми можемо обговорити всі деталі проєкту.",
  },
  {
    type: "p",
    text: "Приходьте до нас на безкоштовну консультацію!",
  },
  {
    type: "p",
    text: "І тут ви можете вибрати послуги залежно від потреб і розміру вашого бізнесу:",
  },
  {
    type: "ul",
    items: [
      "безкоштовні первинні консультації;",
      "підготовка технічного завдання;",
      "аналіз ринку і конкурентів;",
      "складання портретів споживачів;",
      "розробка брендингу, брендбуку;",
      "розробка креативного дизайну;",
      "3D-моделювання;",
      "розробка ескізів;",
      "ілюстрація;",
      "розробка та дизайн упаковки;",
      "підбір матеріалів;",
      "SMM;",
      "комплексні дизайнерські послуги з повною підтримкою бренду;",
      "консалтинг.",
    ],
  },
  {
    type: "p",
    text: "Про нашу дизайн-студію можна говорити довго, але ніщо не переконує так, як розділ «Кейси». Пропоную разом створювати нове і підвищувати впізнаваність існуючого.",
  },
];

const en: HomeSeoBlock[] = [
  {
    type: "p",
    text: "We are ZOND design studio. We shared a common idea of making brands recognizable 5 years ago. That is, enclosing their characters by using modern trends without following these trends blindly, so as not to make the brand a king-for-a-day. Every day our team develops new creative ideas and implements them in a certain shape. We are guides for your ideas and we form them into something that is refilled with emotional power. We do know for sure why people make choices in your favor.",
  },
  {
    type: "p",
    text: "When starting your project, we launch the following pros to dive deeply into it:",
  },
  {
    type: "ul",
    items: [
      "an account manager;",
      "3D designer;",
      "motion designer;",
      "illustrator;",
      "copywriter;",
      "me, Alexander Krutych, the owner and founder of our studio.",
    ],
  },
  {
    type: "p",
    text: "We work only on projects we are interested in and we dwell deeply in them to study all their features. We use two key tools in our team. They are attention and empathy.",
  },
  { type: "h2", text: "Why do customers prefer us?" },
  {
    type: "ul",
    items: [
      "We start working on the project instantly and we are always in touch with you.",
      "We conclude a transparent contract where all the terms, deadlines, and costs are indicated.",
      "Making businesses persuasive and attractive is our bright side.",
      "We are not hired by you, we work with you for your sake.",
    ],
  },
  {
    type: "p",
    text: "You have probably heard the phrase that friends are those who cheer you up and invite you to visit. We do quite the same! We have a cozy office where we offer you to discuss all the details of the project over a cup of coffee overlooking Kyiv.",
  },
  {
    type: "p",
    text: "Come visit us for a free consultation!",
  },
  {
    type: "p",
    text: "You can also choose from our services list those ones that meet your needs and fit the size of your business:",
  },
  {
    type: "ul",
    items: [
      "free initial consultations;",
      "preparation of terms of reference;",
      "analysis of the market and competitors;",
      "drawing up portraits of consumers;",
      "development of brand details, or a brand book;",
      "development of the creative design;",
      "3D modelling;",
      "development of sketches;",
      "illustration services;",
      "development and design of packaging;",
      "visualization of the object;",
      "selection of materials;",
      "SMM services;",
      "complex design services with full brand support;",
      "service maintenance and consulting.",
    ],
  },
  {
    type: "p",
    text: "We can tell you more about our design studio, but nothing convinces like the Cases section of our site. Let’s create something new and raise awareness of the existing one together!",
  },
];

/** Old RU home shipped UA body text; this is a faithful Russian version of that SEO block. */
const ru: HomeSeoBlock[] = [
  {
    type: "p",
    text: "Мы — дизайн-студия ZOND. Ещё 5 лет назад нас объединила одна общая идея — делать бренды незабываемыми. А именно раскрывать их характер, в том числе и современные тенденции. Каждый день наша команда создаёт новые креативные идеи и воплощает их в форму, выступая проводниками вашей идеи и формируя то, что наполнено эмоциональной силой. Мы точно знаем, как, когда и почему люди сделают выбор в вашу пользу.",
  },
  {
    type: "p",
    text: "Во время работы над вашим проектом участвуют такие специалисты, как:",
  },
  {
    type: "ul",
    items: [
      "менеджер по работе с клиентами;",
      "3D-дизайнер;",
      "моушн-дизайнер;",
      "иллюстратор;",
      "копирайтер;",
      "и конечно лично я — Александр Крутых, основатель студии.",
    ],
  },
  {
    type: "p",
    text: "Ведь мы работаем только с проектами, которые нам интересны, углубляясь как можно глубже и изучая их. Внимание и эмпатия — ключевые инструменты в нашей команде.",
  },
  { type: "h2", text: "Почему выбирают нас?" },
  {
    type: "ul",
    items: [
      "мы немедленно приступаем к работе и постоянно поддерживаем с вами связь;",
      "предоставляем договор с точными условиями и ценой;",
      "мы знаем, как сделать бизнес убедительным и привлекательным;",
      "мы работаем не для вас, а с вами!",
    ],
  },
  {
    type: "p",
    text: "Вы наверняка слышали фразу о том, что друзья — это те, кто поднимает настроение и приглашает в гости. Делаем то же самое! У нас уютный офис, где за чашкой кофе с видом на Киев мы можем обсудить все детали проекта.",
  },
  {
    type: "p",
    text: "Приходите к нам на бесплатную консультацию!",
  },
  {
    type: "p",
    text: "И здесь вы можете выбрать услуги в зависимости от потребностей и размера вашего бизнеса:",
  },
  {
    type: "ul",
    items: [
      "бесплатные первичные консультации;",
      "подготовка технического задания;",
      "анализ рынка и конкурентов;",
      "составление портретов потребителей;",
      "разработка брендинга, брендбука;",
      "разработка креативного дизайна;",
      "3D-моделирование;",
      "разработка эскизов;",
      "иллюстрация;",
      "разработка и дизайн упаковки;",
      "подбор материалов;",
      "SMM;",
      "комплексные дизайнерские услуги с полной поддержкой бренда;",
      "консалтинг.",
    ],
  },
  {
    type: "p",
    text: "О нашей дизайн-студии можно говорить долго, но ничто не убеждает так, как раздел «Кейсы». Предлагаю вместе создавать новое и повышать узнаваемость существующего.",
  },
];

export const homeSeoContent: Record<Locale, HomeSeoBlock[]> = {
  uk,
  en,
  ru,
};

export function getHomeSeoContent(locale: Locale): HomeSeoBlock[] {
  return homeSeoContent[locale];
}
