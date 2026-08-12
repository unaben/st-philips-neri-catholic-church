import type { Announcement } from '@/types/announcement';
import type { AnnouncementFormValues } from '@/components/AnnouncementForm/AnnouncementForm.types';

async function parseJsonOrThrow(response: Response) {
  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      (body?.errors && body.errors.join(' ')) ||
      body?.error ||
      `Request failed (${response.status}).`;
    throw new Error(message);
  }
  return body;
}

export const announcementsClient = {
  async list(): Promise<Announcement[]> {
    const response = await fetch('/api/announcements', { cache: 'no-store' });
    const body = await parseJsonOrThrow(response);
    return body.announcements as Announcement[];
  },

  async create(values: AnnouncementFormValues): Promise<Announcement> {
    const response = await fetch('/api/announcements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const body = await parseJsonOrThrow(response);
    return body.announcement as Announcement;
  },

  async update(id: string, values: AnnouncementFormValues): Promise<Announcement> {
    const response = await fetch(`/api/announcements/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const body = await parseJsonOrThrow(response);
    return body.announcement as Announcement;
  },

  async remove(id: string): Promise<void> {
    const response = await fetch(`/api/announcements/${id}`, { method: 'DELETE' });
    await parseJsonOrThrow(response);
  },
};
