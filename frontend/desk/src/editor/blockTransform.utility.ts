import type { Block, HeadingBlock } from "shared/types/src/content/block.types";
import type { Paragraph } from "shared/types/src/content/paragraph";
import { Editor, Element as SlateElement, type Node, Path, Range, Transforms } from "slate";

type TextBlock = Paragraph | HeadingBlock;

const isTextBlock = (node: Node): node is TextBlock => {
  return SlateElement.isElement(node) && (node.type === "PARAGRAPH" || node.type === "HEADING");
};

const isBlock = (node: Node): node is Block => {
  return SlateElement.isElement(node) && node.type !== "PARAGRAPH";
};

const insertParagraphBreak = (editor: Editor) => {
  if (!editor.selection) return;

  if (Range.isExpanded(editor.selection)) {
    Transforms.delete(editor);
  }

  Transforms.splitNodes(editor, {
    at: editor.selection,
    match: isTextBlock,
    always: true,
  });

  const currentTextBlock = Editor.above(editor, {
    at: editor.selection,
    match: isTextBlock,
    mode: "lowest",
  });
  if (!currentTextBlock) return;

  const [node, path] = currentTextBlock;
  if (node.type === "PARAGRAPH") return;

  Transforms.setNodes(editor, { type: "PARAGRAPH" }, { at: path });
  Transforms.unsetNodes(editor, "level", { at: path });
};

const splitNearestBlock = (editor: Editor) => {
  if (!editor.selection) return;

  const nearestBlock = Editor.above(editor, {
    at: editor.selection,
    match: isBlock,
    mode: "lowest",
  });
  if (!nearestBlock) return;

  const [, blockPath] = nearestBlock;
  Transforms.splitNodes(editor, {
    at: editor.selection,
    match: (_node, path) => Path.equals(path, blockPath),
    always: true,
  });
};

export const BlockTransform = {
  insertParagraphBreak,
  splitNearestBlock,
} as const;
