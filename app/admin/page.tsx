import { AdminScreen } from "@/components/AdminScreen/AdminScreen";
import { announcementStore } from "../lib/storage";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const announcements = await announcementStore.getAll();
  return <AdminScreen initialAnnouncements={announcements} />;
}
