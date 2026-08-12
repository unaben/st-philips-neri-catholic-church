import { MeetingDetails } from "./LegionOfMary.types";

/**
 * Returns the next occurrence (today or in the future) of the given
 * weekday, so the meeting card never shows a date that's already passed.
 */
export function getNextMeetingDate(
  weekday: number,
  from: Date = new Date()
): Date {
  const result = new Date(from);
  result.setHours(0, 0, 0, 0);
  const daysUntil = (weekday - result.getDay() + 7) % 7;
  result.setDate(result.getDate() + daysUntil);
  return result;
}

export function formatMeetingDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function isMeetingToday(
  meeting: MeetingDetails,
  from: Date = new Date()
): boolean {
  return meeting.weekday === from.getDay();
}
