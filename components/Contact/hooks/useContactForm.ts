"use client";

import { useState, useCallback, useRef, useEffect, ChangeEvent } from "react";
import type {
  ContactFormData,
  ContactFormErrors,
  SubmitStatus,
  UseContactFormReturn,
} from "../contact.types";
import { validateContactForm, hasContactErrors } from "../contactValidation";
import { INITIAL_STATE } from "../constant";

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormData, boolean>>
  >({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState("");

  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => {
        if (!prev[name as keyof ContactFormData]) return prev;
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    },
    []
  );

  const handleBlur = useCallback((name: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const allErrors = validateContactForm(formDataRef.current);
    setErrors((prev) => ({
      ...prev,
      ...(allErrors[name] ? { [name]: allErrors[name] } : {}),
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      const allTouched = Object.keys(INITIAL_STATE).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<keyof ContactFormData, boolean>
      );
      setTouched(allTouched);

      const validationErrors = validateContactForm(formDataRef.current);
      setErrors(validationErrors);

      if (hasContactErrors(validationErrors)) {
        document
          .querySelector('[data-error="true"]')
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      setSubmitStatus("loading");
      setServerError("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDataRef.current),
        });

        const data = await res.json();

        if (!res.ok)
          throw new Error(data.error ?? "Submission failed. Please try again.");

        setSubmitStatus("success");
      } catch (err) {
        setSubmitStatus("error");
        setServerError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again."
        );
      }
    },
    []
  );

  const reset = useCallback(() => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setTouched({});
    setSubmitStatus("idle");
    setServerError("");
  }, []);

  const showError = useCallback(
    (name: keyof ContactFormData): boolean => !!touched[name] && !!errors[name],
    [touched, errors]
  );

  return {
    formData,
    errors,
    touched,
    submitStatus,
    serverError,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    showError,
  };
}
