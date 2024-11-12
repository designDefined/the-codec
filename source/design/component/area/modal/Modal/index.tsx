import styles from "./index.module.css";
import { Article, FlexiveArticleProps } from "@flexive/core";
import { forwardRef } from "react";

type ModalProps = FlexiveArticleProps;

export const Modal = forwardRef(({ className, children, ...props }: ModalProps) => {
  return (
    <Article className={`${styles.Modal} ${className}`} {...props}>
      {children}
    </Article>
  );
});
