import { BLOCK_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { BlockElement } from "@core/entity/content/element/Element";
import { ContentEditor } from "@module/content/type";
import { Element as SlateElement, Node as SlateNode } from "slate";

const isBlock = (n: SlateNode): n is BlockElement => SlateElement.isElement(n) && BLOCK_TYPE.safeParse(n.type).success;

const nameOfType = (type: BLOCK_TYPE) => {
  switch (type) {
    case "PARAGRAPH":
      return "Paragraph";
    case "HEADING":
      return "Heading";
    case "CODE_BLOCK":
      return "Code Block";
    default:
      return "Unknown Block Type";
  }
};

const normalizeBlock = (editor: ContentEditor) => {
  editor.unwrapNodes({ match: n => isBlock(n) && n.children.every(isBlock) });
};

export const BlockHelper = {
  isBlock,
  nameOfType,
  normalizeBlock,
};
