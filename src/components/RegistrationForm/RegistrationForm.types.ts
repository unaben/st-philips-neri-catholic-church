export type RegistrationFormProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
};

export type SectionHeaderProps = { icon: string; title: string };

export interface RegistrationFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  postCode: string;
  alreadyCatholic: boolean | null;
  previousParish: string;
  reasonForRegistering: string;
  heardAboutUs: string;
}

export type RegistrationFormErrors = Partial<
  Record<keyof RegistrationFormData, string>
>;

export const HEARD_ABOUT_OPTIONS = [
  "Word of mouth",
  "Church website",
  "Social media",
  "Walked past the church",
  "Parish newsletter",
  "Other",
] as const;

export const REASON_OPTIONS = [
  "New to the area",
  "Returning to the faith",
  "Getting married",
  "Baptism / First Communion",
  "RCIA (Becoming Catholic)",
  "Other",
] as const;
