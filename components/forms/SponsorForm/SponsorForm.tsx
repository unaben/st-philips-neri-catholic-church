"use client";

import classNames from "classnames";
import { FormField } from "../shared/FormField/FormField";
import { SignatureField } from "../shared/SignatureField/SignatureField";
import { SponsorFormBanner } from "../shared/SponsorFormBanner/SponsorFormBanner";
import { useSponsorForm } from "./hooks/useSponsorForm";
import type { Sacrament } from "@/types/registration";
import styles from "./SponsorForm.module.css";
import { SACRAMENT_LABEL } from "./constants";

interface SponsorFormProps {
  sacrament?: Sacrament;
  enrolmentId?: string;
  candidateName?: string;
}

export function SponsorForm({
  sacrament,
  enrolmentId,
  candidateName,
}: SponsorFormProps = {}) {
  const {
    formData,
    errors,
    status,
    serverError,
    isValid,
    updateField,
    handleSubmit,
    handlePrint,
  } = useSponsorForm({
    sacrament,
    enrolmentId,
    candidateName,
  });
  const isSubmitting = status === "submitting";
  const cameViaLink = Boolean(sacrament);

  if (status === "success") {
    return (
      <div className={styles.successBanner} role="status">
        <h2>Thank you</h2>
        <p>
          Your Godparent/Sponsor form has been sent to the parish office.
          {enrolmentId && " Registration is now complete."}
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {cameViaLink && (
        <SponsorFormBanner
          candidateName={candidateName}
          sacrament={sacrament}
        />
      )}
      <h1 className={styles.heading}>God-Parents or Sponsors</h1>
      <p className={styles.introText}>
        Those being invited to be Godparents of the Church, or Sponsors, are
        being invited to have a Godparent or Sponsor. Being a Godparent or
        Sponsor is to undertake a responsibility for the Christian education of
        the child to be baptised, as a relative or friend, but it is also to be
        a representative of the Catholic Community of faith. It is therefore a
        very important role and not one to be taken lightly.
      </p>

      {!cameViaLink && (
        <FormField
          label="Which registration is this for?"
          htmlFor="sacrament"
          required
          error={errors.sacrament}
        >
          <select
            id="sacrament"
            value={formData.sacrament}
            onChange={(e) =>
              updateField(
                "sacrament",
                e.target.value as typeof formData.sacrament
              )
            }
          >
            <option value="">Please choose…</option>
            <option value="confirmation">{SACRAMENT_LABEL.confirmation}</option>
            <option value="firstHolyCommunion">
              {SACRAMENT_LABEL.firstHolyCommunion}
            </option>
          </select>
        </FormField>
      )}

      <FormField
        label="Your name"
        htmlFor="sponsorName"
        required
        error={errors.sponsorName}
      >
        <input
          id="sponsorName"
          type="text"
          value={formData.sponsorName}
          onChange={(e) => updateField("sponsorName", e.target.value)}
        />
      </FormField>

      <FormField
        label="Email"
        htmlFor="email"
        required
        error={errors.email}
        hint="So the parish office can confirm this with you."
      >
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
      </FormField>

      <FormField
        label="I have been asked to be a Godparent/Sponsor for"
        htmlFor="candidateName"
        required
        error={errors.candidateName}
      >
        <input
          id="candidateName"
          type="text"
          value={formData.candidateName}
          placeholder="Full name of godchild or candidate"
          onChange={(e) => updateField("candidateName", e.target.value)}
        />
      </FormField>

      <fieldset
        id="field-agreeToEnrol"
        className={classNames(styles.fieldset, {
          [styles.fieldsetError]: !!errors.confirmsEligibility,
        })}
      >
        <legend className={styles.legend}>Confirmations</legend>

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.confirmsEligibility}
            onChange={(e) =>
              updateField("confirmsEligibility", e.target.checked)
            }
          />
          I am not less than sixteen years of age, have been Baptised,
          Confirmed, received the most Holy Eucharist and regularly practise my
          faith by going to Mass.
        </label>
        {errors.confirmsEligibility && (
          <p className={styles.error} role="alert">
            {errors.confirmsEligibility}
          </p>
        )}

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.acceptsRole}
            onChange={(e) => updateField("acceptsRole", e.target.checked)}
          />
          I accept the role of Godparent or Sponsor and have the intention of
          fulfilling the serious religious duty it entails.
        </label>
        {errors.acceptsRole && (
          <p className={styles.error} role="alert">
            {errors.acceptsRole}
          </p>
        )}
      </fieldset>

      <div className={styles.grid}>
        <FormField
          label="Godparent's church name and address"
          htmlFor="godparentChurchAddress"
          required
          error={errors.godparentChurchAddress}
          className={styles.spanFull}
        >
          <textarea
            id="godparentChurchAddress"
            rows={2}
            value={formData.godparentChurchAddress}
            onChange={(e) =>
              updateField("godparentChurchAddress", e.target.value)
            }
          />
        </FormField>

        <FormField
          label="Church telephone number"
          htmlFor="churchTelephoneNumber"
          error={errors.churchTelephoneNumber}
        >
          <input
            id="churchTelephoneNumber"
            type="tel"
            value={formData.churchTelephoneNumber}
            onChange={(e) =>
              updateField("churchTelephoneNumber", e.target.value)
            }
          />
        </FormField>

        <FormField
          label="Phone number of Godparent"
          htmlFor="phoneNumberOfGodparent"
          error={errors.phoneNumberOfGodparent}
        >
          <input
            id="phoneNumberOfGodparent"
            type="tel"
            value={formData.phoneNumberOfGodparent}
            onChange={(e) =>
              updateField("phoneNumberOfGodparent", e.target.value)
            }
          />
        </FormField>
      </div>

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
            onChange={(e) => updateField("date", e.target.value)}
          />
        </FormField>
      </div>

      <p className={styles.nbNote}>
        NB: When you have signed this form, YOU are to present it with your
        BAPTISM CARD to the Parish Priest of the above Church.
      </p>

      {serverError && (
        <p className={styles.serverError} role="alert">
          {serverError}
        </p>
      )}

      <div className={classNames(styles.actions, "noPrint")}>
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
        <button
          type="button"
          className={styles.printButton}
          onClick={handlePrint}
        >
          Print form
        </button>
      </div>
    </form>
  );
}
