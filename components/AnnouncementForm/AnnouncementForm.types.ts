import type { Announcement } from '@/types/announcement';

export interface AnnouncementFormValues {
  title: string;
  plainText: string;
  richTextHtml: string;
}

export interface AnnouncementFormProps {
  initialAnnouncement?: Announcement | null;
  onSubmit: (values: AnnouncementFormValues) => Promise<void>;
  onCancel?: () => void;
  submitLabel?: string;
}

export interface AnnouncementFormErrors {
  title?: string;
  plainText?: string;
  richTextHtml?: string;
  form?: string;
}
