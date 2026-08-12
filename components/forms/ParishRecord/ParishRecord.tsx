"use client";

import { FormField } from "../shared/FormField/FormField";
import { SignatureField } from "../shared/SignatureField/SignatureField";
import SuccessFormSubMsg from "../SuccessFormSubMsg/SuccessFormSubMsg";
import MemberTable from "./components/MemberTable";
import { useParishRecord } from "./hooks/useParishRecord";
import styles from "./ParishRecord.module.css";

export function ParishRecord() {
  const {
    formData,
    errors,
    status,
    serverError,
    submittedData,
    isValid,
    updateField,
    addAdult,
    removeAdult,
    updateAdult,
    addChild,
    removeChild,
    updateChild,
    handleSubmit,
  } = useParishRecord();

  const isSubmitting = status === "submitting";

  if (status === "success") {
    return (
      <SuccessFormSubMsg
        email={submittedData?.email ?? ""}
        name={submittedData?.yourName ?? ""}
      />
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h1 className={styles.heading}>
        Information for St. Philip&rsquo;s Parish Records
      </h1>

      <div className={styles.grid}>
        <FormField
          label="Your name"
          htmlFor="yourName"
          required
          error={errors.yourName}
        >
          <input
            id="yourName"
            type="text"
            value={formData.yourName}
            onChange={(event) => updateField("yourName", event.target.value)}
          />
        </FormField>

        <FormField
          label="Religion"
          required
          htmlFor="religion"
          error={errors.religion}
        >
          <input
            id="religion"
            type="text"
            value={formData.religion}
            onChange={(event) => updateField("religion", event.target.value)}
          />
        </FormField>

        <FormField
          label="Address"
          htmlFor="address"
          required
          error={errors.address}
          className={styles.spanFull}
        >
          <textarea
            id="address"
            rows={2}
            value={formData.address}
            onChange={(event) => updateField("address", event.target.value)}
          />
        </FormField>

        <FormField
          label="Postcode"
          htmlFor="postcode"
          required
          error={errors.postcode}
        >
          <input
            id="postcode"
            type="text"
            value={formData.postcode}
            onChange={(event) => updateField("postcode", event.target.value)}
          />
        </FormField>

        <FormField
          label="Telephone number"
          htmlFor="telNo"
          error={errors.telNo}
        >
          <input
            id="telNo"
            type="tel"
            value={formData.telNo}
            onChange={(event) => updateField("telNo", event.target.value)}
          />
        </FormField>

        <FormField
          required
          label="Mobile"
          htmlFor="mobile"
          error={errors.mobile}
        >
          <input
            id="mobile"
            type="tel"
            value={formData.mobile}
            onChange={(event) => updateField("mobile", event.target.value)}
          />
        </FormField>

        <FormField label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </FormField>

        <FormField
          label="Nationality"
          htmlFor="nationality"
          required
          error={errors.nationality}
        >
          <input
            id="nationality"
            type="text"
            value={formData.nationality}
            onChange={(event) => updateField("nationality", event.target.value)}
          />
        </FormField>

        <FormField
          label="First language"
          htmlFor="firstLanguage"
          required
          error={errors.firstLanguage}
        >
          <input
            id="firstLanguage"
            type="text"
            value={formData.firstLanguage}
            onChange={(event) =>
              updateField("firstLanguage", event.target.value)
            }
          />
        </FormField>
      </div>

      <MemberTable
        title="Other adults in your household"
        members={formData.otherAdults}
        errors={errors.otherAdults}
        onAdd={addAdult}
        onRemove={removeAdult}
        onUpdate={updateAdult}
        addButtonLabel="Add another adult"
        emptyMessage="No other adults added yet."
      />

      <MemberTable
        title="Children (under 16 years)"
        members={formData.children}
        errors={errors.children}
        onAdd={addChild}
        onRemove={removeChild}
        onUpdate={updateChild}
        addButtonLabel="Add another child"
        emptyMessage="No children added yet."
      />

      <p className={styles.privacyNote}>
        This information will be used by St. Philip&rsquo;s parish for
        administrative purposes only. We shall not supply it to third parties.
      </p>

      <div className={styles.signatureRow}>
        <SignatureField
          id="signature"
          value={formData.signature}
          onChange={(value) => updateField("signature", value)}
          error={errors.signature}
        />

        <FormField label="Date" htmlFor="date" required error={errors.date}>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={(event) => updateField("date", event.target.value)}
          />
        </FormField>
      </div>

      {serverError && (
        <p className={styles.serverError} role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        title={
          !isValid
            ? "Please complete all required fields before submitting."
            : undefined
        }
      >
        {isSubmitting ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
