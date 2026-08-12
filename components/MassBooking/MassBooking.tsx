import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { REASONS } from "./constants";
import { getMassBookingUrl } from "./MassBooking.utils";
import styles from "./MassBooking.module.css";

export default function MassBooking() {
  const massBookingUrl = getMassBookingUrl();

  return (
    <>
      <Hero title="Mass Booking" imgUrl="/images/mass-booking.webp"/>
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
          <div className={styles.accentBar} aria-hidden="true" />
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Mass Intentions</span>
          <h1 className={styles.title}>
            Request a Mass Intention
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            You can request that a Mass be offered for a particular
            intention &mdash; for someone who has died, for the sick, in
            thanksgiving, or for any other reason close to your heart.
            Booking and payment for Mass intentions is handled through our
            secure parish donation page.
          </p>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Common Reasons to Book a Mass</h2>
        <div className={styles.reasonsGrid}>
          {REASONS.map(({ icon, title, description }) => (
            <div key={title} className={styles.reasonCard}>
              <div className={styles.reasonIcon} aria-hidden="true">{icon}</div>
              <h3 className={styles.reasonTitle}>{title}</h3>
              <p className={styles.reasonText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>

      <ContentWrap as="section" className={styles.bookingSection}>
        <div className={styles.bookingCard}>
          <h2 className={styles.bookingTitle}>Ready to Book?</h2>
          <p className={styles.bookingText}>
            Select &ldquo;Mass Booking&rdquo; on our secure Dona donation page
            to submit your intention and complete payment. It only takes a
            couple of minutes.
          </p>
          <Link
            href={massBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Book a Mass on Dona
          </Link>
          <p className={styles.bookingNote}>
            You&apos;ll be taken to our parish&apos;s donation page on
            donate.mydona.com
          </p>
        </div>
      </ContentWrap>

      <ContentWrap className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Prefer to Book in Person?</h2>
        <p className={styles.ctaText}>
          You&apos;re also welcome to speak to the priest directly after Mass or
          contact the parish office to arrange a Mass intention.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/about/contact" className={styles.btnSecondary}>
            Contact Us
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}