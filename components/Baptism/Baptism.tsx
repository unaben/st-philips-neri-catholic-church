import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { FAQS, JOURNEY, REQUIREMENTS } from "./constants";
import styles from "./Baptism.module.css";

export default function Baptism() {
  return (
    <>
      <Hero title="Baptism" imgUrl="/images/baptism.webp" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
          <div className={styles.accentBar} aria-hidden="true" />
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Sacrament of Initiation</span>
          <h1 className={styles.title}>
            Welcoming Your Child Into the Church
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            Baptism is the first of the sacraments of initiation, washing away
            original sin and welcoming your child into the family of God and the
            life of the Church. We&apos;re glad to walk this journey with you
            and your family.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/about/contact" className={styles.btnPrimary}>
              Start the Process
            </Link>
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>What&apos;s Needed</h2>
        <div className={styles.reqGrid}>
          {REQUIREMENTS.map(({ icon, title, description }) => (
            <div key={title} className={styles.reqCard}>
              <div className={styles.reqIcon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.reqTitle}>{title}</h3>
              <p className={styles.reqText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>

      <div className={styles.journeySection}>
        <ContentWrap className={styles.journeyInner}>
          <h2 className={styles.sectionHeading}>The Journey to Baptism</h2>
          <ol className={styles.stagesList}>
            {JOURNEY.map(({ stage, title, timing, description }) => (
              <li key={stage} className={styles.stageItem}>
                <span className={styles.stageNumber} aria-hidden="true">
                  {stage}
                </span>
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
        <h2 className={styles.ctaTitle}>Ready to Begin?</h2>
        <p className={styles.ctaText}>
          Get in touch with the parish office to arrange your child&apos;s
          baptism and a preparation session.
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
