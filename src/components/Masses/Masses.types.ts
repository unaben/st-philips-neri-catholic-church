export type MassScheduleItem = {
  days: string;
  location: string;
  time: string;
};

export type MassGroup = {
  title: string;
  schedule: MassScheduleItem[];
};
