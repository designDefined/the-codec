import { TextReader } from "../leaf/TextReader";
import { RenderLeafPropsExtended } from "../utility/slate-type";

export const renderLeaf = ({ key, ...props }: RenderLeafPropsExtended): React.JSX.Element => (
  <TextReader {...props} key={key} />
);
