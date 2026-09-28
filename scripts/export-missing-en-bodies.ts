import fs from "node:fs";
import casesRu from "../src/i18n/cases/cases.ru";
import casesUk from "../src/i18n/cases/cases.uk";

const MISSING = [
  "terminal-borivaje",
  "tbiliso",
  "nadiya-odesa",
  "insb",
  "akula-mama",
  "goshchanochka",
  "sk-energy",
  "cha",
  "novo-development",
];

const ruBySlug = new Map(casesRu.map((c) => [c.slug, c]));
const ukBySlug = new Map(casesUk.map((c) => [c.slug, c]));

for (const slug of MISSING) {
  const ru = ruBySlug.get(slug);
  const uk = ukBySlug.get(slug);
  console.log(slug, "ru body", ru?.body?.length ?? 0, "uk body", uk?.body?.length ?? 0);
}

const outDir = "tmp-missing-en-bodies";
fs.mkdirSync(outDir, { recursive: true });
for (const slug of MISSING) {
  const ru = ruBySlug.get(slug);
  if (!ru) continue;
  fs.writeFileSync(`${outDir}/${slug}.meta.json`, JSON.stringify({
    title: ru.title,
    description: ru.description,
    cover: ru.cover,
    media: ru.media,
  }, null, 2));
  fs.writeFileSync(`${outDir}/${slug}.body.ru.txt`, ru.body ?? "");
}

console.log("wrote", outDir);
