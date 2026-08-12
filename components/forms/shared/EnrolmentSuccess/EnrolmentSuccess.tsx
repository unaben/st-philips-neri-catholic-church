"use client";

import { useState } from "react";
import Link from "next/link";
import { useSponsorLinkEmail } from "../hooks/useSponsorLinkEmail";
import type { EnrolmentSuccessProps } from "./EnrolmentSuccess.types";
import { SACRAMENT_LABEL } from "./constants";
import styles from "./EnrolmentSuccess.module.css";

export function EnrolmentSuccess(props: EnrolmentSuccessProps) {
  const { sacrament, enrolmentId, nameOfChild } = props;

  const [showEmailForm, setShowEmailForm] = useState(false);
  const { email, setEmail, status, error, sendLink } = useSponsorLinkEmail({
    sacrament,
    enrolmentId,
    nameOfChild,
  });

  const sponsorFormLink = `/sacramental/sponsor-form?sacrament=${sacrament}&candidate=${encodeURIComponent(
    nameOfChild
  )}&enrolmentId=${encodeURIComponent(enrolmentId)}`;
  const printLink = `${sponsorFormLink}&print=1`;
  const sacramentLabel = SACRAMENT_LABEL[sacrament];

  return (
    <div className={styles.wrapper} role="status">
      <div className={styles.iconCircle} aria-hidden="true">
        ✓
      </div>
      <h1 className={styles.heading}>Thank you</h1>
      <p className={styles.subheading}>
        The {sacramentLabel} enrolment form for <strong>{nameOfChild}</strong>{" "}
        has been sent to the parish office. There&rsquo;s one more step to
        complete the registration.
      </p>

      <div className={styles.nextStepCard}>
        <h2 className={styles.nextStepHeading}>
          Next: the Godparent/Sponsor form
        </h2>
        <p className={styles.nextStepBody}>
          This is required to complete {nameOfChild}&rsquo;s registration. You
          can fill it in online now, print it to fill in and return by hand, or
          come back to it later if you don&rsquo;t have the sponsor&rsquo;s
          details yet.
        </p>

        <div className={styles.actions}>
          <Link href={sponsorFormLink} className={styles.primaryButton}>
            Fill it in online now
          </Link>
          <Link href={printLink} className={styles.secondaryButton}>
            Print a blank copy
          </Link>
        </div>

        {!showEmailForm ? (
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => setShowEmailForm(true)}
          >
            Don&rsquo;t have the sponsor&rsquo;s details yet? Email me a link
          </button>
        ) : status === "sent" ? (
          <p className={styles.confirmationText}>
            Sent. Check your inbox for a link back to this form whenever
            you&rsquo;re ready.
          </p>
        ) : (
          <form className={styles.emailForm} onSubmit={sendLink}>
            <label className={styles.emailLabel} htmlFor="sponsor-link-email">
              We&rsquo;ll email you a link to finish this step later
            </label>
            <div className={styles.emailRow}>
              <input
                id="sponsor-link-email"
                type="email"
                required
                className={styles.emailInput}
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className={styles.primaryButton}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send link"}
              </button>
            </div>
            {status === "error" && error && (
              <p className={styles.errorText} role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>

      <p className={styles.footnote}>
        Printing the sponsor form? Please return it to the parish office -
        it&rsquo;s needed to complete {nameOfChild}&rsquo;s registration either
        way.
      </p>
    </div>
  );
}
