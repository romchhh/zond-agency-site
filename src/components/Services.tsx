import MediaImage from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getServiceDetailPath } from "@/i18n/routing";
import { getServiceGridIconSrc, servicesGridSlugByCardIndex } from "@/i18n/services";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

type ServicesProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Services({ locale, dictionary }: ServicesProps) {
  const { services } = dictionary;

  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">{services.title}</h2>
        </div>
        <div className="services-grid">
          {services.items.map((service) => {
            const slug = servicesGridSlugByCardIndex[service.index];
            const content = (
              <>
                <div className="service-index">{service.index}</div>
                <div className="service-icon-slot">
                  <div className="service-visual service-visual--icon">
                    <MediaImage
                      src={getServiceGridIconSrc(service.index)}
                      alt={service.title}
                      sizes={imageSizes.service}
                    />
                  </div>
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  {service.description ? <p>{service.description}</p> : null}
                </div>
              </>
            );

            if (slug) {
              return (
                <Link
                  className="service-card service-card--icon"
                  key={service.index}
                  href={getServiceDetailPath(locale, slug)}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article className="service-card service-card--icon" key={service.index}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
