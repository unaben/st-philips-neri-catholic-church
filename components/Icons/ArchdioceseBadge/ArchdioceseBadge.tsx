import styles from "./ArchdioceseBadge.module.css";

function ArchdioceseBadge() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.archdioceseBadge}
      aria-label="Archdiocese of Birmingham"
      role="img"
    >
      <path
        d="M32 4 L58 14 L58 36 C58 50 32 60 32 60 C32 60 6 50 6 36 L6 14 Z"
        fill="#1a3a6b"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      <rect
        x="29"
        y="12"
        width="6"
        height="36"
        rx="1"
        fill="white"
        fillOpacity="0.9"
      />
      <rect
        x="16"
        y="24"
        width="32"
        height="6"
        rx="1"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M22 12 L26 18 L32 14 L38 18 L42 12"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default ArchdioceseBadge;
