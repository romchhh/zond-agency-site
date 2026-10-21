"use client";

import ConsultationHiddenFields from "@/components/ConsultationHiddenFields";
import {
  LEAD_INTEREST_OPTIONS,
  type LeadInterestOption,
} from "@/lib/lead-interest";
import { isValidContact, maskContactInput } from "@/lib/input-masks";
import { submitConsultation } from "@/lib/submit-consultation";
import { useState, type FormEvent } from "react";

type Step = "interest" | "contact" | "success";

export default function LeadFunnel() {
  const [step, setStep] = useState<Step>("interest");
  const [interest, setInterest] = useState<LeadInterestOption | "">("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    submit?: string;
  }>({});

  const pickInterest = (option: LeadInterestOption) => {
    setInterest(option);
    setErrors({});
    setStep("contact");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!interest) {
      setStep("interest");
      return;
    }

    const nextErrors: typeof errors = {};
    if (name.trim().length < 2) nextErrors.name = "Введіть імʼя (мінімум 2 символи)";
    if (!isValidContact(contact)) {
      nextErrors.contact = "Введіть телефон або Telegram (@username)";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    try {
      await submitConsultation(
        event.currentTarget,
        {
          name: name.trim(),
          contact: contact.trim(),
          email: "",
          locale: "uk",
          interest,
        },
        { redirectToThanks: false },
      );
      setStep("success");
    } catch {
      setErrors({ submit: "Не вдалося надіслати заявку. Спробуйте ще раз." });
    } finally {
      setSending(false);
    }
  };

  if (step === "success") {
    return (
      <section className="lead-interest">
        <div className="lead-interest-form lead-interest-success">
          <h1 className="lead-interest-title">Дякуємо!</h1>
          <p className="lead-interest-success-lead">
            Заявку отримали. Ми скоро звʼяжемось з вами.
          </p>
        </div>
      </section>
    );
  }

  if (step === "contact" && interest) {
    return (
      <section className="lead-interest">
        <form className="lead-interest-form" onSubmit={handleSubmit} noValidate>
          <div className="lead-interest-block">
            <p className="lead-interest-chosen">
              <span className="lead-interest-chosen-label">Обрано</span>
              <span className="lead-interest-chosen-value">{interest}</span>
              <button
                type="button"
                className="lead-interest-chosen-change"
                onClick={() => setStep("interest")}
              >
                Змінити
              </button>
            </p>
            <h1 className="lead-interest-title">Ваш контакт</h1>
            <div className="consultation-form-grid lead-interest-fields">
              <label className="consultation-field">
                <span className="consultation-label">Імʼя</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  autoComplete="name"
                  placeholder="Ваше імʼя"
                  onChange={(event) => setName(event.target.value)}
                />
                {errors.name ? (
                  <span className="consultation-error">{errors.name}</span>
                ) : null}
              </label>

              <label className="consultation-field">
                <span className="consultation-label">Телефон / Телеграм</span>
                <input
                  type="text"
                  name="contact"
                  value={contact}
                  autoComplete="off"
                  inputMode="text"
                  placeholder="+380 або @username"
                  onChange={(event) =>
                    setContact(maskContactInput(event.target.value))
                  }
                />
                {errors.contact ? (
                  <span className="consultation-error">{errors.contact}</span>
                ) : null}
              </label>
            </div>
          </div>

          <ConsultationHiddenFields />

          {errors.submit ? <p className="consultation-error">{errors.submit}</p> : null}

          <button type="submit" className="consultation-submit" disabled={sending}>
            {sending ? "Надсилаємо…" : "Надіслати"}
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="lead-interest">
      <div className="lead-interest-form">
        <div className="lead-interest-block">
          <h1 className="lead-interest-title">Що вас цікавить</h1>
          <div className="lead-interest-options" role="list">
            {LEAD_INTEREST_OPTIONS.map((option, index) => (
              <button
                key={option}
                type="button"
                className="lead-interest-option"
                role="listitem"
                onClick={() => pickInterest(option)}
              >
                <span className="lead-interest-option-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="lead-interest-option-text">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
