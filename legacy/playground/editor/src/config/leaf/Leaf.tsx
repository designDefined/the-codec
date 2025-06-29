import { RenderLeafPropsExtended } from "../type";

export const Leaf = (props: RenderLeafPropsExtended) => (
  <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}>
    {props.children}
  </span>
);
