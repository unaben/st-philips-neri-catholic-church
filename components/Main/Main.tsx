import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import ContactCard from "./components/ContactCard/ContactCard";
import StaffCard from "./components/StaffCard/StaffCard";
import VisitSection from "./components/VisitSection/VisitSection";
import type { MainSectionProps, SafeguardingRep } from "./Main.types";
import styles from "./Main.module.css";
import staffCardStyles from "./components/StaffCard/StaffCard.module.css";

export default function MainSection(props: MainSectionProps) {
  const {
    churchName,
    tagline,
    priests,
    staff,
    safeguardingReps,
    privacyPolicyUrl,
    address,
    officeHours,
    social,
  } = props;

  return (
    <>
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
          <div className={styles.accentBar} aria-hidden="true" />
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Archdiocese of Birmingham</span>
          <h1 className={styles.title}>
            {churchName}
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          {tagline && <p className={styles.leadText}>{tagline}</p>}

          <div className={styles.streamingBox}>
            <span className={styles.streamingIcon} aria-hidden="true">
              📡
            </span>
            <div>
              <strong>Diocesan parishes live streaming Masses</strong>
              <p>
                Several parishes within Westminster Diocese are streaming
                weekend and weekday Masses.{" "}
                <Link
                  href="https://rcdow.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mass streaming and useful websites
                </Link>
              </p>
            </div>
          </div>
        </ContentWrap>
      </div>

      <ContentWrap className={styles.body}>
        <section aria-labelledby="priests-heading">
          <h2 id="priests-heading" className={styles.sectionHeading}>
            Our Clergy
          </h2>
          <ul className={styles.priestsGrid}>
            {priests.map((p, i) => (
              <li key={p.email}>
                <ContactCard person={p} featured={i === 0} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="staff-heading" className={styles.section}>
          <h2 id="staff-heading" className={styles.sectionHeading}>
            Parish Staff
          </h2>
          <div className={styles.staffGrid}>
            {staff.map((s) => (
              <StaffCard key={s.email} person={s} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="safeguarding-heading"
          className={styles.section}
        >
          <div className={styles.safeguardingCard}>
            <h2
              id="safeguarding-heading"
              className={styles.safeguardingHeading}
            >
              Parish Safeguarding Representatives
            </h2>
            <ul className={styles.safeguardingReps}>
              {safeguardingReps.map((rep: SafeguardingRep) => (
                <li key={rep.email}>
                  <h3 className={staffCardStyles.name}>{rep.name}</h3>
                  <Link
                    href={`mailto:${rep.email}`}
                    className={staffCardStyles.email}
                  >
                    {rep.email}
                  </Link>
                  <p className={staffCardStyles.name}>{rep.phone}</p>
                </li>
              ))}
            </ul>
            <div className={styles.safeguardingLinks}>
              <Link
                href="/about/safeguarding"
                className={styles.safeguardingCta}
              >
                Read our safeguarding policy →
              </Link>
              <Link
                href={privacyPolicyUrl}
                className={styles.privacyLink}
              >
                Full privacy policy
              </Link>
            </div>
          </div>
        </section>
        <VisitSection
          address={address}
          officeHours={officeHours}
          social={social}
        />

        <div className={styles.ctaRow}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://donate.mydona.com/st-philip-neri-catholic-church"
            className={styles.btnPrimary}
          >
            Support Our Parish
          </Link>
          <Link href="/subscribe" className={styles.btnSecondary}>
            Get Parish Updates
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}