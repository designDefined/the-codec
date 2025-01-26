import { bindCSS, Label, PropsOf } from "@flexive/core";
import styles from "./index.module.css";
import { useState } from "react";

const cx = bindCSS(styles);

type InputLabelProps = PropsOf<"label"> & { text?: string; colored?: boolean; level?: 1 | 2 | 3 };

export const InputLabel = ({ text, level = 1, colored, children, ...props }: InputLabelProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <Label
      className={cx("InputLabel", `level${level}`, colored ? "colored" : "grayscale", { focus })}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    >
      {text} {children}
    </Label>
  );
};
