import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomBytes } from "node:crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "cms");
const ASSETS_DIR = path.join(process.cwd(), "public", "assets");

export type MediaItem = {
  url: string;
  name: string;
  source: "upload" | "assets";
};

async function walkFiles(dir: string, baseUrl: string, source: MediaItem["source"], out: MediaItem[], depth = 0) {
  if (depth > 6) return;
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkFiles(full, `${baseUrl}/${entry.name}`, source, out, depth + 1);
      continue;
    }
    if (!/\.(png|jpe?g|webp|gif|svg|mp4|webm|avif)$/i.test(entry.name)) continue;
    out.push({
      url: `${baseUrl}/${entry.name}`,
      name: entry.name,
      source,
    });
  }
}

export async function listMedia(limit = 5000): Promise<MediaItem[]> {
  const items: MediaItem[] = [];
  await walkFiles(UPLOAD_DIR, "/uploads/cms", "upload", items);
  await walkFiles(ASSETS_DIR, "/assets", "assets", items);
  // Newest uploads first, then assets alphabetically by url.
  items.sort((a, b) => {
    if (a.source !== b.source) return a.source === "upload" ? -1 : 1;
    return b.url.localeCompare(a.url);
  });
  return items.slice(0, limit);
}

export async function saveUploadedMedia(file: File): Promise<MediaItem> {
  await mkdir(UPLOAD_DIR, { recursive: true });
  const ext = path.extname(file.name || "").toLowerCase() || ".bin";
  const safeExt = /\.(png|jpe?g|webp|gif|svg|mp4|webm|avif)$/i.test(ext) ? ext : ".bin";
  const name = `${Date.now()}-${randomBytes(4).toString("hex")}${safeExt}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, name), buffer);
  return {
    url: `/uploads/cms/${name}`,
    name,
    source: "upload",
  };
}
