"use client";

import classNames from "classnames";
import { FormField } from "../shared/FormField/FormField";
import SuccessFormSubMsg from "../SuccessFormSubMsg/SuccessFormSubMsg";
import { SignatureField } from "../shared/SignatureField/SignatureField";
import { useRCIAApplication } from "./hooks/useRCIAApplication";
import YesNoGroup from "./components/YesNoGroup";
import { MARITAL_STATUS_OPTIONS } from "./constants";
import styles from "./RCIAApplication.module.css";

export function RCIAApplication() {
  const {
    formData,
    errors,
    status,
    serverError,
    isValid,
    updateField,
    submittedData,
    handleSubmit,
  } = useRCIAApplication();
  const isSubmitting = status === "submitting";

  if (status === "success") {
    return (
      <SuccessFormSubMsg
        email={submittedData?.email ?? ""}
        name={submittedData?.firstName ?? ""}
        message="Your RCIA Programme application has been sent to the parish office."
      />
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h1 className={styles.heading}>St. Philip Neri Church RCIA Programme</h1>
      <p className={styles.subheading}>
        The Rite of Christian Initiation for Adults application form (for
        non-Catholic and non-confirmed adult Catholics)
      </p>

      <div className={styles.grid}>
        <FormField
          label="First name"
          htmlFor="firstName"
          required
          error={errors.firstName}
        >
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
          />
        </FormField>

        <FormField
          label="Surname"
          htmlFor="surname"
          required
          error={errors.surname}
        >
          <input
            id="surname"
            type="text"
            value={formData.surname}
            onChange={(e) => updateField("surname", e.target.value)}
          />
        </FormField>

        <FormField label="Known as" htmlFor="knownAs" error={errors.knownAs}>
          <input
            id="knownAs"
            type="text"
            value={formData.knownAs}
            onChange={(e) => updateField("knownAs", e.target.value)}
          />
        </FormField>

        <FormField label="Gender" htmlFor="gender" error={errors.gender}>
          <input
            id="gender"
            type="text"
            value={formData.gender}
            onChange={(e) => updateField("gender", e.target.value)}
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
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Marital status</legend>
        <div
          className={classNames(styles.radioGroup, {
            [styles.radioGroupError]: !!errors.maritalStatus,
          })}
        >
          {MARITAL_STATUS_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={classNames(styles.radioPill, {
                [styles.radioPillSelected]:
                  formData.maritalStatus === option.value,
              })}
              aria-pressed={formData.maritalStatus === option.value}
              onClick={() => updateField("maritalStatus", option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        {errors.maritalStatus && (
          <p className={styles.error} role="alert">
            {errors.maritalStatus}
          </p>
        )}

        {formData.maritalStatus === "married" && (
          <FormField
            label="Is this your first marriage?"
            htmlFor="isFirstMarriage"
            required
            error={errors.isFirstMarriage}
            className={styles.conditionalField}
          >
            <YesNoGroup
              name="isFirstMarriage"
              value={formData.isFirstMarriage}
              onChange={(value) => updateField("isFirstMarriage", value)}
            />
          </FormField>
        )}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Baptism</legend>
        <FormField
          label="Have you been baptised?"
          htmlFor="isBaptised"
          required
          error={errors.isBaptised}
        >
          <YesNoGroup
            name="isBaptised"
            value={formData.isBaptised}
            onChange={(value) => updateField("isBaptised", value)}
          />
        </FormField>

        {formData.isBaptised === "yes" && (
          <div className={classNames(styles.grid, styles.conditionalField)}>
            <FormField
              label="Date of baptism"
              htmlFor="dateOfBaptism"
              required
              error={errors.dateOfBaptism}
            >
              <input
                id="dateOfBaptism"
                type="date"
                value={formData.dateOfBaptism}
                onChange={(e) => updateField("dateOfBaptism", e.target.value)}
              />
            </FormField>
            <FormField
              label="Place of baptism"
              htmlFor="placeOfBaptism"
              required
              error={errors.placeOfBaptism}
            >
              <input
                id="placeOfBaptism"
                type="text"
                value={formData.placeOfBaptism}
                onChange={(e) => updateField("placeOfBaptism", e.target.value)}
              />
            </FormField>
          </div>
        )}

        <FormField
          label="Religion"
          htmlFor="religion"
          error={errors.religion}
          hint="Please provide a photocopy of your baptism certificate to the parish office."
        >
          <input
            id="religion"
            type="text"
            value={formData.religion}
            onChange={(e) => updateField("religion", e.target.value)}
          />
        </FormField>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>First Holy Communion</legend>
        <FormField
          label="Have you received your First Holy Communion?"
          htmlFor="receivedFirstHolyCommunion"
          required
          error={errors.receivedFirstHolyCommunion}
        >
          <YesNoGroup
            name="receivedFirstHolyCommunion"
            value={formData.receivedFirstHolyCommunion}
            onChange={(value) =>
              updateField("receivedFirstHolyCommunion", value)
            }
          />
        </FormField>

        {formData.receivedFirstHolyCommunion === "yes" && (
          <div className={classNames(styles.grid, styles.conditionalField)}>
            <FormField
              label="Date of First Holy Communion"
              htmlFor="dateOfFirstHolyCommunion"
              required
              error={errors.dateOfFirstHolyCommunion}
            >
              <input
                id="dateOfFirstHolyCommunion"
                type="date"
                value={formData.dateOfFirstHolyCommunion}
                onChange={(e) =>
                  updateField("dateOfFirstHolyCommunion", e.target.value)
                }
              />
            </FormField>
            <FormField
              label="Place of First Holy Communion"
              htmlFor="placeOfFirstHolyCommunion"
              required
              error={errors.placeOfFirstHolyCommunion}
              hint="Please provide a photocopy of your FHC certificate, if available."
            >
              <input
                id="placeOfFirstHolyCommunion"
                type="text"
                value={formData.placeOfFirstHolyCommunion}
                onChange={(e) =>
                  updateField("placeOfFirstHolyCommunion", e.target.value)
                }
              />
            </FormField>
          </div>
        )}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Contact details</legend>
        <FormField
          label="Address"
          htmlFor="address"
          required
          error={errors.address}
        >
          <textarea
            id="address"
            rows={2}
            value={formData.address}
            onChange={(e) => updateField("address", e.target.value)}
          />
        </FormField>

        <div className={styles.grid}>
          <FormField
            label="Phone number"
            htmlFor="phoneNumber"
            error={errors.phoneNumber}
          >
            <input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => updateField("phoneNumber", e.target.value)}
            />
          </FormField>
          <FormField
            label="Email"
            htmlFor="email"
            required
            error={errors.email}
            hint="This will be the main way we communicate with you during the programme."
          >
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </FormField>
          <FormField
            label="Which parish do you attend regularly?"
            htmlFor="whichParish"
            required
            error={errors.whichParish}
          >
            <input
              id="whichParish"
              type="text"
              value={formData.whichParish}
              onChange={(e) => updateField("whichParish", e.target.value)}
            />
          </FormField>
          <FormField
            label="Which Mass?"
            htmlFor="whichMass"
            required
            error={errors.whichMass}
          >
            <input
              id="whichMass"
              type="text"
              value={formData.whichMass}
              onChange={(e) => updateField("whichMass", e.target.value)}
            />
          </FormField>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          Petition to be admitted into the Full Communion of the Catholic Church
        </legend>
        <p className={styles.petitionText}>
          I believe and profess all that the Holy Catholic Church believes,
          teaches, and proclaims to be revealed by God, and, moreover, of my own
          free will I hereby petition to be admitted into the Full Communion of
          the Catholic Church.
        </p>

        <div className={styles.signatureRow}>
          <SignatureField
            id="catechumenName"
            label="Catechumen / Candidate"
            value={formData.catechumenName}
            onChange={(value) => updateField("catechumenName", value)}
            error={errors.catechumenName}
          />
          <FormField
            label="Date"
            htmlFor="catechumenDate"
            required
            error={errors.catechumenDate}
          >
            <input
              id="catechumenDate"
              type="date"
              value={formData.catechumenDate}
              onChange={(e) => updateField("catechumenDate", e.target.value)}
            />
          </FormField>
        </div>

        <div className={styles.signatureRow}>
          <SignatureField
            id="sponsorName"
            label="Sponsor"
            value={formData.sponsorName}
            onChange={(value) => updateField("sponsorName", value)}
          />
          <FormField required label="Date" htmlFor="sponsorDate">
            <input
              id="sponsorDate"
              type="date"
              value={formData.sponsorDate}
              onChange={(e) => updateField("sponsorDate", e.target.value)}
            />
          </FormField>
        </div>

        <p className={styles.officeNote}>
          Priest sign-off is completed in person at the parish office.
        </p>
      </fieldset>

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
        {isSubmitting ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}
