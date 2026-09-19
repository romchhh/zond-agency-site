"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeMeta, locales, type Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/routing";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  languagesLabel: string;
  variant?: "header" | "menu";
};

export default function LanguageSwitcher({
  locale,
  label,
  languagesLabel,
  variant = "header",
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname() || "/";
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`lang-switcher lang-switcher--${variant}${open ? " is-open" : ""}`}
    >
      <button
        type="button"
        className="lang-switcher-btn"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={label}
      >
        <svg
          className="lang-switcher-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3.75 12h16.5M12 3.75c2.2 2.55 2.2 14.95 0 16.5M12 3.75c-2.2 2.55-2.2 14.95 0 16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="lang-switcher-current">{localeMeta[locale].code}</span>
        <svg
          className="lang-switcher-chevron"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="lang-switcher-dropdown" role="listbox" aria-label={languagesLabel}>
        {locales.map((item) => (
          <Link
            key={item}
            href={`${getLocalePath(item, pathname)}${hash}`}
            role="option"
            aria-selected={locale === item}
            className={locale === item ? "is-active" : undefined}
            onClick={() => setOpen(false)}
            hrefLang={localeMeta[item].hreflang}
          >
            <span className="lang-switcher-code">{localeMeta[item].code}</span>
            <span className="lang-switcher-label">{localeMeta[item].label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
