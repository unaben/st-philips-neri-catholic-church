import cn from "classnames";
import styles from "./ContentWrap.module.css";
import { ContentWrapProps } from "./ContentWrap.types";

const SIZE_MAP = {
  sm: styles.sizeSm, // e.g. blog post body, forms
  md: styles.sizeMd, // default site content
  lg: styles.sizeLg, // wide sections, galleries
  full: styles.sizeFull, // edge-to-edge (map, hero image)
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
