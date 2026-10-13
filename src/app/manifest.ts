import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "ZOND",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ecebe8",
    theme_color: "#ff7100",
    lang: siteConfig.language,
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
