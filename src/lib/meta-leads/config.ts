/** Meta Lead Ads — page/form allowlist and Graph settings. Secrets stay in env only. */

export const META_PAGE_ID = "101669778370346";
export const META_AD_ACCOUNT_ID = "349069052926191";

/** Placeholder until the agreed form is published — override via META_LEAD_FORM_ID. */
export const META_LEAD_FORM_ID_PLACEHOLDER = "PENDING_FORM_ID";

export function getMetaGraphApiVersion(): string {
  return process.env.META_GRAPH_API_VERSION?.trim() || "v22.0";
}

export function getMetaLeadFormId(): string {
  return process.env.META_LEAD_FORM_ID?.trim() || META_LEAD_FORM_ID_PLACEHOLDER;
}

export function getMetaPageAccessToken(): string | null {
  return process.env.META_PAGE_ACCESS_TOKEN?.trim() || null;
}

export function getMetaAppSecret(): string | null {
  return process.env.META_APP_SECRET?.trim() || null;
}

export function getMetaWebhookVerifyToken(): string | null {
  return process.env.META_WEBHOOK_VERIFY_TOKEN?.trim() || null;
}

export function getMetaTestFormIds(): Set<string> {
  const raw = process.env.META_LEAD_TEST_FORM_IDS?.trim() ?? "";
  return new Set(
    raw
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );
}

export function isMetaLeadFormConfigured(): boolean {
  const formId = getMetaLeadFormId();
  return Boolean(formId && formId !== META_LEAD_FORM_ID_PLACEHOLDER);
}

export function isAllowedMetaPage(pageId: string): boolean {
  return pageId === META_PAGE_ID;
}

export function isAllowedMetaForm(formId: string): boolean {
  if (getMetaTestFormIds().has(formId)) return true;
  if (!isMetaLeadFormConfigured()) return false;
  return formId === getMetaLeadFormId();
}
