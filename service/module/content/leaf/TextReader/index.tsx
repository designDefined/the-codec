import { RenderLeafPropsExtended } from "../../utility/slate-type";

export const TextReader = (props: RenderLeafPropsExtended) => {
  if (props.leaf.bold) return <strong {...props.attributes}>{props.children}</strong>;
  if (props.leaf.italic) return <em {...props.attributes}>{props.children}</em>;
  return <span {...props.attributes}>{props.children}</span>;
};
