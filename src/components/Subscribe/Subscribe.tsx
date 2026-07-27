"use client";

import useSubscribe from "./hooks/useSubscribe";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  const { email, status, errorMsg, handleEmailChange, handleSubmit } =
    useSubscribe();

  if (status === "success") {
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

  const isLoading = status === "loading";

  return (
    <div className={styles.section} aria-label="Newsletter subscription">
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <h2 className={styles.heading}>
            Stay connected with our parish family
          </h2>
          <p className={styles.subtext}>
            Get news, upcoming events, and reflections from St. Philip Neri —
            straight to your inbox.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Subscribe to newsletter"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            className={styles.input}
            placeholder="Your email address"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            aria-describedby={errorMsg ? "subscribe-error" : undefined}
            disabled={isLoading}
            required
          />
          <button
            type="submit"
            className={styles.button}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "SENDING…" : "SUBSCRIBE"}
          </button>
        </form>

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
      </div>
    </div>
  );
}