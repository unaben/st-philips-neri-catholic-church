import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { FAQS, JOURNEY, REQUIREMENTS } from "./constants";
import styles from "./Marriage.module.css";

export default function Marriage() {
  return (
    <>
      <Hero title="Marriage" imgUrl="/images/marriage.webp" />
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>          
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Sacrament of Matrimony</span>
          <h1 className={styles.title}>
            Beginning Your Married Life in Christ
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            Marriage is a lifelong covenant of love, blessed by God and
            witnessed by the Church community. If you&apos;re planning to
            marry at St. Philip Neri, we&apos;re here to help you prepare well
            for this important step.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/about/contact" className={styles.btnPrimary}>
              Speak to the Priest
            </Link>
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>What&apos;s Needed</h2>
        <div className={styles.reqGrid}>
          {REQUIREMENTS.map(({ icon, title, description }) => (
            <div key={title} className={styles.reqCard}>
              <div className={styles.reqIcon} aria-hidden="true">{icon}</div>
              <h3 className={styles.reqTitle}>{title}</h3>
              <p className={styles.reqText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>

      <div className={styles.journeySection}>
        <ContentWrap className={styles.journeyInner}>
          <h2 className={styles.sectionHeading}>Your Path to the Altar</h2>
          <ol className={styles.stagesList}>
            {JOURNEY.map(({ stage, title, timing, description }) => (
              <li key={stage} className={styles.stageItem}>
                <span className={styles.stageNumber} aria-hidden="true">{stage}</span>
                <div className={styles.stageContent}>
                  <div className={styles.stageHeader}>
                    <h3 className={styles.stageTitle}>{title}</h3>
                    <span className={styles.stageTiming}>{timing}</span>
                  </div>
                  <p className={styles.stageText}>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </ContentWrap>
      </div>

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
        <h2 className={styles.ctaTitle}>Planning to Marry?</h2>
        <p className={styles.ctaText}>
          Contact the parish as early as possible, ideally at least six months
          before your planned date, so we can support you through every step.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/about/contact" className={styles.btnPrimary}>
            Contact Us
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}