import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import styles from "./DummyPage.module.css";

type DummyPageProps = {
  title: string;
  imgUrl: string;
};

async function DummyPage({ title, imgUrl }: DummyPageProps) {
  return (
    <>
      <Hero title={title} imgUrl={imgUrl} />
      <ContentWrap as="div" className={styles.body}>
        <div className={styles.accentBar} aria-hidden="true" />
        <div className={styles.rainbowBar} />
        <span className={styles.rainbowBarBadge}>{title}</span>
        <ContentWrap className={styles.bodyInner}>
          <>
            <span className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              Page coming soon
            </span>
            <div>
              <h2 className={styles.title}>
                {title}
                <span className={styles.titleUnderline} aria-hidden="true" />
              </h2>
            </div>
            <p className={styles.description}>
              We are currently working on this page and it will be available
              very soon. The {title} section will provide you with all the
              information you need about this area of our parish life. Our
              community at St. Philip Neri Catholic Church is committed to
              keeping you informed and connected with everything that matters to
              our faith family here in Smethwick. Please check back soon, or use
              the links below to explore other areas of our website. We are
              grateful for your patience and continued support. May God bless
              you and your family abundantly as you journey with us in faith,
              hope and love.
            </p>
          </>
          <div className={styles.divider} />
          <div
            className={styles.infoStrip}
            role="complementary"
            aria-label="Parish contact info"
          >
            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                📍
              </span>
              <span className={styles.infoLabel}>Address</span>
              <span className={styles.infoValue}>
                Messenger Road, Smethwick
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                📞
              </span>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>0121 558 1065</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                ✉️
              </span>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>
                stphilip.smethwick@rcaob.org.uk
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                ⛪
              </span>
              <span className={styles.infoLabel}>Sunday Mass</span>
              <span className={styles.infoValue}>9:30am</span>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <Link href="/" className={styles.btnPrimary}>
              ← Back to Home
            </Link>
            <Link href="/about/contact" className={styles.btnSecondary}>
              Contact Us
            </Link>
          </div>
        </ContentWrap>
      </ContentWrap>
    </>
  );
}
export default DummyPage;
