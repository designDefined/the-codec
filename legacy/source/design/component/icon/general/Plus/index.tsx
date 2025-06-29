import { bindCSS } from "@flexive/core";
import styles from "../../common.module.css";
import { IconProps } from "@component/icon/props";

const cx = bindCSS(styles);

export const Plus = ({
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
      {weight === "light" && <path d="M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z" />}
      {weight === "regular" && <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />}
      {weight === "bold" && <path d="M417-417H166v-126h251v-251h126v251h251v126H543v251H417v-251Z" />}
    </svg>
  );
};
