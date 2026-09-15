import StatCounter from "@/components/StatCounter";
import { clients } from "@/i18n/clients";
import type { Dictionary } from "@/i18n/dictionary";
const marqueeClients = [...clients, ...clients];

type HistoryProps = {
  dictionary: Dictionary;
};

export default function History({ dictionary }: HistoryProps) {
  const { mission, a11y } = dictionary;

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

        <div className="clients-block">
          <div className="clients-head">
            <p className="clients-trust">{mission.clientsTrust}</p>
          </div>

          <div className="clients-marquee" aria-label={a11y.clients}>
            <div className="clients-track">
              {marqueeClients.map((client, index) => (
                <div
                  className="client-logo"
                  key={`${client.name}-${index}`}
                  aria-hidden={index >= clients.length}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
