#!/usr/bin/env node
/**
 * Verifies service *-seo.ts files: English locale must not spread `uk` or contain Cyrillic.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const FILES = [
  "positioning-seo.ts",
  "identity-seo.ts",
  "naming-seo.ts",
  "communication-seo.ts",
  "brand-character-seo.ts",
  "web-development-seo.ts",
];

const CYRILLIC = /[\u0400-\u04FF]/;

let failed = false;

for (const name of FILES) {
  const path = join(ROOT, "src/i18n", name);
  const source = readFileSync(path, "utf8");
  const enMatch = source.match(/const en: BrandingSeoContent = (\{[\s\S]*?\n\});/);

  if (!enMatch) {
    console.error(`FAIL ${name}: could not find const en block`);
    failed = true;
    continue;
  }

  const enBlock = enMatch[1];
  const issues = [];

  if (enBlock.includes("...uk")) {
    issues.push("uses ...uk spread");
  }
  if (CYRILLIC.test(enBlock)) {
    issues.push("contains Cyrillic");
  }

  if (issues.length) {
    console.error(`FAIL ${name}: ${issues.join(", ")}`);
    failed = true;
  } else {
    console.log(`OK   ${name}`);
  }
}

if (failed) {
  process.exit(1);
}
