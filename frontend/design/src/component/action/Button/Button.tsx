import { bindCSS, Button as FButton, type PropsOf } from "@flexive/core";
import type { Ref } from "react";

import styles from "./Button.module.scss";

const cx = bindCSS(styles);

export type ButtonProps = PropsOf<"button"> & {
  ref?: Ref<HTMLButtonElement>;
};

export const Button = ({ ref, className, ...props }: ButtonProps) => {
  // @ts-expect-error - react version mismatch with flexive core
  return <FButton ref={ref} className={cx("Button", className)} alignC px={8} py={4} {...props} />;
};
