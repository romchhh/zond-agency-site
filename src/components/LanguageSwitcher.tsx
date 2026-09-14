"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "ENG", label: "English" },
  { code: "UA", label: "Українська" },
  { code: "RU", label: "Русский" },
];

type LanguageSwitcherProps = {
  variant?: "header" | "menu";
};

export default function LanguageSwitcher({
  variant = "header",
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("UA");
  const rootRef = useRef<HTMLDivElement>(null);

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
        aria-label="Вибір мови"
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
        <span className="lang-switcher-current">{active}</span>
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

      <div className="lang-switcher-dropdown" role="listbox" aria-label="Мови">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            role="option"
            aria-selected={active === language.code}
            className={active === language.code ? "is-active" : undefined}
            onClick={() => {
              setActive(language.code);
              setOpen(false);
            }}
          >
            <span className="lang-switcher-code">{language.code}</span>
            <span className="lang-switcher-label">{language.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
