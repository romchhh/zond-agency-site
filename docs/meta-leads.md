# Meta Lead Ads → Telegram (ZOND)

Передає заявки з лід-форми Facebook/Instagram у той самий Telegram-чат, що й заявки з сайту. Окремий бот не використовується. `/api/consultation` і формат повідомлень із сайту не змінюються за змістом.

## Обробник

| | |
|---|---|
| URL | `https://zond.agency/api/meta/leads` |
| GET | Підтвердження webhook (`hub.mode`, `hub.verify_token`, `hub.challenge`) |
| POST | Події `leadgen` з підписом `X-Hub-Signature-256` |
| Код | `src/app/api/meta/leads/route.ts`, `src/lib/meta-leads/*` |

Сайт-заявки: `POST /api/consultation` (без змін формату тексту).

## Дозволені джерела

- Сторінка: `101669778370346` (Zond Agency)
- Рекламний акаунт (довідково): `349069052926191`
- Форма: значення `META_LEAD_FORM_ID` після публікації чернетки `ZOND | Послуги | UA | 20.10.2026`
- Тестові форми: `META_LEAD_TEST_FORM_IDS` (через кому)

Інші `page_id` / `form_id` ігноруються.

## Змінні середовища

Див. `.env.example`. Секрети лише на сервері: `META_PAGE_ACCESS_TOKEN`, `META_APP_SECRET`, `META_WEBHOOK_VERIFY_TOKEN`, `TELEGRAM_*`.

Мінімальні права Meta (погодити з власником): доступ до Page Leadgen / leads, webhook `leadgen` на сторінці. Версія Graph за замовчуванням `v22.0` (`META_GRAPH_API_VERSION`).

## Потік

1. Meta надсилає webhook з `leadgen_id`.
2. Сервер перевіряє підпис HMAC-SHA256.
3. Фільтр сторінки та форми.
4. Дедуплікація за `leadgen_id` у `data/meta-leads/` (або `META_LEADS_STORE_DIR`).
5. Graph API: повний лід (`field_data`, `platform`, `is_organic`, …).
6. `sendTelegramMessage` — той самий бот і `chat_id` / `message_thread_id`.

Майданчик береться лише з `platform` ліда (`Facebook` / `Instagram` / `не визначено`). «Запит» = вибрана послуга з `field_data`.

## Формат Telegram

```
Нова заявка ZOND · META · ЛІД-ФОРМА
Дата: …
Запит: …
Майданчик: …
Ім'я: …
Телефон: …
Кампанія: …
Оголошення: …
ID ліда: …
```

Тестові: бейдж `ТЕСТ · НЕ ВРАХОВУВАТИ`. Органічні: `ОРГАНІЧНА`. Кваліфікація не виставляється.

## Надійність

- Статуси запису: `processing` → `sent` | `failed` | `ambiguous` | `ignored`
- Повторні спроби при тимчасових збоях Graph/Telegram; після тайм-ауту — `ambiguous`, без сліпих повторів
- Зберігається `telegramMessageId`
- Службове повідомлення в чат при втраті доступу або остаточній помилці
- Логи: `leadgen_id`, час, статус, помилки — без ПІБ/телефонів/повного вмісту

## Підключення в Meta

1. Опублікувати форму; записати фактичний `form_id` у `META_LEAD_FORM_ID`.
2. У Meta App → Webhooks: Callback URL = `https://zond.agency/api/meta/leads`, Verify Token = значення з сервера.
3. Підписати поле `leadgen` для сторінки Zond Agency.
4. Переконатися, що Page Access Token має доступ до лідів і збережений лише в env.

`Telegram setWebhook` не чіпати — для вихідних `sendMessage` не потрібен.

## Тест-план (після деплою)

1. Тестова заявка з Lead Ads Testing Tool — у чаті бейдж ТЕСТ і всі поля.
2. Три варіанти послуги: брендинг / графічний дизайн / оформлення бізнесу.
3. Перевірити `platform` (або «не визначено», якщо Meta не віддала).
4. Повтор тієї ж події — дубль не з’являється.
5. Невірний `X-Hub-Signature-256` → 401.
6. Заявка з сайту (`/api/consultation`) приходить як раніше.

## Відкат

1. У Meta App відписати webhook `leadgen` або вимкнути Callback URL.
2. За бажанням прибрати `META_*` зі середовища й перезапустити застосунок.
3. Код сайту-заявок залишається робочим незалежно від Meta-модуля.

Рекламу в межах цього завдання не запускати. Секрети в звіти не включати.
