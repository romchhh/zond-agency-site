import CtaPanel from "@/components/CtaPanel";
import MediaImage from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionary";
import { imageSizes } from "@/lib/media";

type TeamAndCtaProps = {
  dictionary: Dictionary;
};

function MailIcon() {
  return (
    <svg
      className="team-join-icon"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

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

          <a
            className="team-card team-join-card"
            href="mailto:ask@zond.agency?subject=ZOND%20Team"
            aria-label={`${team.joinTitle}. ${team.joinHint}`}
          >
            <div className="team-join-panel">
              <span className="team-join-title">{team.joinTitle}</span>
              <span className="team-join-mail">
                <MailIcon />
                <span>ask@zond.agency</span>
              </span>
            </div>
          </a>
        </div>

        <CtaPanel dictionary={dictionary} />
      </div>
    </section>
  );
}
