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
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm8 10a7.95 7.95 0 0 1-.35 2.35h-2.63a12.2 12.2 0 0 0 0-4.7h2.63c.22.76.35 1.56.35 2.35ZM12 4c.88 1.25 1.58 2.7 2.03 4.28H9.97A10.9 10.9 0 0 1 12 4ZM7.15 6.65A12.2 12.2 0 0 0 7.15 11H4.35A7.95 7.95 0 0 1 7.15 6.65ZM4.35 13h2.8a12.2 12.2 0 0 0 0 4.7A7.95 7.95 0 0 1 4.35 13Zm4.62 6.35A10.9 10.9 0 0 1 9.97 15.72h4.06A10.9 10.9 0 0 1 12 20c-.88 0-1.72-.15-2.48-.42Zm5.23-.27a12.2 12.2 0 0 0 0-4.7h2.8a7.95 7.95 0 0 1-2.8 4.7ZM14.97 11H9.03a10.9 10.9 0 0 1 0-2.28h5.94a10.9 10.9 0 0 1 0 2.28Zm.18 2.28a12.2 12.2 0 0 1 0 4.7h-2.3a10.9 10.9 0 0 1-2.7-4.7h5Zm-7.3 4.7a10.9 10.9 0 0 1-2.7-4.7H4.98a7.95 7.95 0 0 0 2.87 4.7ZM16.85 6.65A7.95 7.95 0 0 1 19.65 11h-2.8a12.2 12.2 0 0 0 0-4.7h-.01Z"
            fill="currentColor"
          />
        </svg>
        <span className="lang-switcher-current">{active}</span>
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
            <span>{language.code}</span>
            <span className="lang-switcher-label">{language.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
