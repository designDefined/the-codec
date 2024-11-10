import { InboxContent } from "core/entity/content/InboxContent";
import { renderLeaf } from "./renderLeaf";
import { renderElement } from "./renderElement";

export const renderStatic = (descendant: InboxContent, index: number): React.JSX.Element => {
  if ("text" in descendant)
    return renderLeaf({ key: index, leaf: descendant, children: descendant.text, text: descendant });
  return renderElement({ key: index, element: descendant, children: descendant.children.map(renderStatic) });
};
