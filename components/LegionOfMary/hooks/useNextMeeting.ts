import { useEffect, useState } from "react";
import { MeetingDetails } from "../LegionOfMary.types";
import { formatMeetingDate, getNextMeetingDate, isMeetingToday } from "../LegionOfMary.utils";

interface UseNextMeetingResult {
  label: string | null;
  isToday: boolean;
}

/**
 * Computes the next meeting date on the client only, so the server-rendered
 * markup never has to guess "today" and risk a hydration mismatch.
 */
export function useNextMeeting(meeting: MeetingDetails): UseNextMeetingResult {
  const [result, setResult] = useState<UseNextMeetingResult>({
    label: null,
    isToday: false,
  });

  useEffect(() => {
    const now = new Date();
    const nextDate = getNextMeetingDate(meeting.weekday, now);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult({
      label: formatMeetingDate(nextDate),
      isToday: isMeetingToday(meeting, now),
    });
  }, [meeting]);

  return result;
}