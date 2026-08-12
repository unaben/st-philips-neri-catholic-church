import type {
  Announcement,
  CreateAnnouncementInput,
  UpdateAnnouncementInput,
} from '@/types/announcement';

export interface AnnouncementStore {
  getAll(): Promise<Announcement[]>;
  getById(id: string): Promise<Announcement | null>;
  create(input: CreateAnnouncementInput): Promise<Announcement>;
  update(id: string, input: UpdateAnnouncementInput): Promise<Announcement | null>;
  remove(id: string): Promise<boolean>;
}
