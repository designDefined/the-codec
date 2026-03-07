import { bindCSS, Button as FButton, type PropsOf } from "@flexive/core";
import type { Ref } from "react";

import type { InteractionState } from "../../../style/state/state.types";
import { cs } from "../../../utility/classnames";
import styles from "./Button.module.scss";

const cx = bindCSS(styles);

interface ButtonProps extends PropsOf<"button"> {
  ref?: Ref<HTMLButtonElement>;
  state?: Omit<InteractionState, "data" | "validation" | "on" | "dirty">;
}

const Button = ({ ref, className, state, ...props }: ButtonProps) => {
  return <FButton ref={ref} className={cx("Button", cs(state), "tomato-1", "ruby-2", className)} {...props} />;
};

export { Button };
export type { ButtonProps };
