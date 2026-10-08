# One-hop legacy redirects (www / http)

Nginx currently does `www → apex` (or `http → https`) **keeping the old path**, then Next.js does a second redirect to the final URL. Google loses a hop on every old www link.

## Fix on the VPS

1. Deploy this repo (`git pull`, `npm run build`, restart Next).
2. In **both** server blocks that currently bounce to apex — `www.zond.agency` (:443) and plain `:80` for `zond.agency` / `www.zond.agency` — include the generated rules **before** the blanket redirect:

```nginx
server {
    listen 443 ssl http2;
    server_name www.zond.agency;
    # …ssl…

    include /root/zond-agency-site/deploy/nginx-legacy-one-hop.conf;
    return 301 https://zond.agency$request_uri;
}

server {
    listen 80;
    server_name zond.agency www.zond.agency;

    include /root/zond-agency-site/deploy/nginx-legacy-one-hop.conf;
    return 301 https://zond.agency$request_uri;
}
```

3. `sudo nginx -t && sudo systemctl reload nginx`

## Check

```bash
curl -sI https://www.zond.agency/blog/naming | head -5
# expect: 301 Location: https://zond.agency/blog/naming-guide

curl -sI http://zond.agency/branding | head -5
# expect: 301 Location: https://zond.agency/our-services/branding
```

One hop only — not via the old path on apex.

Regenerate after editing `legacy-redirects.cjs`:

```bash
npm run generate:legacy-redirects
```
