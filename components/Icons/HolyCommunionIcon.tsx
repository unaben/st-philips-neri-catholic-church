const HolyCommunionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 5v10M5 10h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

export default HolyCommunionIcon;
