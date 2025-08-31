import { bindCSS, Div as FDiv, type PropsOf } from "@flexive/core";

import type { InteractionState } from "../../../style/state/state.types";
import { cs } from "../../../utility/classnames";
import styles from "./index.module.scss";

const cx = bindCSS(styles);

interface CardProps extends PropsOf<"div"> {
  state?: InteractionState;
}

const Card = ({ className, state, children, ...props }: CardProps) => {
  return (
    <FDiv className={cx("Card", cs(state), className)} {...props}>
      {children}
    </FDiv>
  );
};

export { Card };
