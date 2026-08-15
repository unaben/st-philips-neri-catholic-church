const MarriageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="13" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3 17c0-2 1.79-3.5 4-3.5M17 17c0-2-1.79-3.5-4-3.5M10 13.5c-1 0-2 .5-2 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 14l1.5-1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default MarriageIcon;
