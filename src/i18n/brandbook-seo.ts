import type { BrandingSeoContent } from "@/i18n/branding-seo";
import type { Locale } from "@/i18n/config";

const uk: BrandingSeoContent = {
  spoilerLabel: "Детальніше",
  sections: [
    {
      title: "Що входить у брендбук і чим він відрізняється від логобука",
      blocks: [
        {
          kind: "p",
          text:
            "Досить часто поняття «брендбук» і «логобук» плутають. Насправді це два різні документи, які вирішують різні завдання.",
        },
        {
          kind: "term",
          label: "Логобук",
          text:
            "— це вузькоспеціалізована інструкція, присвячена логотипу компанії та правилам його використання. У ньому фіксуються всі версії логотипа, фірмові кольори, мінімальні розміри, захисне поле та приклади правильного застосування.",
        },
        {
          kind: "p",
          text: "Брендбук включає все, що є в логобуку, але цим не обмежується. До нього також входять:",
        },
        {
          kind: "ul",
          items: [
            "система шрифтів і типографіки;",
            "правила використання графічних елементів;",
            "правила оформлення ключових носіїв;",
            "готові шаблони або макети носіїв.",
          ],
        },
        {
          kind: "p",
          text:
            "Тобто брендбук — це повна система правил, яка допомагає компанії зберігати єдиний стиль і впізнаваність у кожній точці контакту з клієнтом.",
        },
      ],
    },
    {
      title: "Навіщо брендбук бізнесу",
      blocks: [
        {
          kind: "p",
          text:
            "Уявіть, що до запуску нового продукту залишилося кілька днів. Сайт майже готовий, реклама налаштована, упаковка в друці. І тут з'ясовується, що на коробці стоїть старий логотип, у рекламних креативах з'явився інший шрифт, а друкарня не потрапила у фірмовий колір. Кожен виконав свою частину роботи, але бренд так і не склався в єдине ціле.",
        },
        {
          kind: "p",
          text:
            "Саме такі проблеми вирішує брендбук. Він стає єдиним джерелом правил для всіх, хто працює з брендом. Команда більше не витрачає час на суперечки щодо кольорів, шрифтів чи оформлення реклами, а підрядники не ставлять десятки уточнювальних запитань перед початком роботи.",
        },
      ],
    },
    {
      title: "Від чого залежить вартість брендбуку",
      blocks: [
        {
          kind: "p",
          text:
            "Кожен бізнес має власні завдання, тому склад брендбуку може суттєво відрізнятися, а разом із цим і вартість його розробки. Саме тому в ZOND вона формується індивідуально. Під час розрахунку ми враховуємо:",
        },
        {
          kind: "ul",
          items: [
            "наскільки глибоко потрібно проаналізувати ринок, конкурентів, цільову аудиторію та позиціювання бренду;",
            "скільки концепцій необхідно підготувати на вибір;",
            "який обсяг айдентики та кількість носіїв потрібно опрацювати;",
            "скільки раундів правок буде передбачено в межах проєкту.",
          ],
        },
        {
          kind: "p",
          text:
            "Додатково ціна брендбуку залежить від того, наскільки терміново його потрібно підготувати та презентувати.",
        },
      ],
    },
    {
      title: "Як користуватися брендбуком всередині компанії",
      blocks: [
        {
          kind: "p",
          text:
            "Брендбук розробляється не для того, щоб один раз переглянути його й покласти в архів. Це робочий інструмент, до якого команда звертається щоразу, коли створює нову точку контакту з клієнтом.",
        },
        {
          kind: "p",
          text:
            "Маркетологи використовують його перед запуском рекламних кампаній, щоб зберігати єдиний стиль креативів. Дизайнери спираються на брендбук під час розробки банерів, презентацій чи поліграфії. SMM-фахівці беруть із документа правила оформлення дописів і сторіз, а друкарні — точні коди кольорів, відступи та векторні версії логотипа.",
        },
        {
          kind: "p",
          text:
            "Щоб брендбук справді працював, його актуальна версія має бути доступною всім працівникам і підрядникам, які працюють із брендом.",
        },
      ],
    },
    {
      title: "З якими послугами поєднують брендбук",
      blocks: [
        {
          kind: "p",
          text:
            "Брендбук не створює бренд із нуля. Він збирає вже ухвалені рішення в єдину систему та пояснює, як правильно ними користуватися. Тому перед початком роботи важливо зрозуміти, чи має бізнес готову основу.",
        },
        {
          kind: "p",
          text:
            "Якщо компанія вже визначила позиціювання та фірмовий стиль, але ще не має впізнаваного знака, створення брендбуку варто поєднати із розробкою логотипа. Спочатку створюється логотип, а вже потім правила його використання фіксуються в брендбуці.",
        },
        {
          kind: "p",
          text:
            "Якщо ж бізнес запускається з нуля, змінює напрям або ще не визначив, чим відрізняється від конкурентів, варто почати з розробки бренду. Брендбук є завершальним етапом цієї роботи — у ньому описуються правила роботи з брендом, що допомагає команді зберігати його цілісність після запуску.",
        },
      ],
    },
  ],
};

const en: BrandingSeoContent = {
  spoilerLabel: "Learn more",
  sections: [
    {
      title: "What a brand book includes and how it differs from a logobook",
      blocks: [
        { kind: "p", text: "Brand book and logobook are often confused. In fact, they are two different documents solving different tasks." },
        { kind: "term", label: "Logobook", text: "is a focused guide dedicated to the company logo and its usage rules — all logo versions, brand colors, minimum sizes, clear space, and correct application examples." },
        { kind: "p", text: "A brand book includes everything in a logobook and more:" },
        { kind: "ul", items: ["typography system;", "graphic element usage rules;", "key media layout rules;", "ready templates or media layouts."] },
        { kind: "p", text: "A brand book is a complete rule system that helps a company maintain consistent style and recognition at every touchpoint." },
      ],
    },
    {
      title: "Why a business needs a brand book",
      blocks: [
        { kind: "p", text: "Imagine a product launch is days away. The site is almost ready, ads are set up, packaging is in print — and then you discover an old logo on the box, a different font in ads, and off-brand colors from the printer. Everyone did their part, but the brand never became one whole." },
        { kind: "p", text: "A brand book solves these problems. It becomes the single source of rules for everyone working with the brand, reducing debates about colors and fonts and cutting down vendor clarification requests." },
      ],
    },
    {
      title: "What affects brand book price",
      blocks: [
        { kind: "p", text: "Every business has different needs, so brand book scope and price vary. At ZOND, pricing is individual. We consider:" },
        { kind: "ul", items: ["depth of market, competitor, audience, and positioning research;", "number of concepts to prepare;", "scope of identity and number of media to cover;", "number of revision rounds in the project."] },
        { kind: "p", text: "Price also depends on how urgently the brand book needs to be prepared and presented." },
      ],
    },
    {
      title: "How to use a brand book inside a company",
      blocks: [
        { kind: "p", text: "A brand book is not meant to be read once and archived. It is a working tool the team uses every time a new customer touchpoint is created." },
        { kind: "p", text: "Marketers use it before campaigns, designers rely on it for banners and print, SMM specialists take post and story rules from it, and printers get exact color codes, spacing, and vector logo versions." },
        { kind: "p", text: "For it to work, the current version must be accessible to all employees and vendors working with the brand." },
      ],
    },
    {
      title: "Services often combined with a brand book",
      blocks: [
        { kind: "p", text: "A brand book does not create a brand from scratch. It organizes approved decisions into a system and explains how to use them correctly." },
        { kind: "p", text: "If positioning and corporate style are defined but there is no recognizable mark yet, combine brand book development with logo design — first the logo, then its usage rules in the brand book." },
        { kind: "p", text: "If the business is starting from scratch or changing direction, begin with brand development. The brand book is the final stage — it documents brand rules and helps the team maintain consistency after launch." },
      ],
    },
  ],
};

const ru: BrandingSeoContent = {
  spoilerLabel: "Подробнее",
  sections: [
    {
      title: "Что входит в брендбук и чем он отличается от логобука",
      blocks: [
        { kind: "p", text: "Понятия «брендбук» и «логобук» часто путают. На самом деле это два разных документа, решающих разные задачи." },
        { kind: "term", label: "Логобук", text: "— узкоспециализированная инструкция, посвящённая логотипу компании и правилам его использования: все версии логотипа, фирменные цвета, минимальные размеры, охранное поле и примеры правильного применения." },
        { kind: "p", text: "Брендбук включает всё, что есть в логобуке, и не ограничивается этим:" },
        { kind: "ul", items: ["система шрифтов и типографики;", "правила использования графических элементов;", "правила оформления ключевых носителей;", "готовые шаблоны или макеты носителей."] },
        { kind: "p", text: "Брендбук — полная система правил, помогающая компании сохранять единый стиль и узнаваемость в каждой точке контакта с клиентом." },
      ],
    },
    {
      title: "Зачем бизнесу брендбук",
      blocks: [
        { kind: "p", text: "Представьте, что до запуска нового продукта осталось несколько дней. Сайт почти готов, реклама настроена, упаковка в печати — и выясняется, что на коробке старый логотип, в креативах другой шрифт, а типография не попала в фирменный цвет." },
        { kind: "p", text: "Именно такие проблемы решает брендбук. Он становится единым источником правил для всех, кто работает с брендом." },
      ],
    },
    {
      title: "От чего зависит стоимость брендбука",
      blocks: [
        { kind: "p", text: "У каждого бизнеса свои задачи, поэтому состав брендбука и стоимость могут существенно отличаться. В ZOND цена формируется индивидуально. При расчёте мы учитываем:" },
        { kind: "ul", items: ["глубину анализа рынка, конкурентов, аудитории и позиционирования;", "количество концепций на выбор;", "объём айдентики и количество носителей;", "количество раундов правок в проекте."] },
        { kind: "p", text: "Дополнительно цена зависит от срочности подготовки и презентации брендбука." },
      ],
    },
    {
      title: "Как пользоваться брендбуком внутри компании",
      blocks: [
        { kind: "p", text: "Брендбук создаётся не для того, чтобы один раз просмотреть и положить в архив. Это рабочий инструмент, к которому команда обращается при создании каждой новой точки контакта с клиентом." },
        { kind: "p", text: "Маркетологи используют его перед кампаниями, дизайнеры — при разработке баннеров и полиграфии, SMM-специалисты — для оформления постов и сторис, типографии — для точных кодов цветов и векторных версий логотипа." },
        { kind: "p", text: "Чтобы брендбук действительно работал, его актуальная версия должна быть доступна всем сотрудникам и подрядчикам." },
      ],
    },
    {
      title: "С какими услугами сочетают брендбук",
      blocks: [
        { kind: "p", text: "Брендбук не создаёт бренд с нуля. Он собирает уже принятые решения в единую систему и объясняет, как правильно ими пользоваться." },
        { kind: "p", text: "Если позиционирование и фирменный стиль определены, но нет узнаваемого знака, разработку брендбука стоит сочетать с разработкой логотипа." },
        { kind: "p", text: "Если бизнес запускается с нуля или меняет направление, начните с разработки бренда. Брендбук — завершающий этап, в котором фиксируются правила работы с брендом." },
      ],
    },
  ],
};

export const brandbookSeo: Record<Locale, BrandingSeoContent> = { uk, en, ru };

export function getBrandbookSeo(locale: Locale): BrandingSeoContent {
  return brandbookSeo[locale];
}
