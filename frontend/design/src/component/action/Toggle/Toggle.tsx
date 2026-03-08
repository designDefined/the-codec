import { bindCSS, Button, type PropsOf } from "@flexive/core";

import styles from "./Toggle.module.scss";

const cx = bindCSS(styles);

type ToggleProps = Omit<PropsOf<"button">, "value"> & {
  value?: boolean;
  onChange?: (value: boolean) => void;
  bordered?: boolean;
};

export const Toggle = ({ children, className, value, onChange, bordered, ...props }: ToggleProps) => {
  return (
    <Button
      className={cx("Toggle", { bordered, on: value }, className)}
      onClick={() => onChange?.(!value)}
      px={8}
      py={4}
      {...props}
    >
      {children}
    </Button>
  );
};
