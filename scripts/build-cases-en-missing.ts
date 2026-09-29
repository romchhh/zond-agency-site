import fs from "node:fs";
import casesRu from "../src/i18n/cases/cases.ru";
import type { CaseItem } from "../src/i18n/cases/types";

const MISSING = [
  "nadiya-odesa",
  "insb",
  "akula-mama",
  "goshchanochka",
  "sk-energy",
  "cha",
  "novo-development",
] as const;

type Summary = {
  title: string;
  description: string;
  client: string;
  goals: string;
  developed: string;
};

const SUMMARY: Record<(typeof MISSING)[number], Summary> = {
  "nadiya-odesa": {
    title: "Nadiya Odesa",
    description:
      "We developed branding and identity for Nadiya Odesa — a reproductive medicine clinic. Also website design, print, and souvenirs.",
    client:
      "A reproductive medicine clinic focused on fertility treatment and reproductive health with a high standard of care.",
    goals:
      "Build a calm, trustworthy brand with a new logo, soothing palette, and clear typography that supports sensitive communication with patients and partners.",
    developed:
      "Branding\n\nDesign\n\nLogo\n\n3D model\n\nPrinted materials\n\nWebsite design\n\nVisual design\n\nEmblem\n\nStaff uniforms",
  },
  insb: {
    title: "INSB",
    description:
      "We developed branding, strategy, identity, and a full brand book for INSB — the Institute of National Resilience and Security of Ukraine.",
    client: "Institute of National Resilience and Security of Ukraine (INSB).",
    goals:
      "Create a restrained, professional, and contemporary brand that conveys expertise and public trust while reflecting security, resilience, and strategic thinking.",
    developed: "Branding\n\nLogo\n\nDesign\n\nStrategy\n\nIdentity",
  },
  "akula-mama": {
    title: "Akula Mama",
    description:
      "We developed a logo and bold packaging design for Akula Mama — a fish snacks and delicacies brand from Odesa. Also website design.",
    client: "Akula Mama produces affordable fish snacks and delicacies from Odesa for family audiences.",
    goals:
      "Design a logo and packaging that feel premium on shelf while staying accessible — highlighting product quality and the brand’s character.",
    developed: "Branding\n\nDesign\n\nLogo\n\nWebsite design",
  },
  goshchanochka: {
    title: "Hoshchanochka",
    description:
      "We developed branding, strategy, identity, and a logo for Hoshchanochka — a dairy producer in Ukraine.",
    client: "Hoshchanochka — a dairy plant and producer of milk products in Ukraine.",
    goals:
      "Shape a recognisable brand with packaging and communication that reflect quality, tradition, and trust on retail shelves.",
    developed: "Branding\n\nLogo\n\nDesign\n\nStrategy\n\nIdentity",
  },
  "sk-energy": {
    title: "SK Energy",
    description:
      "We developed branding and a logo for SK Energy — an energy company, including market research and a strong visual identity.",
    client: "SK Energy operates in the energy sector — a field that underpins industry, business, and everyday life.",
    goals:
      "Research the market, build visual identity (logo, palette, graphic language), and support rollout across business touchpoints.",
    developed: "Branding\n\nDesign\n\nLogo",
  },
  cha: {
    title: "CHA",
    description:
      "We developed a logo, full branding package, and website design for Cha — a mental health club with tea culture in Kyiv.",
    client:
      "Cha is a mental health club that blends tea culture with a calm, welcoming space in Kyiv.",
    goals:
      "Create a soothing, coherent brand — logo, website, and identity — that reflects harmony, clarity, and mental wellbeing.",
    developed: "Branding\n\nDesign\n\nLogo\n\nWebsite design",
  },
  "novo-development": {
    title: "NOVO development",
    description:
      "We developed branding, logo, and a full brand book for NOVO development — a residential project on Bali. Also website and souvenirs.",
    client: "NOVO development — a modern residential development brand.",
    goals:
      "Deliver a trustworthy real-estate identity with logo, brand book, and materials that work across digital and print channels.",
    developed: "Branding\n\nLogo\n\nBrand book\n\nWebsite\n\nSouvenirs",
  },
};

function simplifiedBody(ru: CaseItem, summary: Summary): string {
  const imgs = ru.body?.match(/\[IMG:[^\]]+\]/g) ?? [];
  const heroFirst = imgs.find((src) => /hero/i.test(src));
  const ordered = heroFirst
    ? [heroFirst, ...imgs.filter((src) => src !== heroFirst)]
    : imgs;
  const imgBlock = ordered.length ? `\n\n${ordered.join("\n\n")}` : "";
  return `### Client\n\n${summary.client}\n\n### Goals\n\n${summary.goals}\n\n### Developed\n\n${summary.developed}${imgBlock}`;
}

const ruBySlug = new Map(casesRu.map((c) => [c.slug, c]));
const items: CaseItem[] = [];

for (const slug of MISSING) {
  const ru = ruBySlug.get(slug);
  const summary = SUMMARY[slug];
  if (!ru || !summary) throw new Error(`Missing data for ${slug}`);
  items.push({
    slug,
    title: summary.title,
    description: summary.description,
    cover: ru.cover,
    media: ru.media,
    body: simplifiedBody(ru, summary),
  });
}

const out = `import type { CaseItem } from "./types";

/** English catalog entries merged when missing from cases.en.ts */
export const casesEnMissing: CaseItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync("src/i18n/cases/cases.en-missing.ts", out);
console.log("Wrote src/i18n/cases/cases.en-missing.ts with", items.length, "cases");
