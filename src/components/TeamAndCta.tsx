import CtaPanel from "@/components/CtaPanel";
import MediaImage from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionary";
import { imageSizes } from "@/lib/media";

type TeamAndCtaProps = {
  dictionary: Dictionary;
};

export default function TeamAndCta({ dictionary }: TeamAndCtaProps) {
  const { team, a11y } = dictionary;

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

        <CtaPanel dictionary={dictionary} />
      </div>
    </section>
  );
}
