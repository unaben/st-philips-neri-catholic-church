"use client";

import Link from "next/link";
import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { churchInfo, footerQuickLinks, socialLinks } from "@/data";
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
          <Link href="/" className={styles.logoWrap} aria-label="Home">
            <Image
              src="/images/logo.png"
              alt="St. Philip Neri Catholic Church logo"
              width={52}
              height={64}
              className={styles.logoImage}
            />
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

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Connect</h3>
          <ul className={styles.socialList}>
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.ariaLabel}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.facebookIcon}
                    aria-hidden="true"
                  >
                    <rect width="32" height="32" rx="6" fill="#1877F2" />
                    <path
                      d="M22 16c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 2.995 2.194 5.477 5.063 5.928V17.89h-1.524V16h1.524v-1.323c0-1.504.896-2.334 2.267-2.334.657 0 1.344.117 1.344.117v1.477h-.757c-.746 0-.978.463-.978.938V16h1.664l-.266 1.89h-1.398v4.038C19.806 21.477 22 18.995 22 16z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <Image
            src="/images/archdiocese-badge.png"
            alt="Archdiocese of Birmingham"
            width={60}
            height={60}
            className={styles.archdioceseBadge}
          />
        </div>

        <div className={styles.donateCol}>
          <p className={styles.donateHeading}>
            PLEASE HELP WITH THE UPKEEP OF THE CHURCH
          </p>
          <p className={styles.donateSubtext}>
            We are always very grateful for donations
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.PARISH_DONA_URL ?? ""}
            className={styles.donateBtn}
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
