import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { MASS_SCHEDULE } from "./constants";
import styles from "./Masses.module.css";

export default function MassesPage() {
  return (
    <>
      <Hero title="Mass Times" imgUrl="/images/chalice.webp" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
          <div className={styles.accentBar} aria-hidden="true" />
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Join Us in Worship</span>
          <h1 className={styles.title}>
            Mass Times at St. Philip Neri
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            Whatever day you join us, you are warmly welcome to worship with our
            parish family. Below are our regular Mass times — if you&apos;re
            planning to attend for a special occasion, please check our latest
            announcements in case of any changes to the schedule.
          </p>
        </ContentWrap>
      </div>

      <ContentWrap className={styles.body}>
        <div className={styles.scheduleCard}>
          <h2 className={styles.scheduleHeading}>Mass Times</h2>

          <div className={styles.scheduleList}>
            {MASS_SCHEDULE.map((group) => (
              <div key={group.id} className={styles.scheduleRow}>
                {group.entries.map((entry, index) => (
                  <div key={index} className={styles.scheduleRowItem}>
                    <span className={styles.scheduleDays}>
                      {entry.days}{" "}
                      <span className={styles.scheduleLocation}>
                        ({entry.location})
                      </span>
                    </span>
                    <span className={styles.scheduleTime}>{entry.time}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.noteCard}>
          <span className={styles.noteIcon} aria-hidden="true">
            ℹ️
          </span>
          <p className={styles.noteText}>
            <strong>Parish</strong> Masses are held in the main church on
            Messenger Road. <strong>School</strong>{" "} Masses are held at St.
            Philip&apos;s Catholic Primary School and are open to all
            parishioners, not just the school community.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/about/mass-booking" className={styles.btnPrimary}>
            Book a Mass
          </Link>
          <Link href="/about/contact" className={styles.btnSecondary}>
            Contact Us
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}