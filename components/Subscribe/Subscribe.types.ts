export type SubscribeStatus = "idle" | "loading" | "success" | "error";

export interface UseSubscribeReturn {
  email: string;
  status: SubscribeStatus;
  errorMsg: string;
  handleEmailChange: (value: string) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
}
