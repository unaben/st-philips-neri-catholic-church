import { ContentWrap } from "@/components/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { SponsorForm } from "@/components/forms/SponsorForm/SponsorForm";
import styles from "./sponsor.module.css";

export default function ConfirmationSponsorPage() {
  return (
    <>
      <Hero title="Confirmation Sponsor" imgUrl="/images/chalice-bright.webp" />
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Confirmation Sponsor</span>
          <SponsorForm />
        </div>
      </ContentWrap>
    </>
  );
}
