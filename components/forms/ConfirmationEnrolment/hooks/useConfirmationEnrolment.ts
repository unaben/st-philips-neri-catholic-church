import { useMemo, useState } from "react";
import type {
  ConfirmationEnrolmentFieldErrors,
  ConfirmationEnrolmentFormData,
  SubmitEnrolmentResponse,
} from "../ConfirmationEnrolment.types";
import {
  createEmptyConfirmationEnrolment,
  validateConfirmationEnrolment,
} from "../ConfirmationEnrolment.utils";
import { hasErrors } from "../../shared/validation";
import { useFormSubmit } from "../../shared/hooks/useFormSubmit";
import { scrollToFirstError } from "../../shared/scrollToError";

export function useConfirmationEnrolment() {
  const [formData, setFormData] = useState<ConfirmationEnrolmentFormData>(
    createEmptyConfirmationEnrolment()
  );
  const [errors, setErrors] = useState<ConfirmationEnrolmentFieldErrors>({});
  const {
    status,
    serverError,
    lastResponse,
    submitForm,
    reset: resetSubmit,
  } = useFormSubmit("confirmation-enrolment");

  const enrolment =
    (lastResponse as SubmitEnrolmentResponse | null)?.enrolment ?? null;
  const isValid = useMemo(
    () => !hasErrors(validateConfirmationEnrolment(formData)),
    [formData]
  );

  function updateField<K extends keyof ConfirmationEnrolmentFormData>(
    field: K,
    value: ConfirmationEnrolmentFormData[K]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const validationErrors = validateConfirmationEnrolment(formData);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) {
      scrollToFirstError(validationErrors);
      return;
    }

    const succeeded = await submitForm(formData);
    if (succeeded) {
      setFormData(createEmptyConfirmationEnrolment());
      setErrors({});
    }
  }

  function reset() {
    setFormData(createEmptyConfirmationEnrolment());
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
