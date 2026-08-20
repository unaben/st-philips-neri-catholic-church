'use client';

import Link from 'next/link';
import useSubscribe from './hooks/useSubscribe';
import styles from './Subscribe.module.css';

export default function Subscribe() {
  const { email, status, errorMsg, handleEmailChange, handleSubmit } =
    useSubscribe();

  const isLoading = status === 'loading';

  if (status === 'success') {
    return (
      <div className={styles.section} aria-label="Newsletter subscription">
        <div className={styles.inner}>
          <p className={styles.successMsg} role="status" aria-live="polite">
            ✅ Thank you! Check your inbox for a confirmation email. God bless
            you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section} aria-label="Newsletter subscription">
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <h2 className={styles.heading}>Want to be kept in the loop?</h2>
          <p className={styles.subtext}>
            Get parish news, upcoming events, and reflections delivered
            straight to your inbox. No spam. Just the good stuff.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Subscribe to newsletter"
        >
          <div className={styles.fieldGroup}>
            <label htmlFor="subscribe-email" className={styles.label}>
              Enter your email address
              <span className={styles.required} aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="subscribe-email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              aria-describedby={errorMsg ? 'subscribe-error' : undefined}
              disabled={isLoading}
              required
            />
          </div>

          <p className={styles.consent}>
            By submitting your details, you accept and agree to our{' '}
            <Link href="/about/privacy-policy" className={styles.consentLink}>
              Privacy Policy
            </Link>
            .
          </p>

          <p className={styles.recaptchaNotice} aria-hidden="true">
            🔒 Protected by reCAPTCHA
          </p>

          {errorMsg && (
            <p
              id="subscribe-error"
              className={styles.errorMsg}
              role="alert"
              aria-live="polite"
            >
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className={styles.button}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? 'SENDING…' : 'SUBSCRIBE'}
          </button>
        </form>
      </div>
    </div>
  );
}