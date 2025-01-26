import styles from "./index.module.css";
import { bindCSS, Button as _Button, PropsOf } from "@flexive/core";

const cx = bindCSS(styles);

type ButtonProps = PropsOf<"button"> & { dim?: boolean; shaded?: boolean };

export const Button = ({ className, dim, shaded, ...props }: ButtonProps) => {
  return <_Button className={cx("Button", { dim, shaded }, className)} p={0} {...props} />;
};
