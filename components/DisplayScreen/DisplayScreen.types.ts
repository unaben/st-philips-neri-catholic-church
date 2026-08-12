import type { Announcement } from '@/types/announcement';

export interface DisplayScreenProps {
  initialAnnouncements: Announcement[];
}

export interface UseDisplayScreenResult {
  announcements: Announcement[];
  isRefreshing: boolean;
  error: string | null;
  lastUpdated: Date | null;
}
