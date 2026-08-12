import { FormEvent, useMemo, useState } from "react";
import {
  HouseholdMember,
  HouseholdMemberField,
  ParishRecordFieldErrors,
  ParishRecordFormData,
} from "../ParishRecord.types";
import {
  createEmptyMember,
  createEmptyParishRecord,
  hasParishRecordErrors,
  validateParishRecord,
} from "../ParishRecord.utils";
import { useFormSubmit } from "../../shared/hooks/useFormSubmit";
import { scrollToFirstError } from "../../shared/scrollToError";

export function useParishRecord() {
  const [formData, setFormData] = useState<ParishRecordFormData>(
    createEmptyParishRecord()
  );
  const [submittedData, setSubmittedData] =
    useState<ParishRecordFormData | null>(null);
  const [errors, setErrors] = useState<ParishRecordFieldErrors>({});
  const {
    status,
    serverError,
    submitForm,
    reset: resetSubmit,
  } = useFormSubmit("parish-record");

  const isValid = useMemo(
    () => !hasParishRecordErrors(validateParishRecord(formData)),
    [formData]
  );

  function updateField<K extends keyof ParishRecordFormData>(
    field: K,
    value: ParishRecordFormData[K]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function addAdult() {
    setFormData((prev) => ({
      ...prev,
      otherAdults: [...prev.otherAdults, createEmptyMember()],
    }));
  }

  function removeAdult(id: string) {
    setFormData((prev) => ({
      ...prev,
      otherAdults: prev.otherAdults.filter((m) => m.id !== id),
    }));
  }

  function updateAdult(id: string, field: HouseholdMemberField, value: string) {
    setFormData((prev) => ({
      ...prev,
      otherAdults: prev.otherAdults.map((m: HouseholdMember) =>
        m.id === id ? { ...m, [field]: value } : m
      ),
    }));
  }

  function addChild() {
    setFormData((prev) => ({
      ...prev,
      children: [...prev.children, createEmptyMember()],
    }));
  }

  function removeChild(id: string) {
    setFormData((prev) => ({
      ...prev,
      children: prev.children.filter((m) => m.id !== id),
    }));
  }

  function updateChild(id: string, field: HouseholdMemberField, value: string) {
    setFormData((prev) => ({
      ...prev,
      children: prev.children.map((m: HouseholdMember) =>
        m.id === id ? { ...m, [field]: value } : m
      ),
    }));
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const validationErrors = validateParishRecord(formData);
    setErrors(validationErrors);
    if (hasParishRecordErrors(validationErrors)) {
      scrollToFirstError(validationErrors);
      return;
    }

    const succeeded = await submitForm(formData);
    if (succeeded) {
      setSubmittedData(formData);
      setFormData(createEmptyParishRecord());
      setErrors({});
    }
  }

  function reset() {
    setFormData(createEmptyParishRecord());
    setErrors({});
    resetSubmit();
  }

  return {
    formData,
    errors,
    status,
    serverError,
    isValid,
    submittedData,
    updateField,
    addAdult,
    removeAdult,
    updateAdult,
    addChild,
    removeChild,
    updateChild,
    handleSubmit,
    reset,
  };
}
