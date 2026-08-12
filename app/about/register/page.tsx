import Hero from "@/components/Hero/Hero";
import { ParishRecord } from "@/components/forms/ParishRecord/ParishRecord";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <>
      <Hero title="Registration" imgUrl="/images/rosary_on_bible.webp" />
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Registration</span>
          <ParishRecord />
        </div>
      </ContentWrap>
    </>
  );
};

export default RegisterPage;
