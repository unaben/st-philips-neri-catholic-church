"use client";

import { useNextMeeting } from "../hooks/useNextMeeting";
import type { MeetingDetails } from "../LegionOfMary.types";
import styles from "../LegionOfMary.module.css";

export default function NextMeetingBadge({
  meeting,
}: {
  meeting: MeetingDetails;
}) {
  const { label, isToday } = useNextMeeting(meeting);

  if (!label) {
    return <div className={styles.nextMeeting}>&nbsp;</div>;
  }

  return (
    <div className={styles.nextMeeting}>
      {isToday ? "Meeting today" : `Next meeting: ${label}`}
    </div>
  );
}
