export type StaffRole =
  | "parish-priest"
  | "assistant-priest"
  | "chaplain"
  | "administrator"
  | "catechist"
  | "youth-worker"
  | "centre-manager";

export type ContactPerson = {
  role: string;
  name: string;
  email: string;
  dayOff?: string;
  ext?: number;
  phone?: string;
  hours?: string;
};

export type SafeguardingRep = {
  email: string;
  name: string;
};

export type OfficeHours = {
  label: string;
  note?: string;
};

export type SocialLinks = {
  email?: string;
  facebook?: string;
  twitter?: string;
};

export type ChurchAddress = {
  street: string;
  city: string;
  postcode: string;
  tel: string;
};

export type MainSectionProps = {
  churchName: string;
  tagline?: string;
  priests: ContactPerson[];
  staff: ContactPerson[];
  safeguardingReps: SafeguardingRep[];
  privacyPolicyUrl: string;
  address: ChurchAddress;
  officeHours: OfficeHours;
  social: SocialLinks;
};