import Link from "next/link";
import { ContactPerson } from "../Main.types";
import styles from "../Main.module.css";

type ContactCardProps = {
  person: ContactPerson;
  featured?: boolean;
};

export default function ContactCard({
  person,
  featured = false,
}: ContactCardProps) {
  const metaParts = [
    person.dayOff && `Day off: ${person.dayOff}`,
    person.ext !== undefined && `Ext ${person.ext}`,
    person.hours,
  ].filter(Boolean);

  return (
    <article
      className={`${styles.contactCard} ${featured ? styles.featured : ""}`}
    >
      <p className={styles.cardRole}>{person.role}</p>
      <p className={styles.cardName}>{person.name}</p>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:${person.email}`}
        className={styles.cardEmail}
      >
        {person.email}
      </Link>
      {person.phone && <p className={styles.cardName}>{person.phone}</p>}
      {metaParts.length > 0 && (
        <p className={styles.cardMeta}>({metaParts.join(" | ")})</p>
      )}
    </article>
  );
}
