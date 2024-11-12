import { RenderElementPropsExtended } from "../utility/slate-type";
import { ElementReader } from "../element/ElementReader";

export const renderElement = ({ key, ...props }: RenderElementPropsExtended) => <ElementReader {...props} key={key} />;
