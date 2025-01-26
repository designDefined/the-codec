import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import { bindCSS } from "@flexive/core";
import { InputText, InputTextProps } from "..";
import { Button } from "@component/button";

const cx = bindCSS(styles);

type InputAmountProps = Omit<InputTextProps, "value"> & {
  units: string[];
  value?: string | number;
  onChangeValue?: (value: number | string | undefined) => void;
  onBlurValue?: (value: number | string | undefined) => void;
};

export const InputAmount = ({
  units,
  value: _value,
  onChangeValue,
  onChange,
  onBlurValue,
  onBlur,
  className,
  children,
  ...props
}: InputAmountProps) => {
  const unitsRef = useRef(units);
  const [{ unit, value }, setUnitAndValue] = useState(fromUnitValueToRawValue(unitsRef.current, _value));
  const [input, setInput] = useState(value?.toString());

  useEffect(() => {
    const { unit: newUnit, value: newValue } = fromUnitValueToRawValue(unitsRef.current, _value);
    if (unit !== newUnit || value !== newValue) setUnitAndValue({ unit: newUnit, value: newValue });
    setInput(newValue?.toString() ?? "");
  }, [unit, value, _value]);

  return (
    <InputText
      className={cx("InputAmount", className)}
      value={input ?? ""}
      onChange={e => {
        onChange?.(e);
        setInput(e.target.value);
        if (onChangeValue) {
          if (!e.target.value) onChangeValue(undefined);
          else {
            const newValue = Number(e.target.value);
            if (!Number.isNaN(newValue)) onChangeValue(fromRawValueToUnitValue(unitsRef.current, unit, newValue));
          }
        }
      }}
      onBlur={e => {
        onBlur?.(e);
        if (onBlurValue) {
          if (!input) onBlurValue(undefined);
          else {
            const newValue = Number(input);
            if (!Number.isNaN(newValue)) onBlurValue(fromRawValueToUnitValue(unitsRef.current, unit, newValue));
            else setInput(value?.toString() ?? "");
          }
        }
      }}
      {...props}
    >
      {children ?? <></>}
      <Button className={cx("unit")}>{unit}</Button>
    </InputText>
  );
};

const fromUnitValueToRawValue = (units: string[], value?: string | number) => {
  if (typeof value === "number") return { value, unit: units[0] };
  if (typeof value === "undefined") return { value: undefined, unit: units[0] };

  return units.reduce(
    (acc, unit) => {
      if (value.endsWith(unit)) {
        const numberValue = Number(value.replace(unit, ""));
        if (!Number.isNaN(numberValue)) return { value: numberValue, unit };
      }
      return acc;
    },
    { value: 0, unit: units[0] },
  );
};

const fromRawValueToUnitValue = (units: string[], unit: string, value: number) =>
  units[0] === unit ? value : `${value}${unit}`;
