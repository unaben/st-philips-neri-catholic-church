import Link from "next/link";
import { ContactPerson } from "../Main.types";
import styles from "../Main.module.css";


export default function StaffCard({ person }: { person: ContactPerson }) {
    const metaParts = [
      person.dayOff && `Days off: ${person.dayOff}`,
      person.ext !== undefined && `Ext ${person.ext}`,
      person.hours,
    ].filter(Boolean);
  
    return (
      <article className={styles.staffCard}>
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
        {metaParts.length > 0 && (
          <p className={styles.cardMeta}>({metaParts.join(" | ")})</p>
        )}
      </article>
    );
  }