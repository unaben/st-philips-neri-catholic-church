import { promises as fs } from "fs";
import path from "path";
import type {
  Announcement,
  CreateAnnouncementInput,
  UpdateAnnouncementInput,
} from "@/types/announcement";
import type { AnnouncementStore } from "./announcementStore.types";

/**
 * Development-only store. Announcements live in a plain JSON object on disk
 * at data/announcements.dev.json, so data survives a dev server restart but
 * never touches production - this file only ever runs when
 * process.env.NODE_ENV !== 'production' (see storage/index.ts).
 *
 * This intentionally avoids a database dependency for local development.
 */

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "announcements.dev.json");

interface JsonShape {
  announcements: Announcement[];
}

async function readData(): Promise<JsonShape> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as JsonShape;
  } catch (error) {
    // File doesn't exist yet (or is corrupt) - start empty.
    const empty: JsonShape = { announcements: [] };
    await writeData(empty);
    return empty;
  }
}

async function writeData(data: JsonShape): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function generateId(): string {
  return typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export const jsonStore: AnnouncementStore = {
  async getAll() {
    const data = await readData();
    return [...data.announcements].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  async getById(id) {
    const data = await readData();
    return data.announcements.find((item) => item.id === id) ?? null;
  },

  async create(input: CreateAnnouncementInput) {
    const data = await readData();
    const now = new Date().toISOString();
    const announcement: Announcement = {
      id: generateId(),
      title: input.title,
      plainText: input.plainText,
      richTextHtml: input.richTextHtml,
      createdAt: now,
      updatedAt: now,
    };
    data.announcements.push(announcement);
    await writeData(data);
    return announcement;
  },

  async update(id, input: UpdateAnnouncementInput) {
    const data = await readData();
    const index = data.announcements.findIndex((item) => item.id === id);
    if (index === -1) return null;

    const updated: Announcement = {
      ...data.announcements[index],
      title: input.title,
      plainText: input.plainText,
      richTextHtml: input.richTextHtml,
      updatedAt: new Date().toISOString(),
    };
    data.announcements[index] = updated;
    await writeData(data);
    return updated;
  },

  async remove(id) {
    const data = await readData();
    const nextAnnouncements = data.announcements.filter(
      (item) => item.id !== id
    );
    const removed = nextAnnouncements.length !== data.announcements.length;
    if (removed) {
      await writeData({ announcements: nextAnnouncements });
    }
    return removed;
  },
};
