import { Modal, Overlay } from "@component/overlay";
import styles from "./index.module.css";
import { Button, Selectable } from "@component/button";
import { bindCSS, Div, Section } from "@flexive/core";
import { useOverlay } from "@flexive/operator";
import { CSSProperties, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { InputLabel } from "@component/input/label";
import { InputAmount } from "@component/input/text";

const cx = bindCSS(styles);

type InputColorProps = {
  value?: string;
  onChange: (value?: string) => void;
};

export const InputColor = ({ value, onChange }: InputColorProps) => {
  const { open, overlay, isOpen } = useOverlay<DOMRect>(createPortal);

  const primaryStyle = useMemo(() => {
    return value ? ({ "--primary": value } as CSSProperties) : {};
  }, [value]);
  const { label, color, opacity } = useMemo(() => {
    if (!value) return { label: "Color", color: undefined, opacity: 100 };
    let label: string = "Color",
      feel: string = "var(--g5)",
      hue: string;

    const [front, rear] = value.split(" / ");
    if (front.startsWith("oklch(var(--g")) {
      const gray = front.slice(6, 15);
      console.log(gray);
      label = `Grayscale`;
      feel = gray;
      hue = "0";
    } else {
      hue = "var(--hue)";
      if (front.startsWith("oklch(var(--vivid)")) {
        label = "Vivid";
        feel = "var(--vivid)";
      }
      if (front.startsWith("oklch(var(--deep)")) {
        label = "Deep";
        feel = "var(--deep)";
      }
      if (front.startsWith("oklch(var(--tarnish)")) {
        label = "Tarnish";
        feel = "var(--tarnish)";
      }
      if (front.startsWith("oklch(var(--pastel)")) {
        label = "Pastel";
        feel = "var(--pastel)";
      }
    }
    const opacity = Number(rear.slice(0, -2));
    return { label, color: `${feel} ${hue}`, opacity: Number.isNaN(opacity) ? 100 : opacity };
  }, [value]);

  const onChangeColor = useCallback(
    (input: { color?: string; opacity?: number }) => {
      if (!input.color && !input.opacity) onChange(undefined);
      else onChange(`oklch(${input.color ?? color} / ${input.opacity ?? opacity}%)`);
    },
    [onChange, color, opacity],
  );

  return (
    <Button
      className={cx("InputColor", { open: isOpen })}
      onClick={e => open(e.currentTarget.getBoundingClientRect())}
      px={8}
      rad={4}
      style={primaryStyle}
    >
      {label}
      {overlay(({ x, y }) => (
        <Overlay>
          <Modal className={cx("InputColorModal")} absolute left={x - 20} top={y - 128} row sizeM={320} sizeC={120}>
            <Section basis={120} alignC alignM>
              <Div
                className={cx("preview")}
                sizeC={80}
                sizeM={80}
                rad={12}
                style={{ background: value ?? "transparent" }}
              />
            </Section>
            <Section f py={16} pr={12} alignM="between">
              <Div row g={4}>
                <Selectable
                  value={color === "var(--vivid) var(--hue)"}
                  onChange={v => onChangeColor(v ? { color: "var(--vivid) var(--hue)" } : {})}
                >
                  vivid
                </Selectable>
                <Selectable
                  value={color === "var(--deep) var(--hue)"}
                  onChange={v => onChangeColor(v ? { color: "var(--deep) var(--hue)" } : {})}
                >
                  deep
                </Selectable>
                <Selectable
                  value={color === "var(--tarnish) var(--hue)"}
                  onChange={v => onChangeColor(v ? { color: "var(--tarnish) var(--hue)" } : {})}
                >
                  tarnish
                </Selectable>
                <Selectable
                  value={color === "var(--pastel) var(--hue)"}
                  onChange={v => onChangeColor(v ? { color: "var(--pastel) var(--hue)" } : {})}
                >
                  pastel
                </Selectable>
              </Div>
              <Div row g={4}>
                <Selectable
                  value={color === "var(--g1) 0"}
                  onChange={v => onChangeColor(v ? { color: "var(--g1) 0" } : {})}
                >
                  g1
                </Selectable>
                <Selectable
                  value={color === "var(--g2) 0"}
                  onChange={v => onChangeColor(v ? { color: "var(--g2) 0" } : {})}
                >
                  g2
                </Selectable>
                <Selectable
                  value={color === "var(--g3) 0"}
                  onChange={v => onChangeColor(v ? { color: "var(--g3) 0" } : {})}
                >
                  g3
                </Selectable>
                <Selectable
                  value={color === "var(--g4) 0"}
                  onChange={v => onChangeColor(v ? { color: "var(--g4) 0" } : {})}
                >
                  g4
                </Selectable>
                <Selectable
                  value={color === "var(--g5) 0"}
                  onChange={v => onChangeColor(v ? { color: "var(--g5) 0" } : {})}
                >
                  g5
                </Selectable>
              </Div>
              <InputLabel level={2} text="opacity:" row g={4} alignC>
                <InputAmount
                  className={cx("opacityInput")}
                  units={["%"]}
                  size={3}
                  py={2}
                  value={opacity}
                  onChangeValue={v => typeof v === "number" && onChangeColor({ opacity: v })}
                />
              </InputLabel>
            </Section>
          </Modal>
        </Overlay>
      ))}
    </Button>
  );
};
