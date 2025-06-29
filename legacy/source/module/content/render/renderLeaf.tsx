import { LeafReader } from "../reader";
import { RenderLeafPropsExtended } from "../type";

export const renderLeaf = ({ key, ...props }: RenderLeafPropsExtended): React.JSX.Element => (
  <LeafReader {...props} key={key} />
);
