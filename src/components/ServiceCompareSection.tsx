import type { Locale } from "@/i18n/config";
import { serviceCompareTable } from "@/i18n/service-compare";

type ServiceCompareSectionProps = {
  locale: Locale;
};

export default function ServiceCompareSection({ locale }: ServiceCompareSectionProps) {
  const compare = serviceCompareTable[locale];

  return (
    <section className="sp-section sp-section--compare" aria-labelledby="service-compare-title">
      <div className="wrap">
        <div className="logo-compare-card">
          <h2 id="service-compare-title" className="logo-compare-title">
            {compare.compareTitle}
          </h2>
          <div className="logo-compare-wrap">
            <table className="logo-compare-table">
              <thead>
                <tr>
                  {compare.compareColumns.map((column, index) => (
                    <th
                      key={column}
                      scope="col"
                      className={index === 1 ? "is-accent" : undefined}
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
