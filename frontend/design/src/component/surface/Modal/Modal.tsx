import { Article, bindCSS, type PropsOf } from "@flexive/core";

import styles from "./Modal.module.scss";

const cx = bindCSS(styles);

export type ModalProps = PropsOf<"article">;

export const Modal = ({ className, children, onClick, ...props }: ModalProps) => {
  return (
    <Article
      className={cx("Modal", className)}
      onClick={e => {
        e.stopPropagation();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Article>
  );
};
