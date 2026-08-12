import {
  FirstHolyCommunionFieldErrors,
  FirstHolyCommunionFormData,
} from "./FirstHolyCommunion.types";
import {
  isRequired,
  isToday,
  isValidDate,
  isValidEmail,
  isValidPhone,
} from "../shared/validation";

export function createEmptyFirstHolyCommunion(): FirstHolyCommunionFormData {
  return {
    nameOfChild: "",
    address: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    ageNow: "",
    churchAttendMass: "",
    isChildBaptised: "",
    churchOfBaptism: "",
    addressOfBaptism: "",
    dateOfBaptism: "",
    school: "",
    fathersName: "",
    fathersReligion: "",
    mothersName: "",
    mothersReligion: "",
    agreeToEnrol: false,
    agreeToWorkbook: false,
    agreeToAttendSessions: false,
    agreeToAccompany: false,
    signature: "",
    date: "",
  };
}

export function validateFirstHolyCommunion(
  data: FirstHolyCommunionFormData
): FirstHolyCommunionFieldErrors {
  const errors: FirstHolyCommunionFieldErrors = {};

  if (!isRequired(data.nameOfChild))
    errors.nameOfChild = "Child's name is required.";
  if (!isRequired(data.address)) errors.address = "Address is required.";
  if (!isValidPhone(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!isRequired(data.email)) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!isRequired(data.dateOfBirth)) {
    errors.dateOfBirth = "Date of birth is required.";
  } else if (!isValidDate(data.dateOfBirth)) {
    errors.dateOfBirth = "Enter a valid date.";
  }
  if (!isRequired(data.churchAttendMass))
    errors.churchAttendMass = "Please tell us which church you attend.";
  if (!data.isChildBaptised)
    errors.isChildBaptised = "Please answer this question.";
  if (data.isChildBaptised === "yes" && !isRequired(data.dateOfBaptism)) {
    errors.dateOfBaptism = "Date of baptism is required.";
  }
  if (!isRequired(data.fathersName) && !isRequired(data.mothersName)) {
    errors.fathersName = "At least one parent's name is required.";
  }
  if (!isRequired(data.fathersReligion) && !isRequired(data.mothersReligion)) {
    errors.fathersReligion = "At least one parent's religion is required.";
  }
  if (
    !data.agreeToEnrol ||
    !data.agreeToWorkbook ||
    !data.agreeToAttendSessions ||
    !data.agreeToAccompany
  ) {
    errors.agreeToEnrol = "Please confirm all four commitments to continue.";
  }
  if (!isRequired(data.signature))
    errors.signature = "Please type your name to sign.";
  if (!isRequired(data.date)) {
    errors.date = "Date is required.";
  } else if (!isValidDate(data.date)) {
    errors.date = "Enter a valid date.";
  } else if (!isToday(data.date)) {
    errors.date = "Please enter today's date to proceed.";
  }

  return errors;
}
