import { useState } from "react";
import { announcementsClient } from "@/app/lib/announcementsClient";
import type { Announcement } from "@/types/announcement";
import type { AnnouncementFormValues } from "@/components/AnnouncementForm/AnnouncementForm.types";
import type { AdminScreenMode } from "../AdminScreen.types";

export function useAdminScreen(initialAnnouncements: Announcement[]) {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [mode, setMode] = useState<AdminScreenMode>({ type: "list" });
  const [pendingDelete, setPendingDelete] = useState<Announcement | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [listError, setListError] = useState<string | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  function startCreate() {
    setMode({ type: "create" });
  }

  function startEdit(announcement: Announcement) {
    setMode({ type: "edit", announcement });
  }

  function cancelForm() {
    setMode({ type: "list" });
  }

  async function handleCreate(values: AnnouncementFormValues) {
    const created = await announcementsClient.create(values);
    setAnnouncements((prev) => [created, ...prev]);
    setMode({ type: "list" });
  }

  async function handleUpdate(id: string, values: AnnouncementFormValues) {
    const updated = await announcementsClient.update(id, values);
    setAnnouncements((prev) =>
      prev.map((item) => (item.id === id ? updated : item))
    );
    setMode({ type: "list" });
  }

  function requestDelete(announcement: Announcement) {
    setListError(null);
    setPendingDelete(announcement);
  }

  function cancelDelete() {
    setPendingDelete(null);
  }

  async function confirmDelete() {
    if (!pendingDelete) return;
    setIsDeleting(true);
    try {
      await announcementsClient.remove(pendingDelete.id);
      setAnnouncements((prev) =>
        prev.filter((item) => item.id !== pendingDelete.id)
      );
      setPendingDelete(null);
    } catch (error) {
      setListError(
        error instanceof Error
          ? error.message
          : "Failed to delete announcement."
      );
    } finally {
      setIsDeleting(false);
    }
  }

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      window.location.assign("/admin/login");
    }
  }

  return {
    announcements,
    mode,
    pendingDelete,
    isDeleting,
    listError,
    startCreate,
    startEdit,
    cancelForm,
    handleCreate,
    handleUpdate,
    requestDelete,
    cancelDelete,
    confirmDelete,
    isLoggingOut,
    setIsLoggingOut,
    handleLogout,
  };
}
