import { AdminLeadsTable } from "@/components/admin/AdminLeadsTable";
import { listAdminLeads } from "@/lib/admin/leads";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const leads = await listAdminLeads();

  return (
    <>
      <h1 className="admin-page-title">Заявки</h1>
      <p className="admin-page-lead">
        Заявки з форм сайту та Meta Lead Ads. Telegram-повідомлення як і раніше надсилаються окремо.
      </p>
      <AdminLeadsTable initialLeads={leads} />
    </>
  );
}
