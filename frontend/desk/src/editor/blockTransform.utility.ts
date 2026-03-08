import { nanoid } from "nanoid";
import { Editor, Path as SlatePath, Range as SlateRange, Transforms } from "slate";
import type { BLOCK_TYPE } from "types/content";

import { isBlock, isBlockAtPath, isParagraph } from "./isNode.utility";

const insertParagraphBreak = (editor: Editor) => {
  if (!editor.selection) return;

  if (SlateRange.isExpanded(editor.selection)) {
    Transforms.delete(editor);
  }

  Transforms.splitNodes(editor, {
    match: isParagraph,
    always: true,
  });
};

const insertBlockBreak = (editor: Editor) => {
  if (!editor.selection) return;

  if (SlateRange.isExpanded(editor.selection)) {
    Transforms.delete(editor);
  }

  const nearestBlock = Editor.above(editor, {
    match: isBlock,
    mode: "lowest",
  });
  if (!nearestBlock) return;

  const [, blockPath] = nearestBlock;
  Transforms.splitNodes(editor, {
    match: (_node, path) => SlatePath.equals(path, blockPath),
    always: true,
  });
};

const setBlockType = (editor: Editor, path: SlatePath, blockType: BLOCK_TYPE) => {
  Transforms.setNodes(
    editor,
    { type: blockType },
    {
      at: path,
      match: isBlockAtPath(path),
    },
  );
};

const wrapBlock = (editor: Editor, path?: SlatePath) => {
  Transforms.wrapNodes(
    editor,
    {
      id: nanoid(),
      type: "FLOW",
      layout: { p: 4 },
      children: [],
    },
    {
      at: path,
      match: path ? isBlockAtPath(path) : isParagraph,
    },
  );
};

const unwrapBlock = (editor: Editor, path?: SlatePath) => {
  Transforms.unwrapNodes(editor, {
    at: path,
    match: isBlockAtPath(path),
  });
};

export const BlockTransform = {
  insertParagraphBreak,
  insertBlockBreak,
  setBlockType,
  wrapBlock,
  unwrapBlock,
} as const;
