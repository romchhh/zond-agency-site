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
        src: "/assets/651683d433d9510e36720e72_logo-black.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
