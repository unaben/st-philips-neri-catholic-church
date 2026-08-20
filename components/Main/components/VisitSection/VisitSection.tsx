import Link from "next/link";
import type { VisitSectionProps } from "./VisitSection.types";
import styles from "./VisitSection.module.css";

export default function VisitSection(props: VisitSectionProps) {
  const { heading = "Visit Us", address, officeHours } = props;

  const phoneNumbers = address.tel
    .split("|")
    .map((num) => num.trim())
    .filter(Boolean);

  return (
    <section aria-labelledby="visit-heading" className={styles.section}>
      <h2 id="visit-heading" className={styles.sectionHeading}>
        {heading}
      </h2>

      {(address || officeHours) && (
        <div className={styles.visitGrid}>
          {address && (
            <div className={styles.visitCard}>
              <span className={styles.visitLabel}>Address</span>
              <address className={styles.addressText}>
                {address.street}
                <br />
                {address.city}
                <br />
                {address.postcode}
              </address>
              <div className={styles.phoneGroup}>
                {phoneNumbers.map((phone, idx) => (
                  <Link
                    key={idx}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className={styles.visitLink}
                  >
                    {phone}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {officeHours && (
            <div className={styles.visitCard}>
              <span className={styles.visitLabel}>Office Hours</span>
              <p className={styles.visitValue}>{officeHours.title}</p>
              <p className={styles.visitValue}>{officeHours.time}</p>
              {officeHours.note && (
                <p className={styles.visitNote}>{officeHours.note}</p>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
