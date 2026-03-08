import styles from "./index.module.css";
import { Selectable } from "@component/button";
import { AlignStart, AlignCenter, AlignEnd, AlignBetween, AlignEvenly, AlignAround } from "@component/icon";
import { BoxLayout } from "@core/entity/box/BoxLayout";
import { bindCSS, Div } from "@flexive/core";

const cx = bindCSS(styles);

type MainAlignsProps = {
  value: BoxLayout["alignM"];
  onChange: (value: BoxLayout["alignM"]) => void;
  horizontal?: boolean;
};

export const MainAligns = ({ value, onChange, horizontal }: MainAlignsProps) => (
  <Div className={cx("Aligns", { horizontal })} row g={4}>
    <Selectable colored bordered value={!value || value === "start"} onClick={() => onChange(undefined)}>
      <AlignStart />
    </Selectable>
    <Selectable colored bordered value={value === "center"} onClick={() => onChange("center")}>
      <AlignCenter />
    </Selectable>
    <Selectable colored bordered value={value === "end"} onClick={() => onChange("end")}>
      <AlignEnd />
    </Selectable>
    <Selectable colored bordered value={value === "between"} onClick={() => onChange("between")}>
      <AlignBetween />
    </Selectable>
    <Selectable colored bordered value={value === "evenly"} onClick={() => onChange("evenly")}>
      <AlignEvenly />
    </Selectable>
    <Selectable colored bordered value={value === "around"} onClick={() => onChange("around")}>
      <AlignAround />
    </Selectable>
  </Div>
);

type CrossAlignsProps = {
  value: BoxLayout["alignC"];
  onChange: (value: BoxLayout["alignC"]) => void;
  horizontal?: boolean;
};

export const CrossAligns = ({ value, onChange, horizontal }: CrossAlignsProps) => (
  <Div className={cx("Aligns", { horizontal })} row g={4}>
    <Selectable colored bordered value={!value || value === "stretch"} onClick={() => onChange(undefined)}>
      <AlignAround />
    </Selectable>
    <Selectable colored bordered value={value === "start"} onClick={() => onChange("start")}>
      <AlignStart />
    </Selectable>
    <Selectable colored bordered value={value === "center"} onClick={() => onChange("center")}>
      <AlignCenter />
    </Selectable>
    <Selectable colored bordered value={value === "end"} onClick={() => onChange("end")}>
      <AlignEnd />
    </Selectable>
  </Div>
);
