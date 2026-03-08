import { bindCSS } from "@flexive/core";
import type { JSX, PropsWithChildren } from "react";
import type { RenderLeafProps } from "slate-react";

import styles from "./LeafRenderer.module.scss";

const cx = bindCSS(styles);

type LeafRendererProps = RenderLeafProps;
export const LeafRenderer = ({ attributes, children, leaf }: LeafRendererProps): JSX.Element => {
  if (leaf.bold) {
    return <strong {...attributes}>{children}</strong>;
  }

  return (
    <span className={cx("LeafRenderer")} {...attributes}>
      <Boldable value={leaf.bold}>{children}</Boldable>
    </span>
  );
};

const Boldable = ({ value, children }: PropsWithChildren & { value?: boolean }) => {
  if (!value) return children;
  return <strong>{children}</strong>;
};
