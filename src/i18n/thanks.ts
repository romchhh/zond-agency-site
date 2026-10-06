import type { Locale } from "@/i18n/config";

export const thanksCopy: Record<
  Locale,
  { title: string; description: string; button: string; home: string; metaTitle: string }
> = {
  uk: {
    title: "Дякуємо, заявка у нас",
    description:
      "Менеджер зв'яжеться протягом робочого дня, розпитає про задачу і терміни. Не хочете чекати — напишіть у Telegram.",
    button: "Написати в Telegram",
    home: "На головну",
    metaTitle: "Дякуємо, заявка у нас — ZOND",
  },
  ru: {
    title: "Спасибо, заявка у нас",
    description:
      "Менеджер свяжется в течение рабочего дня, спросит о задаче и сроках. Не хотите ждать — напишите в Telegram.",
    button: "Написать в Telegram",
    home: "На главную",
    metaTitle: "Спасибо, заявка у нас — ZOND",
  },
  en: {
    title: "Thank you, we have your request",
    description:
      "A manager will contact you during the business day to ask about the brief and timeline. If you don’t want to wait, message us on Telegram.",
    button: "Message on Telegram",
    home: "Back to homepage",
    metaTitle: "Thank you, we have your request — ZOND",
  },
};
