import { bindCSS } from "@flexive/core";
import styles from "../../common.module.css";
import { IconProps } from "@component/icon/props";

const cx = bindCSS(styles);

export const X = ({
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
      {weight === "light" && (
        <path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" />
      )}
      {weight === "regular" && (
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      )}
      {weight === "bold" && (
        <path d="m256-168-88-88 224-224-224-224 88-88 224 224 224-224 88 88-224 224 224 224-88 88-224-224-224 224Z" />
      )}
    </svg>
  );
};
