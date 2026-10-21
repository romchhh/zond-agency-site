export const LEAD_INTEREST_OPTIONS = [
  "Розробка бренду (лого, брендбук)",
  "Ребрендинг (освіжити існуючий продукт)",
  "Дизайн пакування (коробка, етикетка)",
  "Графічний дизайн, поліграфія, презентація",
  "Консультація з маркетингу",
] as const;

export type LeadInterestOption = (typeof LEAD_INTEREST_OPTIONS)[number];
