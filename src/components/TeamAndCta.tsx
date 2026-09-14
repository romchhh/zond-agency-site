import MediaImage from "@/components/MediaImage";
import { team } from "@/data/content";
import { imageSizes, media } from "@/lib/media";

export default function TeamAndCta() {
  return (
    <section className="section" id="team">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="section-title">Люди, які створюють сенси</h2>
          </div>
          <a className="link-accent" href="#">
            Дивитися всю команду →
          </a>
        </div>
        <div className="services-grid">
          {team.map((member) => (
            <article className="service-card" key={member.name}>
              <div className="service-visual">
                {member.image ? (
                  <MediaImage
                    src={member.image}
                    alt={`${member.name}, команда ZOND Agency`}
                    sizes={imageSizes.team}
                  />
                ) : (
                  <div className="service-visual-placeholder" aria-hidden="true">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="service-copy">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>

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
              <h3>Обговоримо ваш проєкт?</h3>
              <p>
                Розкажіть про ваш бізнес. І ми запропонуємо рішення, яке
                працює саме для вас.
              </p>
            </div>
            <a className="cta-btn" href="mailto:hello@zond.agency">
              <span>Консультація</span>
              <span className="cta-btn-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
