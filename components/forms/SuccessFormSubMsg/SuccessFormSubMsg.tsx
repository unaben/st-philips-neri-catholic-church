import Link from "next/link";
import styles from "./SuccessFormSubMsg.module.css";

type SuccessFormSubMsgProps = {
  name: string;
  email: string;
  message?: string;
  isSponsorRequired?: boolean;
};

function SuccessFormSubMsg(props: SuccessFormSubMsgProps) {
  const { name, email, message, isSponsorRequired } = props;

  return (
    <div className={styles.success} role="status">
      <div className={styles.successIcon}>✉️</div>
      <h2 className={styles.successTitle}>
        Thank You, {name || "Friend"}!
      </h2>
      <p className={styles.successText}>
        {message ? (
          message
        ) : (
          <>
            Your registration has been received. We&apos;ve sent a confirmation
            to <strong>{email}</strong> and the parish team will be in touch
            shortly to welcome you personally.
          </>
        )}
      </p>
      <div className={styles.successBtns}>
        <Link
          href={
            !isSponsorRequired
              ? "/"
              : "/sacramental/confirmation/confirmation-sponsor"
          }
          className={styles.btnHome}
        >
          {!isSponsorRequired ? "← Back to Home" : "Continue to Sponsors form"}
        </Link>
      </div>
    </div>
  );
}

export default SuccessFormSubMsg;
