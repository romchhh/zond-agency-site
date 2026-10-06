import LeadSourceTracker from "@/components/LeadSourceTracker";
import RingostatPageviews from "@/components/RingostatPageviews";
import { localeMeta, type Locale } from "@/i18n/config";
import { GTM_ID, gtmInlineScript, ringostatInlineScript } from "@/lib/analytics";
import { media } from "@/lib/media";
import Script from "next/script";
import type { ReactNode } from "react";

type DocumentShellProps = {
  locale: Locale;
  children: ReactNode;
};

export default function DocumentShell({ locale, children }: DocumentShellProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <html lang={localeMeta[locale].htmlLang}>
      <head>
        <link rel="llms-txt" href="/llms.txt" />
        <link
          rel="preload"
          href="/fonts/NAMU-Pro.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={media.heroMockupPoster}
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href={media.heroMockup}
          as="video"
          type="video/mp4"
        />
        <link rel="preload" href={media.logo} as="image" type="image/svg+xml" />
        <script dangerouslySetInnerHTML={{ __html: gtmInlineScript }} />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: ringostatInlineScript }} />
        <RingostatPageviews />
        <LeadSourceTracker />
        {turnstileSiteKey ? (
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
