"use client";

import type { Dictionary } from "@/i18n/dictionary";
import {
  isValidContact,
  isValidEmail,
  maskContactInput,
  maskEmailInput,
} from "@/lib/input-masks";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";
import { siteConfig } from "@/lib/site";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

const SCROLL_LOCK_CLASS = "consultation-open";

type ConsultationContextValue = {
  openConsultation: () => void;
  closeConsultation: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return context;
}

type ConsultationProviderProps = {
  dictionary: Dictionary;
  children: ReactNode;
};

export default function ConsultationProvider({
  dictionary,
  children,
}: ConsultationProviderProps) {
  const copy = dictionary.consultationForm;
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    email?: string;
  }>({});
  const resetForm = useCallback(() => {
    setName("");
    setContact("");
    setEmail("");
    setErrors({});
    setStep("form");
  }, []);

  const openConsultation = useCallback(() => {
    resetForm();
    setOpen(true);
  }, [resetForm]);

  const closeConsultation = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    lockBodyScroll(SCROLL_LOCK_CLASS);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeConsultation();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockBodyScroll(SCROLL_LOCK_CLASS);
    };
  }, [closeConsultation, open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: typeof errors = {};

    if (name.trim().length < 2) {
      nextErrors.name = copy.errors.name;
    }
    if (!isValidContact(contact)) {
      nextErrors.contact = copy.errors.contact;
    }
    if (!isValidEmail(email)) {
      nextErrors.email = copy.errors.email;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStep("success");
  };

  const modal =
    mounted && open ? (
      <div className="consultation-backdrop" onClick={closeConsultation}>
        <div
          className="consultation-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-title"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="consultation-close"
            aria-label={copy.close}
            onClick={closeConsultation}
          >
            <span aria-hidden="true">×</span>
          </button>

          {step === "form" ? (
            <>
              <div className="consultation-intro">
                <h2 id="consultation-title" className="consultation-title">
                  {copy.title}
                </h2>
                <p className="consultation-lead">{copy.description}</p>
              </div>

              <form className="consultation-form" onSubmit={handleSubmit} noValidate>
                <div className="consultation-form-grid">
                  <label className="consultation-field">
                    <span className="consultation-label">{copy.nameLabel}</span>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      autoComplete="name"
                      placeholder={copy.namePlaceholder}
                      onChange={(event) => setName(event.target.value)}
                    />
                    {errors.name ? (
                      <span className="consultation-error">{errors.name}</span>
                    ) : null}
                  </label>

                  <label className="consultation-field">
                    <span className="consultation-label">{copy.contactLabel}</span>
                    <input
                      type="text"
                      name="contact"
                      value={contact}
                      autoComplete="tel"
                      inputMode="text"
                      placeholder={copy.contactPlaceholder}
                      onChange={(event) =>
                        setContact(maskContactInput(event.target.value))
                      }
                    />
                    {errors.contact ? (
                      <span className="consultation-error">{errors.contact}</span>
                    ) : null}
                  </label>

                  <label className="consultation-field consultation-field--full">
                    <span className="consultation-label">{copy.emailLabel}</span>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      autoComplete="email"
                      inputMode="email"
                      placeholder={copy.emailPlaceholder}
                      onChange={(event) =>
                        setEmail(maskEmailInput(event.target.value))
                      }
                    />
                    {errors.email ? (
                      <span className="consultation-error">{errors.email}</span>
                    ) : null}
                  </label>
                </div>

                <button type="submit" className="consultation-submit">
                  {copy.submit}
                </button>
              </form>
            </>
          ) : (
            <div className="consultation-success">
              <h2 className="consultation-title">{copy.successTitle}</h2>
              <p className="consultation-lead">{copy.successDescription}</p>
              <a
                className="consultation-submit consultation-submit--link"
                href={siteConfig.telegramBot}
                target="_blank"
                rel="noreferrer"
              >
                {copy.telegramCta}
              </a>
            </div>
          )}
        </div>
      </div>
    ) : null;

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation }}>
      {children}
      {modal ? createPortal(modal, document.body) : null}
    </ConsultationContext.Provider>
  );
}
