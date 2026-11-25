import { AdminBars } from "@/components/admin/AdminBars";
import { getAdminDashboard } from "@/lib/admin/stats";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const data = await getAdminDashboard(30);

  return (
    <>
      <h1 className="admin-page-title">Статистика</h1>
      <p className="admin-page-lead">
        Трафік сайту (first-party), заявки з форм і Meta Lead Ads за останні {data.days} днів.
      </p>

      <div className="admin-grid">
        <div className="admin-kpi">
          <div className="admin-kpi-label">Перегляди</div>
          <div className="admin-kpi-value">{data.kpis.pageviews}</div>
        </div>
        <div className="admin-kpi">
          <div className="admin-kpi-label">Відвідувачі (approx)</div>
          <div className="admin-kpi-value">{data.kpis.visitors}</div>
        </div>
        <div className="admin-kpi">
          <div className="admin-kpi-label">Заявки</div>
          <div className="admin-kpi-value">{data.kpis.leads}</div>
        </div>
        <div className="admin-kpi">
          <div className="admin-kpi-label">Нові з сайту</div>
          <div className="admin-kpi-value">{data.kpis.unreadSite}</div>
        </div>
        <div className="admin-kpi">
          <div className="admin-kpi-label">Сайт / Meta</div>
          <div className="admin-kpi-value">
            {data.kpis.siteLeads}/{data.kpis.metaLeads}
          </div>
        </div>
      </div>

      <div className="admin-panel">
        <h2>Перегляди по днях</h2>
        <AdminBars points={data.charts.pageviews} label="Pageviews" />
      </div>

      <div className="admin-panel">
        <h2>Заявки по днях</h2>
        <AdminBars points={data.charts.leads} label="Leads" />
      </div>

      <div className="admin-split admin-split-2">
        <div className="admin-panel">
          <h2>Джерела заявок (utm)</h2>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Source</th>
                  <th>К-сть</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(data.byUtm)
                  .sort((a, b) => b[1] - a[1])
                  .map(([source, count]) => (
                    <tr key={source}>
                      <td>{source}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                {Object.keys(data.byUtm).length === 0 ? (
                  <tr>
                    <td colSpan={2}>Поки немає даних</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-panel">
          <h2>Топ сторінок</h2>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Path</th>
                  <th>Перегляди</th>
                </tr>
              </thead>
              <tbody>
                {data.topPaths.map((row) => (
                  <tr key={row.path}>
                    <td>{row.path}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
                {data.topPaths.length === 0 ? (
                  <tr>
                    <td colSpan={2}>Поки немає даних</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
