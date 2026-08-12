import { CcpPriestContact } from "./CCP.types";

export function buildMailtoLink(contact: CcpPriestContact): string {
  const subject = encodeURIComponent(
    "Certificate of Catholic Practice - Appointment Request"
  );
  return `mailto:${contact.email}?subject=${subject}`;
}

export function buildTelLink(contact: CcpPriestContact): string {
  const firstNumber = contact.phone.split("|")[0].trim().replace(/\s+/g, "");
  return `tel:${firstNumber}`;
}
