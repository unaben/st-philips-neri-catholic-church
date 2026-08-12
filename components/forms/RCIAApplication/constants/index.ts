import type { MaritalStatus } from "../RCIAApplication.types";

export const MARITAL_STATUS_OPTIONS: { value: MaritalStatus; label: string }[] = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "inRelationship", label: "In a relationship" },
  { value: "divorcedSeparated", label: "Divorced / Separated" },
  { value: "engaged", label: "Engaged" },
];