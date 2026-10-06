import type { Locale } from "@/i18n/config";
import { LEAD_HONEYPOT_FIELD, getThanksPath } from "@/lib/lead";
import { readLeadSourceFromForm } from "@/lib/lead-source";

export async function submitConsultation(
  form: HTMLFormElement,
  values: { name: string; contact: string; email: string; locale: Locale },
): Promise<void> {
  const source = readLeadSourceFromForm(form);
  const honeypot =
    form.querySelector<HTMLInputElement>(`input[name="${LEAD_HONEYPOT_FIELD}"]`)?.value ?? "";
  const turnstileToken =
    form.querySelector<HTMLInputElement>("[name='cf-turnstile-response']")?.value ?? "";

  const payload: Record<string, string> = {
    ...values,
    ...source,
    [LEAD_HONEYPOT_FIELD]: honeypot,
  };
  if (turnstileToken) payload.turnstileToken = turnstileToken;

  const response = await fetch("/api/consultation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("consultation_failed");
  }

  window.location.assign(getThanksPath(values.locale));
}
