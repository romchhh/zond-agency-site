import MediaImage from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionary";
import { imageSizes } from "@/lib/media";

type ServicesProps = {
  dictionary: Dictionary;
};

export default function Services({ dictionary }: ServicesProps) {
  const { services } = dictionary;

  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">{services.title}</h2>
        </div>
        <div className="services-grid">
          {services.items.map((service) => (
            <article className="service-card" key={service.index}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
