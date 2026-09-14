export default function Footer() {
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
                <a href="#services">Послуги</a>
                <a href="#projects">Проєкти</a>
                <a href="#">Блог</a>
                <a href="#contact">Контакти</a>
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
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6.5 8.5h3v9h-3v-9Zm1.5-4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 8.5h2.9v1.2h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.7 2 3.7 4.6v4.75h-3v-4.2c0-1-.02-2.3-1.4-2.3-1.45 0-1.67 1.13-1.67 2.3v4.2H10V8.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
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
                <a href="#" aria-label="Behance">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M22 7h-7V5h7v2zm1.726 10c-.442 2.583-2.878 4.5-5.726 4.5-3.314 0-6-2.686-6-6s2.686-6 6-6c2.65 0 4.84 1.878 5.354 4.366h-3.21c-.346-1.003-1.292-1.73-2.54-1.73-1.49 0-2.67 1.223-2.67 2.72s1.18 2.72 2.67 2.72c1.247 0 2.194-.727 2.54-1.73h3.211zM0 5.5v13h4.5c2.483 0 4.5-2.017 4.5-4.5S7 9.5 4.5 9.5H3V5.5H0zm3 5.5h1.5c1.103 0 2-.897 2-2s-.897-2-2-2H3v4z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6 18.8 12 18.8 12 18.8s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <span className="footer-divider" aria-hidden="true" />
              <div className="footer-copy">
                <span>© 2026 ZOND</span>
                <span>Всі права захищено.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
