"use client";

import { useState, useCallback, useRef, ChangeEvent } from "react";
import {
  RegistrationFormData,
  RegistrationFormErrors,
} from "../RegistrationForm.types";
import { validateRegistrationForm, hasErrors } from "../RegistrationForm.utils";

const INITIAL_STATE: RegistrationFormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  nationality: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  postCode: "",
  alreadyCatholic: null,
  previousParish: "",
  reasonForRegistering: "",
  heardAboutUs: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface UseRegistrationFormReturn {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  touched: Partial<Record<keyof RegistrationFormData, boolean>>;
  submitStatus: SubmitStatus;
  serverError: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleCatholicChange: (value: boolean) => void;
  handleBlur: (name: keyof RegistrationFormData) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
  showError: (name: keyof RegistrationFormData) => boolean;
}

const ALL_TOUCHED = Object.keys(INITIAL_STATE).reduce(
  (acc, key) => ({ ...acc, [key]: true }),
  {} as Record<keyof RegistrationFormData, boolean>
);

export function useRegistrationForm(): UseRegistrationFormReturn {
  const [formData, setFormData] = useState<RegistrationFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<RegistrationFormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationFormData, boolean>>
  >({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState("");

  const formDataRef = useRef(formData);
  formDataRef.current = formData;

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value, type } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]:
          type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      }));

      setErrors((prev) => {
        if (!prev[name as keyof RegistrationFormData]) return prev;
        const next = { ...prev };
        delete next[name as keyof RegistrationFormData];
        return next;
      });
    },
    []
  );

  const handleCatholicChange = useCallback((value: boolean) => {
    setFormData((prev) => ({ ...prev, alreadyCatholic: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.alreadyCatholic;
      return next;
    });
  }, []); 

  const handleBlur = useCallback((name: keyof RegistrationFormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));

    const allErrors = validateRegistrationForm(formDataRef.current);
    setErrors((prev) => ({
      ...prev,
      ...(allErrors[name] ? { [name]: allErrors[name] } : {}),
    }));
  }, []); 

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      setTouched(ALL_TOUCHED);

      const validationErrors = validateRegistrationForm(formDataRef.current);
      setErrors(validationErrors);

      if (hasErrors(validationErrors)) {
        document
          .querySelector('[data-error="true"]')
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      setSubmitStatus("loading");
      setServerError("");

      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDataRef.current),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error ?? "Submission failed. Please try again.");
        }

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
    (name: keyof RegistrationFormData): boolean =>
      !!touched[name] && !!errors[name],
    [touched, errors]
  );

  return {
    formData,
    errors,
    touched,
    submitStatus,
    serverError,
    handleChange,
    handleCatholicChange,
    handleBlur,
    handleSubmit,
    reset,
    showError,
  };
}
