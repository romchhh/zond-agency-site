import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { MetaLeadRecord } from "./types";

function storeDir(): string {
  return (
    process.env.META_LEADS_STORE_DIR?.trim() ||
    path.join(process.cwd(), "data", "meta-leads")
  );
}

function recordPath(leadgenId: string): string {
  const safe = leadgenId.replace(/[^a-zA-Z0-9_-]/g, "_");
  return path.join(storeDir(), `${safe}.json`);
}

async function ensureStoreDir(): Promise<void> {
  await mkdir(storeDir(), { recursive: true });
}

export async function readLeadRecord(
  leadgenId: string,
): Promise<MetaLeadRecord | null> {
  try {
    const raw = await readFile(recordPath(leadgenId), "utf8");
    return JSON.parse(raw) as MetaLeadRecord;
  } catch {
    return null;
  }
}

export async function writeLeadRecord(record: MetaLeadRecord): Promise<void> {
  await ensureStoreDir();
  const file = recordPath(record.leadgenId);
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify(record, null, 2)}\n`, "utf8");
  await rename(tmp, file);
}

/**
 * Claim a lead for processing. Returns null if already sent/ignored
 * or another worker holds a fresh processing lock.
 */
export async function claimLeadForProcessing(input: {
  leadgenId: string;
  pageId?: string;
  formId?: string;
}): Promise<MetaLeadRecord | null> {
  const existing = await readLeadRecord(input.leadgenId);
  const now = new Date().toISOString();

  if (existing?.status === "sent" || existing?.status === "ignored") {
    return null;
  }

  if (existing?.status === "processing") {
    const updatedAt = Date.parse(existing.updatedAt);
    const lockMs = Number(process.env.META_LEAD_PROCESSING_LOCK_MS ?? "120000");
    if (Number.isFinite(updatedAt) && Date.now() - updatedAt < lockMs) {
      return null;
    }
  }

  if (existing?.status === "ambiguous") {
    // Do not blindly retry after an ambiguous timeout.
    return null;
  }

  const record: MetaLeadRecord = {
    leadgenId: input.leadgenId,
    status: "processing",
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    attempts: existing?.attempts ?? 0,
    pageId: input.pageId ?? existing?.pageId,
    formId: input.formId ?? existing?.formId,
    telegramMessageId: existing?.telegramMessageId,
    lastError: existing?.lastError,
    reason: existing?.reason,
  };

  await writeLeadRecord(record);
  return record;
}
