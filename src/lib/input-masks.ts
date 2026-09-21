const EMAIL_RE =
  /^[a-z0-9](?:[a-z0-9._+-]*[a-z0-9])?@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/;

const TELEGRAM_RE = /^@[a-zA-Z0-9_]{4,31}$/;

function isTelegramInput(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.startsWith("@") ||
    (/^[a-zA-Z]/.test(trimmed) && !trimmed.startsWith("+") && !/^\d/.test(trimmed))
  );
}

export function maskContactInput(value: string): string {
  if (!value) return "";

  if (value.startsWith("@")) {
    const handle = value.slice(1).replace(/[^a-zA-Z0-9_]/g, "").slice(0, 32);
    return `@${handle}`;
  }

  if (/^[a-zA-Z_]/.test(value) && !value.startsWith("+")) {
    return value.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 32);
  }

  const digits = value.replace(/\D/g, "");
  let local = digits;

  if (local.startsWith("380")) local = local.slice(3);
  else if (local.startsWith("80")) local = local.slice(2);
  else if (local.startsWith("0")) local = local.slice(1);

  local = local.slice(0, 9);

  const part1 = local.slice(0, 2);
  const part2 = local.slice(2, 5);
  const part3 = local.slice(5, 7);
  const part4 = local.slice(7, 9);

  let formatted = "+380";
  if (part1) formatted += ` (${part1}`;
  if (part1.length === 2) formatted += ")";
  if (part2) formatted += ` ${part2}`;
  if (part3) formatted += `-${part3}`;
  if (part4) formatted += `-${part4}`;

  return formatted;
}

export function maskEmailInput(value: string): string {
  return value.replace(/\s/g, "").toLowerCase().replace(/[^a-z0-9@._+-]/g, "");
}

export function isValidContact(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  if (isTelegramInput(trimmed)) {
    const handle = trimmed.startsWith("@") ? trimmed : `@${trimmed.replace(/^@/, "")}`;
    return TELEGRAM_RE.test(handle);
  }

  const digits = trimmed.replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("380");
}

export function isValidEmail(value: string): boolean {
  const trimmed = maskEmailInput(value);
  return EMAIL_RE.test(trimmed);
}
