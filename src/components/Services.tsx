import MediaImage from "@/components/MediaImage";
import { services } from "@/data/content";
import { imageSizes } from "@/lib/media";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="section-title">
              Комплексні рішення для вашого бренду
            </h2>
          </div>
          <a className="link-accent" href="#">
            Дивитися всі послуги →
          </a>
        </div>
        <div className="services-grid">
          {services.map((service) => (
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
