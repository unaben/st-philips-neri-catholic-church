const ConfessionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="14"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 3v14M3 10h14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default ConfessionIcon;
