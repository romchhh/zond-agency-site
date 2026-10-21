import { redirect } from "next/navigation";

/** Old step URL — funnel now lives entirely on /lead. */
export default function LeadContactRedirectPage() {
  redirect("/lead");
}
