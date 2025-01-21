import { useOverlayControl } from "@flexive/operator";
import styles from "./index.module.css";
import { bindCSS, Div, PropsOf } from "@flexive/core";

const cx = bindCSS(styles);

type FixedOverlayProps = PropsOf<"div">;

export const Overlay = ({ className, onPointerDown, ...props }: FixedOverlayProps) => {
  const { closeAfter, isClosing: closing } = useOverlayControl();
  return (
    <Div
      className={cx("Overlay", { closing }, className)}
      fixed
      top={0}
      left={0}
      sizeM="100vh"
      sizeC="100vw"
      {...props}
      onPointerDown={e => {
        e.stopPropagation();
        onPointerDown?.(e);
        closeAfter(100);
      }}
    />
  );
};
