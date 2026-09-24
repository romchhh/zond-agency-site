import type { Locale } from "@/i18n/config";

export type BrandingSeoBlock =
  | { kind: "p"; text: string }
  | { kind: "term"; label: string; text: string }
  | { kind: "ul"; items: string[] };

export type BrandingSeoSection = {
  title: string;
  blocks: BrandingSeoBlock[];
};

export type BrandingSeoContent = {
  spoilerLabel: string;
  /** Prototype: e.g. "08 / ДЕТАЛЬНІШЕ" */
  editorialEyebrow?: string;
  /** Prototype editorial section heading */
  editorialTitle?: string;
  sections: BrandingSeoSection[];
};

const uk: BrandingSeoContent = {
  spoilerLabel: "Детальніше",
  sections: [
    {
      title: "Що таке бренд і з чого він складається",
      blocks: [
        {
          kind: "p",
          text:
            "Бренд — це не те, що компанія говорить про себе. Бренд — це те, що люди думають і відчувають, коли бачать її назву, логотип або продукт. Саме він формує перше враження, впливає на рівень довіри і часто стає вирішальним аргументом під час вибору між двома однаковими за якістю продуктами чи послугами.",
        },
        { kind: "p", text: "Сильний бренд складається з кількох взаємопов’язаних елементів:" },
        {
          kind: "term",
          label: "Позиціонування.",
          text: "Визначає, яке місце компанія займає на ринку і чим відрізняється від конкурентів.",
        },
        {
          kind: "term",
          label: "Айдентика.",
          text: "Відповідає за візуальну впізнаваність бренду — логотип, кольори, шрифти, графіку та інші фірмові елементи.",
        },
        {
          kind: "term",
          label: "Фірмовий стиль.",
          text: "Поєднує позиціонування й айдентику в єдину систему, щоб бренд однаково добре виглядав у рекламі, на сайті, упаковці чи в соцмережах.",
        },
        {
          kind: "term",
          label: "Tone of Voice.",
          text: "Формує характер і стиль спілкування бренду з аудиторією в соцмережах, рекламі, на сайті, у розсилках та інших каналах комунікації.",
        },
        {
          kind: "p",
          text:
            "Лише коли всі ці складові працюють узгоджено, бренд стає цілісним, впізнаваним і послідовним. Саме тоді він перестає бути просто красивою оболонкою і перетворюється на повноцінний бізнес-інструмент, який допомагає формувати довіру, посилювати цінність компанії та підтримувати її зростання.",
        },
      ],
    },
    {
      title: "Чим розробка бренду відрізняється від логотипу та брендбуку",
      blocks: [
        {
          kind: "p",
          text:
            "Логотип, брендбук і розробка бренду — це три різні речі, які дуже часто плутають між собою. Розробка бренду — комплексний процес створення унікального образу компанії, товару чи послуги. Він поєднує маркетинг, дизайн і психологію, щоб сформувати впізнаване «обличчя», виділитися серед конкурентів і закріпити позитивні асоціації в свідомості споживачів.",
        },
        {
          kind: "p",
          text:
            "Логотип — лише один із візуальних елементів бренду, його головний знак. Брендбук — документ, у якому зібрані всі правила використання бренду: логотипа, кольорів, шрифтів, графіки та інших елементів.",
        },
        {
          kind: "p",
          text:
            "Тому якщо вам потрібно створити бренд з нуля або переосмислити наявний, варто замовляти саме розробку бренду. Якщо бренд уже сформований, але потрібно лише оновити логотип або систематизувати правила його використання, варто звернути увагу на послугу розробки логотипу або брендбук.",
        },
      ],
    },
    {
      title: "Від чого залежить вартість розробки бренду",
      blocks: [
        {
          kind: "p",
          text:
            "Не існує двох однакових брендів, тому й фіксованої вартості на їх розробку бути не може. Вона формується індивідуально і залежить від обсягу та складності задач. Передусім на ціну розробки бренду впливає:",
        },
        {
          kind: "ul",
          items: [
            "Масштаб бізнесу — розробка для локального стартапу або для національного чи міжнародного бренду.",
            "Глибина аналітики — обсяг досліджень ринку, конкурентного середовища та цільової аудиторії.",
            "Кількість концепцій — число варіантів позиціонування, айдентики чи логотипу, які потрібно розробити й презентувати.",
            "Кількість носіїв — скільки макетів потрібно адаптувати для сайту, соцмереж, упаковки, презентацій та інших точок контакту аудиторії з брендом.",
            "Раунди погодження — кількість етапів внесення правок і доопрацювання концепції в межах проєкту.",
          ],
        },
        {
          kind: "p",
          text:
            "Саме тому в брендинговому агентстві ZOND кожен проєкт розраховується індивідуально. Завдяки цьому ви платите лише за ті інструменти, які справді потрібні вашому бізнесу.",
        },
      ],
    },
    {
      title: "Кому і коли потрібен ребрендинг",
      blocks: [
        {
          kind: "p",
          text:
            "Ребрендинг підприємства чи компанії потрібен не тоді, коли вам набрид логотип. Він потрібен тоді, коли бренд починає стримувати розвиток бізнесу замість того, щоб допомагати йому. Компанія могла вирости, змінити продукт, вийти на міжнародний ринок, однак її образ досі говорить мовою минулого.",
        },
        { kind: "p", text: "Крім цього, про ребрендинг варто задуматися, якщо:" },
        {
          kind: "ul",
          items: [
            "компанія виходить у новий сегмент або на новий ринок;",
            "відбулося злиття, реорганізація чи зміна структури компанії;",
            "у бізнесу змінилися цільова аудиторія, продукт або позиціонування;",
            "компанія хоче перейти в іншу цінову категорію або змінити сприйняття бренду;",
            "айдентика виглядає застарілою на фоні конкурентів;",
            "старі комунікації більше не відображають цінності бізнесу;",
            "бренд важко впізнати або відрізнити від інших.",
          ],
        },
        {
          kind: "p",
          text:
            "Важливо розуміти, що ребрендинг — це не косметичне оновлення логотипу. Це комплексне переосмислення бренду, яке допомагає бізнесу залишатися актуальним, зрозумілим для своєї аудиторії та конкурентоспроможним на ринку.",
        },
      ],
    },
    {
      title: "З якими послугами поєднують розробку бренду",
      blocks: [
        {
          kind: "p",
          text:
            "Повний цикл розробки бренду потрібен не кожному бізнесу. Якщо стратегія, позиціонування й назва у вас уже є, роботу можна почати з розробки логотипу й на його основі побудувати цілісну візуальну систему.",
        },
        {
          kind: "p",
          text:
            "Щоб нова айдентика працювала правильно, варто замовити брендбук, який стане чіткою інструкцією для вашої команди та підрядників. Якщо ж бренд взаємодіє з покупцем через фізичний продукт, доцільно доповнити проєкт розробкою дизайну упаковки.",
        },
        {
          kind: "p",
          text:
            "Такий комплексний підхід допомагає зробити бренд впізнаваним, послідовним і однаково сильним у кожній точці контакту з аудиторією.",
        },
      ],
    },
  ],
};

const ru: BrandingSeoContent = {
  spoilerLabel: "Подробнее",
  sections: [
    {
      title: "Что такое бренд и из чего он состоит",
      blocks: [
        {
          kind: "p",
          text:
            "Бренд — это не то, что компания говорит о себе. Бренд — это то, что люди думают и чувствуют, когда видят ее название, логотип или продукт. Именно он формирует первое впечатление, влияет на уровень доверия и часто становится решающим аргументом при выборе между двумя одинаковыми по качеству продуктами или услугами.",
        },
        { kind: "p", text: "Сильный бренд состоит из нескольких взаимосвязанных элементов:" },
        {
          kind: "term",
          label: "Позиционирование.",
          text: "Определяет, какое место компания занимает на рынке и чем отличается от конкурентов.",
        },
        {
          kind: "term",
          label: "Айдентика.",
          text: "Отвечает за визуальную узнаваемость бренда, то есть это его логотип, цвета, шрифты, графика и другие фирменные элементы.",
        },
        {
          kind: "term",
          label: "Фирменный стиль.",
          text: "Объединяет позиционирование и айдентику в единую систему, чтобы бренд одинаково хорошо выглядел в рекламе, на сайте, упаковке или в социальных сетях.",
        },
        {
          kind: "term",
          label: "Tone of Voice.",
          text: "Формирует характер и стиль общения бренда с аудиторией в соцсетях, рекламе, на сайте, в рассылках и других каналах коммуникации.",
        },
        {
          kind: "p",
          text:
            "Только когда все эти составляющие работают согласованно, бренд становится целостным, узнаваемым и последовательным. Именно тогда он перестает быть просто красивой оболочкой и превращается в полноценный бизнес-инструмент, который помогает формировать доверие, усиливать ценность компании и поддерживать ее рост.",
        },
      ],
    },
    {
      title: "Чем разработка бренда отличается от логотипа и брендбука",
      blocks: [
        {
          kind: "p",
          text:
            "Логотип, брендбук и разработка бренда — это три разные вещи, однако их очень часто путают между собой. Давайте разбираться в этих понятиях. Разработка бренда — это комплексный процесс создания уникального образа компании, товара или услуги. Он объединяет маркетинг, дизайн и психологию, чтобы сформировать узнаваемое «лицо», выделиться среди конкурентов и закрепить положительные ассоциации в сознании потребителей.",
        },
        {
          kind: "p",
          text:
            "Логотип — лишь один из визуальных элементов бренда, его главный знак. Брендбук — документ, в котором собраны все правила использования бренда, то есть логотипа, цветов, шрифтов, графики и других элементов.",
        },
        {
          kind: "p",
          text:
            "Поэтому если вам нужно создать бренд с нуля или переосмыслить существующий, стоит заказывать именно разработку бренда. Если бренд уже сформирован, но необходимо лишь обновить логотип или систематизировать правила его использования, стоит обратить внимание на услугу по разработке логотипа или брендбук.",
        },
      ],
    },
    {
      title: "От чего зависит стоимость разработки бренда",
      blocks: [
        {
          kind: "p",
          text:
            "Не существует двух одинаковых брендов, поэтому и фиксированной стоимости на их разработку быть не может. Она формируется индивидуально и зависит от объема и сложности задач. В основном на цену разработки бренда влияет:",
        },
        {
          kind: "ul",
          items: [
            "Масштаб бизнеса — разработка для локального стартапа или для национального либо международного бренда.",
            "Глубина аналитики — объем исследований рынка, конкурентной среды и целевой аудитории.",
            "Количество концепций — число вариантов позиционирования, айдентики или логотипа, которые нужно разработать и презентовать.",
            "Количество носителей — сколько макетов нужно адаптировать для сайта, социальных сетей, упаковки, презентаций и других точек контакта целевой аудитории с брендом.",
            "Раунды согласования — количество этапов внесения правок и доработки концепции в рамках проекта.",
          ],
        },
        {
          kind: "p",
          text:
            "Именно поэтому в брендинговом агентстве ZOND каждый проект рассчитывается индивидуально. Благодаря этому вы платите только за те инструменты, которые действительно нужны вашему бизнесу.",
        },
      ],
    },
    {
      title: "Кому и когда нужен ребрендинг",
      blocks: [
        {
          kind: "p",
          text:
            "Ребрендинг предприятия или компании нужен не тогда, когда вам надоел логотип. Он нужен тогда, когда бренд начинает сдерживать развитие бизнеса вместо того, чтобы помогать ему. То есть компания могла вырасти, сменить продукт, выйти на международный рынок, однако ее образ до сих пор говорит языком прошлого.",
        },
        { kind: "p", text: "Кроме этого, о ребрендинге стоит задуматься, если:" },
        {
          kind: "ul",
          items: [
            "компания выходит в новый сегмент или на новый рынок;",
            "произошло слияние, реорганизация или смена структуры компании;",
            "у бизнеса изменились целевая аудитория, продукт или позиционирование;",
            "компания хочет перейти в другую ценовую категорию или изменить восприятие бренда;",
            "айдентика выглядит устаревшей на фоне конкурентов;",
            "старые коммуникации больше не отражают ценности бизнеса;",
            "бренд сложно узнать или отличить от других.",
          ],
        },
        {
          kind: "p",
          text:
            "Важно понимать, что ребрендинг — это не косметическое обновление логотипа. Это комплексное переосмысление бренда, которое помогает бизнесу оставаться актуальным, понятным для своей аудитории и конкурентоспособным на рынке.",
        },
      ],
    },
    {
      title: "С какими услугами сочетают разработку бренда",
      blocks: [
        {
          kind: "p",
          text:
            "Полный цикл разработки бренда нужен не каждому бизнесу. Если стратегия, позиционирование и название у вас уже есть, работу можно начать с разработки логотипа и на его основе построить целостную визуальную систему.",
        },
        {
          kind: "p",
          text:
            "Чтобы новая айдентика работала правильно, стоит заказать брендбук, который будет служить четкой инструкцией для вашей команды и подрядчиков. Если же бренд взаимодействует с покупателем через физический продукт, стоит дополнить проект разработкой дизайна упаковки.",
        },
        {
          kind: "p",
          text:
            "Такой комплексный подход помогает сделать бренд узнаваемым, последовательным и одинаково сильным в каждой точке контакта с аудиторией.",
        },
      ],
    },
  ],
};

const en: BrandingSeoContent = {
  spoilerLabel: "Learn more",
  sections: [
    {
      title: "What a brand is and what it consists of",
      blocks: [
        {
          kind: "p",
          text:
            "A brand is not what a company says about itself. A brand is what people think and feel when they see its name, logo, or product. It shapes first impressions, affects trust, and often becomes the deciding factor when choosing between two products or services of equal quality.",
        },
        { kind: "p", text: "A strong brand consists of several interconnected elements:" },
        {
          kind: "term",
          label: "Positioning.",
          text: "Defines the company's place in the market and how it differs from competitors.",
        },
        {
          kind: "term",
          label: "Identity.",
          text: "Responsible for visual recognition — logo, colors, fonts, graphics, and other brand elements.",
        },
        {
          kind: "term",
          label: "Corporate style.",
          text: "Combines positioning and identity into one system so the brand looks consistent in advertising, on the website, packaging, and social media.",
        },
        {
          kind: "term",
          label: "Tone of Voice.",
          text: "Shapes the character and communication style of the brand across social media, advertising, the website, newsletters, and other channels.",
        },
        {
          kind: "p",
          text:
            "Only when all these components work together does a brand become cohesive, recognizable, and consistent. That is when it stops being just a beautiful shell and becomes a full business tool that builds trust, strengthens company value, and supports growth.",
        },
      ],
    },
    {
      title: "How brand development differs from a logo and a brand book",
      blocks: [
        {
          kind: "p",
          text:
            "A logo, brand book, and brand development are three different things, yet they are often confused. Brand development is a comprehensive process of creating a unique image for a company, product, or service. It combines marketing, design, and psychology to form a recognizable face, stand out among competitors, and build positive associations in consumers' minds.",
        },
        {
          kind: "p",
          text:
            "A logo is only one visual element of a brand — its main mark. A brand book is a document that collects all the rules for using the brand: logo, colors, fonts, graphics, and other elements.",
        },
        {
          kind: "p",
          text:
            "So if you need to create a brand from scratch or rethink an existing one, you should order brand development. If the brand is already formed but you only need to update the logo or systematize usage rules, consider logo design or a brand book.",
        },
      ],
    },
    {
      title: "What affects the cost of brand development",
      blocks: [
        {
          kind: "p",
          text:
            "No two brands are the same, so there can be no fixed price for development. It is calculated individually and depends on the scope and complexity of the tasks. The main factors affecting the price are:",
        },
        {
          kind: "ul",
          items: [
            "Business scale — development for a local startup or a national or international brand.",
            "Depth of analytics — the scope of market, competitor, and audience research.",
            "Number of concepts — how many positioning, identity, or logo options need to be developed and presented.",
            "Number of touchpoints — how many layouts need to be adapted for the website, social media, packaging, presentations, and other audience touchpoints.",
            "Approval rounds — how many stages of revisions and concept refinement are included in the project.",
          ],
        },
        {
          kind: "p",
          text:
            "That is why at ZOND branding agency every project is priced individually. You pay only for the tools your business actually needs.",
        },
      ],
    },
    {
      title: "Who needs rebranding and when",
      blocks: [
        {
          kind: "p",
          text:
            "Rebranding is not needed when you are tired of your logo. It is needed when the brand starts holding the business back instead of helping it grow. The company may have grown, changed its product, or entered international markets, yet its image still speaks the language of the past.",
        },
        { kind: "p", text: "You should also consider rebranding if:" },
        {
          kind: "ul",
          items: [
            "the company enters a new segment or market;",
            "there has been a merger, reorganization, or structural change;",
            "the target audience, product, or positioning has changed;",
            "the company wants to move to a different price category or change brand perception;",
            "the identity looks outdated compared to competitors;",
            "old communications no longer reflect business values;",
            "the brand is hard to recognize or distinguish from others.",
          ],
        },
        {
          kind: "p",
          text:
            "It is important to understand that rebranding is not a cosmetic logo update. It is a comprehensive rethink of the brand that helps the business stay relevant, clear to its audience, and competitive in the market.",
        },
      ],
    },
    {
      title: "Services often combined with brand development",
      blocks: [
        {
          kind: "p",
          text:
            "A full brand development cycle is not needed for every business. If you already have strategy, positioning, and a name, work can start with logo design and build a cohesive visual system from there.",
        },
        {
          kind: "p",
          text:
            "For the new identity to work properly, order a brand book that serves as a clear guide for your team and vendors. If the brand reaches customers through a physical product, complement the project with packaging design.",
        },
        {
          kind: "p",
          text:
            "This comprehensive approach helps make the brand recognizable, consistent, and equally strong at every touchpoint with the audience.",
        },
      ],
    },
  ],
};

export const brandingSeo: Record<Locale, BrandingSeoContent> = { uk, en, ru };

export function getBrandingSeo(locale: Locale): BrandingSeoContent {
  return brandingSeo[locale];
}
