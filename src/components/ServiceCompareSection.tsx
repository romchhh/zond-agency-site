import type { Locale } from "@/i18n/config";
import {
  type ServiceCompareContent,
  serviceCompareTable,
} from "@/i18n/service-compare";

type ServiceCompareSectionProps = {
  locale: Locale;
  compare?: ServiceCompareContent;
};

const TAB_GROUP = "service-compare-column";

function mobileTabHint(locale: Locale): string {
  const byLocale: Record<Locale, string> = {
    uk: "Оберіть варіант — нижче відповіді по всіх критеріях.",
    en: "Pick an option — answers for every criterion below.",
    ru: "Выберите вариант — ниже ответы по всем критериям.",
  };
  return byLocale[locale];
}

export default function ServiceCompareSection({
  locale,
  compare: compareOverride,
}: ServiceCompareSectionProps) {
  const compare = compareOverride ?? serviceCompareTable[locale];
  const [, zondLabel, freelanceLabel, templateLabel] = compare.compareColumns;

  return (
    <section className="sp-section sp-section--compare" aria-labelledby="service-compare-title">
      <div className="wrap">
        <div className="logo-compare-card">
          <h2 id="service-compare-title" className="logo-compare-title">
            {compare.compareTitle}
          </h2>

          <div className="logo-compare-mobile" aria-label={compare.compareTitle}>
            <p className="logo-compare-mobile-hint">{mobileTabHint(locale)}</p>
            <div className="logo-compare-mobile-tabs" role="tablist" aria-label={compare.compareTitle}>
              <input
                type="radio"
                name={TAB_GROUP}
                id={`${TAB_GROUP}-zond`}
                className="logo-compare-mobile-tab-input"
                defaultChecked
              />
              <input
                type="radio"
                name={TAB_GROUP}
                id={`${TAB_GROUP}-freelance`}
                className="logo-compare-mobile-tab-input"
              />
              <input
                type="radio"
                name={TAB_GROUP}
                id={`${TAB_GROUP}-template`}
                className="logo-compare-mobile-tab-input"
              />
              <label
                htmlFor={`${TAB_GROUP}-zond`}
                className="logo-compare-mobile-tab logo-compare-mobile-tab--zond"
                role="tab"
                aria-controls="service-compare-mobile-rows"
              >
                {zondLabel}
              </label>
              <label
                htmlFor={`${TAB_GROUP}-freelance`}
                className="logo-compare-mobile-tab"
                role="tab"
                aria-controls="service-compare-mobile-rows"
              >
                {freelanceLabel}
              </label>
              <label
                htmlFor={`${TAB_GROUP}-template`}
                className="logo-compare-mobile-tab"
                role="tab"
                aria-controls="service-compare-mobile-rows"
              >
                {templateLabel}
              </label>
            </div>

            <ol
              id="service-compare-mobile-rows"
              className="logo-compare-mobile-rows"
              role="tabpanel"
            >
              {compare.compareRows.map((row, index) => (
                <li className="logo-compare-mobile-row" key={row.criterion}>
                  <div className="logo-compare-mobile-row-head">
                    <span className="logo-compare-mobile-row-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="logo-compare-mobile-row-title">{row.criterion}</h3>
                  </div>
                  <p className="logo-compare-mobile-answer logo-compare-mobile-answer--zond">
                    {row.zond}
                  </p>
                  <p className="logo-compare-mobile-answer logo-compare-mobile-answer--freelance">
                    {row.freelance}
                  </p>
                  <p className="logo-compare-mobile-answer logo-compare-mobile-answer--template">
                    {row.generator}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="logo-compare-wrap">
            <table className="logo-compare-table">
              <thead>
                <tr>
                  {compare.compareColumns.map((column, colIndex) => (
                    <th
                      key={column}
                      scope="col"
                      className={colIndex === 1 ? "is-accent" : undefined}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.compareRows.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td className="is-accent">{row.zond}</td>
                    <td>{row.freelance}</td>
                    <td>{row.generator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
