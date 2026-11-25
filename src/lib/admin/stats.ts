import { listAnalyticsDays, publicAnalyticsDay } from "@/lib/analytics/store";
import { getLeadsStats } from "@/lib/admin/leads";

function fillDays(byDay: Record<string, number>, days: number): Array<{ date: string; value: number }> {
  const out: Array<{ date: string; value: number }> = [];
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    out.push({ date: key, value: byDay[key] ?? 0 });
  }
  return out;
}

export async function getAdminDashboard(days = 30) {
  const [analyticsRaw, leads] = await Promise.all([
    listAnalyticsDays(days),
    getLeadsStats(days),
  ]);

  const analytics = analyticsRaw.map(publicAnalyticsDay);
  const pageviewsByDay: Record<string, number> = {};
  const visitorsByDay: Record<string, number> = {};
  const topPaths: Record<string, number> = {};
  let pageviews = 0;
  let visitors = 0;

  for (const day of analytics) {
    pageviewsByDay[day.date] = day.pageviews;
    visitorsByDay[day.date] = day.visitors;
    pageviews += day.pageviews;
    visitors += day.visitors;
    for (const [p, count] of Object.entries(day.paths)) {
      topPaths[p] = (topPaths[p] ?? 0) + count;
    }
  }

  const topPathsSorted = Object.entries(topPaths)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([path, count]) => ({ path, count }));

  return {
    days,
    kpis: {
      pageviews,
      visitors,
      leads: leads.total,
      unreadSite: leads.unreadSite,
      siteLeads: leads.bySource.site ?? 0,
      metaLeads: leads.bySource.meta ?? 0,
    },
    charts: {
      pageviews: fillDays(pageviewsByDay, days),
      leads: fillDays(leads.byDay, days),
    },
    bySource: leads.bySource,
    byLocale: leads.byLocale,
    byUtm: leads.byUtm,
    topPaths: topPathsSorted,
  };
}
