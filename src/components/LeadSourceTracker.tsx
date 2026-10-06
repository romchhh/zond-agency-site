"use client";

import { fillLeadSourceFields } from "@/lib/lead-source";
import { useEffect } from "react";

export default function LeadSourceTracker() {
  useEffect(() => {
    fillLeadSourceFields();
    const onSubmit = () => fillLeadSourceFields();
    document.addEventListener("submit", onSubmit, true);
    return () => document.removeEventListener("submit", onSubmit, true);
  }, []);

  return null;
}
