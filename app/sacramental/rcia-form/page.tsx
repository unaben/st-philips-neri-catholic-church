import { ContentWrap } from "@/components/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { RCIAApplication } from "@/components/forms/RCIAApplication/RCIAApplication";
import styles from "./rciaForm.module.css";

const AdultConfirmationPage = () => {
  return (
    <>
      <Hero title="RCIA – Becoming a Catholic" imgUrl="/images/psalm23.webp" />
      <div className={styles.accentBar} aria-hidden="true" />
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>RCIA Form</span>
          <RCIAApplication />
        </div>
      </ContentWrap>
    </>
  );
};

export default AdultConfirmationPage;
