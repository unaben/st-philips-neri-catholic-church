const EMAIL_PATTERN = /\S+@\S+\.\S+/;

export const SUBSCRIBE_ENDPOINT = "/api/subscribe";

export const INVALID_EMAIL_MESSAGE = "Please enter a valid email address.";
export const DEFAULT_ERROR_MESSAGE = "Failed to subscribe. Please try again.";

export const isValidEmail = (value: string): boolean =>
  EMAIL_PATTERN.test(value.trim());
