import type { Locale } from "@/i18n/config";

export type PolicyContent = {
  title: string;
  description: string;
  sections: Array<{ heading: string; body: string }>;
};

const uk: PolicyContent = {
  title: "Політика конфіденційності",
  description:
    "Політика конфіденційності брендингової агенції ZOND: які дані ми збираємо, як їх використовуємо та захищаємо.",
  sections: [
    {
      heading: "1. Збір і використання персональних даних",
      body:
        "Ми можемо збирати ім'я, прізвище, контактні дані (телефон, email), якщо ви надаєте їх через форму зворотного зв'язку, а також інформацію про використання сайту через файли cookie та аналітичні інструменти. Ці дані використовуються для зв'язку з вами, надання послуг, покращення роботи сайту та аналітики.",
    },
    {
      heading: "2. Захист персональних даних",
      body:
        "Ми застосовуємо сучасні заходи безпеки для захисту ваших даних від несанкціонованого доступу, зміни або розголошення.",
    },
    {
      heading: "3. Передача даних третім особам",
      body:
        "Ми не передаємо ваші персональні дані третім особам, за винятком випадків, коли це необхідно для виконання законодавчих вимог або надання послуг (наприклад, хостинг-провайдери, сервіси аналітики).",
    },
    {
      heading: "4. Використання файлів cookie",
      body:
        "Наш сайт використовує файли cookie для аналізу трафіку, покращення зручності користування та персоналізації контенту. Ви можете змінити налаштування cookie у своєму браузері.",
    },
    {
      heading: "5. Ваші права",
      body:
        "Ви маєте право на доступ, зміну або видалення своїх персональних даних. Для реалізації цих прав зверніться до нас на email ask@zond.agency.",
    },
    {
      heading: "6. Зміни в політиці конфіденційності",
      body:
        "Ми залишаємо за собою право змінювати цю Політику конфіденційності. Актуальна версія завжди доступна на цій сторінці.",
    },
  ],
};

const ru: PolicyContent = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности брендингового агентства ZOND: какие данные мы собираем, как их используем и защищаем.",
  sections: [
    {
      heading: "1. Сбор и использование персональных данных",
      body:
        "Мы можем собирать имя, фамилию, контактные данные (телефон, email), если вы предоставляете их через форму обратной связи, а также информацию об использовании сайта через файлы cookie и аналитические инструменты.",
    },
    {
      heading: "2. Защита персональных данных",
      body:
        "Мы применяем современные меры безопасности для защиты ваших данных от несанкционированного доступа, изменения или разглашения.",
    },
    {
      heading: "3. Передача данных третьим лицам",
      body:
        "Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, когда это необходимо для выполнения законодательных требований или предоставления услуг.",
    },
    {
      heading: "4. Использование файлов cookie",
      body:
        "Наш сайт использует файлы cookie для анализа трафика, улучшения удобства использования и персонализации контента.",
    },
    {
      heading: "5. Ваши права",
      body:
        "Вы имеете право на доступ, изменение или удаление своих персональных данных. Для реализации этих прав обратитесь к нам на email ask@zond.agency.",
    },
    {
      heading: "6. Изменения в политике конфиденциальности",
      body:
        "Мы оставляем за собой право изменять эту Политику конфиденциальности. Актуальная версия всегда доступна на этой странице.",
    },
  ],
};

const en: PolicyContent = {
  title: "Privacy policy",
  description:
    "ZOND privacy policy: what data we collect, how we use it, and how we protect it.",
  sections: [
    {
      heading: "1. Personal data collection and use",
      body:
        "We may collect your name, contact details (phone, email) when you submit a contact form, and usage information through cookies and analytics tools.",
    },
    {
      heading: "2. Data protection",
      body:
        "We apply modern security measures to protect your data from unauthorized access, alteration, or disclosure.",
    },
    {
      heading: "3. Third-party sharing",
      body:
        "We do not share your personal data with third parties except when required by law or necessary to provide services (e.g. hosting, analytics).",
    },
    {
      heading: "4. Cookies",
      body:
        "Our website uses cookies to analyze traffic, improve usability, and personalize content. You can change cookie settings in your browser.",
    },
    {
      heading: "5. Your rights",
      body:
        "You have the right to access, update, or delete your personal data. Contact us at ask@zond.agency to exercise these rights.",
    },
    {
      heading: "6. Policy updates",
      body:
        "We may update this privacy policy. The current version is always available on this page.",
    },
  ],
};

export const policyContent: Record<Locale, PolicyContent> = {
  uk,
  en,
  ru,
};
