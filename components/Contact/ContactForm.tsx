"use client";

import cn from "classnames";
import { useContactForm } from "./hooks/useContactForm";
import styles from "./Contact.module.css";

export default function ContactForm() {
  const {
    formData,
    submitStatus,
    serverError,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    showError,
    errors,
  } = useContactForm();

  if (submitStatus === "success") {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>✉️</div>
        <h3 className={styles.successTitle}>Message Sent!</h3>
        <p className={styles.successText}>
          Thank you for getting in touch. We&apos;ve sent a confirmation to{" "}
          <strong>{formData.email}</strong> and will reply as soon as possible.
          May God bless you.
        </p>
        <button onClick={reset} className={styles.resetBtn}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div
        className={styles.field}
        data-error={showError("fullName") || undefined}
      >
        <label htmlFor="fullName" className={styles.label}>
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          className={cn(styles.input, showError("fullName") && styles.hasError)}
          value={formData.fullName}
          onChange={handleChange}
          onBlur={() => handleBlur("fullName")}
          placeholder="John Smith"
          autoComplete="name"
          aria-required="true"
          aria-invalid={showError("fullName")}
        />
        {showError("fullName") && (
          <span className={styles.errorMsg} role="alert">
            {errors.fullName}
          </span>
        )}
      </div>
      <div
        className={styles.field}
        data-error={showError("email") || undefined}
      >
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={cn(styles.input, showError("email") && styles.hasError)}
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          placeholder="john@example.com"
          autoComplete="email"
          aria-required="true"
          aria-invalid={showError("email")}
        />
        {showError("email") && (
          <span className={styles.errorMsg} role="alert">
            {errors.email}
          </span>
        )}
      </div>
      <div
        className={styles.field}
        data-error={showError("phone") || undefined}
      >
        <label htmlFor="phone" className={styles.label}>
          Phone
          <span className={styles.optional}>(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={cn(styles.input, showError("phone") && styles.hasError)}
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur("phone")}
          placeholder="07700 900123"
          autoComplete="tel"
        />
        {showError("phone") && (
          <span className={styles.errorMsg} role="alert">
            {errors.phone}
          </span>
        )}
      </div>
      <div
        className={styles.field}
        data-error={showError("message") || undefined}
      >
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={cn(
            styles.textarea,
            showError("message") && styles.hasError
          )}
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          placeholder="How can we help you?"
          rows={5}
          aria-required="true"
          aria-invalid={showError("message")}
        />
        {showError("message") && (
          <span className={styles.errorMsg} role="alert">
            {errors.message}
          </span>
        )}
      </div>
      <div className={styles.formFooter}>
        {serverError && (
          <p className={styles.serverError} role="alert">
            ⚠ {serverError}
          </p>
        )}
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={submitStatus === "loading"}
          aria-busy={submitStatus === "loading"}
        >
          {submitStatus === "loading" ? "Sending…" : "Send Message →"}
        </button>
        <p className={styles.privacyNote}>
          Your details are only used to respond to your enquiry and will never
          be shared.
        </p>
      </div>
    </form>
  );
}
