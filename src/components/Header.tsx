"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "#services", label: "Послуги" },
  { href: "#projects", label: "Проєкти" },
  { href: "#", label: "Блог" },
  { href: "#contact", label: "Контакти" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    const { style } = document.body;

    style.overflow = "hidden";
    style.touchAction = "none";

    return () => {
      style.overflow = "";
      style.touchAction = "";
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const mobileMenu = (
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
        </div>
        <Link className="mobile-menu-cta" href="#contact" onClick={closeMenu}>
          <span>Консультація</span>
          <span className="mobile-menu-cta-icon" aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </div>
  );

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
            <LanguageSwitcher />
            <Link className="cta-top" href="#contact" aria-label="Консультація">
              <span className="cta-top-text">Консультація</span>
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
                <span className="menu-toggle-close" aria-hidden="true">
                  ×
                </span>
              ) : (
                <span className="menu-toggle-icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </header>
  );
}
