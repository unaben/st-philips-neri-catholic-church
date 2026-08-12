export const DISPLAY_REFRESH_INTERVAL_MS = 60_000;

export const TITLE_MAX_LENGTH = 120;
export const PLAIN_TEXT_MAX_LENGTH = 500;
export const RICH_TEXT_MAX_LENGTH = 5000;

export const VALIDATION_MESSAGES = {
  titleRequired: 'Please add a title.',
  titleTooLong: `Title must be ${TITLE_MAX_LENGTH} characters or fewer.`,
  plainTextRequired: 'Please add a short plain-text summary.',
  plainTextTooLong: `Summary must be ${PLAIN_TEXT_MAX_LENGTH} characters or fewer.`,
  richTextTooLong: `Announcement is too long (max ${RICH_TEXT_MAX_LENGTH} characters).`,
};
