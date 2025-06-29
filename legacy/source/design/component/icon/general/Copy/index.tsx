import { bindCSS } from "@flexive/core";
import styles from "../../common.module.css";
import { IconProps } from "@component/icon/props";

const cx = bindCSS(styles);

export const Copy = ({
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
        <path d="M366-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h296q26 0 43 17t17 43v416q0 26-17 43t-43 17H366Zm0-28h296q12 0 22-10t10-22v-416q0-12-10-22t-22-10H366q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM258-184q-26 0-43-17t-17-43v-444h28v444q0 12 10 22t22 10h324v28H258Zm76-136v-480 480Z" />
      )}
      {weight === "regular" && (
        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
      )}
      {weight === "bold" && (
        <path d="M395-229q-53 0-89.5-36.5T269-355v-456q0-53 36.5-89.5T395-937h336q53 0 89.5 36.5T857-811v456q0 53-36.5 89.5T731-229H395Zm0-126h336v-456H395v456ZM189-23q-53 0-89.5-36.5T63-149v-582h126v582h462v126H189Zm206-332v-456 456Z" />
      )}
    </svg>
  );
};
