import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";
import { media } from "@/lib/media";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Branding",
  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: media.ogImage,
        width: 1200,
        height: 630,
        alt: "ZOND Agency — брендинг та дизайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [media.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: media.logo,
    shortcut: media.logo,
    apple: media.logo,
  },
  other: {
    "llms-txt": `${siteUrl}/llms.txt`,
  },
};

export const viewport: Viewport = {
  themeColor: "#ff7100",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.language}>
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
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
