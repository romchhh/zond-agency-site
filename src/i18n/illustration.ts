import type { Locale } from "@/i18n/config";
import type { ServicePageContent } from "@/i18n/logo";

const uk: ServicePageContent = {
  eyebrow: "Послуги / Ілюстрація",
  title: "Ілюстрація",
  titleAccent: "Комерційна ілюстрація на замовлення",
  lead:
    "Корпоративні герої, комікси й графіка, за якими ваш продукт упізнають на полиці та в соцмережах.",
  sub: "",
  cta: "Обговорити проєкт",
  heroAlt: "Комерційна ілюстрація на замовлення",
  heroCaption: "Персонажі та графіка, які працюють на бренд.",
  metricsTitle: "Цифри студії",
  stats: [
    { value: "6", label: "років\nна ринку" },
    { value: "1", label: "ілюстратор" },
    { value: "50+", label: "малюнків" },
    { value: "55", label: "проєктів" },
    { value: "30+", label: "ніш\nу роботі" },
  ],
  audienceTitle: "Кому потрібна ілюстрація",
  audienceItems: [
    { index: "01", title: "Виробникам товарів" },
    { index: "02", title: "Онлайн-сервісам" },
    { index: "03", title: "Видавництвам і медіа" },
    { index: "04", title: "Молодим брендам" },
  ],
  includesTitle: "Що ви отримаєте",
  includes: [
    "Кілька ескізів на вибір",
    "Корпоративного героя для бренду",
    "Чистову ілюстрацію у векторі",
    "Вихідний макет із шарами",
    "Файли у форматах AI, EPS, PDF, SVG і PNG",
    "Окремі версії під друк і під екран",
    "Кольорову та монохромну графіку",
    "Права на комерційне використання",
  ],
  casesTitle: "Кейси комерційної ілюстрації",
  processTitle: "Як ми малюємо",
  process: [
    {
      index: "01",
      title: "Консультація і бриф",
      description: "Ви описуєте задачу, ми уточнюємо.",
      duration: "1 день",
    },
    {
      index: "02",
      title: "Мозковий штурм",
      description: "Команда ZOND придумує образ.",
      duration: "1 день",
    },
    {
      index: "03",
      title: "Створення ескізу",
      description: "Показуємо кілька варіантів.",
      duration: "1 день",
    },
    {
      index: "04",
      title: "Затвердження образу",
      description: "Обираємо ескіз і опрацьовуємо його.",
      duration: "1 день",
    },
    {
      index: "05",
      title: "Фінальні макети",
      description: "Збираємо файли й передаємо вам.",
      duration: "1 день",
    },
  ],
  teamTitle: "Хто веде проєкт",
  whyTitle: "Чому ZOND",
  whyItems: [
    {
      title: "Малюємо під айдентику бренду",
      description: "Спираємось на вашу палітру та фірмові шрифти.",
    },
    {
      title: "Добираємо ілюстратора",
      description: "Корпоративні герої, комікси, графіка для реклами.",
    },
    {
      title: "Файли готові до друку",
      description: "Вектор і растр, окремі версії під екран і поліграфію.",
    },
    {
      title: "Права переходять вам",
      description: "Умови фіксуємо в договорі до початку роботи.",
    },
  ],
  compareTitle: "Чому ZOND, а не фриланс чи генератор?",
  compareColumns: ["Критерій", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: [
    {
      criterion: "Стиль",
      zond: "Під ваш бренд",
      freelance: "Стиль автора",
      generator: "Схожий на інші",
    },
    {
      criterion: "Права",
      zond: "Пишемо в договір",
      freelance: "Не завжди",
      generator: "За ліцензією",
    },
    {
      criterion: "Правки",
      zond: "Є в кошторисі",
      freelance: "За домовленістю",
      generator: "Новий запит",
    },
    {
      criterion: "Після здачі",
      zond: "Той самий стиль",
      freelance: "Якщо вільний",
      generator: "Інший результат",
    },
  ],
  reviewsTitle: "Відгуки",
  reviewsNote: "Демонстраційні тексти для макета. Не є реальними відгуками клієнтів.",
  reviews: [
    {
      label: "Приклад відгуку 01",
      quote:
        "Потрібен був корпоративний герой для упаковки та соцмереж. Отримали кілька ескізів, обрали образ і швидко вийшли на фінальні файли.",
      name: "Ім'я клієнта · Компанія",
      role: "Корпоративний герой",
    },
    {
      label: "Приклад відгуку 02",
      quote:
        "Важливо було намалювати серію в одному стилі під наш брендбук. Усі роботи виглядають цілісно на сайті й у рекламі.",
      name: "Ім'я клієнта · Компанія",
      role: "Серія ілюстрацій",
    },
    {
      label: "Приклад відгуку 03",
      quote:
        "Передали вектор і растр під друк та екран, плюс вихідник із шарами. Зручно правити дрібниці без повторного замовлення.",
      name: "Ім'я клієнта · Компанія",
      role: "Файли та права",
    },
  ],
  formTitle: "Розкажіть про своє завдання",
  formDescription:
    "Заповніть форму. Консультація безкоштовна, ціну назвемо після брифу.",
  faqTitle: "FAQ",
  faq: [
    {
      question: "Які є різновиди комерційної ілюстрації та де вони застосовуються?",
      answer:
        "Комерційна ілюстрація буває чотирьох типів. Це намальований герой, окремий товар, ціла сцена і схема з цифрами. Героя беруть на упаковку й у рекламу, товар малюють для карток у каталозі, сцену для банерів і соцмереж, схему для сайту та презентацій.",
    },
    {
      question: "Скільки коштує комерційна ілюстрація та як формується ціна?",
      answer:
        "Скільки коштує ілюстрація, залежить від складності сюжету, кількості робіт у серії та дрібних деталей у малюнку. Важливо й те, де він працюватиме, від картки товару до зовнішньої реклами. Ілюстратор називає ціну після брифу, і вона стоїть у кошторисі до початку роботи.",
    },
    {
      question: "Скільки часу займає створення ілюстрації?",
      answer:
        "Термін залежить від обсягу серії, складності сюжету та кількості правок, тому ми ставимо його в кошторис після брифу. Називати строк навмання сенсу немає. Створити ілюстрацію вдається швидше, коли ви одразу показуєте референси. Орієнтовний термін на одну роботу 1–2 робочі дні, на серію 4–5 днів.",
    },
    {
      question: "Кому належать права на ілюстрацію після оплати?",
      answer:
        "Майнові права на готову роботу переходять вам. Ви можете ставити зображення на упаковку, у рекламу, на сайт і в сам продукт. Обсяг переданих прав, термін і територію використання фіксує договір, який підписуємо до початку роботи.",
    },
    {
      question: "У яких форматах ви передаєте готові ілюстрації?",
      answer:
        "Ми передаємо векторні й растрові версії, окремо під екран і під друк, разом із вихідним макетом із шарами. Точний перелік форматів: AI, EPS, PDF, SVG, PNG.",
    },
    {
      question: "Скільки правок входить у вартість роботи?",
      answer:
        "Кількість правок ми записуємо в кошторис до початку роботи. У вартість входять два кола правок. Дрібні уточнення на кшталт відтінку чи товщини лінії входять у ці кола й окремо не рахуються. Роботу понад два кола рахуємо погодинно, година коштує 2 000 грн.",
    },
    {
      question: "Чи можна замовити ілюстрацію в стилі нашого бренду?",
      answer:
        "Так. Перед роботою ми переглядаємо ваш брендбук і беремо звідти кольори, шрифти та манеру графіки. Якщо гайдлайну немає, ілюстратор показує кілька стильових напрямів на вибір і коротко описує затверджений.",
    },
    {
      question: "У чому різниця між комерційним ілюстратором та вільним художником?",
      answer:
        "Художник малює для себе і продає готову роботу такою, як вона є, а комерційний ілюстратор працює за брифом. Він спирається на фірмовий стиль замовника, показує ескіз на погодження, віддає файли в потрібних форматах і передає права на використання.",
    },
  ],
  relatedTitle: "Суміжні послуги",
  related: [
    { title: "Пакування", slug: "packaging" },
    { title: "Брендинг", slug: "branding" },
    { title: "Брендбук", slug: "brandbook" },
  ],
};

const en: ServicePageContent = {
  ...uk,
  eyebrow: "Services / Illustration",
  title: "Illustration",
  titleAccent: "Custom commercial illustration",
  lead:
    "Corporate characters, comics, and graphics that make your product recognizable on the shelf and in social media.",
  cta: "Discuss the project",
  heroAlt: "Custom commercial illustration",
  heroCaption: "Characters and graphics that work for the brand.",
  metricsTitle: "Studio numbers",
  stats: [
    { value: "6", label: "years\non the market" },
    { value: "1", label: "illustrator" },
    { value: "50+", label: "artworks" },
    { value: "55", label: "projects" },
    { value: "30+", label: "niches\nin work" },
  ],
  audienceTitle: "Who needs illustration",
  audienceItems: [
    { index: "01", title: "Product manufacturers" },
    { index: "02", title: "Online services" },
    { index: "03", title: "Publishers and media" },
    { index: "04", title: "Young brands" },
  ],
  includesTitle: "What you get",
  includes: [
    "Several sketches to choose from",
    "A corporate character for the brand",
    "Final vector illustration",
    "Source file with layers",
    "Files in AI, EPS, PDF, SVG, and PNG",
    "Separate versions for print and screen",
    "Color and monochrome graphics",
    "Commercial usage rights",
  ],
  casesTitle: "Commercial illustration cases",
  processTitle: "How we draw",
  process: [
    { index: "01", title: "Consultation and brief", description: "You describe the task, we clarify details.", duration: "1 day" },
    { index: "02", title: "Brainstorm", description: "The ZOND team develops the concept.", duration: "1 day" },
    { index: "03", title: "Sketch creation", description: "We show several options.", duration: "1 day" },
    { index: "04", title: "Concept approval", description: "We choose a sketch and develop it.", duration: "1 day" },
    { index: "05", title: "Final files", description: "We assemble the files and deliver them to you.", duration: "1 day" },
  ],
  teamTitle: "Who leads the project",
  whyTitle: "Why ZOND",
  whyItems: [
    { title: "We draw to brand identity", description: "We follow your palette and corporate fonts." },
    { title: "We match the illustrator", description: "Corporate characters, comics, graphics for advertising." },
    { title: "Print-ready files", description: "Vector and raster, separate versions for screen and print." },
    { title: "Rights transfer to you", description: "Terms are fixed in the contract before work starts." },
  ],
  compareTitle: "Why ZOND, not freelance or a generator?",
  compareColumns: ["Criterion", "ZOND", "Freelance", "Generator (AI)"],
  compareRows: [
    { criterion: "Style", zond: "Matched to your brand", freelance: "Author's style", generator: "Similar to others" },
    { criterion: "Rights", zond: "Written into the contract", freelance: "Not always", generator: "Under license" },
    { criterion: "Revisions", zond: "Included in the estimate", freelance: "By agreement", generator: "New prompt" },
    { criterion: "After delivery", zond: "Same style", freelance: "If available", generator: "Different result" },
  ],
  reviewsTitle: "Reviews",
  reviewsNote: "Sample texts for the layout. These are not real client reviews.",
  reviews: [
    { label: "Sample review 01", quote: "We needed a corporate character for packaging and social media. We received several sketches, chose the look, and quickly got final files.", name: "Client name · Company", role: "Corporate character" },
    { label: "Sample review 02", quote: "It was important to draw a series in one style under our brand book. All artworks look consistent on the website and in ads.", name: "Client name · Company", role: "Illustration series" },
    { label: "Sample review 03", quote: "They delivered vector and raster for print and screen, plus a layered source file. Easy to tweak details without reordering.", name: "Client name · Company", role: "Files and rights" },
  ],
  formTitle: "Tell us about your task",
  formDescription: "Fill out the form. Consultation is free — we quote after the brief.",
  faqTitle: "FAQ",
  faq: [
    { question: "What types of commercial illustration exist and where are they used?", answer: "There are four types: a character, a product, a scene, and a diagram with figures. Characters go on packaging and ads, products on catalog cards, scenes on banners and social media, diagrams on websites and presentations." },
    { question: "How much does commercial illustration cost and how is the price formed?", answer: "Price depends on plot complexity, series size, detail level, and where the artwork will be used. The illustrator quotes after the brief, and the amount is fixed in the estimate before work starts." },
    { question: "How long does illustration take?", answer: "Timeline depends on series size, plot complexity, and revisions, so we set it in the estimate after the brief. Roughly 1–2 business days for one artwork, 4–5 days for a series." },
    { question: "Who owns the rights after payment?", answer: "Property rights to the finished work transfer to you. Scope, term, and territory are fixed in the contract signed before work starts." },
    { question: "In what formats do you deliver finished illustrations?", answer: "Vector and raster versions for screen and print, plus a layered source file. Formats: AI, EPS, PDF, SVG, PNG." },
    { question: "How many revisions are included?", answer: "Two revision rounds are included in the estimate. Minor tweaks count within those rounds. Extra work beyond two rounds is billed hourly at UAH 2,000." },
    { question: "Can you illustrate in our brand style?", answer: "Yes. We review your brand book for colors, fonts, and graphic manner. Without guidelines, the illustrator shows several style directions for approval." },
    { question: "How does a commercial illustrator differ from a freelance artist?", answer: "An artist draws for themselves and sells the work as-is. A commercial illustrator works from a brief, follows brand style, shows sketches for approval, delivers required formats, and transfers usage rights." },
  ],
  relatedTitle: "Related services",
  related: [
    { title: "Packaging", slug: "packaging" },
    { title: "Branding", slug: "branding" },
    { title: "Brand book", slug: "brandbook" },
  ],
};

const ru: ServicePageContent = {
  ...uk,
  eyebrow: "Услуги / Иллюстрация",
  title: "Иллюстрация",
  titleAccent: "Коммерческая иллюстрация на заказ",
  lead:
    "Корпоративные герои, комиксы и графика, по которым ваш продукт узнают на полке и в соцсетях.",
  cta: "Обсудить проект",
  heroAlt: "Коммерческая иллюстрация на заказ",
  heroCaption: "Персонажи и графика, которые работают на бренд.",
  metricsTitle: "Цифры студии",
  stats: [
    { value: "6", label: "лет\nна рынке" },
    { value: "1", label: "иллюстратор" },
    { value: "50+", label: "рисунков" },
    { value: "55", label: "проектов" },
    { value: "30+", label: "ниш\nв работе" },
  ],
  audienceTitle: "Кому нужна иллюстрация",
  audienceItems: [
    { index: "01", title: "Производителям товаров" },
    { index: "02", title: "Онлайн-сервисам" },
    { index: "03", title: "Издательствам и медиа" },
    { index: "04", title: "Молодым брендам" },
  ],
  includesTitle: "Что вы получите",
  includes: [
    "Несколько эскизов на выбор",
    "Корпоративного героя для бренда",
    "Чистовую иллюстрацию в векторе",
    "Исходный макет со слоями",
    "Файлы в форматах AI, EPS, PDF, SVG и PNG",
    "Отдельные версии под печать и под экран",
    "Цветную и монохромную графику",
    "Права на коммерческое использование",
  ],
  casesTitle: "Кейсы коммерческой иллюстрации",
  processTitle: "Как мы рисуем",
  process: [
    { index: "01", title: "Консультация и бриф", description: "Вы описываете задачу, мы уточняем.", duration: "1 день" },
    { index: "02", title: "Мозговой штурм", description: "Команда ZOND придумывает образ.", duration: "1 день" },
    { index: "03", title: "Создание эскиза", description: "Показываем несколько вариантов.", duration: "1 день" },
    { index: "04", title: "Утверждение образа", description: "Выбираем эскиз и прорабатываем его.", duration: "1 день" },
    { index: "05", title: "Финальные макеты", description: "Собираем файлы и передаём вам.", duration: "1 день" },
  ],
  teamTitle: "Кто ведёт проект",
  whyTitle: "Почему ZOND",
  whyItems: [
    { title: "Рисуем под айдентику бренда", description: "Опираемся на вашу палитру и фирменные шрифты." },
    { title: "Подбираем иллюстратора", description: "Корпоративные герои, комиксы, графика для рекламы." },
    { title: "Файлы готовы к печати", description: "Вектор и растр, отдельные версии под экран и полиграфию." },
    { title: "Права переходят вам", description: "Условия фиксируем в договоре до начала работы." },
  ],
  compareTitle: "Почему ZOND, а не фриланс или генератор?",
  compareColumns: ["Критерий", "ZOND", "Фриланс", "Генератор (AI)"],
  compareRows: [
    { criterion: "Стиль", zond: "Под ваш бренд", freelance: "Стиль автора", generator: "Похож на другие" },
    { criterion: "Права", zond: "Пишем в договор", freelance: "Не всегда", generator: "По лицензии" },
    { criterion: "Правки", zond: "Есть в смете", freelance: "По договорённости", generator: "Новый запрос" },
    { criterion: "После сдачи", zond: "Тот же стиль", freelance: "Если свободен", generator: "Другой результат" },
  ],
  reviewsTitle: "Отзывы",
  reviewsNote: "Демонстрационные тексты для макета. Не являются реальными отзывами клиентов.",
  reviews: [
    { label: "Пример отзыва 01", quote: "Нужен был корпоративный герой для упаковки и соцсетей. Получили несколько эскизов, выбрали образ и быстро вышли на финальные файлы.", name: "Имя клиента · Компания", role: "Корпоративный герой" },
    { label: "Пример отзыва 02", quote: "Важно было нарисовать серию в одном стиле под наш брендбук. Все работы выглядят целостно на сайте и в рекламе.", name: "Имя клиента · Компания", role: "Серия иллюстраций" },
    { label: "Пример отзыва 03", quote: "Передали вектор и растр под печать и экран, плюс исходник со слоями. Удобно править мелочи без повторного заказа.", name: "Имя клиента · Компания", role: "Файлы и права" },
  ],
  formTitle: "Расскажите о своей задаче",
  formDescription: "Заполните форму. Консультация бесплатная, цену назовём после брифа.",
  faqTitle: "FAQ",
  faq: [
    { question: "Какие есть разновидности коммерческой иллюстрации и где они применяются?", answer: "Коммерческая иллюстрация бывает четырёх типов: нарисованный герой, отдельный товар, целая сцена и схема с цифрами. Героя берут на упаковку и в рекламу, товар рисуют для карточек в каталоге, сцену — для баннеров и соцсетей, схему — для сайта и презентаций." },
    { question: "Сколько стоит коммерческая иллюстрация и как формируется цена?", answer: "Цена зависит от сложности сюжета, количества работ в серии и мелких деталей. Важно и то, где изображение будет работать. Иллюстратор называет цену после брифа, и она стоит в смете до начала работы." },
    { question: "Сколько времени занимает создание иллюстрации?", answer: "Срок зависит от объёма серии, сложности сюжета и количества правок, поэтому мы ставим его в смету после брифа. Ориентировочно 1–2 рабочих дня на одну работу, 4–5 дней на серию." },
    { question: "Кому принадлежат права на иллюстрацию после оплаты?", answer: "Имущественные права на готовую работу переходят вам. Объём, срок и территорию использования фиксирует договор, который подписываем до начала работы." },
    { question: "В каких форматах вы передаёте готовые иллюстрации?", answer: "Векторные и растровые версии отдельно под экран и под печать, вместе с исходным макетом со слоями. Форматы: AI, EPS, PDF, SVG, PNG." },
    { question: "Сколько правок входит в стоимость работы?", answer: "В стоимость входят два круга правок. Мелкие уточнения входят в эти круги. Работу сверх двух кругов считаем почасово, час стоит 2 000 грн." },
    { question: "Можно ли заказать иллюстрацию в стиле нашего бренда?", answer: "Да. Перед работой мы смотрим ваш брендбук и берём оттуда цвета, шрифты и манеру графики. Если гайдлайна нет, иллюстратор показывает несколько стилевых направлений на выбор." },
    { question: "В чём разница между коммерческим иллюстратором и свободным художником?", answer: "Художник рисует для себя и продаёт готовую работу как есть, а коммерческий иллюстратор работает по брифу: опирается на фирменный стиль, показывает эскиз, отдаёт файлы в нужных форматах и передаёт права на использование." },
  ],
  relatedTitle: "Смежные услуги",
  related: [
    { title: "Упаковка", slug: "packaging" },
    { title: "Брендинг", slug: "branding" },
    { title: "Брендбук", slug: "brandbook" },
  ],
};

export const illustrationPage: Record<Locale, ServicePageContent> = {
  uk,
  en,
  ru,
};
