import type { Locale } from "@/i18n/config";
import type { ServiceSlug } from "@/i18n/services";

export type ServiceIndexItem = {
  slug: ServiceSlug;
  title: string;
  description: string;
  image: string;
};

export type ServicesIndexContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  items: ServiceIndexItem[];
};

const uk: ServicesIndexContent = {
  eyebrow: "Головна / Послуги",
  title: "Наші послуги",
  subtitle: "Послуги дизайн-студії ZOND",
  cta: "До послуги",
  items: [
    {
      slug: "illustration",
      title: "Ілюстрація",
      description:
        "Як зробити дизайн свого бренду унікальним і ще більш професійним? Пропонуємо вам сучасне рішення: ілюстрація. Це дає змогу передати історію вашого бренду, а також побудувати емоційний зв'язок із користувачами.",
      image: "/services/character.jpg",
    },
    {
      slug: "branding",
      title: "Розробка бренду",
      description:
        "Перетворіть свій бренд на потужний актив за допомогою наших комплексних послуг зі стратегії бренду. Наша команда експертів проаналізує ваш ринок, конкуренцію та інформацію про споживачів, щоб розробити унікальну та ефективну стратегію бренду.",
      image: "/services/strategy.jpg",
    },
    {
      slug: "logo",
      title: "Розробка логотипу",
      description:
        "Отримайте не просто логотип або графічний елемент, а потужний інструмент для підвищення впізнаваності вашого бренду і залучення уваги вашої аудиторії.",
      image: "/services/logo.jpg",
    },
    {
      slug: "rebranding",
      title: "Ребрендинг",
      description:
        "У динамічному бізнесі недостатньо один раз створити бренд. З часом візуальна мова застаріває, а компанія переростає свій старий образ. Ребрендинг освіжить сприйняття компанії, збереже лояльну аудиторію та залучить нових клієнтів.",
      image: "/services/positioning.jpg",
    },
    {
      slug: "smm",
      title: "SMM",
      description:
        "Соцмережі є лідером серед каналів комунікації з платоспроможною аудиторією. Тому для сучасного виробника так важливо бути ефективно присутнім у цифровому просторі.",
      image: "/services/smm.jpg",
    },
    {
      slug: "identity",
      title: "Айдентика",
      description:
        "В умовах високої конкуренції важливо одразу заявити про себе. Розробка фірмового стилю та айдентики формує впізнаваний образ компанії, транслює її цінності та викликає довіру клієнтів з першого погляду.",
      image: "/services/identity.jpg",
    },
    {
      slug: "marketing-360",
      title: "Marketing 360",
      description:
        "Перетворіть свій бренд на потужний актив за допомогою наших комплексних послуг з маркетингу. Наша команда експертів проаналізує ваш ринок, конкуренцію та інформацію про споживачів, щоб розробити унікальну та ефективну стратегію бренду.",
      image: "/services/communication.jpg",
    },
    {
      slug: "brandbook",
      title: "Розробка брендбуку",
      description:
        "Ми допоможемо вам створити чіткий та послідовний образ вашого бренду за допомогою брендбуку — посібника з комунікаційного стилю, правил з дизайну лого та багато іншого.",
      image: "/services/brandbook.jpg",
    },
    {
      slug: "packaging",
      title: "Пакування",
      description:
        "У висококонкурентному середовищі недостатньо мати лише якісний продукт. Одним із ключових елементів є упаковка. Впізнаваний дизайн приверне увагу та спонукатиме до покупки.",
      image: "/services/packaging.jpg",
    },
    {
      slug: "influence-marketing",
      title: "Інфлюенс маркетинг",
      description:
        "Якщо вас цікавить реклама у блогерів — ціна в Україні може приємно здивувати. Наше агентство допоможе підібрати оптимальний варіант під ваш бюджет та цілі.",
      image: "/services/web.jpg",
    },
    {
      slug: "graphics",
      title: "Графіка",
      description:
        "Графічний дизайн визначає візуальне сприйняття товару. Головне завдання — виділити свій бренд серед інших, привернути увагу споживача.",
      image: "/services/graphic.jpg",
    },
  ],
};

const en: ServicesIndexContent = {
  eyebrow: "Home / Services",
  title: "Our services",
  subtitle: "ZOND design studio services",
  cta: "View service",
  items: [
    {
      slug: "illustration",
      title: "Illustration",
      description:
        "How do you make your brand design more unique and professional? Illustration helps tell your brand story and build an emotional connection with users.",
      image: "/services/character.jpg",
    },
    {
      slug: "branding",
      title: "Brand development",
      description:
        "Turn your brand into a powerful asset with our comprehensive brand strategy services. Our team analyzes your market, competition, and audience to build a unique and effective brand strategy.",
      image: "/services/strategy.jpg",
    },
    {
      slug: "logo",
      title: "Logo design",
      description:
        "Get more than a logo or graphic element — a powerful tool to increase brand recognition and capture your audience's attention.",
      image: "/services/logo.jpg",
    },
    {
      slug: "rebranding",
      title: "Rebranding",
      description:
        "In a dynamic business, creating a brand once is not enough. Over time, visual language ages and companies outgrow their old image. Rebranding refreshes perception and attracts new clients.",
      image: "/services/positioning.jpg",
    },
    {
      slug: "smm",
      title: "SMM",
      description:
        "Social media leads communication channels with a paying audience. For modern businesses, effective digital presence is essential.",
      image: "/services/smm.jpg",
    },
    {
      slug: "identity",
      title: "Brand identity",
      description:
        "In a highly competitive environment, it is important to make a strong first impression. Corporate style and identity form a recognizable image and build trust from the first glance.",
      image: "/services/identity.jpg",
    },
    {
      slug: "marketing-360",
      title: "Marketing 360",
      description:
        "Turn your brand into a powerful asset with our comprehensive marketing services. Our team analyzes your market, competition, and audience to build an effective strategy.",
      image: "/services/communication.jpg",
    },
    {
      slug: "brandbook",
      title: "Brand book",
      description:
        "We help you create a clear and consistent brand image with a brand book — a guide to communication style, logo design rules, and more.",
      image: "/services/brandbook.jpg",
    },
    {
      slug: "packaging",
      title: "Packaging",
      description:
        "In a competitive environment, a quality product alone is not enough. Packaging is a key element — recognizable design attracts attention and drives purchase.",
      image: "/services/packaging.jpg",
    },
    {
      slug: "influence-marketing",
      title: "Influence marketing",
      description:
        "Interested in influencer advertising? Our agency helps you find the optimal option for your budget and goals.",
      image: "/services/web.jpg",
    },
    {
      slug: "graphics",
      title: "Graphic design",
      description:
        "Graphic design shapes how a product is perceived visually. The main goal is to stand out among competitors and capture consumer attention.",
      image: "/services/graphic.jpg",
    },
  ],
};

const ru: ServicesIndexContent = {
  eyebrow: "Главная / Услуги",
  title: "Наши услуги",
  subtitle: "Услуги дизайн-студии ZOND",
  cta: "К услуге",
  items: [
    {
      slug: "illustration",
      title: "Иллюстрация",
      description:
        "Как сделать дизайн вашего бренда более уникальным и профессиональным? Иллюстрация помогает передать историю бренда и построить эмоциональную связь с пользователями.",
      image: "/services/character.jpg",
    },
    {
      slug: "branding",
      title: "Разработка бренда",
      description:
        "Превратите свой бренд в мощный актив с помощью наших комплексных услуг по стратегии бренда. Наша команда проанализирует рынок, конкуренцию и аудиторию, чтобы разработать уникальную и эффективную стратегию.",
      image: "/services/strategy.jpg",
    },
    {
      slug: "logo",
      title: "Разработка логотипа",
      description:
        "Получите не просто логотип или графический элемент, а мощный инструмент для повышения узнаваемости бренда и привлечения внимания аудитории.",
      image: "/services/logo.jpg",
    },
    {
      slug: "rebranding",
      title: "Ребрендинг",
      description:
        "В динамичном бизнесе недостаточно один раз создать бренд. Со временем визуальный язык устаревает, и компания перерастает старый образ. Ребрендинг освежит восприятие и привлечёт новых клиентов.",
      image: "/services/positioning.jpg",
    },
    {
      slug: "smm",
      title: "SMM",
      description:
        "Соцсети — лидер среди каналов коммуникации с платёжеспособной аудиторией. Для современного бизнеса важно эффективно присутствовать в цифровом пространстве.",
      image: "/services/smm.jpg",
    },
    {
      slug: "identity",
      title: "Айдентика",
      description:
        "В условиях высокой конкуренции важно сразу заявить о себе. Разработка фирменного стиля и айдентики формирует узнаваемый образ компании и вызывает доверие с первого взгляда.",
      image: "/services/identity.jpg",
    },
    {
      slug: "marketing-360",
      title: "Marketing 360",
      description:
        "Превратите свой бренд в мощный актив с помощью наших комплексных маркетинговых услуг. Наша команда проанализирует рынок, конкуренцию и аудиторию для эффективной стратегии.",
      image: "/services/communication.jpg",
    },
    {
      slug: "brandbook",
      title: "Разработка брендбука",
      description:
        "Мы поможем создать чёткий и последовательный образ бренда с помощью брендбука — руководства по стилю коммуникации, правилам дизайна логотипа и многому другому.",
      image: "/services/brandbook.jpg",
    },
    {
      slug: "packaging",
      title: "Упаковка",
      description:
        "В высококонкурентной среде недостаточно иметь только качественный продукт. Упаковка — ключевой элемент: узнаваемый дизайн привлечёт внимание и побудит к покупке.",
      image: "/services/packaging.jpg",
    },
    {
      slug: "influence-marketing",
      title: "Инфлюенс маркетинг",
      description:
        "Если вас интересует реклама у блогеров — наше агентство поможет подобрать оптимальный вариант под ваш бюджет и цели.",
      image: "/services/web.jpg",
    },
    {
      slug: "graphics",
      title: "Графика",
      description:
        "Графический дизайн определяет визуальное восприятие товара. Главная задача — выделить свой бренд среди других и привлечь внимание потребителя.",
      image: "/services/graphic.jpg",
    },
  ],
};

export const servicesIndex: Record<Locale, ServicesIndexContent> = { uk, en, ru };

export function getServicesIndex(locale: Locale): ServicesIndexContent {
  return servicesIndex[locale];
}
