import { INFO_ROWS } from "./constant";
import ContactForm from "./ContactForm";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <ContentWrap size="full" className={styles.mapWrap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.112141873438!2d-1.9585622999999994!3d52.49520959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd401a70e281%3A0x4655cb5d33ec00b1!2sSt%20Philip&#39;s%20Neri%20R%20C%20Church!5e0!3m2!1sen!2suk!4v1785093514080!5m2!1sen!2suk"
          title="St. Philip Neri Catholic Church on the map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Map showing the location of St. Philip Neri Catholic Church, Smethwick"
        />
      </ContentWrap>

      <ContentWrap className={styles.bottomSection}>
        <div className={styles.formCol}>
          <ContactForm />
        </div>
        <div className={styles.infoCol}>
          <ul className={styles.infoList}>
            {INFO_ROWS.map(({ icon, label, value }) => (
              <li key={label} className={styles.infoRow}>
                <div className={styles.infoIconWrap} aria-hidden="true">
                  {icon}
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContentWrap>
    </div>
  );
}
