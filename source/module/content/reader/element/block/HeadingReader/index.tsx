import { HeadingElement } from "@core/entity/content/element/block/HeadingElement";
import { RenderElementPropsExtended } from "@module/content/type";

export const HeadingReader = (props: RenderElementPropsExtended<HeadingElement>) => {
  const Tag = `h${props.element.level}` as `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;
  return <Tag {...props.attributes}>{props.children}</Tag>;
};
