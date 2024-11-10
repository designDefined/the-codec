import { RenderLeafPropsExtended } from "../../utility/slate-type";

export const TextReader = (props: RenderLeafPropsExtended) => (
  <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? 600 : 200 }}>
    {props.children}
  </span>
);
