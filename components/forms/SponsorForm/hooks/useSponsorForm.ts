import { useMemo, useState } from "react";
import { SponsorFormFieldErrors, SponsorFormData } from "../SponsorForm.types";
import {
  createEmptySponsorForm,
  validateSponsorForm,
} from "../SponsorForm.utils";
import { hasErrors } from "../../shared/validation";
import { useFormSubmit } from "../../shared/hooks/useFormSubmit";
import type { Sacrament } from "@/types/registration";
import { scrollToFirstError } from "../../shared/scrollToError";

interface UseSponsorFormArgs {
  sacrament?: Sacrament;
  enrolmentId?: string;
  candidateName?: string;
}

export function useSponsorForm({
  sacrament,
  enrolmentId,
  candidateName,
}: UseSponsorFormArgs = {}) {
  const [formData, setFormData] = useState<SponsorFormData>(() =>
    createEmptySponsorForm({ sacrament, enrolmentId, candidateName })
  );
  const [errors, setErrors] = useState<SponsorFormFieldErrors>({});
  const {
    status,
    serverError,
    submitForm,
    reset: resetSubmit,
  } = useFormSubmit("sponsor-form");

  const isValid = useMemo(
    () => !hasErrors(validateSponsorForm(formData)),
    [formData]
  );

  function updateField<K extends keyof SponsorFormData>(
    field: K,
    value: SponsorFormData[K]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const validationErrors = validateSponsorForm(formData);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) {
      scrollToFirstError(validationErrors);
      return;
    }

    const succeeded = await submitForm(formData);
    if (succeeded) {
      setFormData(createEmptySponsorForm());
      setErrors({});
    }
  }

  function handlePrint() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  function reset() {
    setFormData(createEmptySponsorForm());
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
    handlePrint,
    reset,
  };
}
