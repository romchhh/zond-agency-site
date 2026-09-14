"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#services", label: "Послуги" },
  { href: "#projects", label: "Проєкти" },
  { href: "#", label: "Блог" },
  { href: "#contact", label: "Контакти" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${menuOpen ? " is-menu-open" : ""}`}>
      <div className="wrap">
        <div className="header-bar">
          <Link className="logo" href="#" onClick={closeMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/651683d433d9510e36720e72_logo-black.svg"
              alt="ZOND"
            />
          </Link>

          <div className="header-right">
            <nav className="nav" aria-label="Головна навігація">
              {navLinks.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="langs">
              <span>ENG</span>
              <span className="is-active">UA</span>
              <span>RU</span>
            </div>
            <Link className="cta-top" href="#contact">
              <span>Консультація</span>
              <span className="cta-top-icon" aria-hidden="true">
                ↗
              </span>
            </Link>
            <button
              type="button"
              className={`menu-toggle${menuOpen ? " is-open" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            >
              {menuOpen ? (
                <span className="menu-toggle-close" aria-hidden="true">×</span>
              ) : (
                <span className="menu-toggle-label">[menu]</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-center">
            <nav className="mobile-menu-nav" aria-label="Мобільна навігація">
              {navLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-menu-langs">
              <span>ENG</span>
              <span className="is-active">UA</span>
              <span>RU</span>
            </div>
          </div>
          <Link
            className="mobile-menu-cta"
            href="#contact"
            onClick={closeMenu}
          >
            <span>Консультація</span>
            <span className="mobile-menu-cta-icon" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
