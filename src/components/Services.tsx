import MediaImage from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getServiceDetailPath } from "@/i18n/routing";
import { servicesGridSlugs } from "@/i18n/services";
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
          {services.items.map((service, index) => {
            const slug = servicesGridSlugs[index];
            const content = (
              <>
                <div className="service-visual">
                  <MediaImage
                    src={service.image}
                    alt={service.title}
                    sizes={imageSizes.service}
                  />
                </div>
                <div className="service-index">{service.index}</div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                </div>
              </>
            );

            if (slug) {
              return (
                <Link
                  className="service-card"
                  key={service.index}
                  href={getServiceDetailPath(locale, slug)}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article className="service-card" key={service.index}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
