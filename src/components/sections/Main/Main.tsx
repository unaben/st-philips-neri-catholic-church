import Link from "next/link";
import type { MainSectionProps, SafeguardingRep } from "./Main.types";
import styles from "./Main.module.css";
import ContactCard from "./components/ContactCard";
import StaffCard from "./components/StaffCard";

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
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.rainbowBar} />
        <h1 className={styles.heroTitle}>{churchName}</h1>
        {tagline && <p className={styles.heroTagline}>{tagline}</p>}
        <div className={styles.streamingBox}>
          <strong>Diocesan Parishes live streaming Masses</strong>
          Several parishes within Westminster Diocese are streaming weekend and
          weekday Masses.{" "}
          <a
            href="https://rcdow.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mass streaming and useful websites
          </a>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>Contact Us</h2>

      <div className={styles.priestsGrid}>
        {priests.map((p, i) => (
          <ContactCard key={p.email} person={p} featured={i === 0} />
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.staffSection}>
        <h3 className={styles.staffHeading}>Staff</h3>
        <div className={styles.staffGrid}>
          {staff.map((s) => (
            <StaffCard key={s.email} person={s} />
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.safeguardingSection}>
        <h3 className={styles.safeguardingHeading}>
          Parish Safeguarding Representatives (PSRs)
        </h3>
        {safeguardingReps.map((rep: SafeguardingRep) => (
          <p key={rep.email} className={styles.safeguardingRep}>
            <Link href={`mailto:${rep.email}`}>{rep.email}</Link> ({rep.name})
          </p>
        ))}
        <Link
          href={privacyPolicyUrl}
          className={styles.privacyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our full privacy policy
        </Link>
      </div>

      <address className={styles.addressSection}>
        {address.street}
        <br />
        {address.city}
        <br />
        {address.postcode}
        <br />
        <span className={styles.tel}>Tel: {address.tel}</span>
      </address>

      <div className={styles.officeHours}>
        <p className={styles.officeHoursLabel}>{officeHours.label}</p>
        {officeHours.note && (
          <p className={styles.officeHoursLabel}>{officeHours.note}</p>
        )}
      </div>

      <div className={styles.socialSection}>
        {social.email && (
          <div>
            Email: <Link href={`mailto:${social.email}`}>{social.email}</Link>
          </div>
        )}
        {social.facebook && (
          <div>
            Facebook:{" "}
            <Link
              href={`https://facebook.com/${social.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.facebook}
            </Link>
          </div>
        )}
        {social.twitter && (
          <div>
            Twitter:{" "}
            <Link
              href={`https://twitter.com/${social.twitter.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.twitter}
            </Link>
          </div>
        )}
      </div>

      <div className={styles.ctaRow}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={process.env.PARISH_DONA_URL ?? ""}
          className={styles.btnPrimary}
        >
          Support our Parish
        </Link>
        <Link href="/subscribe" className={styles.btnSecondary}>
          Subscribe to Alerts
        </Link>
      </div>
    </section>
  );
}
