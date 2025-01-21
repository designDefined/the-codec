import { Button } from "@component/button";
import styles from "./index.module.css";
import { InputAmount } from "@component/input/text";
import { bindCSS, Div } from "@flexive/core";
import { useEffect, useRef, useState } from "react";

const cx = bindCSS(styles);

type InputHueProps = {
  value?: number;
  onChange: (value?: number) => void;
};

export const InputHue = ({ value, onChange }: InputHueProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (!barRef.current) return setLeft(50);
    const width = barRef.current.clientWidth;
    return setLeft((width / 360) * (value ?? 0));
  }, [value]);

  if (value === undefined)
    return (
      <Div className={cx("InputHue")} f row sizeC={24}>
        <Button className={cx("defaultButton")} onClick={() => onChange(0)} row alignC px={8} rad={4}>
          Default
        </Button>
      </Div>
    );
  return (
    <Div className={cx("InputHue")} f row sizeC={24} g={4}>
      <InputAmount
        size={3}
        units={["°"]}
        value={value}
        onChangeValue={v => (typeof v === "string" ? onChange(Number(v)) : onChange(v))}
      />
      <Div
        ref={barRef}
        className={cx("bar")}
        f
        onPointerDown={e => {
          if (!barRef.current) return;
          const ratio = e.nativeEvent.offsetX / barRef.current.offsetWidth;
          onChange(Math.floor(ratio * 360));
        }}
        onPointerUp={e => {
          if (!barRef.current) return;
          const ratio = e.nativeEvent.offsetX / barRef.current.offsetWidth;
          onChange(Math.floor(ratio * 360));
        }}
        rad={4}
      >
        <Button className={cx("handle")} absolute top="-5%" left={left} sizeC={10} sizeM="110%" rad={4}></Button>
      </Div>
    </Div>
  );
};
