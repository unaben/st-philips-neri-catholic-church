import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { WHO_ITS_FOR, JOURNEY, FAQS } from "./constants";
import styles from "./RCIA.module.css";

export default function RCIAPage() {
  return (
    <>
      <Hero title="Becoming a Catholic" imgUrl="/images/become-a-catholic.webp" />      
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
        <div className={styles.accentBar} aria-hidden="true" />
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>RCIA / OCIA</span>
          <h1 className={styles.title}>
            Thinking About Becoming Catholic?
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            The Rite of Christian Initiation of Adults (RCIA) — also known as
            the Order of Christian Initiation of Adults (OCIA) — is the journey
            by which adults come into full communion with the Catholic Church.
            Whether you&apos;ve never been baptized, come from another Christian
            tradition, or simply have questions, you are warmly welcome to begin
            this journey with us at St. Philip Neri.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Start the Conversation
          </Link>
        </ContentWrap>
      </div>
      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Is This Journey for You?</h2>
        <p className={styles.sectionIntro}>
          RCIA welcomes people from many different starting points. You might
          recognize yourself in one of these:
        </p>
        <div className={styles.whoGrid}>
          {WHO_ITS_FOR.map(({ icon, title, description }) => (
            <div key={title} className={styles.whoCard}>
              <div className={styles.whoIcon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.whoTitle}>{title}</h3>
              <p className={styles.whoText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>
      <div className={styles.journeySection}>
        <ContentWrap className={styles.journeyInner}>
          <h2 className={styles.sectionHeading}>The Journey, Step by Step</h2>
          <p className={styles.sectionIntro}>
            RCIA unfolds in six stages, walking you from first questions to full
            communion with the Church — and beyond.
          </p>

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
        <h2 className={styles.ctaTitle}>Take the First Step</h2>
        <p className={styles.ctaText}>
          By reading this far, you&apos;ve already taken the first step.
          There&apos;s no obligation and no pressure — just an open door and a
          welcoming parish family ready to walk this journey with you.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.btnPrimary}>
            Speak to Our Parish Priest
          </Link>
          <Link href="/mass-times" className={styles.btnSecondary}>
            Join Us for Mass
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}
