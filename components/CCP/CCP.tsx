import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { APPLICATION_TYPES, FAQS, PRIESTS, REQUIREMENTS } from "./constants";
import { buildMailtoLink, buildTelLink } from "./CCP.utils";
import styles from "./CCP.module.css";

export default function CcpPage() {
  return (
    <>
      <Hero
        title="Certificate of Catholic Practice"
        imgUrl="/images/bible_and_rosary.webp"
      />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
          <div className={styles.accentBar} aria-hidden="true" />
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Catholic School Applications</span>
          <h1 className={styles.title}>
            Signing of the CCP for Catholic Schools
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            If you&apos;re applying for a place at a Catholic school, the priest
            can sign a Certificate of Catholic Practice (CCP) once your
            family&apos;s regular Mass attendance has been confirmed. Please
            visit your Local Council or the school&apos;s own website for the
            application form and guidelines, then contact the priest to arrange
            signing as outlined below.
          </p>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Before You Apply</h2>
        <p className={styles.sectionIntro}>
          The Archdiocese sets clear requirements before a CCP can be signed.
          Please check you meet these before contacting the priest.
        </p>
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

      <div className={styles.typesSection}>
        <ContentWrap className={styles.typesInner}>
          <h2 className={styles.sectionHeading}>Which Applies to You?</h2>
          <div className={styles.typesList}>
            {APPLICATION_TYPES.map(
              ({ title, description, linkLabel, linkHref }) => (
                <div key={title} className={styles.typeCard}>
                  <h3 className={styles.typeTitle}>{title}</h3>
                  <p className={styles.typeText}>{description}</p>
                  {linkHref && (
                    <Link
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.typeLink}
                    >
                      {linkLabel} →
                    </Link>
                  )}
                </div>
              )
            )}
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>
          Contact the Priest for an Appointment
        </h2>
        <p className={styles.sectionIntro}>
          Please email or call the parish office directly to arrange your CCP
          appointment. Bear in mind the priest&apos;s day off when planning.
        </p>
        <div className={styles.priestGrid}>
          {PRIESTS.map((priest) => (
            <div key={priest.email} className={styles.priestCard}>
              <h3 className={styles.priestRole}>{priest.role}</h3>
              <p className={styles.priestName}>{priest.name}</p>
              <p className={styles.priestDayOff}>Day off: {priest.dayOff}</p>
              <Link
                href={buildMailtoLink(priest)}
                className={styles.priestEmail}
              >
                {priest.email}
              </Link>
              <a href={buildTelLink(priest)} className={styles.priestPhone}>
                {priest.phone}
              </a>
            </div>
          ))}
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
        <h2 className={styles.ctaTitle}>Need Help With Your Application?</h2>
        <p className={styles.ctaText}>
          If you have any questions about the process, please get in touch with
          the parish office and we&apos;ll be glad to help.
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
