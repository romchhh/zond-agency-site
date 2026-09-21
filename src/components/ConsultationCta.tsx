"use client";

import { useConsultation } from "@/components/ConsultationProvider";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ConsultationCtaProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function ConsultationCta({
  children,
  className,
  type = "button",
  onClick,
  ...props
}: ConsultationCtaProps) {
  const { openConsultation } = useConsultation();

  return (
    <button
      type={type}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openConsultation();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
