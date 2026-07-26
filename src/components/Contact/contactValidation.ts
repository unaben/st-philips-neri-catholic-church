import type { ContactFormData, ContactFormErrors } from "./contact.types";

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  else if (data.fullName.trim().length < 2)
    errors.fullName = "Please enter your full name.";

  if (!data.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";

  if (data.phone && !/^[\d\s\+\-\(\)]{7,15}$/.test(data.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10)
    errors.message = "Please write a bit more (at least 10 characters).";

  return errors;
}

export function hasContactErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
