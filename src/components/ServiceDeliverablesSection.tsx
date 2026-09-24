import type { ServicePageContent } from "@/i18n/logo";

type ServiceDeliverablesSectionProps = {
  copy: ServicePageContent;
};

export default function ServiceDeliverablesSection({ copy }: ServiceDeliverablesSectionProps) {
  const items = copy.deliverables?.length ? copy.deliverables : copy.includes;
  if (!items.length) return null;

  const title = copy.deliverablesTitle ?? "Що ви отримуєте";

  return (
    <section
      className="sp-section sp-section--prototype sp-section--deliverables"
      aria-labelledby="service-deliverables-title"
    >
      <div className="wrap">
        <h2 id="service-deliverables-title" className="sp-h2">{title}</h2>
        <div className="sp-deliverable-grid">
          {items.map((item, index) => (
            <div key={`${index}-${item}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        {copy.deliverablesNote ? (
          <p className="sp-deliverable-fineprint">{copy.deliverablesNote}</p>
        ) : null}
      </div>
    </section>
  );
}
