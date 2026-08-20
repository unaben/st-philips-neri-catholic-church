import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import {
  PRINCIPLES,
  REPORTING_STEPS,
  PARISH_REP,
  DIOCESAN_TEAM,
  EXTERNAL_RESOURCES,
} from "./constants";
import styles from "./Safeguarding.module.css";

export default function SafeguardingPage() {
  return (
    <>      
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Safeguarding</span>
          <h1 className={styles.title}>
            Keeping Our Parish Family Safe
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            Safeguarding is everyone&apos;s responsibility — not just that of
            the few. St. Philip Neri Catholic Church is fully committed to the
            National Safeguarding Standards followed across the Catholic Church
            in England and Wales, and works closely with the Archdiocese of
            Birmingham Safeguarding Team to make sure our parish is a safe,
            welcoming place for children, young people and adults at risk.
          </p>
        </ContentWrap>
      </div>

      <ContentWrap className={styles.body}>
        <section aria-labelledby="principles-heading">
          <h2 id="principles-heading" className={styles.sectionHeading}>
            Our Commitment
          </h2>
          <div className={styles.principlesGrid}>
            {PRINCIPLES.map(({ icon, title, description }) => (
              <div key={title} className={styles.principleCard}>
                <div className={styles.principleIcon} aria-hidden="true">
                  {icon}
                </div>
                <h3 className={styles.principleTitle}>{title}</h3>
                <p className={styles.principleText}>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="reporting-heading" className={styles.section}>
          <h2 id="reporting-heading" className={styles.sectionHeading}>
            If You Have a Concern
          </h2>
          <p className={styles.sectionIntro}>
            If you are concerned about the welfare of a child or an adult at
            risk, please don&apos;t delay in acting. Here is what happens when a
            concern is raised:
          </p>
          <ol className={styles.stepsList}>
            {REPORTING_STEPS.map(({ step, title, description }) => (
              <li key={step} className={styles.stepItem}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepText}>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="contacts-heading" className={styles.section}>
          <h2 id="contacts-heading" className={styles.sectionHeading}>
            Who to Contact
          </h2>
          <div className={styles.contactsGrid}>
            <div className={styles.contactCard}>
              <span className={styles.contactLabel}>Emergency</span>
              <p className={styles.contactValue}>
                If a child or adult is in immediate danger, call{" "}
                <strong>999</strong>.
              </p>
            </div>

            <div className={styles.contactCard}>
              <span className={styles.contactLabel}>{PARISH_REP.label}</span>
              <p className={styles.contactValue}>
                {PARISH_REP.href ? (
                  <Link href={PARISH_REP.href} className={styles.contactLink}>
                    {PARISH_REP.value}
                  </Link>
                ) : (
                  PARISH_REP.value
                )}
              </p>
            </div>

            {DIOCESAN_TEAM.map(({ label, value, href }) => (
              <div key={label} className={styles.contactCard}>
                <span className={styles.contactLabel}>{label}</span>
                <p className={styles.contactValue}>
                  {href ? (
                    <Link href={href} className={styles.contactLink}>
                      {value}
                    </Link>
                  ) : (
                    value
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="resources-heading" className={styles.section}>
          <h2 id="resources-heading" className={styles.sectionHeading}>
            Independent Support &amp; Resources
          </h2>
          <div className={styles.resourcesList}>
            {EXTERNAL_RESOURCES.map(({ name, description, href }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
              >
                <span className={styles.resourceName}>{name} ↗</span>
                <p className={styles.resourceText}>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className={styles.closingNote}>
          <p>
            &ldquo;Let us love, not in word or speech, but in truth and
            action.&rdquo; — 1 John 3:18
          </p>
        </div>
      </ContentWrap>
    </>
  );
}
