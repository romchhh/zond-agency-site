import { getMetaTestFormIds } from "./config";
import type { MetaLeadPayload, ParsedMetaLead } from "./types";

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatKyivTime(date: Date): string {
  const stamp = new Intl.DateTimeFormat("uk-UA", {
    timeZone: "Europe/Kyiv",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
  return `${stamp} (Київ)`;
}

function fieldMap(payload: MetaLeadPayload): Map<string, string> {
  const map = new Map<string, string>();
  for (const item of payload.field_data ?? []) {
    const key = item.name?.trim().toLowerCase();
    if (!key) continue;
    const value = item.values?.find((v) => typeof v === "string" && v.trim())?.trim();
    if (value) map.set(key, value);
  }
  return map;
}

function pickField(map: Map<string, string>, aliases: string[]): string {
  for (const alias of aliases) {
    const value = map.get(alias.toLowerCase());
    if (value) return value;
  }
  return "не визначено";
}

function resolvePlatform(
  raw: string | undefined,
): ParsedMetaLead["platform"] {
  if (!raw) return "не визначено";
  const normalized = raw.trim().toLowerCase();
  if (normalized === "fb" || normalized === "facebook") return "Facebook";
  if (normalized === "ig" || normalized === "instagram") return "Instagram";
  return "не визначено";
}

function looksLikeTestLead(
  formId: string,
  name: string,
  service: string,
): boolean {
  if (getMetaTestFormIds().has(formId)) return true;
  const blob = `${name} ${service}`.toLowerCase();
  return /\btest\b|тест|тестова/.test(blob);
}

export function parseMetaLead(input: {
  leadgenId: string;
  pageId: string;
  formId: string;
  payload: MetaLeadPayload;
  campaignName?: string;
  adName?: string;
}): ParsedMetaLead {
  const map = fieldMap(input.payload);
  const name = pickField(map, [
    "full_name",
    "full name",
    "name",
    "ім'я",
    "імя",
    "имя",
  ]);
  const phone = pickField(map, [
    "phone_number",
    "phone",
    "телефон",
    "mobile_phone",
  ]);
  const service = pickField(map, [
    "яка послуга вас цікавить?",
    "яка послуга вас цікавить",
    "послуга",
    "service",
    "which_service",
  ]);

  const created =
    input.payload.created_time != null
      ? new Date(input.payload.created_time)
      : new Date();

  return {
    leadgenId: input.leadgenId,
    pageId: input.pageId,
    formId: input.formId || input.payload.form_id || "",
    name,
    phone,
    service,
    platform: resolvePlatform(input.payload.platform),
    campaignName: input.campaignName?.trim() || "не визначено",
    adName: input.adName?.trim() || "не визначено",
    isOrganic: Boolean(input.payload.is_organic),
    isTest: looksLikeTestLead(input.formId, name, service),
    createdTime: Number.isNaN(created.getTime()) ? new Date() : created,
  };
}

export function formatMetaLeadTelegramMessage(lead: ParsedMetaLead): string {
  const badges: string[] = [];
  if (lead.isTest) badges.push("ТЕСТ · НЕ ВРАХОВУВАТИ");
  if (lead.isOrganic) badges.push("ОРГАНІЧНА");

  const header = ["Нова заявка ZOND · META · ЛІД-ФОРМА", ...badges]
    .map(escapeHtml)
    .join(" · ");

  const phoneDigits = lead.phone.replace(/\D/g, "");
  const phoneLine =
    phoneDigits.length >= 9
      ? `<b>Телефон:</b> <a href="tel:+${phoneDigits}">${escapeHtml(lead.phone)}</a>`
      : `<b>Телефон:</b> ${escapeHtml(lead.phone)}`;

  const lines = [
    `<b>${header}</b>`,
    `<b>Дата:</b> ${escapeHtml(formatKyivTime(lead.createdTime))}`,
    `<b>Запит:</b> ${escapeHtml(lead.service)}`,
    `<b>Майданчик:</b> ${escapeHtml(lead.platform)}`,
    `<b>Ім'я:</b> ${escapeHtml(lead.name)}`,
    phoneLine,
    `<b>Кампанія:</b> ${escapeHtml(lead.campaignName)}`,
    `<b>Оголошення:</b> ${escapeHtml(lead.adName)}`,
    `<b>ID ліда:</b> ${escapeHtml(lead.leadgenId)}`,
  ];

  return lines.join("\n");
}

export function formatMetaOpsAlert(message: string): string {
  return [
    `<b>ZOND · META · СЛУЖБОВЕ</b>`,
    escapeHtml(message),
    `<b>Час:</b> ${escapeHtml(formatKyivTime(new Date()))}`,
  ].join("\n");
}
