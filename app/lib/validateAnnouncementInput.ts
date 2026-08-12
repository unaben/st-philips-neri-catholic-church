import {
  VALIDATION_MESSAGES,
  TITLE_MAX_LENGTH,
  PLAIN_TEXT_MAX_LENGTH,
  RICH_TEXT_MAX_LENGTH,
} from "./constants";

export interface AnnouncementInputCandidate {
  title?: unknown;
  plainText?: unknown;
  richTextHtml?: unknown;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  data?: {
    title: string;
    plainText: string;
    richTextHtml: string;
  };
}

export function validateAnnouncementInput(
  body: AnnouncementInputCandidate
): ValidationResult {
  const errors: string[] = [];

  const title = typeof body.title === "string" ? body.title.trim() : "";
  const plainText =
    typeof body.plainText === "string" ? body.plainText.trim() : "";
  const richTextHtml =
    typeof body.richTextHtml === "string" ? body.richTextHtml : "";

  if (!title) errors.push(VALIDATION_MESSAGES.titleRequired);
  if (title.length > TITLE_MAX_LENGTH)
    errors.push(VALIDATION_MESSAGES.titleTooLong);

  if (!plainText) errors.push(VALIDATION_MESSAGES.plainTextRequired);
  if (plainText.length > PLAIN_TEXT_MAX_LENGTH) {
    errors.push(VALIDATION_MESSAGES.plainTextTooLong);
  }

  if (richTextHtml.length > RICH_TEXT_MAX_LENGTH) {
    errors.push(VALIDATION_MESSAGES.richTextTooLong);
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    data: { title, plainText, richTextHtml },
  };
}
