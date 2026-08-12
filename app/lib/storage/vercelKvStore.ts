import { kv } from '@vercel/kv';
import type {
  Announcement,
  CreateAnnouncementInput,
  UpdateAnnouncementInput,
} from '@/types/announcement';
import type { AnnouncementStore } from './announcementStore.types';

/**
 * Production store. Backed by Vercel KV (Upstash Redis under the hood).
 * All announcements are kept as a single JSON array under one key - church
 * announcement boards are low volume (tens, not thousands, of entries) so a
 * single read/write per request is simpler and cheap, and avoids needing a
 * transaction across multiple keys.
 */

const KEY = 'announcements:all';

function generateId(): string {
  return typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function readAll(): Promise<Announcement[]> {
  const data = await kv.get<Announcement[]>(KEY);
  return data ?? [];
}

async function writeAll(announcements: Announcement[]): Promise<void> {
  await kv.set(KEY, announcements);
}

export const vercelKvStore: AnnouncementStore = {
  async getAll() {
    const all = await readAll();
    return [...all].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  },

  async getById(id) {
    const all = await readAll();
    return all.find((item) => item.id === id) ?? null;
  },

  async create(input: CreateAnnouncementInput) {
    const all = await readAll();
    const now = new Date().toISOString();
    const announcement: Announcement = {
      id: generateId(),
      title: input.title,
      plainText: input.plainText,
      richTextHtml: input.richTextHtml,
      createdAt: now,
      updatedAt: now,
    };
    all.push(announcement);
    await writeAll(all);
    return announcement;
  },

  async update(id, input: UpdateAnnouncementInput) {
    const all = await readAll();
    const index = all.findIndex((item) => item.id === id);
    if (index === -1) return null;

    const updated: Announcement = {
      ...all[index],
      title: input.title,
      plainText: input.plainText,
      richTextHtml: input.richTextHtml,
      updatedAt: new Date().toISOString(),
    };
    all[index] = updated;
    await writeAll(all);
    return updated;
  },

  async remove(id) {
    const all = await readAll();
    const next = all.filter((item) => item.id !== id);
    const removed = next.length !== all.length;
    if (removed) {
      await writeAll(next);
    }
    return removed;
  },
};
