import Hero from "@/components/Hero/Hero";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import { LAST_UPDATED, SECTIONS } from "./constants";
import { buildTocEntries } from "./PrivacyPolicy.utils";
import PolicyToc from "./PolicyToc";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  const tocEntries = buildTocEntries(SECTIONS);

  return (
    <>
      <Hero title="Privacy Policy" imgUrl="/images/privacy_policy.webp" />
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>          
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Data Protection</span>
          <h1 className={styles.title}>
            Your Privacy Matters to Us
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            This policy explains what personal information St. Philip Neri
            Catholic Church collects, why we collect it, and how we keep it
            safe.
          </p>
          <p className={styles.lastUpdated}>Last updated: {LAST_UPDATED}</p>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.body}>
        <div className={styles.layout}>
          <PolicyToc entries={tocEntries} />

          <div className={styles.content}>
            {SECTIONS.map(({ id, title, content }) => (
              <section key={id} id={id} className={styles.policySection}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {content.map((paragraph, i) => (
                  <p key={i} className={styles.sectionText}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </ContentWrap>
    </>
  );
}
