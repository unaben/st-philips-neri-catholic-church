import React from "react";

const StreamedMassesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2"
      y="5"
      width="16"
      height="11"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 9.5l4 1.5-4 1.5V9.5z" fill="currentColor" />
    <path
      d="M7 3h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default StreamedMassesIcon;
