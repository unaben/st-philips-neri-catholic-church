import {
  HouseholdMember,
  HouseholdMemberErrors,
  ParishRecordFieldErrors,
  ParishRecordFormData,
} from "./ParishRecord.types";
import {
  hasErrors,
  isRequired,
  isToday,
  isValidDate,
  isValidEmail,
  isValidPhone,
} from "../shared/validation";

function generateId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `member-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function createEmptyMember(): HouseholdMember {
  return {
    id: generateId(),
    name: "",
    dateOfBirth: "",
    relationshipToYou: "",
    religion: "",
  };
}

export function createEmptyParishRecord(): ParishRecordFormData {
  return {
    yourName: "",
    address: "",
    religion: "",
    postcode: "",
    telNo: "",
    mobile: "",
    email: "",
    nationality: "",
    firstLanguage: "",
    otherAdults: [],
    children: [],
    signature: "",
    date: "",
  };
}

function validateMember(member: HouseholdMember): HouseholdMemberErrors {
  const errors: HouseholdMemberErrors = {};
  if (!isRequired(member.name)) errors.name = "Name is required.";
  if (!isRequired(member.relationshipToYou))
    errors.relationshipToYou = "Relationship is required.";
  if (member.dateOfBirth && !isValidDate(member.dateOfBirth))
    errors.dateOfBirth = "Enter a valid date.";
  return errors;
}

export function validateParishRecord(
  data: ParishRecordFormData
): ParishRecordFieldErrors {
  const errors: ParishRecordFieldErrors = {};

  if (!isRequired(data.yourName)) errors.yourName = "Please enter your name.";
  if (!isRequired(data.address)) errors.address = "Please enter your address.";
  if (!isRequired(data.postcode))
    errors.postcode = "Please enter your postcode.";
  if (!isRequired(data.email)) {
    errors.email = "Please enter an email address.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!isValidPhone(data.telNo))
    errors.telNo = "Please enter a valid phone number.";
  if (!isRequired(data.mobile)) {
    errors.mobile = "Please enter your mobile number.";
  } else if (!isValidPhone(data.mobile)) {
    errors.mobile = "Please enter a valid mobile number.";
  }
  if (!isRequired(data.signature))
    errors.signature = "Please type your name to sign this form.";
  if (!isRequired(data.date)) {
    errors.date = "Date is required.";
  } else if (!isValidDate(data.date)) {
    errors.date = "Enter a valid date.";
  } else if (!isToday(data.date)) {
    errors.date = "Please enter today's date to proceed.";
  }
  if (!isRequired(data.religion))
    errors.religion = "Please enter your religion.";
  if (!isRequired(data.nationality))
    errors.nationality = "Please enter your nationality.";
  if (!isRequired(data.firstLanguage))
    errors.firstLanguage = "Please enter your first language.";

  const adultErrors = (
    Array.isArray(data.otherAdults) ? data.otherAdults : []
  ).map(validateMember);
  const childErrors = (Array.isArray(data.children) ? data.children : []).map(
    validateMember
  );

  if (adultErrors.some((entry) => Object.keys(entry).length > 0))
    errors.otherAdults = adultErrors;
  if (childErrors.some((entry) => Object.keys(entry).length > 0))
    errors.children = childErrors;

  return errors;
}

export function hasParishRecordErrors(
  errors: ParishRecordFieldErrors
): boolean {
  return hasErrors(errors);
}
