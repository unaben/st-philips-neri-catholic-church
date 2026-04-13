'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { featuredItems } from '@/data';
import { cn } from '@/utils';
import styles from './Featured.module.css';

export default function Featured() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      aria-labelledby="featured-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.inner}>
        <h2 className={styles.heading} id="featured-heading">
          FEATURED
        </h2>

        <ul className={styles.grid} role="list">
          {featuredItems.map((item, i) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={cn(styles.card, isVisible && styles.visible)}
                style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}
                aria-label={item.title}
              >
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardExcerpt}>{item.excerpt}</p>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
