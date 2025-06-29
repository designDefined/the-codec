import { Leaf } from "../leaf/Leaf";
import { RenderLeafPropsExtended } from "../type";

export const renderLeaf = ({ key, ...props }: RenderLeafPropsExtended): React.JSX.Element => (
  <Leaf {...props} key={key} />
);
