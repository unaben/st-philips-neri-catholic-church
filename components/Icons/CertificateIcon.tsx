import React from "react";

const CertificateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 4h12v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 4V3a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7 10l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CertificateIcon;
