import { bindCSS, Div } from "@flexive/core";
import styles from "./index.module.css";
import { Selectable } from "@component/button";
import { WEIGHT } from "@core/constant/style/WEIGHT";

const cx = bindCSS(styles);

type InputWeightProps = {
  value?: WEIGHT;
  onChange: (value?: WEIGHT) => void;
};

export const InputWeight = ({ value, onChange }: InputWeightProps) => {
  const set = (weight: WEIGHT) => (value: boolean) => onChange(value ? weight : undefined);

  return (
    <Div className={cx("InputWeight")} row g={4}>
      <Selectable className={cx("thin")} colored bordered value={value === "THIN"} onChange={set("THIN")}>
        T
      </Selectable>
      <Selectable className={cx("light")} colored bordered value={value === "LIGHT"} onChange={set("LIGHT")}>
        L
      </Selectable>
      <Selectable className={cx("medium")} colored bordered value={value === "MEDIUM"} onChange={set("MEDIUM")}>
        M
      </Selectable>
      <Selectable className={cx("bold")} colored bordered value={value === "BOLD"} onChange={set("BOLD")}>
        B
      </Selectable>
      <Selectable className={cx("heavy")} colored bordered value={value === "HEAVY"} onChange={set("HEAVY")}>
        H
      </Selectable>
    </Div>
  );
};
