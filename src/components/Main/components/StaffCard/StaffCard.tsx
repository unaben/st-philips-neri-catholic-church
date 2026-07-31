import Link from "next/link";
import type { ContactPerson } from "../../Main.types";
import styles from "./StaffCard.module.css";

type StaffCardProps = {
  person: ContactPerson;
};

export default function StaffCard({ person }: StaffCardProps) {
  const { role, name, email, phone } = person;

  return (
    <div className={styles.card}>
      <span className={styles.role}>{role}</span>
      <h3 className={styles.name}>{name}</h3>
      <Link href={`mailto:${email}`} className={styles.email}>
        {email}
      </Link>
      <p className={styles.name}>{phone}</p>
    </div>
  );
}
