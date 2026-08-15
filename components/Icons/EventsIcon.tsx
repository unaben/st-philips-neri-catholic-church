import React from "react";

const EventsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="4"
      width="14"
      height="13"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M3 8h14" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7 2v3M13 2v3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export default EventsIcon;
