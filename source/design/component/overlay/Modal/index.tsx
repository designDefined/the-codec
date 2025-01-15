import styles from "./index.module.css";
import { Article, NativeElementOf, PropsOf } from "@flexive/core";
import { forwardRef } from "react";

type ModalProps = PropsOf<"article">;

export const Modal = forwardRef<NativeElementOf<"article">, ModalProps>(({ className, children, ...props }, ref) => (
  <Article ref={ref} className={`${styles.Modal} ${className}`} {...props}>
    {children}
  </Article>
));
