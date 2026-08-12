import classNames from "classnames";
import type { YesNoGroupProps } from '../RCIAApplication.types';
import styles from '../RCIAApplication.module.css'


function YesNoGroup({ name, value, onChange }: YesNoGroupProps) {
    return (
      <div className={styles.radioGroup} role="radiogroup">
        {(["yes", "no"] as const).map((option) => (
          <button
            key={option}
            type="button"
            className={classNames(styles.radioPill, {
              [styles.radioPillSelected]: value === option,
            })}
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option === "yes" ? "Yes" : "No"}
          </button>
        ))}
        <input type="hidden" name={name} value={value} />
      </div>
    );
  }
  export default YesNoGroup