import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { SUNDAY_MASS, WEEKDAY_MASS, SCHOOL_MASS } from "./constants";
import styles from "./Masses.module.css";

export default function MassesPage() {
  return (
    <>
      <Hero title="Mass Times" />
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
            <div className={styles.scheduleRow}>
              <span className={styles.scheduleDays}>
                {SUNDAY_MASS.days}{" "}
                <span className={styles.scheduleLocation}>
                  ({SUNDAY_MASS.location})
                </span>
              </span>
              <span className={styles.scheduleTime}>{SUNDAY_MASS.time}</span>
            </div>

            <div className={styles.scheduleRow}>
              <span className={styles.scheduleDays}>
                {WEEKDAY_MASS.days}{" "}
                <span className={styles.scheduleLocation}>
                  ({WEEKDAY_MASS.location})
                </span>
              </span>
              <span className={styles.scheduleTime}>{WEEKDAY_MASS.time}</span>
            </div>

            <div className={styles.scheduleRow}>
              <span className={styles.scheduleDays}>
                {SCHOOL_MASS.days}{" "}
                <span className={styles.scheduleLocation}>
                  ({SCHOOL_MASS.location})
                </span>
              </span>
              <span className={styles.scheduleTime}>{SCHOOL_MASS.time}</span>
            </div>
          </div>

          <div className={styles.scheduleLinks}>
            <Link href="/announcements" className={styles.scheduleLink}>
              More →
            </Link>
            <Link href="/mass-booking" className={styles.scheduleLink}>
              Mass Booking →
            </Link>
          </div>
        </div>

        <div className={styles.noteCard}>
          <span className={styles.noteIcon} aria-hidden="true">
            ℹ️
          </span>
          <p className={styles.noteText}>
            <strong>Parish</strong> Masses are held in the main church on
            Messenger Road. <strong>School</strong> {''} Masses are held at St.
            Philip&apos;s Catholic Primary School and are open to all
            parishioners, not just the school community.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/mass-booking" className={styles.btnPrimary}>
            Book a Mass
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Contact Us
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}
