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
          title="St. Philip Neri Catholic Church Location Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Map showing St. Philip Neri Catholic Church, Smethwick"
        />
      </ContentWrap>
      <ContentWrap className={styles.bottomSection}>
        <aside className={styles.infoCol}>
          <ul className={styles.infoList}>
            {INFO_ROWS.map((row) => (
              <li key={row.label} className={styles.infoRow}>
                <div className={styles.infoIconWrap} aria-hidden="true">
                  {row.icon}
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{row.label}</span>
                  {Array.isArray(row.value) ? (
                    <div className={styles.multiValueGroup}>
                      {row.value.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className={styles.infoLink}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  ) : row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={styles.infoLink}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className={styles.infoValue}>{row.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <section className={styles.formCol}>
          <ContactForm />
        </section>
      </ContentWrap>
    </div>
  );
}