import { Descendant, Text } from "slate";
import { Leaf } from "../leaf/Leaf";
import { DefaultElement } from "../element/DefaultElement";
import { CodeElement } from "../element/CodeElement";

export const renderStatic = (descendant: Descendant, index: number): React.JSX.Element => {
  if (Text.isText(descendant)) return <Leaf.Read {...descendant} key={index} />;
  switch (descendant.type) {
    case "code":
      return <CodeElement.Read {...descendant} key={index} />;
    default:
      return <DefaultElement.Read {...descendant} key={index} />;
  }
};
