import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { CONFESSION_TIMES, FAQS, REASONS, STEPS } from "./constants";
import styles from "./Confession.module.css";

export default function Confession() {
  return (
    <>
      <Hero title="Confession" imgUrl="/images/confession.webp"/>
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>          
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Sacrament of Reconciliation</span>
          <h1 className={styles.title}>
            God&apos;s Mercy, Always Within Reach
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            Confession, also known as the Sacrament of Reconciliation, is where
            we bring our failings honestly before God and receive His
            forgiveness through the priest. There is no sin too great, and no
            length of time too long, to keep you from this sacrament.
          </p>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Why Go to Confession?</h2>
        <div className={styles.reasonsGrid}>
          {REASONS.map(({ icon, title, description }) => (
            <div key={title} className={styles.reasonCard}>
              <div className={styles.reasonIcon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.reasonTitle}>{title}</h3>
              <p className={styles.reasonText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>

      <div className={styles.timesSection}>
        <ContentWrap className={styles.timesInner}>
          <h2 className={styles.sectionHeadingLight}>Confession Times</h2>
          <div className={styles.timesGrid}>
            {CONFESSION_TIMES.map((slot, i) => (
              <div key={i} className={styles.timeCard}>
                <span className={styles.timeDay}>{slot.day}</span>
                <span className={styles.timeValue}>{slot.time}</span>
                {slot.note && (
                  <span className={styles.timeNote}>{slot.note}</span>
                )}
              </div>
            ))}
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Making a Good Confession</h2>
        <p className={styles.sectionIntro}>
          If it&apos;s been a while, here&apos;s a simple guide to what happens.
        </p>
        <ol className={styles.stepsList}>
          {STEPS.map(({ step, title, description }) => (
            <li key={step} className={styles.stepItem}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step}
              </span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{description}</p>
              </div>
            </li>
          ))}
        </ol>
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
        <h2 className={styles.ctaTitle}>Come As You Are</h2>
        <p className={styles.ctaText}>
          No appointment is needed for our regular Saturday times &mdash; just
          come along. For any other time, get in touch with the parish.
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
