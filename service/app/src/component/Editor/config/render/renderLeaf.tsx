import { Leaf } from "../leaf/Leaf";
import { RenderLeafPropsExtended } from "./type";

export const renderLeaf = ({ index, ...props }: RenderLeafPropsExtended): React.JSX.Element => (
  <Leaf {...props} key={index} />
);
