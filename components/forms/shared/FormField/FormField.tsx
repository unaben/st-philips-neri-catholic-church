import classNames from "classnames";
import type { FormFieldProps } from "./FormField.types";
import styles from "./FormField.module.css";

export function FormField(props: FormFieldProps) {
  const { label, htmlFor, error, required, hint, className, children } = props;
  return (
    <div
      id={`field-${htmlFor}`}
      className={classNames(
        styles.field,
        { [styles.fieldError]: !!error },
        className
      )}
    >
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className={styles.hint}>{hint}</p>}
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
