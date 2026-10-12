# One-hop legacy redirects (www / http)

## Why this exists

Without the nginx include, traffic does **two hops**:

1. `https://www.zond.agency/blog/naming` → `https://zond.agency/blog/naming` (nginx strips www, keeps old path)
2. `https://zond.agency/blog/naming` → `https://zond.agency/blog/naming-guide` (Next.js legacy redirect)

Google and SEO tools count that as a chain. The Next middleware already one-hops www→final **if** the request reaches the Node app with `Host: www`. On production, nginx answers www first — so nginx must apply the legacy map **before** the blanket apex redirect.

## Live check (currently broken until nginx is updated)

```bash
curl -sI https://www.zond.agency/blog/naming | head -5
# BROKEN:  301 Location: https://zond.agency/blog/naming
# FIXED:   301 Location: https://zond.agency/blog/naming-guide
```

## Fix on the VPS

1. Deploy this repo (`git pull`, `npm run build`, restart Next).
2. Confirm the generated file is on the server:
   `deploy/nginx-legacy-one-hop.conf` (241 exact + 9 pattern rules).
3. In **both** server blocks that bounce to apex — `www.zond.agency` (:443) and plain `:80` for `zond.agency` / `www.zond.agency` — include the rules **before** the blanket redirect:

```nginx
server {
    listen 443 ssl http2;
    server_name www.zond.agency;
    # …ssl…

    include /path/to/zond-next/deploy/nginx-legacy-one-hop.conf;
    return 301 https://zond.agency$request_uri;
}

server {
    listen 80;
    server_name zond.agency www.zond.agency;

    include /path/to/zond-next/deploy/nginx-legacy-one-hop.conf;
    return 301 https://zond.agency$request_uri;
}
```

Use the real absolute path on the VPS (e.g. `/root/zond-agency-site/deploy/...` or `/var/www/...`).

4. `sudo nginx -t && sudo systemctl reload nginx`

## Verify

```bash
curl -sI https://www.zond.agency/blog/naming | head -5
# expect: 301 Location: https://zond.agency/blog/naming-guide

curl -sI http://zond.agency/branding | head -5
# expect: 301 Location: https://zond.agency/our-services/branding

# Must be ONE Location hop — not via the old path on apex.
```

Full www list lives in the sheet tab «Старі адреси з www».

## Regenerate

After editing `legacy-redirects.cjs`:

```bash
npm run generate:legacy-redirects
# or: node scripts/generate-nginx-legacy-one-hop.mjs
```

That refreshes both `deploy/nginx-legacy-one-hop.conf` and `src/lib/legacy-destinations.generated.ts` (used by Next middleware for the same one-hop when www reaches Node).
