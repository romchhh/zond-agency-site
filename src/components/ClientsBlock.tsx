import { clients } from "@/i18n/clients";
import type { Dictionary } from "@/i18n/dictionary";

const marqueeClients = [...clients, ...clients];

type ClientsBlockProps = {
  dictionary: Dictionary;
};

export default function ClientsBlock({ dictionary }: ClientsBlockProps) {
  const { mission, a11y } = dictionary;

  return (
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
  );
}
