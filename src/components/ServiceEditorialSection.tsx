import type { BrandingSeoContent } from "@/i18n/branding-seo";
import { renderSeoBlock } from "@/lib/render-seo-block";

type ServiceEditorialSectionProps = {
  seo: BrandingSeoContent;
};

export default function ServiceEditorialSection({ seo }: ServiceEditorialSectionProps) {
  if (!seo.sections.length) return null;

  return (
    <details className="sp-editorial-spoiler">
      <summary>{seo.spoilerLabel}</summary>
      <div className="sp-editorial-panel">
        {seo.editorialTitle ? <h2 className="sp-editorial-title">{seo.editorialTitle}</h2> : null}
        <div className="sp-editorial-grid">
          {seo.sections.map((section) => (
            <article key={section.title}>
              <h3>{section.title}</h3>
              {section.blocks.map((block, index) => renderSeoBlock(block, index))}
            </article>
          ))}
        </div>
      </div>
    </details>
  );
}
