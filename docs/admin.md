# ZOND Admin

URL: `https://zond.agency/admin` (also local `http://localhost:3001/admin`).

## Setup

1. Set env (see `.env.example`):

```bash
ADMIN_USERNAME=admin
ADMIN_SESSION_SECRET='paste-a-long-random-secret'
npm run admin:hash-password -- 'your-strong-password'
# → put result into ADMIN_PASSWORD_HASH=
```

For local smoke tests you may set `ADMIN_PASSWORD=` instead of the hash.

2. Restart Node after changing env.

3. Seed CMS JSON once (or from Admin → Контент → «Засіяти з коду»):

```bash
npm run cms:seed
```

Ensure `data/` and `public/uploads/cms/` are writable on the VPS and survive deploys (do not wipe them on each release).

## Sections

- **Статистика** — first-party pageviews + leads (site + Meta), sources, top paths
- **Заявки** — CRM of site form leads (`data/leads`) merged with Meta Lead Ads (`data/meta-leads`); Telegram still sends as before
- **Контент** — all registered pages/blocks uk/en/ru via `data/cms/content/**/*.json`
- **Медіа** — upload to `/uploads/cms`, browse `/assets`, copy URL into content fields

## Backup

Back up regularly:

- `data/cms/`
- `data/leads/`
- `data/analytics/`
- `data/meta-leads/`
- `public/uploads/cms/`

## Notes

- One successful form submit = one stored lead + Telegram message + `generate_lead` (GTM) / Meta Lead pixel events.
- Admin routes are `noindex` and session-gated.
- Until CMS is seeded, the public site keeps using TypeScript i18n fallbacks.
