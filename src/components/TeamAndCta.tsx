import MediaImage from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionary";
import { imageSizes, media } from "@/lib/media";

type TeamAndCtaProps = {
  dictionary: Dictionary;
};

export default function TeamAndCta({ dictionary }: TeamAndCtaProps) {
  const { team, cta, a11y } = dictionary;

  return (
    <section className="section" id="team">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="section-title">{team.title}</h2>
          </div>
        </div>

        <div className="team-grid">
          {team.items.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card-photo">
                {member.image ? (
                  <MediaImage
                    src={member.image}
                    alt={`${member.name}, ${a11y.teamMember}`}
                    sizes={imageSizes.team}
                  />
                ) : (
                  <div className="team-card-placeholder" aria-hidden="true">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="team-card-copy">
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
              <h3>{cta.title}</h3>
              <p>{cta.description}</p>
            </div>
            <a className="cta-btn" href="mailto:hello@zond.agency">
              <span>{cta.button}</span>
              <span className="cta-btn-icon" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
