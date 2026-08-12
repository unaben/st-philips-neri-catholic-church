'use client';

import { AnnouncementCard } from '@/components/AnnouncementCard/AnnouncementCard';
import styles from './DisplayScreen.module.css';
import { useDisplayScreen } from './hooks/useDisplayScreen';
import type { DisplayScreenProps } from './DisplayScreen.types';

export function DisplayScreen({ initialAnnouncements }: DisplayScreenProps) {
  const { announcements, error } = useDisplayScreen(initialAnnouncements);

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Parish Announcements</h1>
      </header>

      {error ? <p className={styles.errorBanner}>{error}</p> : null}

      {announcements.length === 0 ? (
        <p className={styles.empty}>No announcements at the moment.</p>
      ) : (
        <div className={styles.list}>
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
              variant="display"
            />
          ))}
        </div>
      )}
    </div>
  );
}
