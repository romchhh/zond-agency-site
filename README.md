# ZOND — Next.js версія

Повна конвертація оригінального статичного сайту на **Next.js 14 (App Router) + React + TypeScript**.
Структура, розмітка, класи та вся CSS-стилістика збережені 1:1 з оригіналу.

## Запуск

```bash
npm install
npm run dev
```

Відкрити http://localhost:3000

## Збірка для продакшену

```bash
npm run build
npm run start
```

## Структура проєкту

```
src/
  app/
    layout.tsx     — кореневий layout, metadata (title/description)
    page.tsx        — головна сторінка, збирає всі секції
    globals.css     — усі стилі оригінального сайту (1:1, без Tailwind/CSS-in-JS)
  components/
    Header.tsx
    Hero.tsx
    History.tsx     — блок "Про нас" + клієнти
    Projects.tsx
    Services.tsx
    TeamAndCta.tsx  — команда + CTA-панель контактів
    Footer.tsx
  data/
    content.ts      — типізовані дані (проєкти, послуги, команда, клієнти, статистика)
public/
  assets/           — сюди потрібно додати зображення (див. нижче)
```

## ⚠️ Зображення

Оригінальний HTML посилався на файли в `assets/` (hero-art.jpg, ahmad.jpg, service-*.jpg,
фото команди тощо), але самі файли зображень не були завантажені разом з HTML —
у вихідному архіві їх не було, тому їх немає і тут.

Покладіть свої зображення у `public/assets/` з такими самими іменами файлів
(вони вже прописані в `src/data/content.ts` і компонентах), і вони одразу підхопляться:

- `hero-art.jpg`
- `ahmad.jpg`, `terminal.jpg`, `verde.jpg`, `luma.jpg`, `kineto.jpg`, `bulk.jpg`
- `service-strategy.jpg`, `service-positioning.jpg`, `service-naming.jpg`, `service-logo.jpg`,
  `service-identity.jpg`, `service-brandbook.jpg`, `service-communication.jpg`,
  `service-character.jpg`, `service-packaging.jpg`, `service-graphic.jpg`,
  `service-web.jpg`, `service-smm.jpg`
- `anna.jpg`, `oleksii.jpg`, `maria.jpg`, `ihor.jpg`, `kateryna.jpg`, `dmytro.jpg`,
  `olena.jpg`, `maksym.jpg`
- `cta-strip.jpg`

## Шрифт NAMU

В оригіналі шрифт підключений через `local("NAMU")` — тобто очікується, що він
вже встановлений у системі користувача, файл шрифту не постачався. Якщо у вас
є файли шрифту NAMU (woff2), покладіть їх у `public/fonts/` і замініть
`@font-face` у `src/app/globals.css` на `src(url(...))`.

## Технології

- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Чистий CSS (без препроцесорів і UI-бібліотек) — щоб максимально точно
  зберегти оригінальні стилі
