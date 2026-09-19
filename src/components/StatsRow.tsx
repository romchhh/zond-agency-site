import StatCounter from "@/components/StatCounter";
import type { StatItem } from "@/i18n/dictionary";

type StatsRowProps = {
  stats: StatItem[];
};

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="history-stats">
      {stats.map((stat) => (
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
  );
}
