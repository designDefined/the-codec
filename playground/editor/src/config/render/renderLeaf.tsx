import { RenderLeafProps } from "slate-react";
import { Leaf } from "../leaf/Leaf";

export const renderLeaf = (props: RenderLeafProps): React.JSX.Element => {
  return <Leaf.Edit {...props} />;
};
