import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

export type DailyAnalytics = {
  date: string;
  pageviews: number;
  visitors: number;
  paths: Record<string, number>;
  visitorKeys: string[];
};

function storeDir(): string {
  return (
    process.env.ANALYTICS_STORE_DIR?.trim() ||
    path.join(process.cwd(), "data", "analytics")
  );
}

function dayPath(date: string): string {
  return path.join(storeDir(), `${date}.json`);
}

function todayKyiv(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Kyiv",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

async function ensureStoreDir(): Promise<void> {
  await mkdir(storeDir(), { recursive: true });
}

async function readDay(date: string): Promise<DailyAnalytics> {
  try {
    const raw = await readFile(dayPath(date), "utf8");
    return JSON.parse(raw) as DailyAnalytics;
  } catch {
    return { date, pageviews: 0, visitors: 0, paths: {}, visitorKeys: [] };
  }
}

async function writeDay(data: DailyAnalytics): Promise<void> {
  await ensureStoreDir();
  const file = dayPath(data.date);
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  await rename(tmp, file);
}

export function visitorKey(ip: string | null, ua: string | null): string {
  const raw = `${todayKyiv()}|${ip ?? ""}|${ua ?? ""}`;
  return createHash("sha256").update(raw).digest("hex").slice(0, 16);
}

export async function recordPageview(input: {
  path: string;
  ip: string | null;
  ua: string | null;
}): Promise<void> {
  const date = todayKyiv();
  const data = await readDay(date);
  const cleanPath = input.path.slice(0, 300) || "/";
  data.pageviews += 1;
  data.paths[cleanPath] = (data.paths[cleanPath] ?? 0) + 1;

  const key = visitorKey(input.ip, input.ua);
  if (!data.visitorKeys.includes(key)) {
    data.visitorKeys.push(key);
    // Cap stored keys to keep files small
    if (data.visitorKeys.length > 5000) {
      data.visitorKeys = data.visitorKeys.slice(-4000);
    }
    data.visitors = data.visitorKeys.length;
  } else {
    data.visitors = data.visitorKeys.length;
  }

  await writeDay(data);
}

export async function listAnalyticsDays(days = 30): Promise<DailyAnalytics[]> {
  try {
    await ensureStoreDir();
    const files = await readdir(storeDir());
    const records: DailyAnalytics[] = [];
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      try {
        const raw = await readFile(path.join(storeDir(), file), "utf8");
        const parsed = JSON.parse(raw) as DailyAnalytics;
        // Strip visitorKeys from API responses later; keep for counting
        records.push(parsed);
      } catch {
        // skip
      }
    }
    return records
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-days);
  } catch {
    return [];
  }
}

export function publicAnalyticsDay(day: DailyAnalytics): Omit<DailyAnalytics, "visitorKeys"> {
  const { visitorKeys: _keys, ...rest } = day;
  return {
    ...rest,
    visitors: day.visitors || day.visitorKeys?.length || 0,
  };
}
