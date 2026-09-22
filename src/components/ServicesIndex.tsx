import MediaImage from "@/components/MediaImage";
import type { Locale } from "@/i18n/config";
import { getServicesIndex } from "@/i18n/services-index";
import { getServiceDetailPath } from "@/i18n/routing";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

type ServicesIndexProps = {
  locale: Locale;
};

export default function ServicesIndex({ locale }: ServicesIndexProps) {
  const copy = getServicesIndex(locale);

  return (
    <>
      <section className="services-index-hero">
        <div className="wrap">
          <p className="sp-eyebrow">{copy.eyebrow}</p>
          <h1 className="sp-h1 services-index-title">{copy.title}</h1>
          <p className="services-index-subtitle">{copy.subtitle}</p>
        </div>
      </section>

      <section className="section services-index-grid-section">
        <div className="wrap">
          <div className="services-index-grid">
            {copy.items.map((item, index) => (
              <Link
                className="service-index-card"
                key={item.slug}
                href={getServiceDetailPath(locale, item.slug)}
              >
                <div className="service-index-visual">
                  <MediaImage
                    src={item.image}
                    alt={item.title}
                    sizes={imageSizes.service}
                  />
                </div>
                <div className="service-index-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="service-index-copy">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span className="service-index-cta">
                    <span>{copy.cta}</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
