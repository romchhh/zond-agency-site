import StatCounter from "@/components/StatCounter";
import type { StatItem } from "@/i18n/dictionary";

type StatsRowProps = {
  stats: StatItem[];
  /** Four-column metrics from service page prototypes (naming, identity, etc.). */
  variant?: "default" | "prototype";
};

export default function StatsRow({ stats, variant = "default" }: StatsRowProps) {
  if (variant === "prototype") {
    return (
      <div className="metrics-grid">
        {stats.map((stat) => (
          <div className="metric" key={`${stat.value}-${stat.label}`}>
            <strong>{stat.value}</strong>
            <span>{stat.label.replace(/\n/g, " ")}</span>
          </div>
        ))}
      </div>
    );
  }

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
