import { Descendant } from "slate";
import { renderLeaf } from "./renderLeaf";
import { renderElement } from "./renderElement";
import { isLeaf } from "../utility/isLeaf";

export const renderStatic = (descendant: Descendant, index: number): React.JSX.Element => {
  if (isLeaf(descendant))
    return renderLeaf({
      leaf: descendant,
      children: descendant.text,
      text: descendant,
      key: index,
    });
  return renderElement({
    element: descendant,
    children: descendant.children.map(renderStatic),
    key: index,
  });
};
