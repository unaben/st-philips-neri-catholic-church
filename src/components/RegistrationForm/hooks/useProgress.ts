import { useRegistrationForm } from "./useRegistrationForm";

 // ── Completion progress (counts filled required fields) ───────────────────────
 export function useProgress(
  formData: ReturnType<typeof useRegistrationForm>["formData"]
) {
  const required = [
    formData.firstName,
    formData.lastName,
    formData.dateOfBirth,
    formData.nationality,
    formData.email,
    formData.phone,
    formData.addressLine1,
    formData.postCode,
    formData.alreadyCatholic !== null ? "y" : "",
    formData.reasonForRegistering,
    formData.heardAboutUs,
  ];
  const filled = required.filter(Boolean).length;
  return Math.round((filled / required.length) * 100);
}