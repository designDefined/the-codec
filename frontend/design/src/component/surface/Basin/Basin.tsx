import { bindCSS, Div, type PropsOf } from "@flexive/core";

import styles from "./Basin.module.scss";

const cx = bindCSS(styles);

type BasinProps = PropsOf<"div"> & {
  size: "small" | "medium" | "large" | "full";
};

export const Basin = ({ className, size, ...props }: BasinProps) => {
  return <Div className={cx("Basin", size, className)} {...props} />;
};
