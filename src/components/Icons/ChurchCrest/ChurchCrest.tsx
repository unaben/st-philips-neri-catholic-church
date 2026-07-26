import styles from "./ChurchCrest.module.css";

interface ChurchCrestProps {
  position: "nav" | "footer";
}

function ChurchCrest({ position }: ChurchCrestProps) {
  return (
    <svg
      viewBox="0 0 48 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={position === "footer" ? styles.crestSvg : styles.crestNav}
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="22"
        r="19"
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        fill="none"
      />
      <rect x="21.5" y="4" width="5" height="36" rx="1" fill="white" />
      <rect x="10" y="16" width="28" height="5" rx="1" fill="white" />
      <circle cx="24" cy="10" r="3.5" fill="white" fillOpacity="0.85" />
      <line
        x1="12"
        y1="20"
        x2="36"
        y2="20"
        stroke="white"
        strokeWidth="2"
        strokeOpacity="0.4"
      />
      <rect
        x="18"
        y="40"
        width="12"
        height="4"
        rx="1"
        fill="white"
        fillOpacity="0.7"
      />
      <rect
        x="14"
        y="44"
        width="20"
        height="3"
        rx="1"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}

export default ChurchCrest;
