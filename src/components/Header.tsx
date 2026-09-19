"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/routing";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Header({ locale, dictionary }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const homePath = getLocalePath(locale);

  const navLinks = [
    { href: getLocalePath(locale, "/services"), label: dictionary.nav.services },
    { href: `${homePath}#projects`, label: dictionary.nav.projects },
    { href: "#", label: dictionary.nav.blog },
    { href: `${homePath}#contact`, label: dictionary.nav.contact },
  ];

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
          <nav className="mobile-menu-nav" aria-label={dictionary.a11y.mobileNav}>
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
        <Link
          className="mobile-menu-cta"
          href={`${homePath}#contact`}
          onClick={closeMenu}
        >
          <span>{dictionary.a11y.consultation}</span>
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
          <Link className="logo" href={homePath} onClick={closeMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/651683d433d9510e36720e72_logo-black.svg"
              alt="ZOND"
            />
          </Link>

          <div className="header-right">
            <nav className="nav" aria-label={dictionary.a11y.mainNav}>
              {navLinks.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher
              locale={locale}
              label={dictionary.a11y.language}
              languagesLabel={dictionary.a11y.languages}
            />
            <Link
              className="cta-top"
              href={`${homePath}#contact`}
              aria-label={dictionary.a11y.consultation}
            >
              <span className="cta-top-text">{dictionary.a11y.consultation}</span>
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
              aria-label={
                menuOpen ? dictionary.a11y.closeMenu : dictionary.a11y.openMenu
              }
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
