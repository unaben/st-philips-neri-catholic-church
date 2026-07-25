import type { SectionHeaderProps } from "../RegistrationForm.types";
import styles from "../RegistrationForm.module.css";
// ── Section header ────────────────────────────────────────────────────────────
export function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </div>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}
