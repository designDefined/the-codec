import styles from "./index.module.css";
import { bindCSS, Div, filterProps, Input, PropsOf } from "@flexive/core";
import { useChildrenArray } from "@flexive/operator";
import { useMemo, useState } from "react";

const cx = bindCSS(styles);

export type InputTextProps = PropsOf<"input">;

export const InputText = ({ className, children, onFocus, onBlur, size, ..._props }: InputTextProps) => {
  const [headChild, ...restChildren] = useChildrenArray(children);
  const [focus, setFocus] = useState(false);
  const {
    flexive: { p, ...fProps },
    rest: props,
  } = useMemo(() => filterProps(_props), [_props]);

  return (
    <Div className={cx("InputText", { focus }, className)} row px={p ?? 6} py={p ?? 3} rad={4} {...fProps}>
      {headChild}
      <Input
        className={cx("input")}
        type="text"
        onFocus={e => {
          setFocus(true);
          onFocus?.(e);
        }}
        onBlur={e => {
          setFocus(false);
          onBlur?.(e);
        }}
        size={size ?? 1}
        f
        {...props}
      />
      {restChildren}
    </Div>
  );
};
