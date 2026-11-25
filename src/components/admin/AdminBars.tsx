type Point = { date: string; value: number };

export function AdminBars({ points, label }: { points: Point[]; label: string }) {
  const max = Math.max(1, ...points.map((p) => p.value));
  return (
    <div>
      <div className="admin-muted" style={{ marginBottom: 8 }}>
        {label}
      </div>
      <div className="admin-chart-bars" aria-hidden="true">
        {points.map((point) => (
          <div
            key={point.date}
            className="admin-chart-bar"
            title={`${point.date}: ${point.value}`}
            style={{ height: `${Math.max(4, (point.value / max) * 100)}%` }}
          />
        ))}
      </div>
    </div>
  );
}
