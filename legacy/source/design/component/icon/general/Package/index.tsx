import { bindCSS } from "@flexive/core";
import styles from "../../common.module.css";
import { IconProps } from "@component/icon/props";

const cx = bindCSS(styles);

export const Package = ({
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
        <path d="M466-168v-304L200-626v286q0 8 4 15t12 12l250 145Zm28 0 250-145q8-5 12-12t4-15v-286L494-472v304Zm-44 23L202-288q-14-8-22-22t-8-30v-280q0-16 8-30t22-22l248-143q14-8 30-8t30 8l248 143q14 8 22 22t8 30v280q0 16-8 30t-22 22L510-145q-14 8-30 8t-30-8Zm175-435 118-68-247-143q-8-5-16-5t-16 5l-101 58 262 153Zm-145 84 117-68-263-152-117 68 263 152Z" />
      )}
      {weight === "regular" && (
        <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
      )}
      {weight === "bold" && (
        <path d="M422-207v-240L212-569v240l210 122Zm116 0 210-122v-240L538-447v240ZM417-65 149-219q-29-17-46-46t-17-63v-304q0-34 17-63t46-46l268-154q29-17 63-17t63 17l268 154q29 17 46 46t17 63v304q0 34-17 63t-46 46L543-65q-29 17-63 17t-63-17Zm220-573 50-29-207-119-50 29 207 119Zm-157 91 51-29-208-119-50 28 207 120Z" />
      )}
    </svg>
  );
};
