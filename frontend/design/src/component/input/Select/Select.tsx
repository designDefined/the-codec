import { bindCSS, Button, Div, type PropsOf } from "@flexive/core";
import { useOverlay } from "@flexive/operator";
import { NavArrowDown } from "iconoir-react";
import { useCallback, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

import { Modal, Overlay } from "../../surface";
import styles from "./Select.module.scss";

const cx = bindCSS(styles);

type SelectProps = Omit<PropsOf<"button">, "value"> & {
  value?: string;
  placeholder?: string;
  preventCloseOnChange?: boolean;
};

export const Select = ({ children, className, value, placeholder, preventCloseOnChange, ...props }: SelectProps) => {
  const { overlay, open, close, isOpen, isClosing } = useOverlay<{
    width: number;
    height: number;
    x: number;
    y: number;
  }>(createPortal);
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      open(e.currentTarget.getBoundingClientRect());
    },
    [open],
  );

  useLayoutEffect(() => {
    if (!preventCloseOnChange) {
      close();
    }
  }, [value, preventCloseOnChange, close]);

  return (
    <Button
      className={cx("Select", { active: isOpen && !isClosing }, className)}
      onClick={handleClick}
      row
      px={12}
      py={4}
      g={3}
      alignC
      {...props}
    >
      <NavArrowDown width={18} height={18} strokeWidth={2} color="var(--content)" />
      <Div f>{value ?? placeholder}</Div>
      {overlay(({ width, height, x, y }) => (
        <Overlay transparent f>
          <Modal className={cx("SelectModal")} absolute left={x} top={y + height + 5} minC={width} p={12} rad={16}>
            {children}
          </Modal>
        </Overlay>
      ))}
    </Button>
  );
};
