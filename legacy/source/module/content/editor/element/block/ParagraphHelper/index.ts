import { ParagraphElement } from "@core/entity/content/element/block/ParagraphElement";
import { Transforms, Node as SlateNode } from "slate";
import { BlockHelper } from "../BlockHelper";
import { ContentEditor } from "@module/content/type";

const isParagraph = (n: SlateNode): n is ParagraphElement => BlockHelper.isBlock(n) && n.type === "PARAGRAPH";
const toParagraph = (editor: ContentEditor) => Transforms.setNodes(editor, { type: "PARAGRAPH" });

export const ParagraphHelper = {
  isParagraph,
  toParagraph,
};
