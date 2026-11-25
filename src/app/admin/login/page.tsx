import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isAdminAuthenticated } from "@/lib/admin/http";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        <h1>ZOND Admin</h1>
        <p>Увійдіть, щоб керувати заявками, статистикою та контентом.</p>
        <AdminLoginForm />
      </div>
    </div>
  );
}
