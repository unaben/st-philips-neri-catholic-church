/* eslint-disable @typescript-eslint/no-unused-vars */
import Next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RESEND_API_KEY: string;
      NEXT_PUBLIC_DEV_EMAIL: string;
    }
  }
}
