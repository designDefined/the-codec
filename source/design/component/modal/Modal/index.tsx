import styles from "./index.module.css";
import { Article, PropsOf } from "@flexive/core";
import { forwardRef } from "react";

type ModalProps = PropsOf<"article">;

export const Modal = forwardRef(({ className, children, ...props }: ModalProps) => (
  <Article className={`${styles.Modal} ${className}`} {...props}>
    {children}
  </Article>
));
