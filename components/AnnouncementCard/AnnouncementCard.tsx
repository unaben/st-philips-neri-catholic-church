import cn from "classnames";
import styles from "./AnnouncementCard.module.css";
import type { AnnouncementCardProps } from "./AnnouncementCard.types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Renders a single announcement. `richTextHtml` is sanitised server-side
 * (see lib/sanitize.ts) before it's ever stored, so it's safe to render here.
 */
export function AnnouncementCard({
  announcement,
  variant = "display",
  onEdit,
  onDelete,
}: AnnouncementCardProps) {
  const isAdmin = variant === "admin";

  return (
    <article className={cn(styles.card, { [styles.cardAdmin]: isAdmin })}>
      <header className={styles.header}>
        <h3 className={styles.title}>{announcement.title}</h3>
        <span className={styles.date}>
          {formatDate(announcement.createdAt)}
        </span>
      </header>

      {isAdmin ? (
        <p className={styles.plainText}>{announcement.plainText}</p>
      ) : (
        <div
          className={styles.richText}
          dangerouslySetInnerHTML={{ __html: announcement.richTextHtml }}
        />
      )}

      {isAdmin ? (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.editButton}
            onClick={() => onEdit?.(announcement)}
          >
            Edit
          </button>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => onDelete?.(announcement)}
          >
            Delete
          </button>
        </div>
      ) : null}
    </article>
  );
}
