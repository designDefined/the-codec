import { RenderElementPropsExtended } from "../../../utility/slate-type";

export const ParagraphReader = (props: RenderElementPropsExtended) => <p {...props.attributes}>{props.children}</p>;
