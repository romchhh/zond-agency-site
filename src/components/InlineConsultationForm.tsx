"use client";

import ConsultationHiddenFields from "@/components/ConsultationHiddenFields";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import {
  isValidContact,
  isValidEmail,
  maskContactInput,
  maskEmailInput,
} from "@/lib/input-masks";
import { submitConsultation } from "@/lib/submit-consultation";
import { useState, type FormEvent } from "react";

type InlineConsultationFormProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export default function InlineConsultationForm({
  dictionary,
  locale,
}: InlineConsultationFormProps) {
  const copy = dictionary.consultationForm;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    email?: string;
    submit?: string;
  }>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: typeof errors = {};

    if (name.trim().length < 2) {
      nextErrors.name = copy.errors.name;
    }
    if (!isValidContact(contact)) {
      nextErrors.contact = copy.errors.contact;
    }
    if (email.trim() && !isValidEmail(email)) {
      nextErrors.email = copy.errors.email;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    try {
      await submitConsultation(event.currentTarget, {
        name: name.trim(),
        contact: contact.trim(),
        email: email.trim(),
        locale,
      });
    } catch {
      setSending(false);
      setErrors({ submit: copy.errors.submit });
    }
  };

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
          {errors.name ? <span className="consultation-error">{errors.name}</span> : null}
        </label>

        <label className="consultation-field">
          <span className="consultation-label">{copy.contactLabel}</span>
          <input
            type="text"
            name="contact"
            value={contact}
            autoComplete="off"
            inputMode="text"
            placeholder={copy.contactPlaceholder}
            onChange={(event) => setContact(maskContactInput(event.target.value))}
          />
          {errors.contact ? <span className="consultation-error">{errors.contact}</span> : null}
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
          {errors.email ? <span className="consultation-error">{errors.email}</span> : null}
        </label>
      </div>

      <ConsultationHiddenFields />

      {errors.submit ? <p className="consultation-error">{errors.submit}</p> : null}

      <button type="submit" className="consultation-submit" disabled={sending}>
        {copy.submit}
      </button>
    </form>
  );
}
