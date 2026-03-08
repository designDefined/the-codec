import { bindCSS } from "@flexive/core";
import styles from "../../common.module.css";
import { IconProps } from "@component/icon/props";

const cx = bindCSS(styles);

export const PlusBox = ({
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
        <path d="M466-306h28v-160h160v-28H494v-160h-28v160H306v28h160v160ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z" />
      )}
      {weight === "regular" && (
        <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
      )}
      {weight === "bold" && (
        <path d="M425-272h110v-153h153v-110H535v-153H425v153H272v110h153v153ZM212-86q-53 0-89.5-36.5T86-212v-536q0-53 36.5-89.5T212-874h536q53 0 89.5 36.5T874-748v536q0 53-36.5 89.5T748-86H212Zm0-126h536v-536H212v536Zm0-536v536-536Z" />
      )}
    </svg>
  );
};
