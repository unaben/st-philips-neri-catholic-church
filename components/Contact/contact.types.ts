import { ChangeEvent } from "react";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export interface UseContactFormReturn {
  formData: ContactFormData;
  errors: ContactFormErrors;
  touched: Partial<Record<keyof ContactFormData, boolean>>;
  submitStatus: SubmitStatus;
  serverError: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: (name: keyof ContactFormData) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
  showError: (name: keyof ContactFormData) => boolean;
}
