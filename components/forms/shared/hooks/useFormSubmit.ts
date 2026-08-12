import { useState } from "react";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * @param formType matches an `app/api/forms/<formType>/route.ts` folder name exactly -
 *   e.g. 'parish-record' posts to `/api/forms/parish-record`.
 */
export function useFormSubmit(formType: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [lastResponse, setLastResponse] = useState<unknown>(null);

  async function submitForm<T>(data: T): Promise<boolean> {
    setStatus("submitting");
    setServerError(null);

    try {
      const response = await fetch(`/api/forms/${formType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setServerError(
          result?.error ?? "Something went wrong. Please try again."
        );
        return false;
      }

      setLastResponse(result);
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      setServerError(
        "Could not reach the server. Please check your connection and try again."
      );
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setServerError(null);
    setLastResponse(null);
  }

  return { status, serverError, lastResponse, submitForm, reset };
}
