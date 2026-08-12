import type { Announcement } from '@/types/announcement';

export interface AnnouncementCardProps {
  announcement: Announcement;
  variant?: 'display' | 'admin';
  onEdit?: (announcement: Announcement) => void;
  onDelete?: (announcement: Announcement) => void;
}
