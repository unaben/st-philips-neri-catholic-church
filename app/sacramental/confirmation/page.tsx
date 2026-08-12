import { ContentWrap } from "@/components/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { ConfirmationEnrolment } from "@/components/forms/ConfirmationEnrolment/ConfirmationEnrolment";
import styles from "./confirmation.module.css";

const ConfirmationPage = () => {
  return (
    <>
      <Hero title="Confirmation" imgUrl="/images/psalm23.webp" />
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Confirmation</span>
          <ConfirmationEnrolment />
        </div>
      </ContentWrap>
    </>
  );
};

export default ConfirmationPage;
