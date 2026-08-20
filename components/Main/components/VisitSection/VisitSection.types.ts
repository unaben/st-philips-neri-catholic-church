import type { ChurchAddress, OfficeHours } from "../../Main.types";

export interface VisitSectionProps {
  heading?: string;
  address: ChurchAddress;
  officeHours: OfficeHours;
}
