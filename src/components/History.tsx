import StatsRow from "@/components/StatsRow";
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
          <StatsRow stats={mission.stats} />
        </div>
      </div>
    </section>
  );
}
