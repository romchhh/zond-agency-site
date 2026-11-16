import type { Locale } from "@/i18n/config";
import { trackMetaPixelLead } from "@/lib/analytics";
import { LEAD_HONEYPOT_FIELD, getThanksPath } from "@/lib/lead";
import { readLeadSourceFromForm } from "@/lib/lead-source";

type SubmitConsultationOptions = {
  /** Default true — site forms go to /thanks-*. Lead landing stays put. */
  redirectToThanks?: boolean;
};

export async function submitConsultation(
  form: HTMLFormElement,
  values: {
    name: string;
    contact: string;
    email: string;
    locale: Locale;
    interest?: string;
  },
  options: SubmitConsultationOptions = {},
): Promise<void> {
  const { redirectToThanks = true } = options;
  const source = readLeadSourceFromForm(form);
  const honeypot =
    form.querySelector<HTMLInputElement>(`input[name="${LEAD_HONEYPOT_FIELD}"]`)?.value ?? "";
  const turnstileToken =
    form.querySelector<HTMLInputElement>("[name='cf-turnstile-response']")?.value ?? "";

  const payload: Record<string, string> = {
    name: values.name,
    contact: values.contact,
    email: values.email,
    locale: values.locale,
    ...source,
    [LEAD_HONEYPOT_FIELD]: honeypot,
  };
  if (values.interest?.trim()) payload.interest = values.interest.trim();
  if (turnstileToken) payload.turnstileToken = turnstileToken;

  const response = await fetch("/api/consultation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("consultation_failed");
  }

  trackMetaPixelLead();

  if (redirectToThanks) {
    window.location.assign(getThanksPath(values.locale));
  }
}
