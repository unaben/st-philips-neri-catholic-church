import { ContentWrap } from "@/components/ContentWrap";
import Hero from "@/components/Hero/Hero";
import SafeguardingPage from "@/components/Safeguarding/Safeguarding";
import styles from "./safeguarding.module.css";

const safeguardingPage = () => {
  return (
    <div className={styles.page}>
      <Hero title="Safeguarding" imgUrl="/images/safeguarding.webp" />
      <div className={styles.accentBar} aria-hidden="true" />
      <ContentWrap as="div" className={styles.body}>
        <SafeguardingPage />
      </ContentWrap>
    </div>
  );
};

export default safeguardingPage;
