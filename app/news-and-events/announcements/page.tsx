import { ContentWrap } from "@/components/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { announcementStore } from "@/app/lib/storage";
import { DisplayScreen } from "@/components/DisplayScreen/DisplayScreen";
import styles from "./announcements.module.css";

export const dynamic = "force-dynamic";

const AnnouncementPage = async () => {
  const announcements = await announcementStore.getAll();
  return (
    <>
      <Hero title="Parish Announcements" imgUrl="/images/psalm23.webp" />
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Registration</span>
          <DisplayScreen initialAnnouncements={announcements} />
        </div>
      </ContentWrap>
    </>
  );
};

export default AnnouncementPage;
