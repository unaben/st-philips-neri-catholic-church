"use client";

import cn from "classnames";
import { RichTextEditor } from "@/components/RichTextEditor/RichTextEditor";
import { TITLE_MAX_LENGTH, PLAIN_TEXT_MAX_LENGTH } from "@/app/lib/constants";
import { useAnnouncementForm } from "./hooks/useAnnouncementForm";
import type { AnnouncementFormProps } from "./AnnouncementForm.types";
import styles from "./AnnouncementForm.module.css";

export function AnnouncementForm({
  initialAnnouncement,
  onSubmit,
  onCancel,
  submitLabel = "Save announcement",
}: AnnouncementFormProps) {
  const { values, errors, isSubmitting, setField, handleSubmit } =
    useAnnouncementForm({
      initialAnnouncement,
      onSubmit,
    });

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {errors.form ? (
        <p className={styles.formError} role="alert">
          {errors.form}
        </p>
      ) : null}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="announcement-title">
          Title
        </label>
        <input
          id="announcement-title"
          type="text"
          className={cn(styles.input, { [styles.inputError]: errors.title })}
          value={values.title}
          maxLength={TITLE_MAX_LENGTH}
          onChange={(event) => setField("title", event.target.value)}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={
            errors.title ? "announcement-title-error" : undefined
          }
          placeholder="e.g. Parish Fete - Saturday 14th"
        />
        {errors.title ? (
          <p id="announcement-title-error" className={styles.fieldError}>
            {errors.title}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="announcement-plain-text">
          Short summary (plain text)
        </label>
        <textarea
          id="announcement-plain-text"
          className={cn(styles.textarea, {
            [styles.inputError]: errors.plainText,
          })}
          value={values.plainText}
          maxLength={PLAIN_TEXT_MAX_LENGTH}
          rows={3}
          onChange={(event) => setField("plainText", event.target.value)}
          aria-invalid={Boolean(errors.plainText)}
          aria-describedby={
            errors.plainText ? "announcement-plain-text-error" : undefined
          }
          placeholder="One or two plain sentences - used anywhere formatting can't be shown."
        />
        {errors.plainText ? (
          <p id="announcement-plain-text-error" className={styles.fieldError}>
            {errors.plainText}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="announcement-rich-text">
          Full announcement (rich text)
        </label>
        <RichTextEditor
          id="announcement-rich-text"
          value={values.richTextHtml}
          onChange={(html) => setField("richTextHtml", html)}
          placeholder="Add the full announcement, with formatting if you like..."
        />
      </div>

      <div className={styles.actions}>
        {onCancel ? (
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        ) : null}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
