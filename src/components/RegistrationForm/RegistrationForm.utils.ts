import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "./RegistrationForm.types";

export function validateRegistrationForm(
  data: RegistrationFormData
): RegistrationFormErrors {
  const errors: RegistrationFormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  else if (data.firstName.trim().length < 2)
    errors.firstName = "First name must be at least 2 characters.";

  if (!data.lastName.trim()) errors.lastName = "Last name is required.";
  else if (data.lastName.trim().length < 2)
    errors.lastName = "Last name must be at least 2 characters.";

  if (!data.dateOfBirth) errors.dateOfBirth = "Date of birth is required.";
  else {
    const dob = new Date(data.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (isNaN(dob.getTime())) errors.dateOfBirth = "Please enter a valid date.";
    else if (dob > today)
      errors.dateOfBirth = "Date of birth cannot be in the future.";
    else if (age > 120)
      errors.dateOfBirth = "Please enter a valid date of birth.";
  }

  if (!data.nationality.trim()) errors.nationality = "Nationality is required.";

  if (!data.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";

  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[\d\s\+\-\(\)]{7,15}$/.test(data.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!data.addressLine1.trim())
    errors.addressLine1 = "Address line 1 is required.";

  if (!data.postCode.trim()) errors.postCode = "Post code is required.";
  else if (!/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(data.postCode.trim()))
    errors.postCode = "Please enter a valid UK post code (e.g. B66 3DU).";

  if (data.alreadyCatholic === null)
    errors.alreadyCatholic = "Please indicate if you are already a Catholic.";

  if (!data.reasonForRegistering.trim())
    errors.reasonForRegistering = "Please tell us your reason for registering.";
  else if (data.reasonForRegistering.trim().length < 10)
    errors.reasonForRegistering =
      "Please provide a bit more detail (at least 10 characters).";

  if (!data.heardAboutUs)
    errors.heardAboutUs = "Please let us know how you heard about us.";

  return errors;
}

export function hasErrors(errors: RegistrationFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function buildMailtoBody(data: RegistrationFormData): string {
  const lines = [
    `PARISH REGISTRATION — ST. PHILIP NERI CATHOLIC CHURCH`,
    `${"─".repeat(50)}`,
    ``,
    `PERSONAL DETAILS`,
    `First Name:    ${data.firstName}`,
    `Middle Name:   ${data.middleName || "—"}`,
    `Last Name:     ${data.lastName}`,
    `Date of Birth: ${new Date(data.dateOfBirth).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`,
    `Nationality:   ${data.nationality}`,
    ``,
    `CONTACT DETAILS`,
    `Email:         ${data.email}`,
    `Phone:         ${data.phone}`,
    ``,
    `ADDRESS`,
    `Line 1:        ${data.addressLine1}`,
    `Line 2:        ${data.addressLine2 || "—"}`,
    `Post Code:     ${data.postCode.toUpperCase()}`,
    ``,
    `PARISH INFORMATION`,
    `Already Catholic:    ${data.alreadyCatholic ? "Yes" : "No"}`,
    `Previous Parish:     ${data.previousParish || "—"}`,
    `How they heard:      ${data.heardAboutUs}`,
    ``,
    `REASON FOR REGISTERING`,
    data.reasonForRegistering,
    ``,
    `${"─".repeat(50)}`,
    `Submitted: ${new Date().toLocaleString("en-GB")}`,
  ];
  return lines.join("\n");
}
