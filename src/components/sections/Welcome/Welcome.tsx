'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { quickLinks, churchInfo } from '@/data';
import { cn } from '@/utils';
import styles from './Welcome.module.css';

export default function Welcome() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className={styles.section} aria-labelledby="welcome-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="welcome-heading">
          A VERY WARM WELCOME
        </h2>

        {/* Left – priest message */}
        <div
          className={cn(styles.animatable, leftVisible && styles.visible)}
          ref={leftRef as React.RefObject<HTMLDivElement>}
        >
          <p className={styles.message}>
            We are happy you are here to view our website, you will find information
            about the Parish and its activities. Faith comes from hearing but here on
            our website, what you see, read and reflect on, we hope will get you
            thinking and actively participating in our mission and vision. May your
            visit to this site translate into blessing and hunger for doing the will
            of God.
          </p>
          <p className={styles.blessing}>Lots of love and blessings !</p>

          <div className={styles.priestRow}>
            <p className={styles.priestName}>{churchInfo.priest}</p>
            <Image
              src="/images/priest-2.jpg"
              alt={`${churchInfo.priest}, parish priest`}
              width={80}
              height={80}
              className={styles.priestAvatar}
            />
          </div>
        </div>

        {/* Right – what to do next */}
        <div
          className={cn(styles.animatableRight, rightVisible && styles.visible)}
          ref={rightRef as React.RefObject<HTMLDivElement>}
        >
          <div className={styles.nextCard}>
            <h3 className={styles.nextTitle}>WHAT TO DO NEXT</h3>
            <nav aria-label="Quick actions">
              <ul className={styles.quickLinks}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={styles.quickLink}
                      aria-label={link.ariaLabel}
                    >
                      <span className={styles.quickIcon} aria-hidden="true">
                        {link.icon}
                      </span>
                      <span className={styles.quickLabel}>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
