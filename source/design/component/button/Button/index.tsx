import styles from "./index.module.css";
import { bindCSS, Button as _Button, PropsOf } from "@flexive/core";

const cx = bindCSS(styles);

type ButtonProps = PropsOf<"button">;

export const Button = ({ className, ...props }: ButtonProps) => {
  return <_Button className={cx("Button", className)} p={0} {...props} />;
};
