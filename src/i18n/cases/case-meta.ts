import type { Locale } from "@/i18n/config";

export type CaseTestimonial = {
  heading?: string;
  paragraphs: string[];
  author: string;
  role: string;
};

type CaseMetaEntry = {
  clientUrl?: string;
  serviceTag: Record<Locale, string>;
  categories: Array<"branding" | "packaging" | "smm" | "strategy" | "web" | "graphic">;
  testimonial: CaseTestimonial;
};

const ukTag = (value: string) => ({
  uk: value,
  ru: value,
  en: value,
});

const CASE_META: Record<string, CaseMetaEntry> = {
  "digital-residence": {
    clientUrl: "https://digitalresidence.az/",
    serviceTag: ukTag(
      "Стратегія бренду · Айдентика · Лого · Брендбук · Персонаж бренду · Графічний дизайн",
    ),
    categories: ["strategy", "branding", "graphic"],
    testimonial: {
      heading: "Погляд команди\nDigital Residence.",
      paragraphs: [
        "Дякуємо команді ZOND за співпрацю над повним брендбуком, графічним дизайном і презентацією Digital residence. Для нас важливо, щоб бренд мав послідовний образ: від базових правил використання айдентики до матеріалів для щоденної комунікації. Саме тому розглядали ці завдання комплексно, а не як окремі дизайнерські роботи.",
        "Цінуємо увагу до нашого бренду та внесок команди в його візуальне представлення.",
      ],
      author: "Русадзе Реваз",
      role: "Head of Marketing",
    },
  },
  altep: {
    clientUrl: "https://altep.ua/",
    serviceTag: ukTag("Лого · Брендбук · Графічний дизайн · Веб-розробка"),
    categories: ["branding", "graphic", "web"],
    testimonial: {
      heading: "Погляд команди\nALTEP.",
      paragraphs: [
        "Дякуємо ZOND за роботу над повним брендбуком, графічним дизайном і презентацією Альтеп. У межах співпраці зосередилися на тому, як представляти компанію клієнтам і партнерам та послідовно використовувати її фірмовий стиль.",
        "Брендбук, презентація й інші матеріали для нас — складові єдиної комунікації. Вдячні команді за увагу до цих завдань і роботу над візуальним образом бренду.",
      ],
      author: "Нікіта",
      role: "менеджер розвитку",
    },
  },
  kavlora: {
    clientUrl: "https://www.kavlora.com/",
    serviceTag: ukTag(
      "Стратегія бренду · Неймінг · Айдентика · Лого · Брендбук · Позиціонування · Графічний дизайн",
    ),
    categories: ["strategy", "branding", "graphic", "web"],
    testimonial: {
      heading: "Погляд команди\nKAVLORA.",
      paragraphs: [
        "Дякуємо команді ZOND за співпрацю над брендингом, сайтом і контентом Kavlora. Для нас цей проєкт — про цілісне представлення бренду: як він виглядає, що говорить і як знайомить аудиторію із собою онлайн.",
        "Тому важливо було працювати не лише з окремими візуальними елементами, а й зі змістом комунікації. Вдячні за внесок у цю роботу та увагу до характеру Kavlora.",
      ],
      author: "Ніколай Сорочук",
      role: "співвласник",
    },
  },
  "kyiv-tourism-department": {
    clientUrl: "https://kyivcity.gov.ua/",
    serviceTag: ukTag("Графічний дизайн"),
    categories: ["graphic"],
    testimonial: {
      heading: "Погляд команди\nКМДА.",
      paragraphs: [
        "Дякуємо команді ZOND за співпрацю над соціальною рекламною кампанією. У таких проєктах важливо не просто привернути увагу, а зрозуміло й коректно донести суспільно важливе повідомлення.",
        "Саме на поєднанні змісту та візуальної комунікації була зосереджена робота. Вдячні команді за участь у проєкті та увагу до відповідального висвітлення соціальної теми.",
      ],
      author: "Калганов Д.",
      role: "",
    },
  },
  "ahmad-tea": {
    clientUrl: "https://ahmadtea.ua/",
    serviceTag: ukTag("Стратегія бренду · Позиціонування"),
    categories: ["strategy"],
    testimonial: {
      heading: "Погляд команди\nAHMAD TEA.",
      paragraphs: [
        "Дякуємо ZOND за співпрацю над маркетинговою стратегією Ahmad tea. Для нас стратегія — це насамперед цілісне бачення того, як бренд взаємодіє зі споживачами та на чому будує свою комунікацію.",
        "У спільній роботі зосередилися на системному підході до просування, а не на окремих рекламних активностях. Вдячні команді за внесок у стратегічне опрацювання цих питань.",
      ],
      author: "Жестоков С.В.",
      role: "директор ПрАТ «САВ ОРБІКО»",
    },
  },
  medeus: {
    clientUrl: "https://medeus.com.ua/",
    serviceTag: ukTag("SMM · Графічний дизайн"),
    categories: ["smm", "graphic"],
    testimonial: {
      heading: "Погляд команди\nMedeus medical center.",
      paragraphs: [
        "Дякуємо команді ZOND за комплексну співпрацю: від маркетингової стратегії та брендингу до SMM і графічного дизайну. Для медичного центру особливо важливо, щоб комунікація була зрозумілою, уважною до людини та послідовною в різних каналах.",
        "Саме тому ми розглядали зміст повідомлень і візуальне оформлення як взаємопов’язані завдання. Вдячні за роботу над представленням Medeus medical center та увагу до специфіки медичної сфери.",
      ],
      author: "Дмитро Крупський",
      role: "директор",
    },
  },
  "akula-mama": {
    clientUrl: "https://akulamama.com.ua/",
    serviceTag: ukTag("Пакування · Брендинг · Лого · Брендбук"),
    categories: ["packaging", "branding"],
    testimonial: {
      heading: "Погляд команди\nАкула Мама.",
      paragraphs: [
        "Дякуємо ZOND за співпрацю над брендингом, пакованням і графічним дизайном «Акула Мама». Для нас важливо, щоб характер бренду відчувався не лише в логотипі, а й у самому продукті — через його паковання та візуальні деталі.",
        "У роботі приділяли увагу тому, як ці елементи поєднуються між собою та представляють бренд покупцеві. Вдячні команді за внесок у його візуальне втілення.",
      ],
      author: "Коротнянський Віталій",
      role: "власник",
    },
  },
  "pridniprovsky-zavod": {
    clientUrl: "https://zgp.ua/",
    serviceTag: ukTag("Лого · Брендинг · Брендбук · Веб-розробка"),
    categories: ["branding", "web"],
    testimonial: {
      heading: "Погляд команди\nПридніпровський Завод гофротари.",
      paragraphs: [
        "Дякуємо команді ZOND за роботу над повним брендбуком, графічним дизайном і сайтом Придніпровського Заводу гофротари. Завдання полягало в тому, щоб послідовно представити підприємство як у цифровому середовищі, так і в інших матеріалах компанії.",
        "Для нас було важливо поєднати правила фірмового стилю з їхнім практичним застосуванням. Вдячні за співпрацю та внесок у візуальну комунікацію підприємства.",
      ],
      author: "Олександр",
      role: "власник",
    },
  },
  "bit-school": {
    clientUrl: "https://bitschool.com.ua/",
    serviceTag: ukTag("Брендбук · Лого · Айдентика · Персонаж бренду"),
    categories: ["branding"],
    testimonial: {
      heading: "Погляд команди\nBIT School.",
      paragraphs: [
        "Дякуємо команді ZOND за розробку брендбука, логотипа, айдентики та персонажа бренду BIT School. Для нас було важливо, щоб бренд говорив зрозумілою мовою з нашою аудиторією, тому персонаж став окремим елементом, який додає комунікації характеру та впізнаваності.",
        "Вдячні за системний підхід до візуального образу школи.",
      ],
      author: "Дмитро",
      role: "власник",
    },
  },
  "novo-development": {
    clientUrl: "https://novodevelopment.id/",
    serviceTag: ukTag("Лого · Брендбук · Айдентика"),
    categories: ["branding"],
    testimonial: {
      heading: "Погляд команди\nNOVO development.",
      paragraphs: [
        "Дякуємо ZOND за роботу над логотипом, брендбуком та айдентикою NOVO development. У сфері нерухомості важливо, щоб бренд одразу викликав довіру та виглядав послідовно на всіх матеріалах.",
        "Команда підійшла до цього комплексно, і ми отримали цілісну систему, якою зручно користуватися.",
      ],
      author: "Денис Артюх",
      role: "",
    },
  },
  goshchanochka: {
    serviceTag: ukTag("Брендинг · Лого · Пакування"),
    categories: ["branding", "packaging"],
    testimonial: {
      heading: "Погляд команди\nГощаночка.",
      paragraphs: [
        "Дякуємо команді ZOND за розробку бренду, логотипа та пакування для «Гощаночки». Для нас було важливо, щоб продукт виділявся на полиці та відповідав характеру виробника.",
        "У роботі приділили увагу тому, як бренд виглядає саме в пакованні — це головний контакт покупця з продуктом. Вдячні за увагу до цих деталей.",
      ],
      author: "Ольга",
      role: "директорка",
    },
  },
  yakomoga: {
    clientUrl: "https://www.instagram.com/yakomoga.sushi/",
    serviceTag: ukTag("Позиціонування · Лого · Брендбук · Персонаж бренду · SMM"),
    categories: ["strategy", "branding", "smm"],
    testimonial: {
      heading: "Погляд команди\nЯкомога.",
      paragraphs: [
        "Дякуємо ZOND за комплексну розробку бренду: позиціонування, логотип, брендбук, персонаж та SMM. Для сервісу доставки важливо мати не лише впізнаваний візуальний образ, а й чіткий голос у соціальних мережах.",
        "Персонаж бренду допоміг зробити комунікацію живішою та впізнаванішою. Вдячні команді за послідовний підхід до всіх цих складових.",
      ],
      author: "Олександр",
      role: "власник",
    },
  },
};

export function getCaseClientUrl(slug: string): string | undefined {
  return CASE_META[slug]?.clientUrl;
}

export function getCaseServiceTag(slug: string, locale: Locale): string | undefined {
  return CASE_META[slug]?.serviceTag[locale];
}

export function getCaseMetaCategories(slug: string) {
  return CASE_META[slug]?.categories;
}

export function getCaseTestimonial(slug: string): CaseTestimonial | undefined {
  return CASE_META[slug]?.testimonial;
}
