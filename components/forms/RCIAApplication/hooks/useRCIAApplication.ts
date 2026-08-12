import { useMemo, useState } from "react";
import {
  RCIAApplicationFieldErrors,
  RCIAApplicationFormData,
} from "../RCIAApplication.types";
import {
  createEmptyRCIAApplication,
  validateRCIAApplication,
} from "../RCIAApplication.utils";
import { hasErrors } from "../../shared/validation";
import { useFormSubmit } from "../../shared/hooks/useFormSubmit";
import { scrollToFirstError } from "../../shared/scrollToError";

export function useRCIAApplication() {
  const [formData, setFormData] = useState<RCIAApplicationFormData>(
    createEmptyRCIAApplication()
  );
  const [submittedData, setSubmittedData] =
    useState<RCIAApplicationFormData | null>(null);
  const [errors, setErrors] = useState<RCIAApplicationFieldErrors>({});
  const {
    status,
    serverError,
    submitForm,
    reset: resetSubmit,
  } = useFormSubmit("rcia-application");

  const isValid = useMemo(
    () => !hasErrors(validateRCIAApplication(formData)),
    [formData]
  );

  function updateField<K extends keyof RCIAApplicationFormData>(
    field: K,
    value: RCIAApplicationFormData[K]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const validationErrors = validateRCIAApplication(formData);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) {
      scrollToFirstError(validationErrors);
      return;
    }

    const succeeded = await submitForm(formData);
    if (succeeded) {
      setSubmittedData(formData);
      setFormData(createEmptyRCIAApplication());
      setErrors({});
    }
  }

  function reset() {
    setFormData(createEmptyRCIAApplication());
    setErrors({});
    resetSubmit();
  }

  return {
    formData,
    errors,
    status,
    serverError,
    isValid,
    updateField,
    handleSubmit,
    reset,
    submittedData,
    setSubmittedData,
  };
}
