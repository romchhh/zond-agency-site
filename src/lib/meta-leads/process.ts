import { sendTelegramMessage } from "@/lib/telegram";
import {
  getMetaPageAccessToken,
  isAllowedMetaForm,
  isAllowedMetaPage,
  isMetaLeadFormConfigured,
} from "./config";
import {
  formatMetaLeadTelegramMessage,
  formatMetaOpsAlert,
  parseMetaLead,
} from "./format";
import { fetchAdNames, fetchMetaLead } from "./graph";
import { claimLeadForProcessing, writeLeadRecord } from "./store";
import type { MetaLeadgenValue, MetaLeadRecord } from "./types";

const MAX_ATTEMPTS = Number(process.env.META_LEAD_MAX_ATTEMPTS ?? "3");
const RETRY_DELAYS_MS = [0, 800, 2500];

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendOpsAlert(message: string): Promise<void> {
  const result = await sendTelegramMessage({
    text: formatMetaOpsAlert(message),
  });
  if (!result.ok) {
    console.error("meta-leads: ops alert failed", {
      error: result.error,
      at: new Date().toISOString(),
    });
  }
}

async function mark(
  record: MetaLeadRecord,
  patch: Partial<MetaLeadRecord>,
): Promise<MetaLeadRecord> {
  const next: MetaLeadRecord = {
    ...record,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  await writeLeadRecord(next);
  return next;
}

export async function processMetaLeadgenEvent(
  value: MetaLeadgenValue,
): Promise<{ handled: boolean; reason?: string }> {
  const leadgenId = value.leadgen_id?.trim();
  const pageId = value.page_id?.trim() ?? "";
  const formId = value.form_id?.trim() ?? "";

  if (!leadgenId) {
    return { handled: false, reason: "missing_leadgen_id" };
  }

  if (!isAllowedMetaPage(pageId)) {
    console.info("meta-leads: ignored page", {
      leadgenId,
      pageId,
      at: new Date().toISOString(),
    });
    return { handled: false, reason: "page_not_allowed" };
  }

  if (!isMetaLeadFormConfigured() || !isAllowedMetaForm(formId)) {
    console.info("meta-leads: ignored form", {
      leadgenId,
      formId,
      at: new Date().toISOString(),
    });
    return { handled: false, reason: "form_not_allowed" };
  }

  if (!getMetaPageAccessToken()) {
    console.error("meta-leads: missing page access token", {
      leadgenId,
      at: new Date().toISOString(),
    });
    await sendOpsAlert(
      `Втрачено доступ до Meta Graph (немає токена). leadgen_id=${leadgenId}`,
    );
    return { handled: false, reason: "missing_token" };
  }

  const claimed = await claimLeadForProcessing({ leadgenId, pageId, formId });
  if (!claimed) {
    console.info("meta-leads: duplicate or locked", {
      leadgenId,
      at: new Date().toISOString(),
    });
    return { handled: false, reason: "duplicate_or_locked" };
  }

  let record = claimed;
  let lastError = "unknown";

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const delay = RETRY_DELAYS_MS[Math.min(attempt - 1, RETRY_DELAYS_MS.length - 1)];
    if (delay > 0) await sleep(delay);

    record = await mark(record, { attempts: attempt, status: "processing" });

    try {
      const payload = await fetchMetaLead(leadgenId);
      let campaignName = "не визначено";
      let adName = "не визначено";
      const adId = payload.ad_id?.trim();
      if (adId) {
        const names = await fetchAdNames(adId);
        campaignName = names.campaignName;
        adName = names.adName;
      }

      const parsed = parseMetaLead({
        leadgenId,
        pageId,
        formId,
        payload,
        campaignName,
        adName,
      });

      const telegram = await sendTelegramMessage({
        text: formatMetaLeadTelegramMessage(parsed),
      });

      if (telegram.ok) {
        await mark(record, {
          status: "sent",
          telegramMessageId: telegram.messageId,
          lastError: undefined,
          reason: undefined,
        });
        console.info("meta-leads: delivered", {
          leadgenId,
          attempt,
          telegramMessageId: telegram.messageId,
          at: new Date().toISOString(),
        });
        return { handled: true };
      }

      lastError = telegram.error;
      if (telegram.ambiguous) {
        await mark(record, {
          status: "ambiguous",
          lastError,
          reason: "telegram_ambiguous",
        });
        console.error("meta-leads: ambiguous delivery", {
          leadgenId,
          attempt,
          error: lastError,
          at: new Date().toISOString(),
        });
        await sendOpsAlert(
          `Невизначений результат доставки в Telegram (тайм-аут/неповна відповідь). leadgen_id=${leadgenId}. Сліпих повторів немає.`,
        );
        return { handled: false, reason: "ambiguous" };
      }

      if (!telegram.retryable || attempt >= MAX_ATTEMPTS) {
        await mark(record, {
          status: "failed",
          lastError,
          reason: "telegram_failed",
        });
        console.error("meta-leads: telegram failed", {
          leadgenId,
          attempt,
          error: lastError,
          at: new Date().toISOString(),
        });
        await sendOpsAlert(
          `Остаточна помилка доставки Meta-ліда в Telegram. leadgen_id=${leadgenId}.`,
        );
        return { handled: false, reason: "telegram_failed" };
      }
    } catch (error) {
      const err = error as Error & { retryable?: boolean };
      lastError = err.message || "process_failed";
      const retryable = Boolean(err.retryable);

      if (!retryable || attempt >= MAX_ATTEMPTS) {
        const accessLost =
          /access token|OAuthException|(#190)|permission/i.test(lastError);
        await mark(record, {
          status: "failed",
          lastError,
          reason: accessLost ? "access_lost" : "graph_failed",
        });
        console.error("meta-leads: process failed", {
          leadgenId,
          attempt,
          error: lastError,
          at: new Date().toISOString(),
        });
        await sendOpsAlert(
          accessLost
            ? `Втрачено доступ Meta до лідів. leadgen_id=${leadgenId}.`
            : `Остаточна помилка обробки Meta-ліда. leadgen_id=${leadgenId}.`,
        );
        return { handled: false, reason: accessLost ? "access_lost" : "graph_failed" };
      }

      console.warn("meta-leads: retryable failure", {
        leadgenId,
        attempt,
        error: lastError,
        at: new Date().toISOString(),
      });
    }
  }

  await mark(record, { status: "failed", lastError, reason: "max_attempts" });
  return { handled: false, reason: "max_attempts" };
}
