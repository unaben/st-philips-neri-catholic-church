"use client";

import Link from "next/link";
import cn from "classnames";
import Field from "./components/Field";
import { HEARD_ABOUT_OPTIONS } from "./RegistrationForm.types";
import styles from "./RegistrationForm.module.css";
import { SectionHeader } from "./components/SectionHeader";
import { useProgress } from "./hooks/useProgress";
import { useRegistrationForm } from "./hooks/useRegistrationForm";

export default function RegistrationForm() {
  const {
    formData,
    errors,
    submitStatus,
    serverError,
    handleChange,
    handleCatholicChange,
    handleBlur,
    handleSubmit,
    reset,
    showError,
  } = useRegistrationForm();

  const progress = useProgress(formData);

  if (submitStatus === "success") {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>✉️</div>
        <h2 className={styles.successTitle}>
          Thank You, {formData.firstName || "Friend"}!
        </h2>
        <p className={styles.successText}>
          Your registration has been received. We&apos;ve sent a confirmation to{" "}
          <strong>{formData.email}</strong> and the parish team will be in touch
          shortly to welcome you personally.
        </p>
        <div className={styles.successBtns}>
          <Link href="/" className={styles.btnHome}>
            ← Back to Home
          </Link>
          <button onClick={reset} className={styles.btnReset}>
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <p className={styles.subheading}>
          We&apos;re delighted you&apos;d like to join our community. Please
          fill in the form below and we&apos;ll be in touch to welcome you
          personally.
        </p>
      </header>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Parish registration form"
      >
        <div className={styles.progress} aria-hidden="true">
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={styles.section}>
          <SectionHeader icon="👤" title="Personal Details" />
          <div className={styles.grid3}>
            <Field
              id="firstName"
              label="First Name"
              error={showError("firstName") ? errors.firstName : undefined}
            >
              <input
                id="firstName"
                name="firstName"
                type="text"
                className={cn(
                  styles.input,
                  showError("firstName") && styles.hasError
                )}
                value={formData.firstName}
                onChange={handleChange}
                onBlur={() => handleBlur("firstName")}
                autoComplete="given-name"
                placeholder="John"
                aria-required="true"
                aria-invalid={showError("firstName")}
              />
            </Field>

            <Field
              id="middleName"
              label="Middle Name"
              optional
              error={showError("middleName") ? errors.middleName : undefined}
            >
              <input
                id="middleName"
                name="middleName"
                type="text"
                className={styles.input}
                value={formData.middleName}
                onChange={handleChange}
                autoComplete="additional-name"
                placeholder="Mary"
              />
            </Field>

            <Field
              id="lastName"
              label="Last Name"
              error={showError("lastName") ? errors.lastName : undefined}
            >
              <input
                id="lastName"
                name="lastName"
                type="text"
                className={cn(
                  styles.input,
                  showError("lastName") && styles.hasError
                )}
                value={formData.lastName}
                onChange={handleChange}
                onBlur={() => handleBlur("lastName")}
                autoComplete="family-name"
                placeholder="Smith"
                aria-required="true"
                aria-invalid={showError("lastName")}
              />
            </Field>

            <Field
              id="dateOfBirth"
              label="Date of Birth"
              error={showError("dateOfBirth") ? errors.dateOfBirth : undefined}
            >
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                className={cn(
                  styles.input,
                  showError("dateOfBirth") && styles.hasError
                )}
                value={formData.dateOfBirth}
                onChange={handleChange}
                onBlur={() => handleBlur("dateOfBirth")}
                max={new Date().toISOString().split("T")[0]}
                aria-required="true"
                aria-invalid={showError("dateOfBirth")}
              />
            </Field>

            <Field
              id="nationality"
              label="Nationality"
              error={showError("nationality") ? errors.nationality : undefined}
            >
              <input
                id="nationality"
                name="nationality"
                type="text"
                className={cn(
                  styles.input,
                  showError("nationality") && styles.hasError
                )}
                value={formData.nationality}
                onChange={handleChange}
                onBlur={() => handleBlur("nationality")}
                autoComplete="country-name"
                placeholder="British"
                aria-required="true"
                aria-invalid={showError("nationality")}
              />
            </Field>
          </div>
        </div>
        <div className={styles.section}>
          <SectionHeader icon="📞" title="Contact Details" />
          <div className={styles.grid2}>
            <Field
              id="email"
              label="Email Address"
              error={showError("email") ? errors.email : undefined}
            >
              <input
                id="email"
                name="email"
                type="email"
                className={cn(
                  styles.input,
                  showError("email") && styles.hasError
                )}
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                autoComplete="email"
                placeholder="john.smith@example.com"
                aria-required="true"
                aria-invalid={showError("email")}
              />
            </Field>
            <Field
              id="phone"
              label="Phone Number"
              error={showError("phone") ? errors.phone : undefined}
            >
              <input
                id="phone"
                name="phone"
                type="tel"
                className={cn(
                  styles.input,
                  showError("phone") && styles.hasError
                )}
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                autoComplete="tel"
                placeholder="07700 900123"
                aria-required="true"
                aria-invalid={showError("phone")}
              />
            </Field>
          </div>
        </div>
        <div className={styles.section}>
          <SectionHeader icon="🏠" title="Address" />
          <div className={styles.grid2}>
            <Field
              id="addressLine1"
              label="Address Line 1"
              error={
                showError("addressLine1") ? errors.addressLine1 : undefined
              }
            >
              <input
                id="addressLine1"
                name="addressLine1"
                type="text"
                className={cn(
                  styles.input,
                  showError("addressLine1") && styles.hasError
                )}
                value={formData.addressLine1}
                onChange={handleChange}
                onBlur={() => handleBlur("addressLine1")}
                autoComplete="address-line1"
                placeholder="12 Example Street"
                aria-required="true"
                aria-invalid={showError("addressLine1")}
              />
            </Field>

            <Field id="addressLine2" label="Address Line 2" optional>
              <input
                id="addressLine2"
                name="addressLine2"
                type="text"
                className={styles.input}
                value={formData.addressLine2}
                onChange={handleChange}
                autoComplete="address-line2"
                placeholder="Smethwick"
              />
            </Field>

            <Field
              id="postCode"
              label="Post Code"
              error={showError("postCode") ? errors.postCode : undefined}
            >
              <input
                id="postCode"
                name="postCode"
                type="text"
                className={cn(
                  styles.input,
                  showError("postCode") && styles.hasError
                )}
                value={formData.postCode}
                onChange={handleChange}
                onBlur={() => handleBlur("postCode")}
                autoComplete="postal-code"
                placeholder="B66 3DU"
                aria-required="true"
                aria-invalid={showError("postCode")}
              />
            </Field>
          </div>
        </div>
        <div className={styles.section}>
          <SectionHeader icon="⛪" title="Parish Information" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-xl)",
            }}
          >
            <div
              className={styles.field}
              data-error={showError("alreadyCatholic") || undefined}
            >
              <span className={styles.label}>Already a Catholic?</span>
              <div
                className={styles.radioGroup}
                role="radiogroup"
                aria-required="true"
              >
                {([true, false] as const).map((val) => (
                  <label
                    key={String(val)}
                    className={cn(
                      styles.radioLabel,
                      formData.alreadyCatholic === val && styles.checked
                    )}
                  >
                    <input
                      type="radio"
                      name="alreadyCatholic"
                      className={styles.radioInput}
                      checked={formData.alreadyCatholic === val}
                      onChange={() => handleCatholicChange(val)}
                      aria-label={
                        val
                          ? "Yes, I am already a Catholic"
                          : "No, I am not yet a Catholic"
                      }
                    />
                    {val ? "✓ Yes, I am Catholic" : "✗ No, not yet"}
                  </label>
                ))}
              </div>
              {showError("alreadyCatholic") && (
                <span className={styles.errorMsg} role="alert">
                  {errors.alreadyCatholic}
                </span>
              )}
            </div>
            <Field
              id="previousParish"
              label="Previous Parish / Church"
              optional
            >
              <input
                id="previousParish"
                name="previousParish"
                type="text"
                className={styles.input}
                value={formData.previousParish}
                onChange={handleChange}
                placeholder="e.g. St. Mary's, Birmingham"
              />
            </Field>
            <Field
              id="heardAboutUs"
              label="How did you hear about us?"
              error={
                showError("heardAboutUs") ? errors.heardAboutUs : undefined
              }
            >
              <select
                id="heardAboutUs"
                name="heardAboutUs"
                className={cn(
                  styles.select,
                  showError("heardAboutUs") && styles.hasError
                )}
                value={formData.heardAboutUs}
                onChange={handleChange}
                onBlur={() => handleBlur("heardAboutUs")}
                aria-required="true"
                aria-invalid={showError("heardAboutUs")}
              >
                <option value="">— Please select —</option>
                {HEARD_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
            <Field
              id="reasonForRegistering"
              label="Reason for Registering"
              error={
                showError("reasonForRegistering")
                  ? errors.reasonForRegistering
                  : undefined
              }
            >
              <textarea
                id="reasonForRegistering"
                name="reasonForRegistering"
                className={cn(
                  styles.textarea,
                  showError("reasonForRegistering") && styles.hasError
                )}
                value={formData.reasonForRegistering}
                onChange={handleChange}
                onBlur={() => handleBlur("reasonForRegistering")}
                placeholder="Please tell us a little about why you are registering with our parish…"
                rows={4}
                aria-required="true"
                aria-invalid={showError("reasonForRegistering")}
              />
            </Field>
          </div>
        </div>
        <div className={styles.formFooter}>
          <p className={styles.footerNote}>
            Your information is only used for parish registration purposes and
            will never be shared with third parties.
          </p>
          <div className={styles.footerActions}>
            {serverError && (
              <p role="alert" className={styles.serverError}>
                ⚠ {serverError}
              </p>
            )}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitStatus === "loading"}
              aria-busy={submitStatus === "loading"}
            >
              {submitStatus === "loading"
                ? "Submitting…"
                : "Submit Registration →"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
