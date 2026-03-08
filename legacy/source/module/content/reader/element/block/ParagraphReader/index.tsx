import { ParagraphElement } from "@core/entity/content/element/block/ParagraphElement";
import { RenderElementPropsExtended } from "@module/content/type";

export const ParagraphReader = (props: RenderElementPropsExtended<ParagraphElement>) => (
  <p {...props.attributes}>{props.children}</p>
);
