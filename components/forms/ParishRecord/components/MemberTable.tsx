import classNames from "classnames";
import type { MemberTableProps } from "../ParishRecord.types";
import styles from "../ParishRecord.module.css";

export default function MemberTable({
  title,
  members,
  errors,
  onAdd,
  onRemove,
  onUpdate,
  addButtonLabel,
  emptyMessage,
}: MemberTableProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{title}</legend>

      {members.length === 0 && (
        <p className={styles.emptyMessage}>{emptyMessage}</p>
      )}

      {members.length > 0 && (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of birth</th>
                <th>Relationship to you</th>
                <th>Religion</th>
                <th className={styles.removeColumn}>
                  <span className="sr-only">Remove</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => {
                const memberErrors = errors?.[index];
                return (
                  <tr key={member.id}>
                    <td>
                      <input
                        type="text"
                        aria-label="Name"
                        aria-invalid={!!memberErrors?.name}
                        className={classNames(styles.tableInput, {
                          [styles.tableInputError]: !!memberErrors?.name,
                        })}
                        value={member.name}
                        onChange={(event) =>
                          onUpdate(member.id, "name", event.target.value)
                        }
                      />
                      {memberErrors?.name && (
                        <span className={styles.tableErrorText}>
                          {memberErrors.name}
                        </span>
                      )}
                    </td>
                    <td>
                      <input
                        type="date"
                        aria-label="Date of birth"
                        aria-invalid={!!memberErrors?.dateOfBirth}
                        className={classNames(styles.tableInput, {
                          [styles.tableInputError]: !!memberErrors?.dateOfBirth,
                        })}
                        value={member.dateOfBirth}
                        onChange={(event) =>
                          onUpdate(member.id, "dateOfBirth", event.target.value)
                        }
                      />
                      {memberErrors?.dateOfBirth && (
                        <span className={styles.tableErrorText}>
                          {memberErrors.dateOfBirth}
                        </span>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        aria-label="Relationship to you"
                        aria-invalid={!!memberErrors?.relationshipToYou}
                        className={classNames(styles.tableInput, {
                          [styles.tableInputError]:
                            !!memberErrors?.relationshipToYou,
                        })}
                        value={member.relationshipToYou}
                        onChange={(event) =>
                          onUpdate(
                            member.id,
                            "relationshipToYou",
                            event.target.value
                          )
                        }
                      />
                      {memberErrors?.relationshipToYou && (
                        <span className={styles.tableErrorText}>
                          {memberErrors.relationshipToYou}
                        </span>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        aria-label="Religion"
                        className={styles.tableInput}
                        value={member.religion}
                        onChange={(event) =>
                          onUpdate(member.id, "religion", event.target.value)
                        }
                      />
                    </td>
                    <td className={styles.removeColumn}>
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => onRemove(member.id)}
                        aria-label={`Remove ${member.name || "this person"}`}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <button type="button" className={styles.addButton} onClick={onAdd}>
        + {addButtonLabel}
      </button>
    </fieldset>
  );
}
