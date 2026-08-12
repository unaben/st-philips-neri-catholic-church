import { SponsorFormData, SponsorFormFieldErrors } from "./SponsorForm.types";
import {
  isRequired,
  isToday,
  isValidDate,
  isValidEmail,
  isValidPhone,
} from "../shared/validation";
import type { Sacrament } from "@/types/registration";

export function createEmptySponsorForm(
  initial?: Partial<
    Pick<SponsorFormData, "sacrament" | "enrolmentId" | "candidateName">
  >
): SponsorFormData {
  return {
    sacrament: initial?.sacrament ?? "",
    enrolmentId: initial?.enrolmentId ?? "",
    sponsorName: "",
    email: "",
    candidateName: initial?.candidateName ?? "",
    confirmsEligibility: false,
    acceptsRole: false,
    godparentChurchAddress: "",
    churchTelephoneNumber: "",
    phoneNumberOfGodparent: "",
    signature: "",
    date: "",
  };
}

export function validateSponsorForm(
  data: SponsorFormData
): SponsorFormFieldErrors {
  const errors: SponsorFormFieldErrors = {};

  if (!data.sacrament)
    errors.sacrament = "Please tell us which registration this is for.";
  if (!isRequired(data.sponsorName))
    errors.sponsorName = "Please enter your name.";
  if (!isRequired(data.email)) {
    errors.email =
      "Please enter an email address so we can confirm this with you.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!isRequired(data.candidateName)) {
    errors.candidateName =
      "Please tell us who you have been asked to be Godparent/Sponsor for.";
  }
  if (!data.confirmsEligibility) {
    errors.confirmsEligibility =
      "Please confirm you meet the requirements for this role.";
  }
  if (!data.acceptsRole)
    errors.acceptsRole = "Please confirm you accept the role.";
  if (!isRequired(data.godparentChurchAddress)) {
    errors.godparentChurchAddress = "Your church's address is required.";
  }
  if (!isValidPhone(data.churchTelephoneNumber)) {
    errors.churchTelephoneNumber = "Enter a valid phone number.";
  }
  if (!isValidPhone(data.phoneNumberOfGodparent)) {
    errors.phoneNumberOfGodparent = "Enter a valid phone number.";
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
