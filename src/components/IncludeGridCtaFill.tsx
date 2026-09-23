import ConsultationCta from "@/components/ConsultationCta";

type IncludeGridCtaFillProps = {
  count: number;
  label: string;
  columns?: number;
};

/** How many grid columns are left empty in the last row. */
export function getIncludeGridFillCount(count: number, columns = 4) {
  const rem = count % columns;
  return rem === 0 ? 0 : columns - rem;
}

export default function IncludeGridCtaFill({
  count,
  label,
  columns = 4,
}: IncludeGridCtaFillProps) {
  const fillCount = getIncludeGridFillCount(count, columns);
  if (fillCount === 0) return null;

  return (
    <ConsultationCta
      className={`service-card service-card--cta service-card--cta-span-${fillCount}`}
      style={{ gridColumn: `span ${fillCount}` }}
      aria-label={label}
    >
      <span className="service-card-cta-text">{label}</span>
      <span className="service-card-cta-arrow" aria-hidden="true">
        ↗
      </span>
    </ConsultationCta>
  );
}
