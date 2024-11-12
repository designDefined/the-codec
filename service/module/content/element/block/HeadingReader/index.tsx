import { HeadingElement } from "core/entity/content/element/HeadingElement";
import { RenderElementPropsExtended } from "../../../utility/slate-type";

export const HeadingReader = (props: RenderElementPropsExtended) => {
  const Tag = `h${(props.element as HeadingElement).level}` as `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;
  return <Tag {...props.attributes}>{props.children}</Tag>;
};
