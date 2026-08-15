import React from "react";

const NewsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 5a2 2 0 012-2h8l4 4v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M11 3v4h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 11h6M7 14h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default NewsIcon;
