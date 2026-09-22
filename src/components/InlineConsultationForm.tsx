"use client";

import type { Dictionary } from "@/i18n/dictionary";
import {
  isValidContact,
  isValidEmail,
  maskContactInput,
  maskEmailInput,
} from "@/lib/input-masks";
import { siteConfig } from "@/lib/site";
import { useState, type FormEvent } from "react";

type InlineConsultationFormProps = {
  dictionary: Dictionary;
};

export default function InlineConsultationForm({
  dictionary,
}: InlineConsultationFormProps) {
  const copy = dictionary.consultationForm;
  const [step, setStep] = useState<"form" | "success">("form");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    email?: string;
  }>({});

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

  if (step === "success") {
    return (
      <div className="inline-consultation-success">
        <h3 className="inline-consultation-success-title">{copy.successTitle}</h3>
        <p className="inline-consultation-success-lead">{copy.successDescription}</p>
        <a
          className="consultation-submit consultation-submit--link"
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noreferrer"
        >
          {copy.telegramCta}
        </a>
      </div>
    );
  }

  return (
    <form className="consultation-form inline-consultation-form" onSubmit={handleSubmit} noValidate>
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
            onChange={(event) => setContact(maskContactInput(event.target.value))}
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
            onChange={(event) => setEmail(maskEmailInput(event.target.value))}
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
  );
}
