import { RegistrationFormProps } from "../RegistrationForm.types";
import styles from "../RegistrationForm.module.css";

// ── Small reusable field wrapper ─────────────────────────────────────────────
function Field(props: RegistrationFormProps) {
  const { id, label, optional, error, children } = props;
  return (
    <div className={styles.field} data-error={!!error || undefined}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}>(optional)</span>}
      </label>
      {children}
      {error && (
        <span className={styles.errorMsg} role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
}
export default Field;
