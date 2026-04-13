import Image from "next/image";
import Link from "next/link";
import styles from "./PlaceholderPage.module.css";
import { slugToTitle } from "./utils/slugToTitle";

export default async function PlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slugToTitle(slug);

  return (
    <>
      {/* ── Hero banner ─────────────────────────────────────── */}
      <section className={styles.hero} aria-label={`${title} hero`}>
        <Image
          src="/images/church-img.jpg"
          alt={`${title} — St. Philip Neri Catholic Church`}
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbHome}>
              Home
            </Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">
              ›
            </span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              {title}
            </span>
          </nav>

          <h1 className={styles.heroTitle}>{title}</h1>
        </div>
      </section>

      {/* Gold accent bar */}
      <div className={styles.accentBar} aria-hidden="true" />

      {/* ── Page body ────────────────────────────────────────── */}
      <div className={styles.body}>
        <div className={styles.bodyInner}>
          {/* "Coming soon" badge */}
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Page coming soon
          </span>

          {/* Title + underline */}
          <div>
            <h2 className={styles.title}>
              {title}
              <span className={styles.titleUnderline} aria-hidden="true" />
            </h2>
          </div>

          {/* Placeholder description */}
          <p className={styles.description}>
            We are currently working on this page and it will be available very
            soon. The {title} section will provide you with all the information
            you need about this area of our parish life. Our community at St.
            Philip Neri Catholic Church is committed to keeping you informed and
            connected with everything that matters to our faith family here in
            Smethwick. Please check back soon, or use the links below to explore
            other areas of our website. We are grateful for your patience and
            continued support. May God bless you and your family abundantly as
            you journey with us in faith, hope and love.
          </p>

          <div className={styles.divider} />

          {/* Quick info strip */}
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
              <span className={styles.infoValue}>9:00am &amp; 11:00am</span>
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <Link href="/" className={styles.btnPrimary}>
              ← Back to Home
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
