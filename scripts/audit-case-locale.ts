import { getCases } from "../src/i18n/cases/index";

const CYRILLIC = /[\u0400-\u04FF]/;

function audit(locale: "en" | "ru", label: string) {
  const cases = getCases(locale);
  const issues: string[] = [];
  for (const c of cases) {
    if (CYRILLIC.test(c.title)) issues.push(`${c.slug}: cyrillic title "${c.title.slice(0, 40)}"`);
    if (CYRILLIC.test(c.description)) issues.push(`${c.slug}: cyrillic description`);
    if (!c.blocks && c.body && CYRILLIC.test(c.body.slice(0, 500))) {
      const hasEnHeaders = /### (Client|Goals|Developed)/.test(c.body);
      const hasRuHeaders = /### (Клиент|Задачи|Разработали)/.test(c.body);
      const hasUkHeaders = /### (Клієнт|Задачі|Розробили)/.test(c.body);
      if (locale === "en" && (hasUkHeaders || hasRuHeaders || (!hasEnHeaders && CYRILLIC.test(c.body)))) {
        issues.push(`${c.slug}: legacy body likely not EN`);
      }
      if (locale === "ru" && hasUkHeaders) {
        issues.push(`${c.slug}: legacy body has UK headers`);
      }
    }
    if (c.tagline && CYRILLIC.test(c.tagline) && locale === "en") {
      issues.push(`${c.slug}: cyrillic tagline`);
    }
    if (c.serviceTag && CYRILLIC.test(c.serviceTag) && locale === "en") {
      issues.push(`${c.slug}: cyrillic serviceTag`);
    }
  }
  console.log(`\n=== ${label} (${issues.length} issues) ===`);
  issues.slice(0, 40).forEach((i) => console.log(i));
  if (issues.length > 40) console.log(`... +${issues.length - 40} more`);
}

audit("en", "English");
audit("ru", "Russian");
