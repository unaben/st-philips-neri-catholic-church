import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How St. Philip Neri Catholic Church in Smethwick collects, uses, and protects your personal information.",
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
