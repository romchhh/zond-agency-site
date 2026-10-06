import LoopedVideo from "@/components/LoopedVideo";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getServiceDetailPath } from "@/i18n/routing";
import { heroServiceSlugs } from "@/i18n/services";
import { media } from "@/lib/media";
import Link from "next/link";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Hero({ locale, dictionary }: HeroProps) {
  const { hero } = dictionary;

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <ul className="hero-services">
              {hero.services.map((service, index) => {
                const slug = heroServiceSlugs[index];

                return (
                  <li key={service}>
                    {slug ? (
                      <Link href={getServiceDetailPath(locale, slug)}>
                        {service}
                      </Link>
                    ) : (
                      service
                    )}
                  </li>
                );
              })}
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
              <p className="hero-slogan">{hero.slogan}</p>
            </div>
          </div>

          <div className="hero-right">
            <LoopedVideo
              className="hero-right-video"
              src={media.heroMockup}
              ariaLabel={hero.videoLabel}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
