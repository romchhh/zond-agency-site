import LoopedVideo from "@/components/LoopedVideo";
import { media } from "@/lib/media";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <ul className="hero-services">
              <li>Брендинг</li>
              <li>Інфлюенс маркетинг</li>
              <li>Графічний дизайн</li>
              <li>SMM</li>
              <li>Ілюстрація</li>
              <li>Пакування</li>
              <li>Брендбук</li>
              <li>Логотип</li>
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
              </div>
              <p>
                Брендинг агенція, яка створює впізнавані продукти. Наші
                переваги — швидкість та сучасність.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-right-top">
              <div className="hero-works">ZOND WORKS</div>
              <div className="hero-pillars">
                <span>СТРАТЕГІЯ</span>
                <span>КРЕАТИВ</span>
                <span>РЕЗУЛЬТАТ</span>
              </div>
            </div>

            <div className="hero-frame">
              <LoopedVideo
                className="hero-frame-video"
                src={media.heroMockup}
                poster={media.heroMockupPoster}
                ariaLabel="ZOND Works"
                priority
              />
            </div>

            <div className="hero-right-bottom">
              <div className="hero-tagline">
                БІЛЬШЕ МОЖЛИВОСТЕЙ ДЛЯ ВАШОГО БІЗНЕСУ
              </div>
              <div className="hero-slogan">BRANDS MATTER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
