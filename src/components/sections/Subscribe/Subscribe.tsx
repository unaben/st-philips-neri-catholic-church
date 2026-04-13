"use client";

import { useState, FormEvent } from "react";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.section} aria-label="Newsletter subscription">
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          SUBSCRIBE TO GET LATEST UPDATES AND NEWS
        </h2>

        {submitted ? (
          <p className={styles.success} role="status" aria-live="polite">
            Thank you for subscribing! God bless you.
          </p>
        ) : (
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
              placeholder="Yourmail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby={error ? "subscribe-error" : undefined}
              disabled={loading}
              required
            />
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "SENDING..." : "SUBSCRIBE"}
            </button>
          </form>
        )}

        {error && (
          <p
            id="subscribe-error"
            className={styles.success}
            role="alert"
            style={{ color: "var(--color-red-accent)" }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
