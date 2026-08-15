const ChoirIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="5"
      y="4"
      width="2"
      height="9"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="9"
      y="2"
      width="2"
      height="11"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="13"
      y="4"
      width="2"
      height="9"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M3 16h14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default ChoirIcon;
