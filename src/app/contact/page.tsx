import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ContactPage from "@/components/Contact/ContactPage";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with St. Philip Neri Catholic Church in Smethwick, Birmingham.",
};

export default function NewPage() {
  return (
    <>
      <Hero title="Contact us" />
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.rainbowBar} />
        <ContactPage />
      </div>
    </>
  );
}
