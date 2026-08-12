import type { Announcement } from '@/types/announcement';

export interface AdminScreenProps {
  initialAnnouncements: Announcement[];
}

export type AdminScreenMode =
  | { type: 'list' }
  | { type: 'create' }
  | { type: 'edit'; announcement: Announcement };
