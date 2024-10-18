import { RenderLeafProps } from "slate-react";

export function Leaf(props: RenderLeafProps) {
  return (
    <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}>
      {props.children}
    </span>
  );
}
