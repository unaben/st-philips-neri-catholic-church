'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { blogPosts } from '@/data';
import { cn } from '@/utils';
import styles from './BlogAndHall.module.css';

export default function BlogAndHall() {
  const { ref: blogRef, isVisible: blogVisible } = useScrollAnimation();
  const { ref: hallRef, isVisible: hallVisible } = useScrollAnimation();
  const post = blogPosts[0];

  return (
    <section className={styles.section} aria-label="Latest blog and parish hall">
      <div className={styles.inner}>
        {/* Left – Latest blog post */}
        <article
          className={cn(styles.blogPost, blogVisible && styles.visible)}
          ref={blogRef as React.RefObject<HTMLElement>}
          aria-labelledby={`blog-title-${post.id}`}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={680}
            height={425}
            className={styles.blogImage}
          />
          <h2 className={styles.blogTitle} id={`blog-title-${post.id}`}>
            {post.title}
          </h2>
          <p className={styles.blogExcerpt}>{post.excerpt}</p>
          <Link href={post.href} className={styles.readMore}>
            Read more
          </Link>
        </article>

        {/* Right – Parish Hall card */}
        <div
          className={cn(styles.hallCard, hallVisible && styles.visible)}
          ref={hallRef as React.RefObject<HTMLDivElement>}
        >
          <Image
            src="/images/parish-hall.jpg"
            alt="St. Philip's Parish Hall exterior"
            width={540}
            height={305}
            className={styles.hallImage}
          />
          <div className={styles.hallBody}>
            <h2 className={styles.hallTitle}>
              ST. PHILIP&apos;S<br />PARISH HALL
            </h2>
            <p className={styles.hallSubtitle}>For hiring and facilities</p>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Us
            </Link>
            <p className={styles.termsNote}>
              Please read the{' '}
              <Link href="/terms" className={styles.termsLink}>
                Terms &amp; Conditions
              </Link>{' '}
              for hall hire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
