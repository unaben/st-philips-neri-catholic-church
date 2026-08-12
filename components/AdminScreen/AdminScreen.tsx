"use client";

import Link from "next/link";
import { AnnouncementCard } from "@/components/AnnouncementCard/AnnouncementCard";
import { AnnouncementForm } from "@/components/AnnouncementForm/AnnouncementForm";
import { ConfirmDialog } from "@/components/ConfirmDialog/ConfirmDialog";
import { useAdminScreen } from "./hooks/useAdminScreen";
import type { AdminScreenProps } from "./AdminScreen.types";
import styles from "./AdminScreen.module.css";

export function AdminScreen({ initialAnnouncements }: AdminScreenProps) {
  const {
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
    handleLogout,
    isLoggingOut,
  } = useAdminScreen(initialAnnouncements);

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.heading}>Manage Announcements</h1>
          <Link href="/news-and-events/announcements" className={styles.displayLink}>
            View display screen &rarr;
          </Link>
        </div>
        <div className={styles.headerActions}>
          {mode.type === "list" ? (
            <button
              type="button"
              className={styles.newButton}
              onClick={startCreate}
            >
              + New announcement
            </button>
          ) : null}
          <button
            type="button"
            className={styles.logoutButton}
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging out..." : "Log out"}
          </button>
        </div>
      </header>

      {listError ? <p className={styles.errorBanner}>{listError}</p> : null}

      {mode.type === "create" ? (
        <section className={styles.formSection}>
          <h2 className={styles.formHeading}>New announcement</h2>
          <AnnouncementForm
            onSubmit={handleCreate}
            onCancel={cancelForm}
            submitLabel="Publish announcement"
          />
        </section>
      ) : null}

      {mode.type === "edit" ? (
        <section className={styles.formSection}>
          <h2 className={styles.formHeading}>Edit announcement</h2>
          <AnnouncementForm
            initialAnnouncement={mode.announcement}
            onSubmit={(values) => handleUpdate(mode.announcement.id, values)}
            onCancel={cancelForm}
            submitLabel="Save changes"
          />
        </section>
      ) : null}

      {mode.type === "list" ? (
        announcements.length === 0 ? (
          <p className={styles.empty}>
            No announcements yet. Click &ldquo;New announcement&rdquo; to add
            one.
          </p>
        ) : (
          <div className={styles.list}>
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                variant="admin"
                onEdit={startEdit}
                onDelete={requestDelete}
              />
            ))}
          </div>
        )
      ) : null}

      <ConfirmDialog
        open={pendingDelete !== null}
        title={`Delete "${pendingDelete?.title ?? ""}"?`}
        description="This can't be undone."
        isConfirming={isDeleting}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
