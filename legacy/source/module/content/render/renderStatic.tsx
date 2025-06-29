import { renderLeaf } from "./renderLeaf";
import { renderElement } from "./renderElement";
import { Content } from "@core/entity/content/Content";

export const renderStatic = (descendant: Content, index: number): React.JSX.Element => {
  if ("text" in descendant)
    return renderLeaf({ key: index, leaf: descendant, children: descendant.text, text: descendant });
  return renderElement({ key: index, element: descendant, children: descendant.children.map(renderStatic) });
};
