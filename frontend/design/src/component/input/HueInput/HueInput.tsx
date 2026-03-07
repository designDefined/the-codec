import { bindCSS, Div, type PropsOf } from "@flexive/core";
import { type CSSProperties, useCallback, useRef } from "react";

import styles from "./HueInput.module.scss";

const cx = bindCSS(styles);

type HueInputProps = Omit<PropsOf<"div">, "value" | "onChange"> & {
  value?: number;
  onChange?: (hue: number) => void;
};

export const HueInput = ({ value, onChange }: HueInputProps) => {
  const isClicked = useRef(false);
  const onPickHue = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const ratio = x / rect.width;
      onChange?.(Math.floor(ratio * 360));
    },
    [onChange],
  );

  return (
    <Div className={cx("HueInput")}>
      <Div className={cx("picker")} onPointerDown={onPickHue} />
      <Div className={cx("preview")} style={{ "--hue": value ?? 0 } as CSSProperties} f py={6} alignC alignM>
        {value ? `${value.toString()}°` : "0°"}
      </Div>
    </Div>
  );
};
