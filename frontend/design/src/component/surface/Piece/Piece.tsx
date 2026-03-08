import { bindCSS, type PropsOf, Section } from "@flexive/core";

import styles from "./Piece.module.scss";

const cx = bindCSS(styles);

export type PieceProps = PropsOf<"section">;

export const Piece = ({ className, children, ...props }: PieceProps) => {
  return (
    <Section className={cx("Piece", className)} {...props}>
      {children}
    </Section>
  );
};
