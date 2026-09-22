export type CaseVisualImage = {
  src: string;
  caption?: string;
};

export type CaseVisualGalleryLayout = "wide" | "pair" | "triple";

export type CaseVisualFact = {
  label: string;
  value: string;
  accent?: boolean;
  countryCode?: string;
};

export type CaseVisualDeliverable = {
  title: string;
  description?: string;
};

export type CaseVisualBlock =
  | {
      type: "section";
      index: string;
      kicker: string;
      title: string;
      paragraphs: string[];
      deliverables?: CaseVisualDeliverable[];
      ideaStrip?: string;
      variant?: "book";
      rules?: string[];
      conceptNote?: string;
    }
  | {
      type: "facts";
      items: CaseVisualFact[];
    }
  | {
      type: "gallery";
      layout: CaseVisualGalleryLayout;
      images: CaseVisualImage[];
    }
  | {
      type: "deliverables";
      items: CaseVisualDeliverable[];
    }
  | {
      type: "manifesto";
      label: string;
      text: string;
      footer?: string;
    }
  | {
      type: "palette";
      colors: Array<{ name: string; hex: string; bg: string; fg: string }>;
    }
  | {
      type: "banner";
      kicker: string;
      title: string;
      tags?: string[];
    }
  | {
      type: "quote";
      index?: string;
      kicker?: string;
      heading?: string;
      paragraphs: string[];
      author: string;
      role: string;
      badge?: string;
      note?: string;
    };

export type CaseItem = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  media: string[];
  body: string;
  tagline?: string;
  serviceTag?: string;
  blocks?: CaseVisualBlock[];
};
