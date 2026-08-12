import type { Sacrament } from "@/types/registration";

export interface SponsorFormData {
  sacrament: Sacrament | "";
  enrolmentId: string;
  sponsorName: string;
  email: string;
  candidateName: string;
  confirmsEligibility: boolean;
  acceptsRole: boolean;
  godparentChurchAddress: string;
  churchTelephoneNumber: string;
  phoneNumberOfGodparent: string;
  signature: string;
  date: string;
}

export type SponsorFormFieldErrors = Partial<
  Record<keyof SponsorFormData, string>
>;

export interface SponsorFormProps {
  sacrament?: Sacrament;
  enrolmentId?: string;
  candidateName?: string;
}