import { ElementReader } from "../reader";
import { RenderElementPropsExtended } from "../type";

export const renderElement = ({ key, ...props }: RenderElementPropsExtended) => <ElementReader {...props} key={key} />;
