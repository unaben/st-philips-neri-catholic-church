import { ContentWrap } from '@/components/ContentWrap'
import Hero from '@/components/Hero/Hero'
import Subscribe from '@/components/Subscribe/Subscribe'
import styles from './subscribe.module.css'

const SubscribePage = () => {
  return (
    <>
    <Hero title="Subscribe" imgUrl="/images/rosary.webp"/>
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.intro}>
        <div className={styles.rainbowBar} />
        <span className={styles.badge}>Subscribe</span>
        <Subscribe />
        </div>        
      </ContentWrap>
    </>
    
  )
}

export default SubscribePage
