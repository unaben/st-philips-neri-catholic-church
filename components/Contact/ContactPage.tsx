import Link from "next/link";
import MapFrame from "./components/MapFrame/MapFrame";
import { INFO_ROWS } from "./constant";
import ContactForm from "./ContactForm";
import { MAP_EMBED_SRC, MAPS_URL } from "./components";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <ContentWrap className={styles.bottomSection}>
        <section className={styles.formCol}>
          <ContactForm />
        </section>
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
                        <Link
                          key={idx}
                          href={item.href}
                          className={styles.infoLink}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  ) : row.href ? (
                    <Link
                      href={row.href}
                      target={
                        row.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        row.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={styles.infoLink}
                    >
                      {row.value}
                    </Link>
                  ) : (
                    <span className={styles.infoValue}>{row.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </ContentWrap>
      <ContentWrap  className={styles.mapWrap}>
        <MapFrame
          src={MAP_EMBED_SRC}
          title="St. Philip Neri Catholic Church Location Map"
          ariaLabel="Map showing St. Philip Neri Catholic Church, Smethwick"
          mapsUrl={MAPS_URL}
          addressLines={[
            "St. Philip Neri Catholic Church",
            "Messenger Road, Smethwick",
            "Birmingham B66 3DU",
          ]}
        />
      </ContentWrap>
    </div>
  );
}
