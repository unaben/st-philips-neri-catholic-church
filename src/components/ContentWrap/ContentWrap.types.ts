import { ReactNode, ElementType } from "react";

export type ContentWrapProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
};
