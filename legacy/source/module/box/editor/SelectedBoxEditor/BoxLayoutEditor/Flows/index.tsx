import { bindCSS, Div } from "@flexive/core";
import styles from "./index.module.css";
import { Arrow } from "@component/icon";
import { Selectable } from "@component/button";

const cx = bindCSS(styles);

type FlowValues = { row?: boolean; col?: boolean; rowReverse?: boolean; colReverse?: boolean };

type FlowsProps = {
  value: FlowValues;
  onChange: (value: FlowValues) => void;
};

export const Flows = ({ value, onChange }: FlowsProps) => {
  return (
    <Div className={cx("Flows")} row g={4}>
      <Selectable colored bordered value={value.col} onClick={() => onChange({})}>
        <Arrow clockwised />
      </Selectable>
      <Selectable colored bordered value={value.row} onClick={() => onChange({ row: true })}>
        <Arrow />
      </Selectable>
      <Selectable colored bordered value={value.colReverse} onClick={() => onChange({ colReverse: true })}>
        <Arrow antiClockwised />
      </Selectable>
      <Selectable colored bordered value={value.rowReverse} onClick={() => onChange({ rowReverse: true })}>
        <Arrow reversed />
      </Selectable>
    </Div>
  );
};
