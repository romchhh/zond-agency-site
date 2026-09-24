import type { Locale } from "@/i18n/config";

export type ServiceCompareContent = {
  compareTitle: string;
  compareColumns: [string, string, string, string];
  compareRows: Array<{
    criterion: string;
    zond: string;
    freelance: string;
    generator: string;
  }>;
};

const uk: ServiceCompareContent = {
  compareTitle: "Чому ZOND, а не шаблон чи разовий макет?",
  compareColumns: ["Критерій", "ZOND", "Фриланс", "Шаблон"],
  compareRows: [
    {
      criterion: "Підхід",
      zond: "Під задачу й носій",
      freelance: "Окремий макет",
      generator: "Універсальний шаблон",
    },
    {
      criterion: "Техніка друку",
      zond: "Prepress і супровід",
      freelance: "Не завжди",
      generator: "Немає",
    },
    {
      criterion: "Стиль",
      zond: "Єдина система бренду",
      freelance: "Стиль автора",
      generator: "Схожий на інших",
    },
    {
      criterion: "Результат",
      zond: "Готові до друку файли",
      freelance: "Залежить від досвіду",
      generator: "Потрібна доробка",
    },
  ],
};

const en: ServiceCompareContent = {
  compareTitle: "Why ZOND, not a template or one-off layout?",
  compareColumns: ["Criterion", "ZOND", "Freelance", "Template"],
  compareRows: [
    {
      criterion: "Approach",
      zond: "For the task and medium",
      freelance: "Separate layout",
      generator: "Universal template",
    },
    {
      criterion: "Print technique",
      zond: "Prepress and support",
      freelance: "Not always",
      generator: "None",
    },
    {
      criterion: "Style",
      zond: "Unified brand system",
      freelance: "Author's style",
      generator: "Similar to others",
    },
    {
      criterion: "Result",
      zond: "Print-ready files",
      freelance: "Depends on experience",
      generator: "Needs refinement",
    },
  ],
};

const ru: ServiceCompareContent = {
  compareTitle: "Почему ZOND, а не шаблон или разовый макет?",
  compareColumns: ["Критерий", "ZOND", "Фриланс", "Шаблон"],
  compareRows: [
    {
      criterion: "Подход",
      zond: "Под задачу и носитель",
      freelance: "Отдельный макет",
      generator: "Универсальный шаблон",
    },
    {
      criterion: "Техника печати",
      zond: "Prepress и сопровождение",
      freelance: "Не всегда",
      generator: "Нет",
    },
    {
      criterion: "Стиль",
      zond: "Единая система бренда",
      freelance: "Стиль автора",
      generator: "Похож на других",
    },
    {
      criterion: "Результат",
      zond: "Готовые к печати файлы",
      freelance: "Зависит от опыта",
      generator: "Нужна доработка",
    },
  ],
};

export const serviceCompareTable: Record<Locale, ServiceCompareContent> = {
  uk,
  en,
  ru,
};
