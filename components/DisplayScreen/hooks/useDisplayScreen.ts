import { useEffect, useRef, useState } from "react";
import { announcementsClient } from "@/app/lib/announcementsClient";
import { DISPLAY_REFRESH_INTERVAL_MS } from "@/app/lib/constants";
import type { Announcement } from "@/types/announcement";
import type { UseDisplayScreenResult } from "../DisplayScreen.types";

export function useDisplayScreen(
  initialAnnouncements: Announcement[]
): UseDisplayScreenResult {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(new Date());
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    async function refresh() {
      setIsRefreshing(true);
      try {
        const next = await announcementsClient.list();
        if (!isMounted.current) return;
        setAnnouncements(next);
        setError(null);
        setLastUpdated(new Date());
      } catch (err) {
        if (!isMounted.current) return;
        setError(err instanceof Error ? err.message : "Failed to refresh.");
      } finally {
        if (isMounted.current) setIsRefreshing(false);
      }
    }

    const intervalId = window.setInterval(refresh, DISPLAY_REFRESH_INTERVAL_MS);

    return () => {
      isMounted.current = false;
      window.clearInterval(intervalId);
    };
  }, []);

  return { announcements, isRefreshing, error, lastUpdated };
}
