"use client";

import { LEAD_HONEYPOT_FIELD, LEAD_SOURCE_FIELDS } from "@/lib/lead";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ConsultationHiddenFields() {
  return (
    <>
      {LEAD_SOURCE_FIELDS.map((name) => (
        <input key={name} type="hidden" name={name} />
      ))}
      <div className="consultation-honeypot" aria-hidden="true">
        <label>
          Do not fill
          <input
            type="text"
            name={LEAD_HONEYPOT_FIELD}
            tabIndex={-1}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            data-lpignore="true"
            data-1p-ignore="true"
            defaultValue=""
          />
        </label>
      </div>
      {turnstileSiteKey ? (
        <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" />
      ) : null}
    </>
  );
}
