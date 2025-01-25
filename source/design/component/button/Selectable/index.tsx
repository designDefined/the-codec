import { Button } from "../Button";
import styles from "./index.module.css";
import { bindCSS, Div, Li, PropsOf } from "@flexive/core";

const cx = bindCSS(styles);

export type CommonSelectableProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  colored?: boolean;
  bordered?: boolean;
  inversed?: boolean;
};

export type SelectableProps =
  | (({ as?: "button" } & Omit<PropsOf<"button">, "value" | "onChange">) & CommonSelectableProps)
  | (({ as: "li" } & Omit<PropsOf<"li">, "value" | "onChange">) & CommonSelectableProps)
  | (({ as: "div" } & Omit<PropsOf<"div">, "value" | "onChange">) & CommonSelectableProps);

export const Selectable = ({
  as,
  className,
  value,
  onClick,
  onChange,
  colored,
  bordered,
  inversed,
  ...props
}: SelectableProps) => {
  if (!as || as === "button")
    return (
      <Button
        className={cx("Selectable", { selected: value, colored, bordered, inversed }, className)}
        onClick={e => {
          onChange?.(!value);
          onClick?.(e);
        }}
        {...(props as PropsOf<"button">)}
      />
    );
  if (as === "li")
    return (
      <Li
        className={cx("Selectable", { selected: value, colored, bordered, inversed }, className)}
        onClick={e => {
          onChange?.(!value);
          onClick?.(e);
        }}
        {...(props as PropsOf<"li">)}
      />
    );
  if (as === "div")
    return (
      <Div
        className={cx("Selectable", { selected: value, colored, bordered, inversed }, className)}
        onClick={e => {
          onChange?.(!value);
          onClick?.(e);
        }}
        {...(props as PropsOf<"div">)}
      />
    );
};
