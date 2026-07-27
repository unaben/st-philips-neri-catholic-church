import Link from "next/link";
import type { MainSectionProps, SafeguardingRep } from "./Main.types";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import ContactCard from "./components/ContactCard/ContactCard";
import StaffCard from "./components/StaffCard/StaffCard";
import styles from "./Main.module.css";

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
          <div className={styles.priestsGrid}>
            {priests.map((p, i) => (
              <ContactCard key={p.email} person={p} featured={i === 0} />
            ))}
          </div>
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
            <div className={styles.safeguardingReps}>
              {safeguardingReps.map((rep: SafeguardingRep) => (
                <p key={rep.email} className={styles.safeguardingRep}>
                  <Link href={`mailto:${rep.email}`}>{rep.email}</Link>
                  <span> — {rep.name}</span>
                </p>
              ))}
            </div>
            <div className={styles.safeguardingLinks}>
              <Link href="/safeguarding" className={styles.safeguardingCta}>
                Read our safeguarding policy →
              </Link>
              <Link
                href={privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.privacyLink}
              >
                Full privacy policy
              </Link>
            </div>
          </div>
        </section>
        <section aria-labelledby="visit-heading" className={styles.section}>
          <h2 id="visit-heading" className={styles.sectionHeading}>
            Visit Us
          </h2>
          <div className={styles.visitGrid}>
            <div className={styles.visitCard}>
              <span className={styles.visitLabel}>Address</span>
              <address className={styles.addressText}>
                {address.street}
                <br />
                {address.city}
                <br />
                {address.postcode}
              </address>
              <Link
                href={`tel:${address.tel.replace(/\s/g, "")}`}
                className={styles.visitLink}
              >
                {address.tel}
              </Link>
            </div>

            <div className={styles.visitCard}>
              <span className={styles.visitLabel}>Office Hours</span>
              <p className={styles.visitValue}>{officeHours.label}</p>
              {officeHours.note && (
                <p className={styles.visitNote}>{officeHours.note}</p>
              )}
            </div>
            <div className={styles.visitCard}>
              <span className={styles.visitLabel}>Connect</span>
              <div className={styles.socialLinks}>
                {social.email && (
                  <Link
                    href={`mailto:${social.email}`}
                    className={styles.visitLink}
                  >
                    {social.email}
                  </Link>
                )}
                {social.facebook && (
                  <Link
                    href={`https://facebook.com/${social.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitLink}
                  >
                    Facebook · {social.facebook}
                  </Link>
                )}
                {social.twitter && (
                  <Link
                    href={`https://twitter.com/${social.twitter.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitLink}
                  >
                    Twitter · {social.twitter}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
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
