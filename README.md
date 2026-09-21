# ZOND — Next.js

Сайт брендингової агенції ZOND на **Next.js (App Router) + React + TypeScript**.

## Запуск

```bash
npm install
npm run dev
```

Відкрити http://localhost:3001

## Збірка

```bash
npm run build
npm run start
```

## Структура

```
src/
  app/              — маршрути (головна, послуги, проєкти, блог)
  components/       — UI-компоненти
  i18n/             — переклади, кейси, блог (uk / ru / en)
  lib/              — утиліти (медіа, metadata, парсинг контенту)
public/
  assets/cases/     — медіа кейсів
  assets/blog/      — медіа блогу
  assets/team/      — фото команди
  branding/         — медіа сторінки брендингу
  services/         — зображення послуг
  fonts/            — шрифт NAMU
scripts/
  optimize-media.sh — оптимізація зображень у public/
```

## Медіа

Контент кейсів і блогу зберігається в `src/i18n/cases/` та `src/i18n/blog/`.
Медіафайли — у `public/assets/cases/` та `public/assets/blog/`.
