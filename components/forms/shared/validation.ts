function toSafeString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export const isRequired = (value: string): boolean =>
  toSafeString(value).trim().length > 0;

export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toSafeString(value).trim());

export const isValidPhone = (value: string): boolean => {
  const safeValue = toSafeString(value).trim();
  return safeValue === "" || /^[0-9+()\s-]{7,20}$/.test(safeValue);
};

export const isValidDate = (value: string): boolean => {
  const safeValue = toSafeString(value).trim();
  return safeValue === "" || !Number.isNaN(Date.parse(safeValue));
};

function toDateOnlyString(input: Date | string | number): string | null {
  if (typeof input === "string") {
    const isoDateOnly = input.trim().match(/^\d{4}-\d{2}-\d{2}/);
    if (isoDateOnly) return isoDateOnly[0];
  }
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return null;
  const y = parsed.getFullYear();
  const m = String(parsed.getMonth() + 1).padStart(2, "0");
  const d = String(parsed.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export const isToday = (
  dateInput: Date | string | number | null | undefined
): boolean => {
  if (!dateInput) return false;
  const target = toDateOnlyString(dateInput);
  if (!target) return false;
  return target === toDateOnlyString(new Date());
};

export type FieldErrors<T extends Record<string, unknown>> = Partial<
  Record<keyof T, string>
>;

export function hasErrors(errors: Record<string, unknown>): boolean {
  return Object.values(errors).some((value) => {
    if (value == null) return false;
    if (typeof value === "string") return true;
    if (Array.isArray(value))
      return value.some((entry) => hasErrors(entry ?? {}));
    return false;
  });
}

export function escapeHtml(value: string): string {
  return toSafeString(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
