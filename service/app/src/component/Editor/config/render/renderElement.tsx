import { Element } from "../element/Element";
import { RenderElementPropsExtended } from "./type";

export const renderElement = ({ index, ...props }: RenderElementPropsExtended): React.JSX.Element => (
  <Element {...props} key={index} />
);
