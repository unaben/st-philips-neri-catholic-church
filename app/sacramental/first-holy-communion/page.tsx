import { ContentWrap } from "@/components/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { FirstHolyCommunion } from "@/components/forms/FirstHolyCommunion/FirstHolyCommunion";
import styles from "./firstHolyCommunion.module.css";

const FirstHolyCommunionPage = () => {
  return (
    <>
      <Hero title="First Holy Communion" imgUrl="/images/chalice-bright.webp" />
      <div className={styles.accentBar} aria-hidden="true" />
      <ContentWrap as="div" className={styles.body}>        
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>First Holy Communion</span>
          <FirstHolyCommunion />
        </div>
      </ContentWrap>
    </>
  );
};

export default FirstHolyCommunionPage;
