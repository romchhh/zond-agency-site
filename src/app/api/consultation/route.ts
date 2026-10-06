import { NextResponse } from "next/server";
import { isLocale, localeMeta } from "@/i18n/config";
import {
  isPhoneContact,
  isValidContact,
  isValidEmail,
  telegramHandle,
} from "@/lib/input-masks";
import { isHoneypotTrap, LEAD_SOURCE_FIELDS } from "@/lib/lead";

type LeadBody = {
  name?: string;
  contact?: string;
  email?: string;
  locale?: string;
  website?: string;
  zond_hp?: string;
  turnstileToken?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  page_url?: string;
};

function dash(value: unknown): string {
  const text = typeof value === "string" ? value.trim() : "";
  return text || "-";
}

function isBlank(value: string | undefined): boolean {
  const text = value?.trim() ?? "";
  return !text || text === "-";
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function localeLabel(locale: string): string {
  return isLocale(locale) ? localeMeta[locale].label : locale;
}

function contactMarkup(contact: string): string {
  const safe = escapeHtml(contact);
  if (isPhoneContact(contact)) {
    const digits = contact.replace(/\D/g, "");
    return `<a href="tel:+${digits}">${safe}</a>`;
  }
  const handle = telegramHandle(contact);
  return `<a href="https://t.me/${encodeURIComponent(handle)}">${safe.startsWith("@") ? safe : `@${escapeHtml(handle)}`}</a>`;
}

function validityLine(payload: Record<string, string>): string {
  const contactOk = isValidContact(payload.contact);
  const contactType = isPhoneContact(payload.contact) ? "телефон ок" : "Telegram ок";
  const email = payload.email?.trim();
  const emailPart = !email || email === "-" ? "email немає" : isValidEmail(email) ? "email ок" : "email сумнівний";
  const source = dash(payload.utm_source);
  const sourcePart = source === "direct" || source === "-" ? "джерело: прямий захід" : `джерело: ${source}`;
  return [contactOk ? contactType : "контакт сумнівний", emailPart, sourcePart].join(" · ");
}

function formatKyivTime(date = new Date()): string {
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

function formatMessage(payload: Record<string, string>): string {
  const email = dash(payload.email);
  const emailLine =
    email === "-"
      ? `<b>Email:</b> -`
      : `<b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`;
  const contactType = isPhoneContact(payload.contact) ? "телефон" : "Telegram";

  const lines = [
    `<b>Нова заявка ZOND</b> · ${escapeHtml(formatKyivTime())}`,
    `<b>Ім'я:</b> ${escapeHtml(payload.name)}`,
    `<b>Контакт (${escapeHtml(contactType)}):</b> ${contactMarkup(payload.contact)}`,
    emailLine,
    `<b>Мова:</b> ${escapeHtml(localeLabel(payload.locale))}`,
    `<b>Валідність:</b> ${escapeHtml(validityLine(payload))}`,
    `<b>utm_source:</b> ${escapeHtml(dash(payload.utm_source))}`,
    `<b>utm_medium:</b> ${escapeHtml(dash(payload.utm_medium))}`,
    `<b>utm_campaign:</b> ${escapeHtml(dash(payload.utm_campaign))}`,
    `<b>utm_term:</b> ${escapeHtml(dash(payload.utm_term))}`,
    `<b>utm_content:</b> ${escapeHtml(dash(payload.utm_content))}`,
    `<b>gclid:</b> ${escapeHtml(dash(payload.gclid))}`,
    isBlank(payload.page_url)
      ? `<b>page_url:</b> -`
      : `<b>page_url:</b> <a href="${escapeHtml(payload.page_url)}">${escapeHtml(payload.page_url)}</a>`,
  ];

  return lines.join("\n");
}

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  if (!secret || !siteKey) return true;
  if (!token) return false;

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (ip) body.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (isHoneypotTrap(body as Record<string, unknown>)) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const contact = body.contact?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const locale = body.locale;

  if (
    name.length < 2 ||
    !isValidContact(contact) ||
    (email.length > 0 && !isValidEmail(email)) ||
    !locale ||
    !isLocale(locale)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for");
  const turnstileOk = await verifyTurnstile(body.turnstileToken ?? "", ip?.split(",")[0]?.trim() ?? null);
  if (!turnstileOk) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const payload: Record<string, string> = {
    name,
    contact,
    email,
    locale,
  };
  for (const field of LEAD_SOURCE_FIELDS) {
    payload[field] = dash(body[field]);
  }

  const text = formatMessage(payload);
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const telegramChat = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!telegramToken || !telegramChat) {
    console.error("consultation: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const chatId = /^-?\d+$/.test(telegramChat) ? Number(telegramChat) : telegramChat;

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );
    const telegramResult = (await telegramResponse.json()) as {
      ok?: boolean;
      description?: string;
    };
    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error("consultation: telegram send failed", telegramResult.description);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (error) {
    console.error("consultation: telegram request failed", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
