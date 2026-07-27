import cn from "classnames";
import styles from "./ContentWrap.module.css";
import { ContentWrapProps } from "./ContentWrap.types";

const SIZE_MAP = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
  full: styles.sizeFull,
};

export default function ContentWrap({
  children,
  as: Tag = "div",
  className,
  size = "md",
}: ContentWrapProps) {
  return (
    <Tag className={cn(styles.wrap, SIZE_MAP[size], className)}>{children}</Tag>
  );
}
