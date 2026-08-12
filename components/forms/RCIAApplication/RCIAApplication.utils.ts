import {
  RCIAApplicationFieldErrors,
  RCIAApplicationFormData,
} from "./RCIAApplication.types";
import {
  isRequired,
  isToday,
  isValidDate,
  isValidEmail,
  isValidPhone,
} from "../shared/validation";

export function createEmptyRCIAApplication(): RCIAApplicationFormData {
  return {
    firstName: "",
    surname: "",
    knownAs: "",
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    isFirstMarriage: "",
    isBaptised: "",
    dateOfBaptism: "",
    placeOfBaptism: "",
    religion: "",
    receivedFirstHolyCommunion: "",
    dateOfFirstHolyCommunion: "",
    placeOfFirstHolyCommunion: "",
    address: "",
    phoneNumber: "",
    email: "",
    whichParish: "",
    whichMass: "",
    catechumenName: "",
    catechumenDate: "",
    sponsorName: "",
    sponsorDate: "",
  };
}

export function validateRCIAApplication(
  data: RCIAApplicationFormData
): RCIAApplicationFieldErrors {
  const errors: RCIAApplicationFieldErrors = {};

  if (!isRequired(data.firstName)) errors.firstName = "First name is required.";
  if (!isRequired(data.surname)) errors.surname = "Surname is required.";
  if (!isRequired(data.dateOfBirth)) {
    errors.dateOfBirth = "Date of birth is required.";
  } else if (!isValidDate(data.dateOfBirth)) {
    errors.dateOfBirth = "Enter a valid date.";
  }
  if (!data.maritalStatus)
    errors.maritalStatus = "Please select your marital status.";
  if (data.maritalStatus === "married" && !data.isFirstMarriage) {
    errors.isFirstMarriage =
      "Please let us know if this is your first marriage.";
  }
  if (!data.isBaptised)
    errors.isBaptised = "Please let us know if you have been baptised.";
  if (data.isBaptised === "yes") {
    if (!isRequired(data.dateOfBaptism))
      errors.dateOfBaptism = "Date of baptism is required.";
    if (!isRequired(data.placeOfBaptism))
      errors.placeOfBaptism = "Place of baptism is required.";
  }
  if (!data.receivedFirstHolyCommunion) {
    errors.receivedFirstHolyCommunion = "Please answer this question.";
  }
  if (data.receivedFirstHolyCommunion === "yes") {
    if (!isRequired(data.dateOfFirstHolyCommunion)) {
      errors.dateOfFirstHolyCommunion =
        "Date of First Holy Communion is required.";
    }
    if (!isRequired(data.placeOfFirstHolyCommunion)) {
      errors.placeOfFirstHolyCommunion =
        "Place of First Holy Communion is required.";
    }
  }
  if (!isRequired(data.address)) errors.address = "Address is required.";
  if (!isValidPhone(data.phoneNumber))
    errors.phoneNumber = "Enter a valid phone number.";
  if (!isRequired(data.email)) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!isRequired(data.whichParish))
    errors.whichParish = "Please tell us which parish you attend.";
  if (!isRequired(data.whichMass))
    errors.whichMass = "Please tell us which Mass you attend.";
  if (!isRequired(data.catechumenName))
    errors.catechumenName = "Please type your name to sign.";
  if (!isRequired(data.catechumenDate)) {
    errors.catechumenDate = "Date is required.";
  } else if (!isValidDate(data.catechumenDate)) {
    errors.catechumenDate = "Enter a valid date.";
  } else if (!isToday(data.catechumenDate)) {
    errors.catechumenDate = "Please enter today's date to proceed.";
  }
  if (!isRequired(data.sponsorDate)) {
    errors.sponsorDate = "Date is required.";
  } else if (!isValidDate(data.sponsorDate)) {
    errors.sponsorDate = "Enter a valid date.";
  } else if (!isToday(data.sponsorDate)) {
    errors.sponsorDate = "Please enter today's date to proceed.";
  }

  return errors;
}
