import StatCounter from "@/components/StatCounter";
import type { Dictionary } from "@/i18n/dictionary";

type HistoryProps = {
  dictionary: Dictionary;
};

export default function History({ dictionary }: HistoryProps) {
  const { mission } = dictionary;

  return (
    <section className="section about-section">
      <div className="wrap">
        <div className="history-grid">
          <div className="history-main">
            <h2 className="section-title">{mission.title}</h2>
            <p className="history-copy">{mission.description}</p>
          </div>
          <div className="history-stats">
            {mission.stats.map((stat) => (
              <div className="stat" key={stat.value}>
                <StatCounter value={stat.value} />
                <span>
                  {stat.label.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
