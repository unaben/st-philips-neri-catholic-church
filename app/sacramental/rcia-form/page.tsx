import { ContentWrap } from '@/components/ContentWrap';
import Hero from '@/components/Hero/Hero';
import { RCIAApplication } from '@/components/forms/RCIAApplication/RCIAApplication';
import styles from './rciaForm.module.css'

const AdultConfirmationPage = () => {
  return (
    <>
      <Hero title="Registration" imgUrl="/images/psalm23.webp" />
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.intro}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Registration</span>
          <RCIAApplication />
        </div>
      </ContentWrap>
    </>
  )
};

export default AdultConfirmationPage;
