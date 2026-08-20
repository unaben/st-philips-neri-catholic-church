"use client";

import Link from "next/link";
import { useParallax } from "@/hooks/useParallax";
import { churchInfo, footerQuickLinks } from "@/data";
import { ChurchCrest } from "@/components/Icons/ChurchCrest";
import styles from "./Footer.module.css";

export default function Footer() {
  const { ref, offset } = useParallax({ speed: 0.3 });

  return (
    <footer
      className={styles.footer}
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Site footer"
    >
      <div
        className={styles.parallaxBg}
        aria-hidden="true"
        style={{ transform: `translateY(${offset}px)` }}
      />

      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link
            href="/"
            className={styles.logoWrap}
            aria-label="St. Philip Neri Catholic Church — Home"
          >
            <ChurchCrest position="footer" />
            <span className={styles.logoText}>
              St. Philip Neri
              <br />
              Catholic
              <br />
              Church
            </span>
          </Link>

          <address
            className={styles.contactList}
            style={{ fontStyle: "normal" }}
          >
            <span className={styles.contactItem}>
              <a
                href={`tel:${churchInfo.phone}`}
                className={styles.contactLink}
              >
                {churchInfo.phone}
              </a>
            </span>
            <span className={styles.contactItem}>
              <a
                href={`mailto:${churchInfo.email}`}
                className={styles.contactLink}
              >
                {churchInfo.email}
              </a>
            </span>
            <span className={styles.contactItem}>{churchInfo.address}</span>
          </address>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Quicklinks</h3>
          <nav aria-label="Footer quicklinks">
            <ul className={styles.quickLinks}>
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.quickLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.donateCol}>
          <p className={styles.donateHeading}>
            PLEASE HELP WITH THE UPKEEP OF THE CHURCH
          </p>
          <p className={styles.donateSubtext}>
            We are always very grateful for donations
          </p>
          <Link
            href="https://donate.mydona.com/st-philip-neri-catholic-church"
            className={styles.donateBtn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate to the church"
          >
            DONATE
          </Link>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} St. Philip Neri Catholic Church,
          Smethwick. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
