import Link from "next/link";
import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import { QUICK_FACTS, TIMELINE, VALUES } from "./constants";
import styles from "./About.module.css";

 function AboutPage() {
  return (
    <>
      <Hero title="About Us" />
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Our Story</span>
          <h1 className={styles.title}>
            A Parish Family Since 1863
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            St. Philip Neri Catholic Church has stood at the heart of Smethwick
            for over 160 years — a home for worship, welcome, and community that
            has grown and changed alongside the people it serves. Named for St.
            Philip Neri, the joyful founder of the Oratorian tradition, our
            parish carries forward his spirit of warmth, humility and genuine
            care for one another.
          </p>
        </ContentWrap>
      </div>
      <ContentWrap className={styles.factsWrap}>
        <div className={styles.factsStrip}>
          {QUICK_FACTS.map(({ icon, label, value }) => (
            <div key={label} className={styles.factItem}>
              <span className={styles.factIcon} aria-hidden="true">
                {icon}
              </span>
              <span className={styles.factLabel}>{label}</span>
              <span className={styles.factValue}>{value}</span>
            </div>
          ))}
        </div>
      </ContentWrap>
      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Our History</h2>
        <p className={styles.sectionIntro}>
          From a converted stable to a beautifully consecrated church, our story
          has been shaped by dedicated priests, generous parishioners, and an
          enduring community of faith.
        </p>

        <ol className={styles.timeline}>
          {TIMELINE.map(({ year, title, description }) => (
            <li key={year} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{year}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{title}</h3>
                <p className={styles.timelineText}>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </ContentWrap>
      <div className={styles.architectureSection}>
        <ContentWrap className={styles.architectureInner}>
          <h2 className={styles.sectionHeading}>A Living Landmark</h2>
          <p className={styles.architectureText}>
            Built in a transitional Romanesque-Gothic style from brick and
            terracotta, our church reflects the craftsmanship of the turn of the
            twentieth century. Inside, the sanctuary and transepts are richly
            adorned in marble, stone and mosaic — much of it given by Fr. Ryder
            himself or in his memory. It remains one of Smethwick&apos;s most
            treasured buildings, a quiet witness to the faith of those who built
            it and those who continue to worship within its walls.
          </p>
        </ContentWrap>
      </div>
      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>What We Stand For</h2>
        <div className={styles.valuesGrid}>
          {VALUES.map(({ icon, title, description }) => (
            <div key={title} className={styles.valueCard}>
              <div className={styles.valueIcon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>
      <div className={styles.schoolSection}>
        <ContentWrap className={styles.schoolInner}>
          <span className={styles.schoolIcon} aria-hidden="true">
            🎓
          </span>
          <h2 className={styles.schoolTitle}>
            St. Philip&apos;s Catholic Primary School
          </h2>
          <p className={styles.schoolText}>
            Our parish is proud to be served by St. Philip&apos;s Catholic
            Primary School, the educational arm of our community — nurturing
            children in faith and learning, and building bridges between our
            church and the wider Smethwick community.
          </p>
        </ContentWrap>
      </div>
      <ContentWrap className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Join Us for Mass</h2>
        <p className={styles.ctaText}>
          Whatever your journey of faith, you are warmly welcome to join our
          parish family for worship, prayer and fellowship.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/mass-times" className={styles.btnPrimary}>
            Mass Times
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Contact Us
          </Link>
        </div>
      </ContentWrap>
    </>
  );
}
export default AboutPage