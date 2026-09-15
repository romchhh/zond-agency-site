import LoopedVideo from "@/components/LoopedVideo";
import type { Dictionary } from "@/i18n/dictionary";
import { media } from "@/lib/media";

type HeroProps = {
  dictionary: Dictionary;
};

export default function Hero({ dictionary }: HeroProps) {
  const { hero } = dictionary;

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <ul className="hero-services">
              {hero.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <div className="hero-bottom">
              <div className="hero-more">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="hero-more-icon"
                  src={media.moreIcon}
                  alt=""
                  aria-hidden="true"
                />
                <span>{hero.more}</span>
              </div>
              <p>{hero.description}</p>
            </div>
          </div>

          <div className="hero-right">
            <LoopedVideo
              className="hero-right-video"
              src={media.heroMockup}
              poster={media.heroMockupPoster}
              ariaLabel={hero.videoLabel}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
