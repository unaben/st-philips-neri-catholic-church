import type { RegistrationEnrolmentRecord } from "@/types/registration";

export type YesNo = "" | "yes" | "no";

export interface FirstHolyCommunionFormData {
  nameOfChild: string;
  address: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  ageNow: string;
  churchAttendMass: string;
  isChildBaptised: YesNo;
  churchOfBaptism: string;
  addressOfBaptism: string;
  dateOfBaptism: string;
  school: string;
  fathersName: string;
  fathersReligion: string;
  mothersName: string;
  mothersReligion: string;
  agreeToEnrol: boolean;
  agreeToWorkbook: boolean;
  agreeToAttendSessions: boolean;
  agreeToAccompany: boolean;
  signature: string;
  date: string;
}

export type FirstHolyCommunionFieldErrors = Partial<
  Record<keyof FirstHolyCommunionFormData, string>
>;

export interface SubmitEnrolmentResponse {
  success: true;
  enrolment: RegistrationEnrolmentRecord;
}
