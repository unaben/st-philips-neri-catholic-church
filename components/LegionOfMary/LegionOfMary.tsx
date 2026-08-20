"use client";



import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { APOSTOLIC_WORKS, FAQS, MEETING, MEMBERSHIP_TYPES } from "./constants";

import styles from "./LegionOfMary.module.css";
import NextMeetingBadge from "./components/NextMeetingBadge";

export default function LegionOfMary() {
  return (
    <>
      <Hero title="Legion of Mary" imgUrl="/images/virgin-mary.webp"/>
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>          
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Marian Apostolate</span>
          <h1 className={styles.title}>
            Legion of Mary
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            The Legion of Mary is a lay Catholic organisation devoted to Our
            Lady, combining regular prayer with practical works of charity in
            the parish. At St. Philip Neri, our Legionaries visit the sick and
            housebound, welcome new parishioners, and support the wider life
            of the church &mdash; all under Mary&apos;s guidance.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/about/contact" className={styles.btnPrimary}>
              Join Us
            </Link>
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Ways to Belong</h2>
        <p className={styles.sectionIntro}>
          The Legion has two forms of membership, so there is a way to take
          part whatever time you can give.
        </p>
        <div className={styles.membershipGrid}>
          {MEMBERSHIP_TYPES.map(({ icon, title, description }) => (
            <div key={title} className={styles.membershipCard}>
              <div className={styles.membershipIcon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.membershipTitle}>{title}</h3>
              <p className={styles.membershipText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>

      <div className={styles.worksSection}>
        <ContentWrap className={styles.worksInner}>
          <h2 className={styles.sectionHeading}>What We Do</h2>
          <p className={styles.sectionIntro}>
            Every week, Legionaries carry out an assigned work of the
            apostolate, reporting back at the next meeting.
          </p>
          <div className={styles.worksGrid}>
            {APOSTOLIC_WORKS.map(({ icon, title, description }) => (
              <div key={title} className={styles.workCard}>
                <div className={styles.workIcon} aria-hidden="true">
                  {icon}
                </div>
                <h3 className={styles.workTitle}>{title}</h3>
                <p className={styles.workText}>{description}</p>
              </div>
            ))}
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <div className={styles.meetingCard}>
          <div className={styles.beadRow} aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className={styles.bead} />
            ))}
          </div>
          <h2 className={styles.meetingTitle}>Weekly Meeting</h2>
          <p className={styles.meetingSchedule}>
            Every {MEETING.weekdayLabel} at {MEETING.time}
          </p>
          <p className={styles.meetingLocation}>{MEETING.location}</p>
          <NextMeetingBadge meeting={MEETING} />
          <p className={styles.meetingContact}>
            Contact {MEETING.contactName} &middot; {MEETING.contactPhone}
          </p>
        </div>
      </ContentWrap>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Common Questions</h2>
        <div className={styles.faqList}>
          {FAQS.map(({ question, answer }) => (
            <details key={question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{question}</summary>
              <p className={styles.faqAnswer}>{answer}</p>
            </details>
          ))}
        </div>
      </ContentWrap>

      <ContentWrap className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Come Along to a Meeting</h2>
        <p className={styles.ctaText}>
          No commitment is needed to visit &mdash; come to a Tuesday meeting,
          meet the Legionaries, and see if it&apos;s a good fit for you.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/about/contact" className={styles.btnPrimary}>
            Contact Us
          </Link>
          <Link href="/mass-times" className={styles.btnSecondary}>
            Mass Times
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}