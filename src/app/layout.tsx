import { headers } from "next/headers";
import { defaultLocale, isLocale, localeMeta } from "@/i18n/config";
import { media } from "@/lib/media";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

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
      </head>
      <body>{children}</body>
    </html>
  );
}
