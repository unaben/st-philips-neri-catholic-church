"use client";

import { useCallback, useState } from "react";
import {
  DEFAULT_ERROR_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  SUBSCRIBE_ENDPOINT,
  isValidEmail,
} from "../Subscribe.utils";
import type { UseSubscribeReturn } from "../Subscribe.types";

const useSubscribe = (): UseSubscribeReturn => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<UseSubscribeReturn["status"]>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = useCallback(
    (value: string) => {
      setEmail(value);
      setErrorMsg("");
      if (status === "error") setStatus("idle");
    },
    [status]
  );

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isValidEmail(email)) {
        setErrorMsg(INVALID_EMAIL_MESSAGE);
        return;
      }

      setErrorMsg("");
      setStatus("loading");

      try {
        const res = await fetch(SUBSCRIBE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error ?? DEFAULT_ERROR_MESSAGE);
        }

        setStatus("success");
        setEmail("");
      } catch (err) {
        setStatus("error");
        setErrorMsg(err instanceof Error ? err.message : DEFAULT_ERROR_MESSAGE);
      }
    },
    [email]
  );

  const reset = useCallback(() => {
    setEmail("");
    setStatus("idle");
    setErrorMsg("");
  }, []);

  return { email, status, errorMsg, handleEmailChange, handleSubmit, reset };
};

export default useSubscribe;
