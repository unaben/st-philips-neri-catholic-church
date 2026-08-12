import { FormEvent, useMemo, useState } from "react";
import {
  FirstHolyCommunionFieldErrors,
  FirstHolyCommunionFormData,
  SubmitEnrolmentResponse,
} from "../FirstHolyCommunion.types";
import {
  createEmptyFirstHolyCommunion,
  validateFirstHolyCommunion,
} from "../FirstHolyCommunion.utils";
import { hasErrors } from "../../shared/validation";
import { useFormSubmit } from "../../shared/hooks/useFormSubmit";
import { scrollToFirstError } from "../../shared/scrollToError";

export function useFirstHolyCommunion() {
  const [formData, setFormData] = useState<FirstHolyCommunionFormData>(
    createEmptyFirstHolyCommunion()
  );
  const [errors, setErrors] = useState<FirstHolyCommunionFieldErrors>({});
  const {
    status,
    serverError,
    lastResponse,
    submitForm,
    reset: resetSubmit,
  } = useFormSubmit("first-holy-communion");

  const enrolment =
    (lastResponse as SubmitEnrolmentResponse | null)?.enrolment ?? null;

  const isValid = useMemo(
    () => !hasErrors(validateFirstHolyCommunion(formData)),
    [formData]
  );

  function updateField<K extends keyof FirstHolyCommunionFormData>(
    field: K,
    value: FirstHolyCommunionFormData[K]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const validationErrors = validateFirstHolyCommunion(formData);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) {
      scrollToFirstError(validationErrors);
      return;
    }

    const succeeded = await submitForm(formData);
    if (succeeded) {
      setFormData(createEmptyFirstHolyCommunion());
      setErrors({});
    }
  }

  function reset() {
    setFormData(createEmptyFirstHolyCommunion());
    setErrors({});
    resetSubmit();
  }

  return {
    formData,
    errors,
    status,
    serverError,
    isValid,
    enrolment,
    updateField,
    handleSubmit,
    reset,
  };
}
