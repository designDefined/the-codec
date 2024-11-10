import { Descendant } from "slate";
import { renderLeaf } from "./renderLeaf";
import { renderElement } from "./renderElement";

export const renderStatic = (descendant: Descendant, index: number): React.JSX.Element => {
  if ("text" in descendant)
    return renderLeaf({
      leaf: descendant,
      attributes: { "data-slate-leaf": true },
      children: descendant.text,
      text: descendant,
      isStatic: true,
      index,
    });
  return renderElement({
    element: descendant,
    attributes: { "data-slate-node": "element", ref: null },
    children: descendant.children.map(renderStatic),
    isStatic: true,
    index,
  });
};
