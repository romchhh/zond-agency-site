import { getCases } from "@/i18n/cases";
import type { Locale } from "@/i18n/config";
import type { ProjectItem } from "@/i18n/dictionary";
import type { ServicePageContent } from "@/i18n/logo";
import { getCaseDetailPath } from "@/i18n/routing";

const webDevelopmentCaseCards: Record<
  Locale,
  Array<{ slug: string; category: string; image: string; poster?: string }>
> = {
  uk: [
    {
      slug: "carbit",
      category: "Сервіс пошуку авто",
      image: "/services/web-development/carbit.mp4",
      poster: "/services/web-development/carbit.webp",
    },
    {
      slug: "nove-misto",
      category: "Девелопмент",
      image: "/services/web-development/nove.gif",
    },
    {
      slug: "kyiv-tourism-department",
      category: "Міський бренд",
      image: "/services/web-development/kyiv.jpg",
    },
    {
      slug: "digital-residence",
      category: "Нерухомість",
      image: "/services/web-development/digital.mp4",
      poster: "/services/web-development/digital.webp",
    },
  ],
  en: [
    {
      slug: "carbit",
      category: "Car search service",
      image: "/services/web-development/carbit.mp4",
      poster: "/services/web-development/carbit.webp",
    },
    {
      slug: "nove-misto",
      category: "Real estate development",
      image: "/services/web-development/nove.gif",
    },
    {
      slug: "kyiv-tourism-department",
      category: "City brand",
      image: "/services/web-development/kyiv.jpg",
    },
    {
      slug: "digital-residence",
      category: "Real estate",
      image: "/services/web-development/digital.mp4",
      poster: "/services/web-development/digital.webp",
    },
  ],
  ru: [
    {
      slug: "carbit",
      category: "Сервис поиска авто",
      image: "/services/web-development/carbit.mp4",
      poster: "/services/web-development/carbit.webp",
    },
    {
      slug: "nove-misto",
      category: "Девелопмент",
      image: "/services/web-development/nove.gif",
    },
    {
      slug: "kyiv-tourism-department",
      category: "Городской бренд",
      image: "/services/web-development/kyiv.jpg",
    },
    {
      slug: "digital-residence",
      category: "Недвижимость",
      image: "/services/web-development/digital.mp4",
      poster: "/services/web-development/digital.webp",
    },
  ],
};

const uk: ServicePageContent = {
  eyebrow: "Послуги / Веб-розробка",
  title: "Сайт, що",
  titleAccent: "працює на ваш бізнес.",
  lead: "Проєктуємо та розробляємо сайти, у яких зрозуміла структура, виразний дизайн і зручний досвід працюють разом.",
  sub: "Від першого сценарію та прототипу — до адаптивної реалізації, перевірки й запуску.",
  cta: "Обговорити проєкт",
  heroAlt: "Ноутбук і телефон з адаптивним дизайном сайту в студійному просторі",
  heroCaption: "Ваш бренд у цифровому середовищі.",
  metricsTitle: "Сайт як продумана система.",
  stats: [
    {
        "value": "01",
        "label": "зрозуміла ціль для кожної сторінки"
    },
    {
        "value": "03",
        "label": "формати екрана: телефон, планшет, комп’ютер"
    },
    {
        "value": "06",
        "label": "етапів від брифу до запуску"
    },
    {
        "value": "04",
        "label": "опори: структура, контент, дизайн, код"
    }
],
  audienceTitle: "Коли бізнесу потрібен сайт",
  audienceItems: [
    {
        "index": "01",
        "title": "Запуск бізнесу",
        "description": "Потрібен сайт, який чітко представляє продукт і дає зрозумілий шлях до звернення."
    },
    {
        "index": "02",
        "title": "Оновлення сайту",
        "description": "Стара структура або вигляд більше не відповідають бренду, продукту чи очікуванням аудиторії."
    },
    {
        "index": "03",
        "title": "Новий продукт",
        "description": "Потрібна окрема сторінка або сайт для запуску й пояснення цінності нової пропозиції."
    },
    {
        "index": "04",
        "title": "Масштабування",
        "description": "Зростає кількість сторінок, мов або команд, тому сайту потрібна продумана система для розвитку."
    }
],
  featureStrip: {
    eyebrow: "ОСНОВА ДЛЯ РІШЕНЬ",
    titleLine: "Кожен екран має сенс.",
    titleAccent: "Кожен клік — мету.",
    body: "Продумана структура допомагає людині знайти відповідь, а бізнесу — отримати звернення. Дизайн і технологія підтримують цей шлях.",
  },
  includesTitle: "Що входить у веб-розробку",
  includesSubtitle: "Створюємо сайт як інструмент для бізнесу й людей. Кожен етап допомагає зробити цифровий досвід зрозумілим, цілісним і готовим до роботи.",
  includes: [
    "Карту сторінок і логіку навігації.",
    "Прототипи ключових екранів.",
    "Дизайн сторінок у стилі бренду.",
    "Адаптивні версії для різних пристроїв.",
    "Готову реалізацію погодженого функціоналу.",
    "Підключення погоджених форм та сервісів.",
    "Перевірку основних сценаріїв перед запуском.",
    "Розміщення готового сайту.",
    "Доступи та інструкції для команди."
],
  deliverables: [
    "Карту сторінок і логіку навігації.",
    "Прототипи ключових екранів.",
    "Дизайн сторінок у стилі бренду.",
    "Адаптивні версії для різних пристроїв.",
    "Готову реалізацію погодженого функціоналу.",
    "Підключення погоджених форм та сервісів.",
    "Перевірку основних сценаріїв перед запуском.",
    "Розміщення готового сайту.",
    "Доступи та інструкції для команди."
],
  deliverablesEyebrow: "09 / РЕЗУЛЬТАТ",
  deliverablesTitle: "Що ви отримуєте",
  deliverablesNote: "Точний перелік сторінок, функцій і матеріалів визначаємо до старту проєкту.",
  includeCards: [
    {
        "index": "01",
        "title": "Бриф і цілі",
        "description": "З’ясовуємо, що сайт має допомагати робити: знайомити з брендом, презентувати продукт, збирати звернення або підтримувати продажі.",
        "image": "/services/web-development/webdev-03.png",
        "alt": "Ілюстрація етапу веб-розробки: Бриф і цілі"
    },
    {
        "index": "02",
        "title": "Дослідження користувачів",
        "description": "Визначаємо потреби аудиторії та сценарії, за якими люди шукають інформацію й приймають рішення.",
        "image": "/services/web-development/webdev-02.png",
        "alt": "Ілюстрація етапу веб-розробки: Дослідження користувачів"
    },
    {
        "index": "03",
        "title": "Структура й прототип",
        "description": "Будуємо карту сторінок, навігацію та прототипи ключових екранів, щоб потрібний зміст було легко знайти.",
        "image": "/services/web-development/webdev-02.png",
        "alt": "Ілюстрація етапу веб-розробки: Структура й прототип"
    },
    {
        "index": "04",
        "title": "Дизайн інтерфейсу",
        "description": "Перекладаємо характер бренду у зрозумілий інтерфейс: типографіку, композицію, зображення й деталі взаємодії.",
        "image": "/services/web-development/webdev-01.png",
        "alt": "Ілюстрація етапу веб-розробки: Дизайн інтерфейсу"
    },
    {
        "index": "05",
        "title": "Адаптивна розробка",
        "description": "Створюємо сторінки для телефона, планшета й комп’ютера з увагою до читабельності та зручності керування.",
        "image": "/services/web-development/webdev-04.png",
        "alt": "Ілюстрація етапу веб-розробки: Адаптивна розробка"
    },
    {
        "index": "06",
        "title": "Контент та інтеграції",
        "description": "Налаштовуємо погоджений спосіб редагування матеріалів і потрібні підключення до форм, аналітики чи інших сервісів.",
        "image": "/services/web-development/webdev-06.png",
        "alt": "Ілюстрація етапу веб-розробки: Контент та інтеграції"
    },
    {
        "index": "07",
        "title": "Перевірка якості",
        "description": "Перевіряємо основні сценарії, відображення на різних екранах, базову доступність і технічну якість перед запуском.",
        "image": "/services/web-development/webdev-05.png",
        "alt": "Ілюстрація етапу веб-розробки: Перевірка якості"
    },
    {
        "index": "08",
        "title": "Запуск і передача",
        "description": "Публікуємо готовий сайт, передаємо доступи та інструкції для команди. Подальшу підтримку узгоджуємо за потреби.",
        "image": "/services/web-development/webdev-06.png",
        "alt": "Ілюстрація етапу веб-розробки: Запуск і передача"
    }
],
  casesTitle: "Бренди у цифровому середовищі",
  casesSubtitle: "Добірка суміжних кейсів ZOND. Деталі задачі та фактичний склад робіт дивіться на сторінці кожного проєкту.",
  processTitle: "Як ми створюємо сайт",
  process: [
    {
        "index": "01",
        "title": "Знайомство",
        "description": "Обговорюємо бізнес-цілі, аудиторію, продукт, контент та ключові функції сайту.",
        "duration": ""
    },
    {
        "index": "02",
        "title": "Структура",
        "description": "Проєктуємо карту сторінок і сценарії користувача, погоджуємо пріоритети інформації.",
        "duration": ""
    },
    {
        "index": "03",
        "title": "Прототип",
        "description": "Робимо структуру основних екранів, щоб перевірити логіку до фінального дизайну.",
        "duration": ""
    },
    {
        "index": "04",
        "title": "Дизайн",
        "description": "Створюємо візуальну систему сторінок і адаптації для потрібних розмірів екрана.",
        "duration": ""
    },
    {
        "index": "05",
        "title": "Розробка",
        "description": "Збираємо сайт, додаємо контент і погоджені інтеграції.",
        "duration": ""
    },
    {
        "index": "06",
        "title": "Тест і запуск",
        "description": "Перевіряємо ключові сценарії, усуваємо помилки та передаємо готовий сайт команді.",
        "duration": ""
    }
],
  teamTitle: "Хто веде проєкт",
  whyTitle: "Кожен екран має сенс.",
  whyItems: [
    {
        "title": "Кожен екран має сенс. Кожен клік — мету.",
        "description": "Продумана структура допомагає людині знайти відповідь, а бізнесу — отримати звернення. Дизайн і технологія підтримують цей шлях."
    },
    {
        "title": "Яким має бути сайт для бізнесу?",
        "description": "Сайт має допомагати людині зрозуміти продукт і зробити наступний крок. Для цього потрібні ясна структура, доречний контент, зрозуміла навігація та технічно надійна реалізація."
    },
    {
        "title": "Чому починаємо зі структури?",
        "description": "Гарний дизайн не виправить заплутану логіку сторінок. Спочатку визначаємо, що люди шукають і як вони рухаються від першого контакту до звернення."
    },
    {
        "title": "Як сайт працює з брендом?",
        "description": "Сайт — одна з головних точок контакту з компанією. Його мова, зображення та інтерфейс мають передавати той самий характер, що й айдентика та комунікація."
    }
],
  compareTitle: "Чому ZOND, а не шаблон чи разовий макет?",
  compareColumns: ["Критерій", "ZOND", "Фриланс", "Шаблон"],
  compareRows: [
    {
        "criterion": "Підхід",
        "zond": "Під задачу й систему бренду",
        "freelance": "Окремий макет",
        "generator": "Універсальний шаблон"
    },
    {
        "criterion": "Стратегія",
        "zond": "Дослідження та логіка",
        "freelance": "Не завжди",
        "generator": "Немає"
    },
    {
        "criterion": "Стиль",
        "zond": "Єдина система",
        "freelance": "Стиль автора",
        "generator": "Схожий на інших"
    },
    {
        "criterion": "Результат",
        "zond": "Готово до використання",
        "freelance": "Залежить від досвіду",
        "generator": "Потрібна доробка"
    }
],
  reviewsEyebrow: "05 / ЗВОРОТНИЙ ЗВ’ЯЗОК",
  reviewsTitle: "Що змінює новий сайт",
  reviewsNote: "Демонстраційні тексти для макета. Це не опубліковані відгуки клієнтів; перед публічним використанням замініть їх підтвердженими цитатами.",
  reviews: [
    {
        "label": "ПРИКЛАД ВІДГУКУ 01",
        "quote": "«Тепер клієнти швидше знаходять потрібну інформацію, а команда може самостійно оновлювати матеріали».",
        "name": "Команда компанії",
        "role": "Текст для погодження"
    },
    {
        "label": "ПРИКЛАД ВІДГУКУ 02",
        "quote": "«Новий сайт краще пояснює наш продукт і виглядає послідовно з іншими матеріалами бренду».",
        "name": "Команда продукту",
        "role": "Текст для погодження"
    },
    {
        "label": "ПРИКЛАД ВІДГУКУ 03",
        "quote": "«Погоджений прототип допоміг побачити шлях користувача до того, як ми перейшли до дизайну».",
        "name": "Команда бренду",
        "role": "Текст для погодження"
    },
    {
        "label": "ПРИКЛАД ВІДГУКУ 04",
        "quote": "«Мобільна версія стала зручною для читання та звернення з телефона».",
        "name": "Команда сервісу",
        "role": "Текст для погодження"
    }
],
  productTitle: "Одна система на кожному екрані.",
  productNote: "Ілюстративні концепти показують адаптивний інтерфейс, процес розробки та цифрові носії. Це не фотографії клієнтських робіт.",
  products: [
    {
        "src": "/services/web-development/webdev-04.png",
        "alt": "Ілюстративний приклад: адаптивний дизайн на ноутбуці планшеті й телефоні",
        "caption": "Адаптивність"
    },
    {
        "src": "/services/web-development/webdev-05.png",
        "alt": "Ілюстративний приклад: робоче місце розробника",
        "caption": "Розробка"
    },
    {
        "src": "/services/web-development/webdev-06.png",
        "alt": "Ілюстративний приклад: сайт на ноутбуці й телефоні",
        "caption": "Запуск"
    }
],
  formTitle: "Побудуємо сайт, який працює.",
  formDescription: "Розкажіть про бізнес, продукт і задачі сайту. Ми запропонуємо формат роботи.",
  faqTitle: "Відповідаємо на запитання",
  faq: [
    {
        "question": "Скільки коштує розробка сайту?",
        "answer": "Вартість залежить від кількості сторінок, обсягу дизайну, функцій та інтеграцій. Після знайомства з задачами й матеріалами ми запропонуємо склад робіт і кошторис."
    },
    {
        "question": "Скільки часу займає розробка?",
        "answer": "Терміни залежать від масштабу сайту, готовності контенту та швидкості погоджень. План етапів і орієнтовний графік визначаємо до старту проєкту."
    },
    {
        "question": "Чи можна замовити лише дизайн сайту?",
        "answer": "Так. Можемо окремо розробити структуру й дизайн або взяти на себе повний цикл до запуску. Формат роботи визначаємо за вашою задачею."
    },
    {
        "question": "Чи буде сайт зручним на телефоні?",
        "answer": "Так. Проєктуємо адаптивні екрани та перевіряємо ключові сценарії для телефона, планшета й комп’ютера."
    },
    {
        "question": "Чи зможемо ми самостійно оновлювати контент?",
        "answer": "Так, якщо це потрібно команді. Спосіб редагування й перелік матеріалів, які ви зможете змінювати самостійно, погоджуємо до розробки."
    },
    {
        "question": "Чи допомагаєте з текстами та зображеннями?",
        "answer": "Так. Можемо підготувати структуру повідомлень, тексти та візуальні матеріали як частину проєкту. Склад контентних робіт обговорюємо на старті."
    },
    {
        "question": "Чи підтримуєте сайт після запуску?",
        "answer": "За потреби домовляємося про супровід, оновлення сторінок і розвиток функціоналу окремо після запуску."
    }
],
  relatedTitle: "Суміжні послуги",
  related: [
    {
        "title": "Брендинг",
        "slug": "branding"
    },
    {
        "title": "Айдентика",
        "slug": "identity"
    },
    {
        "title": "SMM",
        "slug": "smm"
    }
],
};

const en: ServicePageContent = {
    "eyebrow": "Services / Web development",
    "title": "A website that",
    "titleAccent": "works for your business.",
    "lead": "We design and build websites where clear structure, expressive design, and a smooth experience work together.",
    "sub": "From the first scenarios and prototypes to responsive implementation, testing, and launch.",
    "cta": "Discuss the project",
    "heroAlt": "Laptop and phone showing responsive website design in a studio setting",
    "heroCaption": "Your brand in the digital space.",
    "metricsTitle": "A website as a considered system.",
    "stats": [
        {
            "value": "01",
            "label": "a clear goal for every page"
        },
        {
            "value": "03",
            "label": "screen formats: phone, tablet, computer"
        },
        {
            "value": "06",
            "label": "stages from brief to launch"
        },
        {
            "value": "04",
            "label": "pillars: structure, content, design, code"
        }
    ],
    "audienceTitle": "When a business needs a website",
    "audienceItems": [
        {
            "index": "01",
            "title": "Launching a business",
            "description": "You need a site that clearly presents the product and offers a straightforward path to get in touch."
        },
        {
            "index": "02",
            "title": "Updating the site",
            "description": "The old structure or look no longer matches the brand, product, or audience expectations."
        },
        {
            "index": "03",
            "title": "New product",
            "description": "You need a dedicated page or site to launch and explain the value of a new offer."
        },
        {
            "index": "04",
            "title": "Scaling up",
            "description": "More pages, languages, or teams mean the site needs a thoughtful system for growth."
        }
    ],
    "featureStrip": {
        "eyebrow": "FOUNDATION FOR DECISIONS",
        "titleLine": "Every screen has purpose.",
        "titleAccent": "Every click has intent.",
        "body": "Thoughtful structure helps people find answers and helps the business receive inquiries. Design and technology support that path."
    },
    "includesTitle": "What's included in web development",
    "includesSubtitle": "We build the site as a tool for the business and for people. Each stage makes the digital experience clear, cohesive, and ready to use.",
    "includes": [
        "A sitemap and navigation logic.",
        "Prototypes of key screens.",
        "Page design aligned with the brand.",
        "Responsive versions for different devices.",
        "Implementation of agreed functionality.",
        "Integration of approved forms and services.",
        "Testing of main scenarios before launch.",
        "Deployment of the finished site.",
        "Access and instructions for the team."
    ],
    "deliverables": [
        "A sitemap and navigation logic.",
        "Prototypes of key screens.",
        "Page design aligned with the brand.",
        "Responsive versions for different devices.",
        "Implementation of agreed functionality.",
        "Integration of approved forms and services.",
        "Testing of main scenarios before launch.",
        "Deployment of the finished site.",
        "Access and instructions for the team."
    ],
    "deliverablesEyebrow": "09 / RESULT",
    "deliverablesTitle": "What you get",
    "deliverablesNote": "We define the exact list of pages, features, and materials before the project starts.",
    "includeCards": [
        {
            "index": "01",
            "title": "Brief and goals",
            "description": "We clarify what the site should help with: introduce the brand, present the product, collect inquiries, or support sales.",
            "image": "/services/web-development/webdev-03.png",
            "alt": "Web development stage illustration: Brief and goals"
        },
        {
            "index": "02",
            "title": "User research",
            "description": "We define audience needs and the scenarios people follow when they look for information and make decisions.",
            "image": "/services/web-development/webdev-02.png",
            "alt": "Web development stage illustration: User research"
        },
        {
            "index": "03",
            "title": "Structure and prototype",
            "description": "We build the sitemap, navigation, and prototypes of key screens so the right content is easy to find.",
            "image": "/services/web-development/webdev-02.png",
            "alt": "Web development stage illustration: Structure and prototype"
        },
        {
            "index": "04",
            "title": "Interface design",
            "description": "We translate brand character into a clear interface: typography, layout, imagery, and interaction details.",
            "image": "/services/web-development/webdev-01.png",
            "alt": "Web development stage illustration: Interface design"
        },
        {
            "index": "05",
            "title": "Responsive development",
            "description": "We build pages for phone, tablet, and desktop with attention to readability and ease of use.",
            "image": "/services/web-development/webdev-04.png",
            "alt": "Web development stage illustration: Responsive development"
        },
        {
            "index": "06",
            "title": "Content and integrations",
            "description": "We set up the agreed way to edit materials and the connections to forms, analytics, or other services.",
            "image": "/services/web-development/webdev-06.png",
            "alt": "Web development stage illustration: Content and integrations"
        },
        {
            "index": "07",
            "title": "Quality assurance",
            "description": "We check main scenarios, display across screen sizes, basic accessibility, and technical quality before launch.",
            "image": "/services/web-development/webdev-05.png",
            "alt": "Web development stage illustration: Quality assurance"
        },
        {
            "index": "08",
            "title": "Launch and handoff",
            "description": "We publish the finished site, hand over access and instructions for the team. Ongoing support is agreed if needed.",
            "image": "/services/web-development/webdev-06.png",
            "alt": "Web development stage illustration: Launch and handoff"
        }
    ],
    "casesTitle": "Brands in the digital space",
    "casesSubtitle": "A selection of related ZOND cases. Task details and actual deliverables are on each project page.",
    "processTitle": "How we build a website",
    "process": [
        {
            "index": "01",
            "title": "Introduction",
            "description": "We discuss business goals, audience, product, content, and key site features.",
            "duration": ""
        },
        {
            "index": "02",
            "title": "Structure",
            "description": "We design the sitemap and user scenarios and agree on information priorities.",
            "duration": ""
        },
        {
            "index": "03",
            "title": "Prototype",
            "description": "We lay out main screens to validate logic before final design.",
            "duration": ""
        },
        {
            "index": "04",
            "title": "Design",
            "description": "We create the visual system for pages and adaptations for required screen sizes.",
            "duration": ""
        },
        {
            "index": "05",
            "title": "Development",
            "description": "We assemble the site, add content, and implement agreed integrations.",
            "duration": ""
        },
        {
            "index": "06",
            "title": "Test and launch",
            "description": "We check key scenarios, fix issues, and hand the finished site to the team.",
            "duration": ""
        }
    ],
    "teamTitle": "Who leads the project",
    "whyTitle": "Every screen has purpose.",
    "whyItems": [
        {
            "title": "Every screen has purpose. Every click has intent.",
            "description": "Thoughtful structure helps people find answers and helps the business receive inquiries. Design and technology support that path."
        },
        {
            "title": "What should a business website be?",
            "description": "A site should help people understand the product and take the next step. That takes clear structure, relevant content, understandable navigation, and technically reliable implementation."
        },
        {
            "title": "Why do we start with structure?",
            "description": "Good design cannot fix confusing page logic. First we define what people look for and how they move from first contact to inquiry."
        },
        {
            "title": "How does the site work with the brand?",
            "description": "The site is one of the main touchpoints with the company. Its language, imagery, and interface should convey the same character as identity and communication."
        }
    ],
    "compareTitle": "Why ZOND instead of a template or a one-off layout?",
    "compareColumns": [
        "Criterion",
        "ZOND",
        "Freelance",
        "Template"
    ],
    "compareRows": [
        {
            "criterion": "Approach",
            "zond": "Tailored to the task and brand system",
            "freelance": "One-off layout",
            "generator": "Generic template"
        },
        {
            "criterion": "Strategy",
            "zond": "Research and logic",
            "freelance": "Not always",
            "generator": "None"
        },
        {
            "criterion": "Style",
            "zond": "One unified system",
            "freelance": "Author's style",
            "generator": "Similar to others"
        },
        {
            "criterion": "Result",
            "zond": "Ready to use",
            "freelance": "Depends on experience",
            "generator": "Needs refinement"
        }
    ],
    "reviewsEyebrow": "05 / FEEDBACK",
    "reviewsTitle": "What a new site changes",
    "reviewsNote": "Sample texts for the layout. These are not published client reviews; replace with verified quotes before public use.",
    "reviews": [
        {
            "label": "SAMPLE REVIEW 01",
            "quote": "\"Customers find what they need faster, and the team can update content on their own.\"",
            "name": "Company team",
            "role": "Text for approval"
        },
        {
            "label": "SAMPLE REVIEW 02",
            "quote": "\"The new site explains our product better and looks consistent with other brand materials.\"",
            "name": "Product team",
            "role": "Text for approval"
        },
        {
            "label": "SAMPLE REVIEW 03",
            "quote": "\"The approved prototype helped us see the user path before we moved into design.\"",
            "name": "Brand team",
            "role": "Text for approval"
        },
        {
            "label": "SAMPLE REVIEW 04",
            "quote": "\"The mobile version is comfortable to read and easy to contact us from a phone.\"",
            "name": "Service team",
            "role": "Text for approval"
        }
    ],
    "productTitle": "One system on every screen.",
    "productNote": "Illustrative concepts show responsive interface, the development process, and digital touchpoints. These are not photos of client work.",
    "products": [
        {
            "src": "/services/web-development/webdev-04.png",
            "alt": "Illustrative example: responsive design on laptop, tablet, and phone",
            "caption": "Responsive"
        },
        {
            "src": "/services/web-development/webdev-05.png",
            "alt": "Illustrative example: developer workspace",
            "caption": "Development"
        },
        {
            "src": "/services/web-development/webdev-06.png",
            "alt": "Illustrative example: site on laptop and phone",
            "caption": "Launch"
        }
    ],
    "formTitle": "Let's build a site that works.",
    "formDescription": "Tell us about your business, product, and site goals. We will suggest a format for the work.",
    "faqTitle": "We answer your questions",
    "faq": [
        {
            "question": "How much does website development cost?",
            "answer": "Cost depends on the number of pages, design scope, features, and integrations. After we learn about the task and materials we propose the scope and estimate."
        },
        {
            "question": "How long does development take?",
            "answer": "Timeline depends on site scale, content readiness, and approval speed. We define stages and an indicative schedule before the project starts."
        },
        {
            "question": "Can we order website design only?",
            "answer": "Yes. We can develop structure and design separately or take on the full cycle through launch. We define the format based on your task."
        },
        {
            "question": "Will the site work well on mobile?",
            "answer": "Yes. We design responsive screens and test key scenarios for phone, tablet, and desktop."
        },
        {
            "question": "Can we update content ourselves?",
            "answer": "Yes, if the team needs that. We agree on how editing works and which materials you can change on your own before development."
        },
        {
            "question": "Do you help with copy and images?",
            "answer": "Yes. We can prepare message structure, copy, and visuals as part of the project. Content scope is discussed at kickoff."
        },
        {
            "question": "Do you support the site after launch?",
            "answer": "If needed we arrange maintenance, page updates, and feature development separately after launch."
        }
    ],
    "relatedTitle": "Related services",
    "related": [
        {
            "title": "Branding",
            "slug": "branding"
        },
        {
            "title": "Identity",
            "slug": "identity"
        },
        {
            "title": "SMM",
            "slug": "smm"
        }
    ]
};

const ru: ServicePageContent = {
    "eyebrow": "Услуги / Веб-разработка",
    "title": "Сайт, который",
    "titleAccent": "работает на ваш бизнес.",
    "lead": "Проектируем и разрабатываем сайты, в которых понятная структура, выразительный дизайн и удобный опыт работают вместе.",
    "sub": "От первых сценариев и прототипа — к адаптивной реализации, проверке и запуску.",
    "cta": "Обсудить проект",
    "heroAlt": "Ноутбук и телефон с адаптивным дизайном сайта в студийном пространстве",
    "heroCaption": "Ваш бренд в цифровой среде.",
    "metricsTitle": "Сайт как продуманная система.",
    "stats": [
        {
            "value": "01",
            "label": "понятная цель для каждой страницы"
        },
        {
            "value": "03",
            "label": "формата экрана: телефон, планшет, компьютер"
        },
        {
            "value": "06",
            "label": "этапов от брифа до запуска"
        },
        {
            "value": "04",
            "label": "опоры: структура, контент, дизайн, код"
        }
    ],
    "audienceTitle": "Когда бизнесу нужен сайт",
    "audienceItems": [
        {
            "index": "01",
            "title": "Запуск бизнеса",
            "description": "Нужен сайт, который чётко представляет продукт и даёт понятный путь к обращению."
        },
        {
            "index": "02",
            "title": "Обновление сайта",
            "description": "Старая структура или внешний вид больше не соответствуют бренду, продукту или ожиданиям аудитории."
        },
        {
            "index": "03",
            "title": "Новый продукт",
            "description": "Нужна отдельная страница или сайт для запуска и объяснения ценности нового предложения."
        },
        {
            "index": "04",
            "title": "Масштабирование",
            "description": "Растёт число страниц, языков или команд, поэтому сайту нужна продуманная система для развития."
        }
    ],
    "featureStrip": {
        "eyebrow": "ОСНОВА ДЛЯ РЕШЕНИЙ",
        "titleLine": "Каждый экран имеет смысл.",
        "titleAccent": "Каждый клик — с целью.",
        "body": "Продуманная структура помогает человеку найти ответ, а бизнесу — получить обращение. Дизайн и технология поддерживают этот путь."
    },
    "includesTitle": "Что входит в веб-разработку",
    "includesSubtitle": "Создаём сайт как инструмент для бизнеса и для людей. Каждый этап помогает сделать цифровой опыт понятным, цельным и готовым к работе.",
    "includes": [
        "Карту страниц и логику навигации.",
        "Прототипы ключевых экранов.",
        "Дизайн страниц в стиле бренда.",
        "Адаптивные версии для разных устройств.",
        "Готовую реализацию согласованного функционала.",
        "Подключение согласованных форм и сервисов.",
        "Проверку основных сценариев перед запуском.",
        "Размещение готового сайта.",
        "Доступы и инструкции для команды."
    ],
    "deliverables": [
        "Карту страниц и логику навигации.",
        "Прототипы ключевых экранов.",
        "Дизайн страниц в стиле бренда.",
        "Адаптивные версии для разных устройств.",
        "Готовую реализацию согласованного функционала.",
        "Подключение согласованных форм и сервисов.",
        "Проверку основных сценариев перед запуском.",
        "Размещение готового сайта.",
        "Доступы и инструкции для команды."
    ],
    "deliverablesEyebrow": "09 / РЕЗУЛЬТАТ",
    "deliverablesTitle": "Что вы получаете",
    "deliverablesNote": "Точный перечень страниц, функций и материалов определяем до старта проекта.",
    "includeCards": [
        {
            "index": "01",
            "title": "Бриф и цели",
            "description": "Выясняем, чем сайт должен помогать: знакомить с брендом, представлять продукт, собирать обращения или поддерживать продажи.",
            "image": "/services/web-development/webdev-03.png",
            "alt": "Иллюстрация этапа веб-разработки: Бриф и цели"
        },
        {
            "index": "02",
            "title": "Исследование пользователей",
            "description": "Определяем потребности аудитории и сценарии, по которым люди ищут информацию и принимают решения.",
            "image": "/services/web-development/webdev-02.png",
            "alt": "Иллюстрация этапа веб-разработки: Исследование пользователей"
        },
        {
            "index": "03",
            "title": "Структура и прототип",
            "description": "Строим карту страниц, навигацию и прототипы ключевых экранов, чтобы нужный контент было легко найти.",
            "image": "/services/web-development/webdev-02.png",
            "alt": "Иллюстрация этапа веб-разработки: Структура и прототип"
        },
        {
            "index": "04",
            "title": "Дизайн интерфейса",
            "description": "Переводим характер бренда в понятный интерфейс: типографику, композицию, изображения и детали взаимодействия.",
            "image": "/services/web-development/webdev-01.png",
            "alt": "Иллюстрация этапа веб-разработки: Дизайн интерфейса"
        },
        {
            "index": "05",
            "title": "Адаптивная разработка",
            "description": "Создаём страницы для телефона, планшета и компьютера с вниманием к читаемости и удобству управления.",
            "image": "/services/web-development/webdev-04.png",
            "alt": "Иллюстрация этапа веб-разработки: Адаптивная разработка"
        },
        {
            "index": "06",
            "title": "Контент и интеграции",
            "description": "Настраиваем согласованный способ редактирования материалов и нужные подключения к формам, аналитике или другим сервисам.",
            "image": "/services/web-development/webdev-06.png",
            "alt": "Иллюстрация этапа веб-разработки: Контент и интеграции"
        },
        {
            "index": "07",
            "title": "Проверка качества",
            "description": "Проверяем основные сценарии, отображение на разных экранах, базовую доступность и техническое качество перед запуском.",
            "image": "/services/web-development/webdev-05.png",
            "alt": "Иллюстрация этапа веб-разработки: Проверка качества"
        },
        {
            "index": "08",
            "title": "Запуск и передача",
            "description": "Публикуем готовый сайт, передаём доступы и инструкции для команды. Дальнейшую поддержку согласуем при необходимости.",
            "image": "/services/web-development/webdev-06.png",
            "alt": "Иллюстрация этапа веб-разработки: Запуск и передача"
        }
    ],
    "casesTitle": "Бренды в цифровой среде",
    "casesSubtitle": "Подборка смежных кейсов ZOND. Детали задачи и фактический состав работ смотрите на странице каждого проекта.",
    "processTitle": "Как мы создаём сайт",
    "process": [
        {
            "index": "01",
            "title": "Знакомство",
            "description": "Обсуждаем бизнес-цели, аудиторию, продукт, контент и ключевые функции сайта.",
            "duration": ""
        },
        {
            "index": "02",
            "title": "Структура",
            "description": "Проектируем карту страниц и сценарии пользователя, согласуем приоритеты информации.",
            "duration": ""
        },
        {
            "index": "03",
            "title": "Прототип",
            "description": "Делаем структуру основных экранов, чтобы проверить логику до финального дизайна.",
            "duration": ""
        },
        {
            "index": "04",
            "title": "Дизайн",
            "description": "Создаём визуальную систему страниц и адаптации для нужных размеров экрана.",
            "duration": ""
        },
        {
            "index": "05",
            "title": "Разработка",
            "description": "Собираем сайт, добавляем контент и согласованные интеграции.",
            "duration": ""
        },
        {
            "index": "06",
            "title": "Тест и запуск",
            "description": "Проверяем ключевые сценарии, устраняем ошибки и передаём готовый сайт команде.",
            "duration": ""
        }
    ],
    "teamTitle": "Кто ведёт проект",
    "whyTitle": "Каждый экран имеет смысл.",
    "whyItems": [
        {
            "title": "Каждый экран имеет смысл. Каждый клик — с целью.",
            "description": "Продуманная структура помогает человеку найти ответ, а бизнесу — получить обращение. Дизайн и технология поддерживают этот путь."
        },
        {
            "title": "Каким должен быть сайт для бизнеса?",
            "description": "Сайт должен помогать человеку понять продукт и сделать следующий шаг. Для этого нужны ясная структура, уместный контент, понятная навигация и технически надёжная реализация."
        },
        {
            "title": "Почему начинаем со структуры?",
            "description": "Красивый дизайн не исправит запутанную логику страниц. Сначала определяем, что люди ищут и как они движутся от первого контакта к обращению."
        },
        {
            "title": "Как сайт работает с брендом?",
            "description": "Сайт — одна из главных точек контакта с компанией. Его язык, изображения и интерфейс должны передавать тот же характер, что айдентика и коммуникация."
        }
    ],
    "compareTitle": "Почему ZOND, а не шаблон или разовый макет?",
    "compareColumns": [
        "Критерий",
        "ZOND",
        "Фриланс",
        "Шаблон"
    ],
    "compareRows": [
        {
            "criterion": "Подход",
            "zond": "Под задачу и систему бренда",
            "freelance": "Отдельный макет",
            "generator": "Универсальный шаблон"
        },
        {
            "criterion": "Стратегия",
            "zond": "Исследование и логика",
            "freelance": "Не всегда",
            "generator": "Нет"
        },
        {
            "criterion": "Стиль",
            "zond": "Единая система",
            "freelance": "Стиль автора",
            "generator": "Похож на других"
        },
        {
            "criterion": "Результат",
            "zond": "Готово к использованию",
            "freelance": "Зависит от опыта",
            "generator": "Нужна доработка"
        }
    ],
    "reviewsEyebrow": "05 / ОБРАТНАЯ СВЯЗЬ",
    "reviewsTitle": "Что меняет новый сайт",
    "reviewsNote": "Демонстрационные тексты для макета. Это не опубликованные отзывы клиентов; перед публичным использованием замените их подтверждёнными цитатами.",
    "reviews": [
        {
            "label": "ПРИМЕР ОТЗЫВА 01",
            "quote": "«Теперь клиенты быстрее находят нужную информацию, а команда может самостоятельно обновлять материалы».",
            "name": "Команда компании",
            "role": "Текст для согласования"
        },
        {
            "label": "ПРИМЕР ОТЗЫВА 02",
            "quote": "«Новый сайт лучше объясняет наш продукт и выглядит последовательно с другими материалами бренда».",
            "name": "Команда продукта",
            "role": "Текст для согласования"
        },
        {
            "label": "ПРИМЕР ОТЗЫВА 03",
            "quote": "«Согласованный прототип помог увидеть путь пользователя до того, как мы перешли к дизайну».",
            "name": "Команда бренда",
            "role": "Текст для согласования"
        },
        {
            "label": "ПРИМЕР ОТЗЫВА 04",
            "quote": "«Мобильная версия стала удобной для чтения и обращения с телефона».",
            "name": "Команда сервиса",
            "role": "Текст для согласования"
        }
    ],
    "productTitle": "Одна система на каждом экране.",
    "productNote": "Иллюстративные концепты показывают адаптивный интерфейс, процесс разработки и цифровые носители. Это не фотографии клиентских работ.",
    "products": [
        {
            "src": "/services/web-development/webdev-04.png",
            "alt": "Иллюстративный пример: адаптивный дизайн на ноутбуке, планшете и телефоне",
            "caption": "Адаптивность"
        },
        {
            "src": "/services/web-development/webdev-05.png",
            "alt": "Иллюстративный пример: рабочее место разработчика",
            "caption": "Разработка"
        },
        {
            "src": "/services/web-development/webdev-06.png",
            "alt": "Иллюстративный пример: сайт на ноутбуке и телефоне",
            "caption": "Запуск"
        }
    ],
    "formTitle": "Построим сайт, который работает.",
    "formDescription": "Расскажите о бизнесе, продукте и задачах сайта. Мы предложим формат работы.",
    "faqTitle": "Отвечаем на вопросы",
    "faq": [
        {
            "question": "Сколько стоит разработка сайта?",
            "answer": "Стоимость зависит от количества страниц, объёма дизайна, функций и интеграций. После знакомства с задачами и материалами мы предложим состав работ и смету."
        },
        {
            "question": "Сколько времени занимает разработка?",
            "answer": "Сроки зависят от масштаба сайта, готовности контента и скорости согласований. План этапов и ориентировочный график определяем до старта проекта."
        },
        {
            "question": "Можно ли заказать только дизайн сайта?",
            "answer": "Да. Можем отдельно разработать структуру и дизайн или взять на себя полный цикл до запуска. Формат работы определяем по вашей задаче."
        },
        {
            "question": "Будет ли сайт удобным на телефоне?",
            "answer": "Да. Проектируем адаптивные экраны и проверяем ключевые сценарии для телефона, планшета и компьютера."
        },
        {
            "question": "Сможем ли мы самостоятельно обновлять контент?",
            "answer": "Да, если это нужно команде. Способ редактирования и перечень материалов, которые вы сможете менять самостоятельно, согласуем до разработки."
        },
        {
            "question": "Помогаете ли с текстами и изображениями?",
            "answer": "Да. Можем подготовить структуру сообщений, тексты и визуальные материалы как часть проекта. Состав контентных работ обсуждаем на старте."
        },
        {
            "question": "Поддерживаете ли сайт после запуска?",
            "answer": "При необходимости договариваемся о сопровождении, обновлении страниц и развитии функционала отдельно после запуска."
        }
    ],
    "relatedTitle": "Смежные услуги",
    "related": [
        {
            "title": "Брендинг",
            "slug": "branding"
        },
        {
            "title": "Айдентика",
            "slug": "identity"
        },
        {
            "title": "SMM",
            "slug": "smm"
        }
    ]
};

export const webDevelopmentPage: Record<Locale, ServicePageContent> = { uk, en, ru };

export function getWebDevelopmentProjects(locale: Locale): ProjectItem[] {
  const cases = getCases(locale);
  return webDevelopmentCaseCards[locale].flatMap((card) => {
    const caseItem = cases.find((item) => item.slug === card.slug);
    if (!caseItem) return [];

    return [
      {
        title: caseItem.title,
        description: card.category,
        image: card.image,
        poster: card.poster,
        href: getCaseDetailPath(locale, caseItem.slug),
      },
    ];
  });
}
