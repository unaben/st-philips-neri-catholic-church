import type { AnnouncementStore } from './announcementStore.types';
import { jsonStore } from './jsonStore';
import { vercelKvStore } from './vercelKvStore';

export const announcementStore: AnnouncementStore =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? vercelKvStore
    : jsonStore;