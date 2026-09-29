#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "public/assets/services/icons");
const THRESHOLD = 12;
const PADDING = 10;

for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith(".png")).sort()) {
  const abs = path.join(DIR, file);
  const trimmed = await sharp(abs).trim({ threshold: THRESHOLD }).toBuffer();
  await sharp(trimmed)
    .extend({
      top: PADDING,
      bottom: PADDING,
      left: PADDING,
      right: PADDING,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(abs);
  const meta = await sharp(abs).metadata();
  console.log(`${file} → ${meta.width}×${meta.height}`);
}
