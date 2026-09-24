#!/usr/bin/env node
/**
 * Lossy resize/compress case media in public/assets/cases.
 * Skips GIFs. Run: node scripts/optimize-case-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CASES = path.join(ROOT, "public/assets/cases");
const MAX_EDGE = 2400;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 80;

const exts = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (exts.has(path.extname(entry.name).toLowerCase())) out.push(p);
  }
  return out;
}

async function optimizeFile(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  const before = fs.statSync(absPath).size;
  const image = sharp(absPath, { failOn: "none" });
  const meta = await image.metadata();
  const needsResize =
    (meta.width ?? 0) > MAX_EDGE || (meta.height ?? 0) > MAX_EDGE;

  let pipeline = image.rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const tmp = `${absPath}.opt`;
  if (ext === ".webp") {
    await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(tmp);
  } else if (ext === ".png") {
    await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tmp);
  } else if (ext === ".jpg" || ext === ".jpeg") {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmp);
  } else {
    return { skipped: true };
  }

  const after = fs.statSync(tmp).size;
  if (after >= before && !needsResize) {
    fs.unlinkSync(tmp);
    return { skipped: true };
  }
  fs.renameSync(tmp, absPath);
  return { before, after, saved: before - after };
}

async function main() {
  const files = walk(CASES);
  let saved = 0;
  let touched = 0;

  for (const file of files) {
    try {
      const result = await optimizeFile(file);
      if (result.skipped) continue;
      touched += 1;
      saved += result.saved;
      const rel = path.relative(ROOT, file);
      console.log(
        `${rel}: ${(result.before / 1024).toFixed(0)}KB → ${(result.after / 1024).toFixed(0)}KB`,
      );
    } catch (error) {
      console.warn(`skip ${file}:`, error.message);
    }
  }

  console.log(
    `\nDone. ${touched} files optimized, ${(saved / 1024 / 1024).toFixed(1)} MB saved.`,
  );
}

main();
