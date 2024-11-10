import { RenderLeafProps } from "slate-react";

export const Leaf = (props: RenderLeafProps) => (
  <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}>
    {props.children}
  </span>
);
