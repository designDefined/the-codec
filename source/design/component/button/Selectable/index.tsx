import { Button } from "../Button";
import styles from "./index.module.css";
import { bindCSS, Div, PropsOf } from "@flexive/core";

const cx = bindCSS(styles);

type CommonSelectableProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  colored?: boolean;
  bordered?: boolean;
  inversed?: boolean;
};

type SelectableProps =
  | (({ as?: "button" } & Omit<PropsOf<"button">, "value" | "onChange">) & CommonSelectableProps)
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
