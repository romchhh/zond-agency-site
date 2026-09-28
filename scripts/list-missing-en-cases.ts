import casesEn from "../src/i18n/cases/cases.en";
import casesRu from "../src/i18n/cases/cases.ru";
import casesUk from "../src/i18n/cases/cases.uk";

const enSlugs = new Set(casesEn.map((c) => c.slug));
const missing = casesUk.filter((c) => !enSlugs.has(c.slug)).map((c) => c.slug);
console.log("missing:", missing.join(", "));

const ruBySlug = new Map(casesRu.map((c) => [c.slug, c]));
for (const slug of missing) {
  const ru = ruBySlug.get(slug);
  console.log(slug, ru ? "has RU" : "NO RU");
}
