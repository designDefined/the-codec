import { Article, bindCSS, type PropsOf } from "@flexive/core";
import { useOverlayControl } from "@flexive/operator";

import styles from "./Overlay.module.scss";

const cx = bindCSS(styles);

export type OverlayProps = PropsOf<"article"> & {
  preventClose?: boolean;
};

export const Overlay = ({ children, className, preventClose, ...props }: OverlayProps) => {
  const { close } = useOverlayControl();

  return (
    <Article className={cx("Overlay", className)} onClick={preventClose ? undefined : close} {...props}>
      {children}
    </Article>
  );
};
