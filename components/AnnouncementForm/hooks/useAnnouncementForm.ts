import { useState } from "react";
import type { Announcement } from "@/types/announcement";
import { hasFormErrors, validateFormValues } from "../AnnouncementForm.utils";
import type {
  AnnouncementFormErrors,
  AnnouncementFormValues,
} from "../AnnouncementForm.types";

const emptyValues: AnnouncementFormValues = {
  title: "",
  plainText: "",
  richTextHtml: "",
};

function toFormValues(
  announcement?: Announcement | null
): AnnouncementFormValues {
  if (!announcement) return emptyValues;
  return {
    title: announcement.title,
    plainText: announcement.plainText,
    richTextHtml: announcement.richTextHtml,
  };
}

interface UseAnnouncementFormArgs {
  initialAnnouncement?: Announcement | null;
  onSubmit: (values: AnnouncementFormValues) => Promise<void>;
}

export function useAnnouncementForm({
  initialAnnouncement,
  onSubmit,
}: UseAnnouncementFormArgs) {
  const [values, setValues] = useState<AnnouncementFormValues>(
    toFormValues(initialAnnouncement)
  );
  const [errors, setErrors] = useState<AnnouncementFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function setField<K extends keyof AnnouncementFormValues>(
    field: K,
    value: AnnouncementFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const fieldErrors = validateFormValues(values);
    if (hasFormErrors(fieldErrors)) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    try {
      await onSubmit(values);
    } catch (error) {
      setErrors({
        form:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    setField,
    handleSubmit,
  };
}
