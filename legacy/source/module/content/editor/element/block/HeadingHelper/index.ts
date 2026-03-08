import { HeadingElement } from "@core/entity/content/element/block/HeadingElement";
import { ContentEditor } from "@module/content/type";
import { Transforms, Node as SlateNode } from "slate";
import { BlockHelper } from "../BlockHelper";

const isHeading = (n: SlateNode): n is HeadingElement => BlockHelper.isBlock(n) && n.type === "HEADING";
const toHeading = (editor: ContentEditor) =>
  Transforms.setNodes(editor, { type: "HEADING", level: 1 }, { hanging: false });

const setLevel = (editor: ContentEditor, level: HeadingElement["level"]) =>
  Transforms.setNodes(editor, { level }, { match: isHeading });

export const HeadingHelper = {
  isHeading,
  toHeading,
  setLevel,
};
