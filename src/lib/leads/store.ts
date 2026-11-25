import { mkdir, readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type SiteLeadRecord = {
  id: string;
  source: "site";
  createdAt: string;
  updatedAt: string;
  name: string;
  contact: string;
  email: string;
  interest?: string;
  locale: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  page_url?: string;
  read: boolean;
  telegramMessageId?: number;
};

function storeDir(): string {
  return (
    process.env.LEADS_STORE_DIR?.trim() ||
    path.join(process.cwd(), "data", "leads")
  );
}

function recordPath(id: string): string {
  const safe = id.replace(/[^a-zA-Z0-9_-]/g, "_");
  return path.join(storeDir(), `${safe}.json`);
}

async function ensureStoreDir(): Promise<void> {
  await mkdir(storeDir(), { recursive: true });
}

export async function writeSiteLead(
  input: Omit<SiteLeadRecord, "id" | "source" | "createdAt" | "updatedAt" | "read"> & {
    id?: string;
    read?: boolean;
  },
): Promise<SiteLeadRecord> {
  await ensureStoreDir();
  const now = new Date().toISOString();
  const record: SiteLeadRecord = {
    id: input.id ?? randomUUID(),
    source: "site",
    createdAt: now,
    updatedAt: now,
    name: input.name,
    contact: input.contact,
    email: input.email,
    interest: input.interest,
    locale: input.locale,
    utm_source: input.utm_source,
    utm_medium: input.utm_medium,
    utm_campaign: input.utm_campaign,
    utm_term: input.utm_term,
    utm_content: input.utm_content,
    gclid: input.gclid,
    page_url: input.page_url,
    read: input.read ?? false,
    telegramMessageId: input.telegramMessageId,
  };
  const file = recordPath(record.id);
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify(record, null, 2)}\n`, "utf8");
  await rename(tmp, file);
  return record;
}

export async function listSiteLeads(): Promise<SiteLeadRecord[]> {
  try {
    await ensureStoreDir();
    const files = await readdir(storeDir());
    const records: SiteLeadRecord[] = [];
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      try {
        const raw = await readFile(path.join(storeDir(), file), "utf8");
        records.push(JSON.parse(raw) as SiteLeadRecord);
      } catch {
        // skip corrupt
      }
    }
    return records.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch {
    return [];
  }
}

export async function readSiteLead(id: string): Promise<SiteLeadRecord | null> {
  try {
    const raw = await readFile(recordPath(id), "utf8");
    return JSON.parse(raw) as SiteLeadRecord;
  } catch {
    return null;
  }
}

export async function markSiteLeadRead(id: string, read = true): Promise<SiteLeadRecord | null> {
  const existing = await readSiteLead(id);
  if (!existing) return null;
  const next: SiteLeadRecord = {
    ...existing,
    read,
    updatedAt: new Date().toISOString(),
  };
  const file = recordPath(id);
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  await rename(tmp, file);
  return next;
}
