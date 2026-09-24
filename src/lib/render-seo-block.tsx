import type { BrandingSeoBlock } from "@/i18n/branding-seo";

export function renderSeoBlock(block: BrandingSeoBlock, index: number) {
  switch (block.kind) {
    case "p":
      return <p key={`p-${index}`}>{block.text}</p>;
    case "term":
      return (
        <p key={`term-${index}`} className="sp-seo-term">
          <strong>{block.label}</strong> {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={`ul-${index}`} className="sp-seo-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
  }
}
