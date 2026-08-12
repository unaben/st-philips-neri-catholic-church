import type { RegistrationEnrolmentRecord } from "@/types/registration";

export type YesNo = "" | "yes" | "no";

export interface ConfirmationEnrolmentFormData {
  nameOfChild: string;
  confirmationNameChosen: string;
  address: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  ageNow: string;
  churchAttendMass: string;
  isChildBaptised: YesNo;
  doesChildReceiveCommunion: YesNo;
  churchOfBaptism: string;
  addressOfBaptism: string;
  dateOfBaptism: string;
  school: string;
  fathersName: string;
  fathersReligion: string;
  mothersName: string;
  mothersReligion: string;
  sponsorsName: string;
  sponsorsReligion: string;
  agreeToEnrol: boolean;
  agreeToWorkbook: boolean;
  agreeToAttendSessions: boolean;
  agreeToAccompany: boolean;
  signature: string;
  date: string;
}

export type ConfirmationEnrolmentFieldErrors = Partial<
  Record<keyof ConfirmationEnrolmentFormData, string>
>;

export interface SubmitEnrolmentResponse {
  success: true;
  enrolment: RegistrationEnrolmentRecord;
}
