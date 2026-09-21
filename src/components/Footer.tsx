import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/routing";

type FooterProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function Footer({ dictionary, locale = "uk" }: FooterProps) {
  const { nav, footer } = dictionary;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-bar">
          <div className="footer-inner">
            <div className="footer-left">
              <div className="logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/651683d433d9510e36720e72_logo-black.svg"
                  alt="ZOND"
                />
              </div>
              <nav className="footer-nav">
                <a href={getLocalePath(locale, "/services")}>{nav.services}</a>
                <a href={getLocalePath(locale, "/cases")}>{nav.projects}</a>
                <a href={getLocalePath(locale, "/blog")}>{nav.blog}</a>
                <a href={getLocalePath(locale, "/contact")}>{nav.contact}</a>
              </nav>
            </div>

            <div className="footer-right">
              <a className="footer-link" href="mailto:hello@zond.agency">
                hello@zond.agency
              </a>
              <span className="footer-divider" aria-hidden="true" />
              <a className="footer-link" href="tel:+380961234567">
                +38 096 123 45 67
              </a>
              <span className="footer-divider" aria-hidden="true" />
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/zond.agency/"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5ZM17.25 6.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <span className="footer-divider" aria-hidden="true" />
              <div className="footer-copy">
                <span>© 2026 ZOND</span>
                <span>{footer.rights}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
