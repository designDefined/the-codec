import { Element } from "../element/Element";
import { RenderElementPropsExtended } from "../type";

export const renderElement = ({ key, ...props }: RenderElementPropsExtended): React.JSX.Element => (
  <Element {...props} key={key} />
);
