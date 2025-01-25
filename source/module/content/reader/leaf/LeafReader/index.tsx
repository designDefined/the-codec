import styles from "./index.module.css";
import { Leaf } from "@core/entity/content/leaf/Leaf";
import { RenderLeafPropsExtended } from "../../../type/slate";
import { PropsWithChildren } from "react";
import { bindCSS } from "@flexive/core";

const cx = bindCSS(styles);

export const LeafReader = (props: RenderLeafPropsExtended) => {
  return (
    <span {...props.attributes}>
      <Boldable value={props.leaf.bold}>
        <Italicable value={props.leaf.italic}>
          <Emphasizable>{props.children}</Emphasizable>
        </Italicable>
      </Boldable>
    </span>
  );
};

const Boldable = ({ value, children }: PropsWithChildren & { value?: boolean }) => {
  if (!value) return children;
  if (value) return <strong>{children}</strong>;
};

const Italicable = ({ value, children }: PropsWithChildren & { value?: boolean }) => {
  if (!value) return children;
  if (value) return <i>{children}</i>;
};

const Emphasizable = ({ value, children }: PropsWithChildren & { value?: Leaf["emphasis"] }) => {
  if (!value) return children;
  if (value) return <em className={cx(value)}>{children}</em>;
};
