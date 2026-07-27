import Link from "next/link";
import cn from "classnames";
import type { ContactPerson } from "../../Main.types";
import styles from "./ContactCard.module.css";

type ContactCardProps = {
  person: ContactPerson;
  featured?: boolean;
};

export default function ContactCard({ person, featured }: ContactCardProps) {
  const { role, name, email, phone, dayOff, ext } = person;

  return (
    <div className={cn(styles.card, featured && styles.featured)}>
      <span className={styles.role}>{role}</span>
      <h3 className={styles.name}>{name}</h3>
      <Link href={`mailto:${email}`} className={styles.email}>
        {email}
      </Link>
      {phone && (
        <Link
          href={`tel:${phone.replace(/\s/g, "")}`}
          className={styles.phone}
        >
          {phone}
          {ext ? ` ext. ${ext}` : ""}
        </Link>
      )}
      {dayOff && <p className={styles.meta}>Day off: {dayOff}</p>}
    </div>
  );
}