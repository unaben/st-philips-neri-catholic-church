import type { MassScheduleItem } from "../Masses.types";

export const SUNDAY_MASS: MassScheduleItem = {
  days: "Sunday",
  location: "Parish",
  time: "9:30am",
};

export const WEEKDAY_MASS: MassScheduleItem = {
  days: "Monday – Wednesday / Friday – Saturday",
  location: "Parish",
  time: "10:00am",
};

export const SCHOOL_MASS: MassScheduleItem = {
  days: "Thursday",
  location: "School",
  time: "9:15am",
};
