export type Sacrament = "confirmation" | "firstHolyCommunion";

export type SponsorFormSource = "online" | "paper";
export interface RegistrationEnrolmentRecord {
  id: string;
  sacrament: Sacrament;
  nameOfChild: string;
  email: string;
  createdAt: string;
}

export interface RegistrationSponsorRecord {
  id: string;
  enrolmentId: string;
  sacrament: Sacrament;
  sponsorName: string;
  source: SponsorFormSource;
  createdAt: string;
}

export interface EnrolmentWithSponsorStatus
  extends RegistrationEnrolmentRecord {
  sponsorFormReceived: boolean;
  sponsorFormSource: SponsorFormSource | null;
}
