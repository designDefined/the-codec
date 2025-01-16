import { bindCSS, PropsOf } from "@flexive/core";
import styles from "./index.module.css";
import { Selectable } from "@component/button";
import { useMemo } from "react";
import { useChildrenArray, useEffectOnChange, useOverlay } from "@flexive/operator";
import { Modal, Overlay } from "@component/overlay";
import { createPortal } from "react-dom";

const cx = bindCSS(styles);

type SelectProps = PropsOf<"div"> & {
  value?: string | number | null;
  placeholder?: string;
  onChange?: (value: string | number | null | undefined) => void;
  hideValue?: boolean;
};

export const Select = ({ className, children, value, placeholder, onChange, hideValue, ...props }: SelectProps) => {
  const { overlay, open, close, isOpen } = useOverlay<DOMRect>(createPortal);
  const [modalChild, headChild, ...restChildren] = useChildrenArray(children);

  const displayText = useMemo(() => {
    if (isNullish(value)) return placeholder;
    return value;
  }, [value, placeholder]);

  useEffectOnChange(() => {
    onChange?.(value);
    close();
  }, [value]);

  return (
    <Selectable
      className={cx("Select", className)}
      as="div"
      value={isOpen}
      onClick={e => open(e.currentTarget.getBoundingClientRect())}
      {...props}
    >
      {headChild}
      {!hideValue && displayText}
      {restChildren}
      {overlay(({ left, bottom, width }) => (
        <Overlay>
          <Modal fixed left={left} top={bottom + 4} minC={width}>
            {modalChild}
          </Modal>
        </Overlay>
      ))}
    </Selectable>
  );
};

const isNullish = (value: unknown): value is null | undefined => {
  if (value === undefined) return true;
  if (value === null) return true;
  return false;
};
