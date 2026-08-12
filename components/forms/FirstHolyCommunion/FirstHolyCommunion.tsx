"use client";

import classNames from "classnames";
import { FormField } from "../shared/FormField/FormField";
import { SignatureField } from "../shared/SignatureField/SignatureField";
import { TwoPartRegistrationNotice } from "../shared/TwoPartRegistrationNotice/TwoPartRegistrationNotice";
import { EnrolmentSuccess } from "../shared/EnrolmentSuccess/EnrolmentSuccess";
import { useFirstHolyCommunion } from "./hooks/useFirstHolyCommunion";
import styles from "./FirstHolyCommunion.module.css";

export function FirstHolyCommunion() {
  const {
    formData,
    errors,
    status,
    serverError,
    isValid,
    enrolment,
    updateField,
    handleSubmit,
  } = useFirstHolyCommunion();
  const isSubmitting = status === "submitting";

  if (status === "success" && enrolment) {
    return (
      <EnrolmentSuccess
        sacrament="firstHolyCommunion"
        enrolmentId={enrolment.id}
        nameOfChild={enrolment.nameOfChild}
      />
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.parishAddress}>
        St. Philip Catholic Church, Messenger Road, Smethwick, B66 3DQ
      </p>
      <h1 className={styles.heading}>First Holy Communion Enrolment Form</h1>

      <TwoPartRegistrationNotice />

      <div className={styles.grid}>
        <FormField
          label="Name of child"
          htmlFor="nameOfChild"
          required
          error={errors.nameOfChild}
          className={styles.spanFull}
        >
          <input
            id="nameOfChild"
            type="text"
            value={formData.nameOfChild}
            onChange={(e) => updateField("nameOfChild", e.target.value)}
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
            onChange={(e) => updateField("address", e.target.value)}
          />
        </FormField>

        <FormField label="Phone" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </FormField>

        <FormField label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
        </FormField>

        <FormField
          label="Date of birth"
          htmlFor="dateOfBirth"
          required
          error={errors.dateOfBirth}
        >
          <input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateField("dateOfBirth", e.target.value)}
          />
        </FormField>

        <FormField label="Age now" htmlFor="ageNow" error={errors.ageNow}>
          <input
            id="ageNow"
            type="text"
            value={formData.ageNow}
            onChange={(e) => updateField("ageNow", e.target.value)}
          />
        </FormField>

        <FormField
          label="Church where we attend Mass"
          htmlFor="churchAttendMass"
          required
          error={errors.churchAttendMass}
          className={styles.spanFull}
        >
          <input
            id="churchAttendMass"
            type="text"
            value={formData.churchAttendMass}
            onChange={(e) => updateField("churchAttendMass", e.target.value)}
          />
        </FormField>
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Baptism details</legend>

        <FormField
          label="Is the child baptised?"
          htmlFor="isChildBaptised"
          required
          error={errors.isChildBaptised}
        >
          <div className={styles.radioGroup} role="radiogroup">
            {(["yes", "no"] as const).map((option) => (
              <button
                key={option}
                type="button"
                className={classNames(styles.radioPill, {
                  [styles.radioPillSelected]:
                    formData.isChildBaptised === option,
                })}
                aria-pressed={formData.isChildBaptised === option}
                onClick={() => updateField("isChildBaptised", option)}
              >
                {option === "yes" ? "Yes" : "No"}
              </button>
            ))}
          </div>
        </FormField>

        {formData.isChildBaptised === "yes" && (
          <div className={classNames(styles.grid, styles.conditionalField)}>
            <FormField
              label="Church where our child was baptised"
              htmlFor="churchOfBaptism"
            >
              <input
                id="churchOfBaptism"
                type="text"
                value={formData.churchOfBaptism}
                onChange={(e) => updateField("churchOfBaptism", e.target.value)}
              />
            </FormField>
            <FormField label="Address" htmlFor="addressOfBaptism">
              <input
                id="addressOfBaptism"
                type="text"
                value={formData.addressOfBaptism}
                onChange={(e) =>
                  updateField("addressOfBaptism", e.target.value)
                }
              />
            </FormField>
            <FormField
              label="Date of baptism"
              htmlFor="dateOfBaptism"
              required
              error={errors.dateOfBaptism}
              hint="If the baptism was not at St. Philip's you will need to supply the baptism certificate."
              className={styles.spanFull}
            >
              <input
                id="dateOfBaptism"
                type="date"
                value={formData.dateOfBaptism}
                onChange={(e) => updateField("dateOfBaptism", e.target.value)}
              />
            </FormField>
          </div>
        )}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Family details</legend>
        <div className={styles.grid}>
          <FormField
            label="School"
            htmlFor="school"
            className={styles.spanFull}
          >
            <input
              id="school"
              type="text"
              value={formData.school}
              onChange={(e) => updateField("school", e.target.value)}
            />
          </FormField>
          <FormField
            label="Father's name"
            htmlFor="fathersName"
            error={errors.fathersName}
          >
            <input
              id="fathersName"
              type="text"
              value={formData.fathersName}
              onChange={(e) => updateField("fathersName", e.target.value)}
            />
          </FormField>
          <FormField
            label="Father's religion"
            htmlFor="fathersReligion"
            error={errors.fathersReligion}
          >
            <input
              id="fathersReligion"
              type="text"
              value={formData.fathersReligion}
              onChange={(e) => updateField("fathersReligion", e.target.value)}
            />
          </FormField>
          <FormField label="Mother's name" htmlFor="mothersName">
            <input
              id="mothersName"
              type="text"
              value={formData.mothersName}
              onChange={(e) => updateField("mothersName", e.target.value)}
            />
          </FormField>
          <FormField label="Mother's religion" htmlFor="mothersReligion">
            <input
              id="mothersReligion"
              type="text"
              value={formData.mothersReligion}
              onChange={(e) => updateField("mothersReligion", e.target.value)}
            />
          </FormField>
        </div>
      </fieldset>

      <fieldset
        id="field-agreeToEnrol"
        className={classNames(styles.fieldset, {
          [styles.fieldsetError]: !!errors.agreeToEnrol,
        })}
      >
        <legend className={styles.legend}>Contract</legend>

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.agreeToEnrol}
            onChange={(e) => updateField("agreeToEnrol", e.target.checked)}
          />
          I/We wish to enrol our child to prepare for First Holy Communion.
        </label>

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.agreeToWorkbook}
            onChange={(e) => updateField("agreeToWorkbook", e.target.checked)}
          />
          I/We will go through the workbook with our child at home, talk to them
          and try to help them understand what they are preparing for.
        </label>

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.agreeToAttendSessions}
            onChange={(e) =>
              updateField("agreeToAttendSessions", e.target.checked)
            }
          />
          I/We will attend the required sessions for parents such as enrolment
          Mass, School Masses, Penitential Service and First Holy Communion
          Preparation meetings.
        </label>

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.agreeToAccompany}
            onChange={(e) => updateField("agreeToAccompany", e.target.checked)}
          />
          I/We will accompany our child to celebrate the Eucharist every Sunday
          at a Catholic Church and with God&rsquo;s grace continue to grow more
          into the life of a Catholic worshipping community.
        </label>

        {errors.agreeToEnrol && (
          <p className={styles.error} role="alert">
            {errors.agreeToEnrol}
          </p>
        )}
      </fieldset>

      <div className={styles.signatureRow}>
        <SignatureField
          id="signature"
          label="Signed (Parent/Guardian)"
          value={formData.signature}
          onChange={(value) => updateField("signature", value)}
          error={errors.signature}
        />
        <FormField label="Date" htmlFor="date" required error={errors.date}>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => updateField("date", e.target.value)}
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
