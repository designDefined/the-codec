import { bindCSS } from "@flexive/core";
import styles from "../../common.module.css";
import { IconProps } from "@component/icon/props";

const cx = bindCSS(styles);

export const Chevron = ({
  className,
  size = 24,
  w,
  h,
  weight = "regular",
  reversed,
  clockwised,
  antiClockwised,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cx("Icon", { reversed, clockwised, antiClockwised }, className)}
      width={w ?? size}
      height={h ?? size}
      viewBox="0 -960 960 960"
      fill="var(--color_icon)"
    >
      {weight === "light" && <path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z" />}
      {weight === "regular" && <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />}
      {weight === "bold" && <path d="M321-48 218-151l329-329-329-329 103-103 432 432L321-48Z" />}
    </svg>
  );
};
