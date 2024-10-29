import { RenderElementPropsExtended } from "../type";

export const ParagraphElement = (props: RenderElementPropsExtended) => <p {...props.attributes}>{props.children}</p>;
