'use client';

import styles from './ConfirmDialog.module.css';
import type { ConfirmDialogProps } from './ConfirmDialog.types';

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  isConfirming = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={onCancel}>
      <div
        className={styles.dialog}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="confirm-dialog-title" className={styles.title}>
          {title}
        </h2>
        {description ? <p className={styles.description}>{description}</p> : null}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
            disabled={isConfirming}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className={styles.confirmButton}
            onClick={onConfirm}
            disabled={isConfirming}
          >
            {isConfirming ? 'Deleting...' : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
