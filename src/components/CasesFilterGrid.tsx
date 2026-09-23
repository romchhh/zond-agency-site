"use client";

import CaseCard from "@/components/CaseCard";
import type { CaseItem } from "@/i18n/cases";
import { CASE_CATEGORY_ORDER, getCaseCategories, type CaseCategory } from "@/i18n/cases/categories";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { useMemo, useState } from "react";

type CasesFilterGridProps = {
  locale: Locale;
  dictionary: Dictionary;
  cases: CaseItem[];
};

type FilterKey = CaseCategory | "all";

export default function CasesFilterGrid({ locale, dictionary, cases }: CasesFilterGridProps) {
  const [active, setActive] = useState<FilterKey>("all");
  const filters = dictionary.cases.filters;

  const filterOptions: Array<{ key: FilterKey; label: string }> = [
    { key: "all", label: filters.all },
    ...CASE_CATEGORY_ORDER.map((key) => ({ key, label: filters[key] })),
  ];

  const filteredCases = useMemo(() => {
    if (active === "all") return cases;
    return cases.filter((caseItem) => getCaseCategories(caseItem.slug).includes(active));
  }, [active, cases]);

  return (
    <>
      <div className="cases-filters" role="group" aria-label={dictionary.cases.filterAria}>
        {filterOptions.map((option) => {
          const isActive = active === option.key;
          return (
            <button
              key={option.key}
              type="button"
              className={`cases-filter${isActive ? " is-active" : ""}`}
              aria-pressed={isActive}
              onClick={() => setActive(option.key)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="projects-grid" id="cases">
        {filteredCases.map((caseItem) => (
          <CaseCard key={caseItem.slug} locale={locale} caseItem={caseItem} compact />
        ))}
      </div>
    </>
  );
}
