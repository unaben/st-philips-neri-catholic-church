import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ContactPage from "@/components/Contact/ContactPage";
import { ContentWrap } from "@/components/ContentWrap";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with St. Philip Neri Catholic Church in Smethwick, Birmingham.",
};

export default function ContactScreen() {
  return (
    <div className={styles.page}>
      <Hero title="Contact us" />

      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Contact us</span>
          <ContactPage />
        </div>
      </ContentWrap>
    </div>
  );
}
