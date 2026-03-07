import { bindCSS, Div, type PropsOf } from "@flexive/core";

import type { InteractionState } from "../../../style/state/state.types";
import { cs } from "../../../utility/classnames";
import styles from "./Card.module.scss";

const cx = bindCSS(styles);

type CardProps = PropsOf<"div"> & {
  state?: InteractionState;
};

export const Card = ({ className, state, children, ...props }: CardProps) => {
  return (
    <Div className={cx("Card", cs(state), className)} {...props}>
      {children}
    </Div>
  );
};
