import MediaImage from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionary";
import { imageSizes, media } from "@/lib/media";
import { siteConfig } from "@/lib/site";

type CtaPanelProps = {
  dictionary: Dictionary;
};

export default function CtaPanel({ dictionary }: CtaPanelProps) {
  const { cta } = dictionary;

  return (
    <section className="cta-panel" id="contact">
      <MediaImage
        className="cta-bg"
        src={media.ctaBg}
        alt=""
        sizes={imageSizes.cta}
      />
      <div className="cta-overlay" aria-hidden="true" />
      <div className="cta-content">
        <div className="cta-text">
          <h3>{cta.title}</h3>
          <p>{cta.description}</p>
        </div>
        <a className="cta-btn" href={`mailto:${siteConfig.email}`}>
          <span>{cta.button}</span>
          <span className="cta-btn-icon" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
