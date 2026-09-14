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
                      d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"
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
