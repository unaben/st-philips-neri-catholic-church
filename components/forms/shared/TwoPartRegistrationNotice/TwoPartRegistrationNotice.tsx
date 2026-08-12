import styles from "./TwoPartRegistrationNotice.module.css";

export function TwoPartRegistrationNotice() {
  return (
    <div className={styles.notice} role="note">
      <p className={styles.text}>
        Registration has two parts: this enrolment form, and a{" "}
        <strong>Godparent/Sponsor form</strong> you&rsquo;ll complete afterwards
        (online, or printed and handed in). You don&rsquo;t need the
        sponsor&rsquo;s details right now to submit this form.
      </p>
    </div>
  );
}
