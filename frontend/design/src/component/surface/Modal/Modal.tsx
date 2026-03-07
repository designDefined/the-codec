import { Article, bindCSS, type PropsOf } from "@flexive/core";

import styles from "./Modal.module.scss";

const cx = bindCSS(styles);

export type ModalProps = PropsOf<"article">;

export const Modal = ({ className, children, ...props }: ModalProps) => {
  return (
    <Article className={cx("Modal", className)} {...props}>
      {children}
    </Article>
  );
};
