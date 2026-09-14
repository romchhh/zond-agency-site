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
                <span>і багато іншого</span>
              </div>
              <p>
                Брендинг агенція, яка створює впізнавані продукти. Наші
                переваги — швидкість та сучасність.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <LoopedVideo
              className="hero-right-video"
              src={media.heroMockup}
              poster={media.heroMockupPoster}
              ariaLabel="ZOND Works"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
