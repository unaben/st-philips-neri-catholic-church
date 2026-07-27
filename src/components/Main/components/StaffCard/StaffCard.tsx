import Link from "next/link";
import type { ContactPerson } from "../../Main.types";
import styles from "./StaffCard.module.css";

type StaffCardProps = {
  person: ContactPerson;
};

export default function StaffCard({ person }: StaffCardProps) {
  const { role, name, email, hours, dayOff, ext } = person;

  return (
    <div className={styles.card}>
      <span className={styles.role}>{role}</span>
      <h3 className={styles.name}>{name}</h3>
      <Link href={`mailto:${email}`} className={styles.email}>
        {email}
        {ext ? <span className={styles.ext}> · ext. {ext}</span> : null}
      </Link>
      {(hours || dayOff) && (
        <p className={styles.meta}>{hours ?? `Day off: ${dayOff}`}</p>
      )}
    </div>
  );
}