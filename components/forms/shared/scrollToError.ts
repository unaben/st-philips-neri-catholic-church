export function scrollToFirstError(errors: Record<string, unknown>) {
  const firstKey = Object.keys(errors).find((key) => Boolean(errors[key]));
  if (!firstKey || typeof document === "undefined") return;

  const target = document.getElementById(`field-${firstKey}`);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "center" });

  const focusable = target.matches("input, textarea, select, button")
    ? target
    : target.querySelector<HTMLElement>("input, textarea, select, button");
  focusable?.focus({ preventScroll: true });
}
