import StatCounter from "@/components/StatCounter";
import { clients, stats } from "@/data/content";

const marqueeClients = [...clients, ...clients];

export default function History() {
  return (
    <section className="section about-section">
      <div className="wrap">
        <div className="history-grid">
          <div className="history-main">
            <h2 className="section-title">Історія та переваги</h2>
            <p className="history-copy">
              ZOND — це команда стратегів, дизайнерів і креативних мислителів,
              яка з 2019 року створює бренди, що підсилюють ваш бізнес. Ми
              віримо, що сильний бренд — це більше, ніж красивий візуал. Це
              стратегічна перевага, яка відкриває нові горизонти.
            </p>
            <a className="link-accent" href="#">
              Більше про нас <span aria-hidden="true">→</span>
            </a>
          </div>
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
        </div>

        <div className="clients-block">
          <div className="clients-head">
            <p className="clients-trust">нам довіряють</p>
          </div>

          <div className="clients-marquee" aria-label="Наші клієнти">
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
