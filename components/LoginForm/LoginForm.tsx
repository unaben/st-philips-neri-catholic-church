'use client';

import cn from 'classnames';
import styles from './LoginForm.module.css';
import { useLoginForm } from './hooks/useLoginForm';
import type { LoginFormProps } from './LoginForm.types';

export function LoginForm({ redirectTo = '/admin' }: LoginFormProps) {
  const { password, setPassword, error, isSubmitting, handleSubmit } = useLoginForm({
    redirectTo,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h1 className={styles.heading}>Admin login</h1>
      <p className={styles.subheading}>Enter the shared admin password to continue.</p>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="admin-password">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          className={cn(styles.input, { [styles.inputError]: error })}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-invalid={Boolean(error)}
          autoFocus
          autoComplete="current-password"
        />
      </div>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Checking...' : 'Log in'}
      </button>
    </form>
  );
}
