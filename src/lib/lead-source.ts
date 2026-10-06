"use client";

import { LEAD_SOURCE_FIELDS, type LeadSourceField } from "@/lib/lead";

const COOKIE = "zond_src";
const TTL = 90 * 24 * 60 * 60;
const TAGS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;
const SEARCH = /(^|\.)(google|bing|yahoo|duckduckgo|yandex|ecosia)\./;
const SOCIAL = /(^|\.)(facebook|instagram|linkedin|telegram|t\.me|youtube|tiktok|twitter|x)\./;

type SourceData = Record<(typeof TAGS)[number], string>;

function empty(): SourceData {
  const data = {} as SourceData;
  for (const tag of TAGS) data[tag] = "";
  return data;
}

function readCookie(): SourceData | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]+)`));
  if (!match?.[1]) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1])) as SourceData;
  } catch {
    return null;
  }
}

function writeCookie(data: SourceData) {
  const base = `${COOKIE}=${encodeURIComponent(JSON.stringify(data))};path=/;max-age=${TTL};SameSite=Lax`;
  document.cookie =
    location.hostname.includes("zond.agency") ? `${base};domain=.zond.agency` : base;
}

function fromUrl(): SourceData {
  const query = new URLSearchParams(location.search);
  const data = empty();
  for (const tag of TAGS) data[tag] = query.get(tag) || "";
  data.gclid = query.get("gclid") || query.get("gbraid") || query.get("wbraid") || "";
  if (data.gclid && !data.utm_source) {
    data.utm_source = "google";
    data.utm_medium = "cpc";
  }
  return data;
}

function fromReferrer(): SourceData | null {
  const data = empty();
  const ref = document.referrer || "";
  if (!ref) return null;

  let host: string;
  try {
    host = new URL(ref).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }

  if (host === location.hostname.replace(/^www\./, "")) return null;
  if (SEARCH.test(host)) {
    data.utm_source = host.split(".")[0] ?? host;
    data.utm_medium = "organic";
  } else if (SOCIAL.test(host)) {
    data.utm_source = host;
    data.utm_medium = "social";
  } else {
    data.utm_source = host;
    data.utm_medium = "referral";
  }
  return data;
}

function resolveSource(): SourceData {
  let saved = readCookie();
  const url = fromUrl();
  const hasTags = TAGS.some((tag) => url[tag]);

  if (hasTags) {
    saved = url;
    writeCookie(saved);
  } else if (!saved) {
    const ref = fromReferrer();
    if (ref) {
      saved = ref;
      writeCookie(saved);
    }
  } else {
    const again = fromReferrer();
    if (again) {
      saved = again;
      writeCookie(saved);
    }
  }

  if (!saved) {
    saved = empty();
    saved.utm_source = "direct";
    saved.utm_medium = "none";
  }

  return saved;
}

function formsIn(root: ParentNode): HTMLFormElement[] {
  if (root instanceof HTMLFormElement) return [root];
  return Array.from(root.querySelectorAll("form"));
}

export function fillLeadSourceFields(root: ParentNode = document) {
  const saved = resolveSource();
  const value = (name: LeadSourceField) => {
    if (name === "page_url") return location.href;
    return saved[name] || "-";
  };

  for (const form of formsIn(root)) {
    for (const name of LEAD_SOURCE_FIELDS) {
      const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (input) input.value = value(name);
    }
  }
}

export function readLeadSourceFromForm(form: HTMLFormElement): Record<LeadSourceField, string> {
  fillLeadSourceFields(form);
  const values = {} as Record<LeadSourceField, string>;
  for (const name of LEAD_SOURCE_FIELDS) {
    const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
    values[name] = input?.value || "-";
  }
  return values;
}
