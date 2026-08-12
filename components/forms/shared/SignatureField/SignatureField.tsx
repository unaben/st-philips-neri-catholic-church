import classNames from 'classnames';
import styles from './SignatureField.module.css';

interface SignatureFieldProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
}

export function SignatureField({
  id,
  value,
  onChange,
  error,
  label = 'Signature',
}: SignatureFieldProps) {
  return (
    <div className={classNames(styles.wrapper, { [styles.wrapperError]: !!error })}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <span className={styles.required} aria-hidden="true">
          {' '}
          *
        </span>
      </label>
      <input
        id={id}
        name={id}
        type="text"
        className={styles.signatureInput}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Type your full name to sign"
        autoComplete="name"
      />
      <p className={styles.caption}>
        Typing your name above counts as your signature on this form.
      </p>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
