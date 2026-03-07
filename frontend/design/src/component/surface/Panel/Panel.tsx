import type { PropsOf } from "@flexive/core";
import { Article, bindCSS } from "@flexive/core";

import styles from "./Panel.module.scss";

const cx = bindCSS(styles);

export type PanelProps = PropsOf<"article">;

export const Panel = ({ className, children, ...props }: PanelProps) => {
  return (
    <Article className={cx("Panel", className)} {...props}>
      {children}
    </Article>
  );
};
