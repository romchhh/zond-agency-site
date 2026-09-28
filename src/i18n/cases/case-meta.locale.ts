import type { Locale } from "@/i18n/config";
import type { CaseTestimonial } from "./case-meta";

export const ltag = (uk: string, ru: string, en: string): Record<Locale, string> => ({
  uk,
  ru,
  en,
});

export const CASE_SERVICE_TAGS: Record<string, Record<Locale, string>> = {
  "digital-residence": ltag(
    "Стратегія бренду · Айдентика · Лого · Брендбук · Персонаж бренду · Графічний дизайн",
    "Стратегия бренда · Айдентика · Лого · Брендбук · Персонаж бренда · Графический дизайн",
    "Brand strategy · Identity · Logo · Brand book · Brand character · Graphic design",
  ),
  altep: ltag(
    "Лого · Брендбук · Графічний дизайн · Веб-розробка",
    "Лого · Брендбук · Графический дизайн · Веб-разработка",
    "Logo · Brand book · Graphic design · Web development",
  ),
  kavlora: ltag(
    "Стратегія бренду · Неймінг · Айдентика · Лого · Брендбук · Позиціонування · Графічний дизайн",
    "Стратегия бренда · Нейминг · Айдентика · Лого · Брендбук · Позиционирование · Графический дизайн",
    "Brand strategy · Naming · Identity · Logo · Brand book · Positioning · Graphic design",
  ),
  "kyiv-tourism-department": ltag(
    "Графічний дизайн",
    "Графический дизайн",
    "Graphic design",
  ),
  "ahmad-tea": ltag(
    "Стратегія бренду · Позиціонування",
    "Стратегия бренда · Позиционирование",
    "Brand strategy · Positioning",
  ),
  medeus: ltag(
    "SMM · Графічний дизайн",
    "SMM · Графический дизайн",
    "SMM · Graphic design",
  ),
  "akula-mama": ltag(
    "Пакування · Брендинг · Лого · Брендбук",
    "Упаковка · Брендинг · Лого · Брендбук",
    "Packaging · Branding · Logo · Brand book",
  ),
  "pridniprovsky-zavod": ltag(
    "Лого · Брендинг · Брендбук · Веб-розробка",
    "Лого · Брендинг · Брендбук · Веб-разработка",
    "Logo · Branding · Brand book · Web development",
  ),
  "bit-school": ltag(
    "Брендбук · Лого · Айдентика · Персонаж бренду",
    "Брендбук · Лого · Айдентика · Персонаж бренда",
    "Brand book · Logo · Identity · Brand character",
  ),
  "novo-development": ltag(
    "Лого · Брендбук · Айдентика",
    "Лого · Брендбук · Айдентика",
    "Logo · Brand book · Identity",
  ),
  goshchanochka: ltag(
    "Брендинг · Лого · Пакування",
    "Брендинг · Лого · Упаковка",
    "Branding · Logo · Packaging",
  ),
  yakomoga: ltag(
    "Позиціонування · Лого · Брендбук · Персонаж бренду · SMM",
    "Позиционирование · Лого · Брендбук · Персонаж бренда · SMM",
    "Positioning · Logo · Brand book · Brand character · SMM",
  ),
};

type LocalizedTestimonial = Record<Locale, CaseTestimonial>;

export const CASE_TESTIMONIALS: Record<string, LocalizedTestimonial> = {
  "digital-residence": {
    uk: {
      heading: "Погляд команди\nDigital Residence.",
      paragraphs: [
        "Дякуємо команді ZOND за співпрацю над повним брендбуком, графічним дизайном і презентацією Digital residence. Для нас важливо, щоб бренд мав послідовний образ: від базових правил використання айдентики до матеріалів для щоденної комунікації. Саме тому розглядали ці завдання комплексно, а не як окремі дизайнерські роботи.",
        "Цінуємо увагу до нашого бренду та внесок команди в його візуальне представлення.",
      ],
      author: "Русадзе Реваз",
      role: "Head of Marketing",
    },
    ru: {
      heading: "Взгляд команды\nDigital Residence.",
      paragraphs: [
        "Благодарим команду ZOND за сотрудничество над полным брендбуком, графическим дизайном и презентацией Digital Residence. Для нас важно, чтобы у бренда был последовательный образ — от базовых правил использования айдентики до материалов для ежедневной коммуникации. Поэтому мы рассматривали эти задачи комплексно, а не как отдельные дизайнерские работы.",
        "Ценим внимание к нашему бренду и вклад команды в его визуальное представление.",
      ],
      author: "Русадзе Реваз",
      role: "Head of Marketing",
    },
    en: {
      heading: "The Digital Residence\nteam’s perspective.",
      paragraphs: [
        "Thank you to the ZOND team for working with us on the full brand book, graphic design, and presentation for Digital Residence. It was important that the brand look consistent — from core identity rules to everyday communication materials — so we treated these tasks as one system, not separate design deliverables.",
        "We appreciate the team’s attention to our brand and their contribution to how it is represented visually.",
      ],
      author: "Revaz Rusadze",
      role: "Head of Marketing",
    },
  },
  altep: {
    uk: {
      heading: "Погляд команди\nALTEP.",
      paragraphs: [
        "Дякуємо ZOND за роботу над повним брендбуком, графічним дизайном і презентацією Альтеп. У межах співпраці зосередилися на тому, як представляти компанію клієнтам і партнерам та послідовно використовувати її фірмовий стиль.",
        "Брендбук, презентація й інші матеріали для нас — складові єдиної комунікації. Вдячні команді за увагу до цих завдань і роботу над візуальним образом бренду.",
      ],
      author: "Нікіта",
      role: "менеджер розвитку",
    },
    ru: {
      heading: "Взгляд команды\nALTEP.",
      paragraphs: [
        "Благодарим ZOND за работу над полным брендбуком, графическим дизайном и презентацией «Альтеп». В рамках сотрудничества мы сосредоточились на том, как представлять компанию клиентам и партнёрам и последовательно использовать её фирменный стиль.",
        "Брендбук, презентация и другие материалы для нас — части единой коммуникации. Благодарны команде за внимание к этим задачам и работу над визуальным образом бренда.",
      ],
      author: "Никита",
      role: "менеджер развития",
    },
    en: {
      heading: "The ALTEP\nteam’s perspective.",
      paragraphs: [
        "Thank you, ZOND, for the full brand book, graphic design, and presentation for Altep. Throughout the project we focused on how the company presents itself to clients and partners and how to apply its visual identity consistently.",
        "The brand book, presentation, and other materials are parts of one communication system for us. We are grateful for the team’s attention to these tasks and to the brand’s visual expression.",
      ],
      author: "Nikita",
      role: "Business development manager",
    },
  },
  kavlora: {
    uk: {
      heading: "Погляд команди\nKAVLORA.",
      paragraphs: [
        "Дякуємо команді ZOND за співпрацю над брендингом, сайтом і контентом Kavlora. Для нас цей проєкт — про цілісне представлення бренду: як він виглядає, що говорить і як знайомить аудиторію із собою онлайн.",
        "Тому важливо було працювати не лише з окремими візуальними елементами, а й зі змістом комунікації. Вдячні за внесок у цю роботу та увагу до характеру Kavlora.",
      ],
      author: "Ніколай Сорочук",
      role: "співвласник",
    },
    ru: {
      heading: "Взгляд команды\nKAVLORA.",
      paragraphs: [
        "Благодарим команду ZOND за сотрудничество над брендингом, сайтом и контентом Kavlora. Для нас этот проект — о целостном представлении бренда: как он выглядит, что говорит и как знакомит аудиторию с собой онлайн.",
        "Поэтому было важно работать не только с отдельными визуальными элементами, но и со смыслом коммуникации. Благодарны за вклад в эту работу и внимание к характеру Kavlora.",
      ],
      author: "Николай Сорочук",
      role: "совладелец",
    },
    en: {
      heading: "The KAVLORA\nteam’s perspective.",
      paragraphs: [
        "Thank you to the ZOND team for the branding, website, and content work on Kavlora. For us this project was about presenting the brand as a whole — how it looks, what it says, and how it introduces itself online.",
        "That meant working not only on individual visual elements but on the substance of communication. We appreciate the team’s contribution and their attention to Kavlora’s character.",
      ],
      author: "Mykola Sorochuk",
      role: "Co-founder",
    },
  },
  "kyiv-tourism-department": {
    uk: {
      heading: "Погляд команди\nКМДА.",
      paragraphs: [
        "Дякуємо команді ZOND за співпрацю над соціальною рекламною кампанією. У таких проєктах важливо не просто привернути увагу, а зрозуміло й коректно донести суспільно важливе повідомлення.",
        "Саме на поєднанні змісту та візуальної комунікації була зосереджена робота. Вдячні команді за участь у проєкті та увагу до відповідального висвітлення соціальної теми.",
      ],
      author: "Калганов Д.",
      role: "",
    },
    ru: {
      heading: "Взгляд команды\nКГА.",
      paragraphs: [
        "Благодарим команду ZOND за сотрудничество над социальной рекламной кампанией. В таких проектах важно не просто привлечь внимание, а понятно и корректно донести общественно значимое сообщение.",
        "Работа была сосредоточена на сочетании содержания и визуальной коммуникации. Благодарны команде за участие в проекте и внимание к ответственному освещению социальной темы.",
      ],
      author: "Калганов Д.",
      role: "",
    },
    en: {
      heading: "Kyiv City\nAdministration team view.",
      paragraphs: [
        "Thank you to the ZOND team for the social advertising campaign. In projects like this it is not enough to attract attention — the public-interest message must be clear and appropriate.",
        "Our work focused on combining substance and visual communication. We appreciate the team’s participation and their careful approach to a sensitive social topic.",
      ],
      author: "D. Kalganov",
      role: "",
    },
  },
  "ahmad-tea": {
    uk: {
      heading: "Погляд команди\nAHMAD TEA.",
      paragraphs: [
        "Дякуємо ZOND за співпрацю над маркетинговою стратегією Ahmad tea. Для нас стратегія — це насамперед цілісне бачення того, як бренд взаємодіє зі споживачами та на чому будує свою комунікацію.",
        "У спільній роботі зосередилися на системному підході до просування, а не на окремих рекламних активностях. Вдячні команді за внесок у стратегічне опрацювання цих питань.",
      ],
      author: "Жестоков С.В.",
      role: "директор ПрАТ «САВ ОРБІКО»",
    },
    ru: {
      heading: "Взгляд команды\nAHMAD TEA.",
      paragraphs: [
        "Благодарим ZOND за сотрудничество над маркетинговой стратегией Ahmad Tea. Для нас стратегия — это прежде всего целостное видение того, как бренд взаимодействует с потребителями и на чём строит коммуникацию.",
        "В совместной работе мы сосредоточились на системном подходе к продвижению, а не на отдельных рекламных активностях. Благодарны команде за вклад в стратегическую проработку этих вопросов.",
      ],
      author: "Жестоков С.В.",
      role: "директор ПрАТ «САВ ОРБИКО»",
    },
    en: {
      heading: "The AHMAD TEA\nteam’s perspective.",
      paragraphs: [
        "Thank you, ZOND, for the marketing strategy work on Ahmad Tea. For us, strategy is above all a coherent view of how the brand interacts with consumers and what its communication is built on.",
        "Together we focused on a systematic approach to promotion rather than one-off campaigns. We appreciate the team’s contribution to this strategic work.",
      ],
      author: "S.V. Zhestokov",
      role: "Director, SAV ORBIKO LLC",
    },
  },
  medeus: {
    uk: {
      heading: "Погляд команди\nMedeus medical center.",
      paragraphs: [
        "Дякуємо команді ZOND за комплексну співпрацю: від маркетингової стратегії та брендингу до SMM і графічного дизайну. Для медичного центру особливо важливо, щоб комунікація була зрозумілою, уважною до людини та послідовною в різних каналах.",
        "Саме тому ми розглядали зміст повідомлень і візуальне оформлення як взаємопов’язані завдання. Вдячні за роботу над представленням Medeus medical center та увагу до специфіки медичної сфери.",
      ],
      author: "Дмитро Крупський",
      role: "директор",
    },
    ru: {
      heading: "Взгляд команды\nMedeus medical center.",
      paragraphs: [
        "Благодарим команду ZOND за комплексное сотрудничество: от маркетинговой стратегии и брендинга до SMM и графического дизайна. Для медицинского центра особенно важно, чтобы коммуникация была понятной, внимательной к человеку и последовательной в разных каналах.",
        "Поэтому мы рассматривали содержание сообщений и визуальное оформление как взаимосвязанные задачи. Благодарны за работу над представлением Medeus medical center и внимание к специфике медицинской сферы.",
      ],
      author: "Дмитро Крупський",
      role: "директор",
    },
    en: {
      heading: "Medeus Medical Center\nteam perspective.",
      paragraphs: [
        "Thank you to the ZOND team for the full collaboration — from marketing strategy and branding to SMM and graphic design. For a medical centre, communication must be clear, human-centred, and consistent across channels.",
        "We treated message content and visual design as connected tasks. We are grateful for the work on how Medeus is presented and for the team’s understanding of healthcare communication.",
      ],
      author: "Dmytro Krupskyi",
      role: "Director",
    },
  },
  "akula-mama": {
    uk: {
      heading: "Погляд команди\nАкула Мама.",
      paragraphs: [
        "Дякуємо ZOND за співпрацю над брендингом, пакованням і графічним дизайном «Акула Мама». Для нас важливо, щоб характер бренду відчувався не лише в логотипі, а й у самому продукті — через його паковання та візуальні деталі.",
        "У роботі приділяли увагу тому, як ці елементи поєднуються між собою та представляють бренд покупцеві. Вдячні команді за внесок у його візуальне втілення.",
      ],
      author: "Коротнянський Віталій",
      role: "власник",
    },
    ru: {
      heading: "Взгляд команды\n«Акула Мама».",
      paragraphs: [
        "Благодарим ZOND за сотрудничество над брендингом, упаковкой и графическим дизайном «Акула Мама». Для нас важно, чтобы характер бренда чувствовался не только в логотипе, но и в самом продукте — через упаковку и визуальные детали.",
        "В работе мы уделяли внимание тому, как эти элементы сочетаются и представляют бренд покупателю. Благодарны команде за вклад в его визуальное воплощение.",
      ],
      author: "Коротнянський Віталій",
      role: "владелец",
    },
    en: {
      heading: "The Akula Mama\nteam’s perspective.",
      paragraphs: [
        "Thank you, ZOND, for the branding, packaging, and graphic design for Akula Mama. It was important that the brand character show not only in the logo but in the product itself — through packaging and visual details.",
        "We focused on how these elements work together on shelf. We are grateful for the team’s contribution to the brand’s visual expression.",
      ],
      author: "Vitalii Korotnianskyi",
      role: "Owner",
    },
  },
  "pridniprovsky-zavod": {
    uk: {
      heading: "Погляд команди\nПридніпровський Завод гофротари.",
      paragraphs: [
        "Дякуємо команді ZOND за роботу над повним брендбуком, графічним дизайном і сайтом Придніпровського Заводу гофротари. Завдання полягало в тому, щоб послідовно представити підприємство як у цифровому середовищі, так і в інших матеріалах компанії.",
        "Для нас було важливо поєднати правила фірмового стилю з їхнім практичним застосуванням. Вдячні за співпрацю та внесок у візуальну комунікацію підприємства.",
      ],
      author: "Олександр",
      role: "власник",
    },
    ru: {
      heading: "Взгляд команды\nПриднепровский завод гофротары.",
      paragraphs: [
        "Благодарим команду ZOND за работу над полным брендбуком, графическим дизайном и сайтом Приднепровского завода гофротары. Задача заключалась в том, чтобы последовательно представить предприятие как в цифровой среде, так и в других материалах компании.",
        "Для нас было важно соединить правила фирменного стиля с их практическим применением. Благодарны за сотрудничество и вклад в визуальную коммуникацию предприятия.",
      ],
      author: "Олександр",
      role: "владелец",
    },
    en: {
      heading: "Prydniprovsk Corrugated\nPlant team view.",
      paragraphs: [
        "Thank you to the ZOND team for the full brand book, graphic design, and website for Prydniprovsk Corrugated Plant. The goal was to present the company consistently online and across all corporate materials.",
        "It was important to connect identity rules with practical use. We appreciate the collaboration and the contribution to the plant’s visual communication.",
      ],
      author: "Oleksandr",
      role: "Owner",
    },
  },
  "bit-school": {
    uk: {
      heading: "Погляд команди\nBIT School.",
      paragraphs: [
        "Дякуємо команді ZOND за розробку брендбука, логотипа, айдентики та персонажа бренду BIT School. Для нас було важливо, щоб бренд говорив зрозумілою мовою з нашою аудиторією, тому персонаж став окремим елементом, який додає комунікації характеру та впізнаваності.",
        "Вдячні за системний підхід до візуального образу школи.",
      ],
      author: "Дмитро",
      role: "власник",
    },
    ru: {
      heading: "Взгляд команды\nBIT School.",
      paragraphs: [
        "Благодарим команду ZOND за разработку брендбука, логотипа, айдентики и персонажа бренда BIT School. Для нас было важно, чтобы бренд говорил понятным языком с нашей аудиторией, поэтому персонаж стал отдельным элементом, добавляющим коммуникации характер и узнаваемость.",
        "Благодарны за системный подход к визуальному образу школы.",
      ],
      author: "Дмитро",
      role: "владелец",
    },
    en: {
      heading: "The BIT School\nteam’s perspective.",
      paragraphs: [
        "Thank you to the ZOND team for the brand book, logo, identity, and brand character for BIT School. We needed a brand that speaks clearly to kids and parents; the character became a distinct layer that adds personality and recognition.",
        "We appreciate the systematic approach to the school’s visual identity.",
      ],
      author: "Dmytro",
      role: "Owner",
    },
  },
  "novo-development": {
    uk: {
      heading: "Погляд команди\nNOVO development.",
      paragraphs: [
        "Дякуємо ZOND за роботу над логотипом, брендбуком та айдентикою NOVO development. У сфері нерухомості важливо, щоб бренд одразу викликав довіру та виглядав послідовно на всіх матеріалах.",
        "Команда підійшла до цього комплексно, і ми отримали цілісну систему, якою зручно користуватися.",
      ],
      author: "Денис Артюх",
      role: "",
    },
    ru: {
      heading: "Взгляд команды\nNOVO development.",
      paragraphs: [
        "Благодарим ZOND за работу над логотипом, брендбуком и айдентикой NOVO development. В сфере недвижимости важно, чтобы бренд сразу вызывал доверие и выглядел последовательно на всех материалах.",
        "Команда подошла к этому комплексно, и мы получили целостную систему, которой удобно пользоваться.",
      ],
      author: "Денис Артюх",
      role: "",
    },
    en: {
      heading: "The NOVO development\nteam’s perspective.",
      paragraphs: [
        "Thank you, ZOND, for the logo, brand book, and identity for NOVO development. In real estate it is essential that a brand inspire trust and look consistent across materials.",
        "The team approached this holistically, and we received a coherent system that is practical to use.",
      ],
      author: "Denys Artiukh",
      role: "",
    },
  },
  goshchanochka: {
    uk: {
      heading: "Погляд команди\nГощаночка.",
      paragraphs: [
        "Дякуємо команді ZOND за розробку бренду, логотипа та пакування для «Гощаночки». Для нас було важливо, щоб продукт виділявся на полиці та відповідав характеру виробника.",
        "У роботі приділили увагу тому, як бренд виглядає саме в пакованні — це головний контакт покупця з продуктом. Вдячні за увагу до цих деталей.",
      ],
      author: "Ольга",
      role: "директорка",
    },
    ru: {
      heading: "Взгляд команды\n«Гощаночка».",
      paragraphs: [
        "Благодарим команду ZOND за разработку бренда, логотипа и упаковки для «Гощаночки». Для нас было важно, чтобы продукт выделялся на полке и соответствовал характеру производителя.",
        "В работе мы уделили внимание тому, как бренд выглядит именно в упаковке — это главный контакт покупателя с продуктом. Благодарны за внимание к этим деталям.",
      ],
      author: "Ольга",
      role: "директор",
    },
    en: {
      heading: "The Hoshchanochka\nteam’s perspective.",
      paragraphs: [
        "Thank you to the ZOND team for the brand, logo, and packaging for Hoshchanochka. We needed the product to stand out on shelf and reflect the producer’s character.",
        "Packaging is the buyer’s main contact with the product, so we focused on how the brand shows there. We appreciate the attention to these details.",
      ],
      author: "Olha",
      role: "Director",
    },
  },
  yakomoga: {
    uk: {
      heading: "Погляд команди\nЯкомога.",
      paragraphs: [
        "Дякуємо ZOND за комплексну розробку бренду: позиціонування, логотип, брендбук, персонаж та SMM. Для сервісу доставки важливо мати не лише впізнаваний візуальний образ, а й чіткий голос у соціальних мережах.",
        "Персонаж бренду допоміг зробити комунікацію живішою та впізнаванішою. Вдячні команді за послідовний підхід до всіх цих складових.",
      ],
      author: "Олександр",
      role: "власник",
    },
    ru: {
      heading: "Взгляд команды\nЯкомога.",
      paragraphs: [
        "Благодарим ZOND за комплексную разработку бренда: позиционирование, логотип, брендбук, персонаж и SMM. Для сервиса доставки важно иметь не только узнаваемый визуальный образ, но и чёткий голос в социальных сетях.",
        "Персонаж бренда помог сделать коммуникацию живее и узнаваемее. Благодарны команде за последовательный подход ко всем этим составляющим.",
      ],
      author: "Олександр",
      role: "владелец",
    },
    en: {
      heading: "The Yakomoga\nteam’s perspective.",
      paragraphs: [
        "Thank you, ZOND, for the full brand build: positioning, logo, brand book, character, and SMM. For a delivery service you need both a recognisable visual identity and a clear voice on social media.",
        "The brand character made communication livelier and more distinctive. We appreciate the consistent approach across all these layers.",
      ],
      author: "Oleksandr",
      role: "Owner",
    },
  },
};
