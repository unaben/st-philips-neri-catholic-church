export interface MassTimeEntry {
  days: string;
  location: string;
  time: string;
}

export interface MassScheduleGroup {
  id: string;
  entries: MassTimeEntry[];
}
