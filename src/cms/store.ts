import { mkdir, readdir, readFile, rename, writeFile } from "node:fs/promises";
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

type CacheEntry = { mtimeMs: number; data: unknown };

const cache = new Map<string, CacheEntry>();

export function cmsRootDir(): string {
  return (
    process.env.CMS_STORE_DIR?.trim() ||
    path.join(process.cwd(), "data", "cms", "content")
  );
}

function docPath(docId: string): string {
  const safe = docId.replace(/[^a-zA-Z0-9/_-]/g, "_").replace(/\.\./g, "");
  return path.join(cmsRootDir(), `${safe}.json`);
}

function mediaVersionPath(): string {
  return path.join(path.dirname(cmsRootDir()), "media-version");
}

export function readMediaVersion(): string {
  try {
    return readFileSync(mediaVersionPath(), "utf8").trim() || "0";
  } catch {
    return "0";
  }
}

function bumpMediaVersion(): void {
  const file = mediaVersionPath();
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, String(Date.now()));
}

export function invalidateCmsCache(docId?: string): void {
  if (docId) cache.delete(docId);
  else cache.clear();
}

function readFresh<T>(docId: string, raw: string, mtimeMs: number): T {
  const data = JSON.parse(raw) as T;
  cache.set(docId, { mtimeMs, data });
  return data;
}

export function readCmsDocSync<T>(docId: string): T | null {
  const file = docPath(docId);
  if (!existsSync(file)) return null;
  try {
    const mtimeMs = statSync(file).mtimeMs;
    const hit = cache.get(docId);
    if (hit && hit.mtimeMs === mtimeMs) return hit.data as T;
    return readFresh<T>(docId, readFileSync(file, "utf8"), mtimeMs);
  } catch {
    return null;
  }
}

export async function readCmsDoc<T>(docId: string): Promise<T | null> {
  const file = docPath(docId);
  try {
    const mtimeMs = statSync(file).mtimeMs;
    const hit = cache.get(docId);
    if (hit && hit.mtimeMs === mtimeMs) return hit.data as T;
    return readFresh<T>(docId, await readFile(file, "utf8"), mtimeMs);
  } catch {
    return null;
  }
}

export async function writeCmsDoc(docId: string, data: unknown): Promise<void> {
  const file = docPath(docId);
  await mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  await rename(tmp, file);
  cache.set(docId, { mtimeMs: statSync(file).mtimeMs, data });
  bumpMediaVersion();
}

export async function listCmsDocIds(): Promise<string[]> {
  const root = cmsRootDir();
  if (!existsSync(root)) return [];

  const ids: string[] = [];

  async function walk(dir: string, prefix: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const next = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(next, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        const base = entry.name.replace(/\.json$/, "");
        ids.push(prefix ? `${prefix}/${base}` : base);
      }
    }
  }

  await walk(root, "");
  return ids.sort();
}

export function cmsDocExists(docId: string): boolean {
  return existsSync(docPath(docId));
}

export function listCmsDocIdsSync(): string[] {
  const root = cmsRootDir();
  if (!existsSync(root)) return [];
  const ids: string[] = [];

  function walk(dir: string, prefix: string) {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const next = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(next, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        const base = entry.name.replace(/\.json$/, "");
        ids.push(prefix ? `${prefix}/${base}` : base);
      }
    }
  }

  walk(root, "");
  return ids.sort();
}
