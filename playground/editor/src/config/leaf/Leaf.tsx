import { Text } from "slate";
import { RenderLeafProps } from "slate-react";

const Edit = (props: RenderLeafProps) => (
  <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}>
    {props.children}
  </span>
);

const Read = (leaf: Text) => <span style={{ fontWeight: leaf.bold ? "bold" : "normal" }}>{leaf.text}</span>;

export const Leaf = { Edit, Read };
