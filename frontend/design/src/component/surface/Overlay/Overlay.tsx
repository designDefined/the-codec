import { Article, bindCSS, type PropsOf } from "@flexive/core";
import { useOverlayControl } from "@flexive/operator";
import { useCallback } from "react";

import styles from "./Overlay.module.scss";

const cx = bindCSS(styles);

export type OverlayProps = PropsOf<"article"> & {
  preventClose?: boolean;
  transparent?: boolean;
};

export const Overlay = ({ children, className, preventClose, transparent, ...props }: OverlayProps) => {
  const { closeAfter, isClosing } = useOverlayControl();
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (preventClose) return;
      closeAfter(200);
    },
    [preventClose, closeAfter],
  );

  return (
    <Article
      className={cx("Overlay", { dim: !transparent, isClosing }, className)}
      onClick={handleClick}
      fixed
      top
      bottom
      left
      right
      {...props}
    >
      {children}
    </Article>
  );
};
