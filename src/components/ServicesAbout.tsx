import type { Locale } from "@/i18n/config";
import { servicesAbout } from "@/i18n/services-about";

type ServicesAboutProps = {
  locale: Locale;
};

export default function ServicesAbout({ locale }: ServicesAboutProps) {
  const copy = servicesAbout[locale];

  return (
    <div className="services-about">
      <section className="sp-section">
        <div className="wrap">
          <div className="sp-split sp-split--sticky">
            <div className="sp-split-aside">
              <h2 className="sp-h2">{copy.introTitle}</h2>
            </div>
            <div className="sp-body">
              {copy.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="sp-split sp-split--sticky">
            <div className="sp-split-aside">
              <h2 className="sp-h2">{copy.specialistsTitle}</h2>
            </div>
            <div>
              <p className="sp-body services-about-lead">{copy.specialistsLead}</p>
              <div className="sp-receive">
                {copy.specialists.map((item, index) => (
                  <div className="sp-receive-row" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
              <p className="sp-body services-about-note">{copy.specialistsNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="sp-section-head">
            <h2 className="sp-h2">{copy.whyTitle}</h2>
          </div>
          <div className="sp-why">
            {copy.why.map((item, index) => (
              <article className="sp-why-item" key={item}>
                <div className="sp-step-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="sp-body services-about-office">
            {copy.office.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="sp-split sp-split--sticky">
            <div className="sp-split-aside">
              <h2 className="sp-h2">{copy.offeringsTitle}</h2>
              <p className="sp-body services-about-lead">{copy.offeringsLead}</p>
            </div>
            <div className="sp-receive">
              {copy.offerings.map((item, index) => (
                <div className="sp-receive-row" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="sp-body services-about-closing">
            {copy.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
