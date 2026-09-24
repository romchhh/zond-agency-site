import type { Locale } from "@/i18n/config";
import { serviceCompareTable } from "@/i18n/service-compare";

type ServiceCompareSectionProps = {
  locale: Locale;
};

function CompareCheckIcon() {
  return (
    <svg className="logo-compare-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M6 10.2 8.6 12.8 14 7.4"
        stroke="#111"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceCompareSection({ locale }: ServiceCompareSectionProps) {
  const compare = serviceCompareTable[locale];
  const [, zondLabel, freelanceLabel, templateLabel] = compare.compareColumns;

  return (
    <section className="sp-section sp-section--compare" aria-labelledby="service-compare-title">
      <div className="wrap">
        <div className="logo-compare-card">
          <h2 id="service-compare-title" className="logo-compare-title">
            {compare.compareTitle}
          </h2>
          <div className="logo-compare-stack" aria-label={compare.compareTitle}>
            <div className="logo-compare-legend" aria-hidden="true">
              <span className="logo-compare-legend-zond">{zondLabel}</span>
              <span>{freelanceLabel}</span>
              <span>{templateLabel}</span>
            </div>
            <div className="logo-compare-stack-list">
              {compare.compareRows.map((row, index) => (
                <article className="logo-compare-stack-item" key={row.criterion}>
                  <div className="logo-compare-stack-top">
                    <span className="logo-compare-stack-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="logo-compare-stack-criterion">{row.criterion}</h3>
                  </div>
                  <div className="logo-compare-stack-zond">
                    <div className="logo-compare-stack-zond-label">
                      <CompareCheckIcon />
                      <span>{zondLabel}</span>
                    </div>
                    <p>{row.zond}</p>
                  </div>
                  <div className="logo-compare-stack-vs">
                    <div className="logo-compare-stack-other">
                      <span>{freelanceLabel}</span>
                      <p>{row.freelance}</p>
                    </div>
                    <div className="logo-compare-stack-other">
                      <span>{templateLabel}</span>
                      <p>{row.generator}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
