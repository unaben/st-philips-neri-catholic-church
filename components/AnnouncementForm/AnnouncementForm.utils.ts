import {
  VALIDATION_MESSAGES,
  TITLE_MAX_LENGTH,
  PLAIN_TEXT_MAX_LENGTH,
} from "@/app/lib/constants";
import type {
  AnnouncementFormErrors,
  AnnouncementFormValues,
} from "./AnnouncementForm.types";

/**
 * Client-side validation for immediate feedback. The API route re-validates
 * everything server-side too - this is just for UX, not the source of truth.
 */
export function validateFormValues(
  values: AnnouncementFormValues
): AnnouncementFormErrors {
  const errors: AnnouncementFormErrors = {};

  const title = values.title.trim();
  if (!title) {
    errors.title = VALIDATION_MESSAGES.titleRequired;
  } else if (title.length > TITLE_MAX_LENGTH) {
    errors.title = VALIDATION_MESSAGES.titleTooLong;
  }

  const plainText = values.plainText.trim();
  if (!plainText) {
    errors.plainText = VALIDATION_MESSAGES.plainTextRequired;
  } else if (plainText.length > PLAIN_TEXT_MAX_LENGTH) {
    errors.plainText = VALIDATION_MESSAGES.plainTextTooLong;
  }

  return errors;
}

export function hasFormErrors(errors: AnnouncementFormErrors): boolean {
  return Object.values(errors).some((message) => Boolean(message));
}
