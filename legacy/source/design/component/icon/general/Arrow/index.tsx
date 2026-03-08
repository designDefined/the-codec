import { bindCSS } from "@flexive/core";
import styles from "../../common.module.css";
import { IconProps } from "@component/icon/props";

const cx = bindCSS(styles);

export const Arrow = ({
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
      {weight === "light" && <path d="M694-466H212v-28h482L460-728l20-20 268 268-268 268-20-20 234-234Z" />}
      {weight === "regular" && <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />}
      {weight === "bold" && <path d="M592-417H126v-126h466L390-745l90-89 354 354-354 354-90-89 202-202Z" />}
    </svg>
  );
};
