"use client";

import cn from "classnames";
import { useActiveSection } from "./hooks/useActiveSection";
import styles from "./PrivacyPolicy.module.css";
import Link from "next/link";

interface PolicyTocProps {
  entries: { id: string; title: string }[];
}

export default function PolicyToc({ entries }: PolicyTocProps) {
  const activeId = useActiveSection(entries.map((e) => e.id));

  return (
    <nav className={styles.toc} aria-label="Privacy policy sections">
      <span className={styles.tocHeading}>On This Page</span>
      <ul className={styles.tocList}>
        {entries.map(({ id, title }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={cn(styles.tocLink, {
                [styles.tocLinkActive]: id === activeId,
              })}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
