import {
  Editor,
  Node as SlateNode,
  type NodeEntry,
  Path as SlatePath,
  Point as SlatePoint,
  Range as SlateRange,
} from "slate";
import type { Block } from "types/content";

import { isBlock } from "./isNode.utility";

const getPathsAboveSlateSelection = (editor: Editor): SlatePath[] | null => {
  const selection = editor.selection;
  if (!selection) return null;

  const normalizedSelection = SlateRange.isRange(selection) ? Editor.unhangRange(editor, selection) : selection;

  const entries = Editor.nodes(editor, {
    at: normalizedSelection,
    match: isBlock,
    mode: "lowest",
  });
  const paths = Array.from(entries).map(([, path]) => path);
  if (paths.length === 0) return null;
  return paths;
};

const getPathsAboveBlockSelection = (blockSelection: SlatePath[]): SlatePath[] | null => {
  return blockSelection.map(path => {
    if (path.length > 1) {
      return path.slice(0, -1);
    }
    return path;
  });
};

const getPathsBelowBlockSelection = (editor: Editor, blockSelection: SlatePath[]): SlatePath[] | null => {
  const newPaths: SlatePath[] = [];
  for (const path of blockSelection) {
    const childPath = [...path, 0];
    const child = SlateNode.getIf(editor, childPath);
    if (!child || !isBlock(child)) {
      return null;
    }
    newPaths.push(childPath);
  }
  return newPaths;
};

const getTextSelectionFromBlockSelection = (editor: Editor, blockSelection: SlatePath[]): SlatePoint | null => {
  for (let index = blockSelection.length - 1; index >= 0; index -= 1) {
    const path = blockSelection[index];
    if (Editor.hasPath(editor, path)) {
      return Editor.end(editor, path);
    }
  }
  return null;
};

const getBlocksOfTextSelection = (editor: Editor, textSelection: SlateRange): NodeEntry<Block>[] => {
  const entries = Array.from(
    Editor.nodes(editor, {
      at: textSelection,
      match: isBlock,
      mode: "lowest",
    }),
  );

  return entries;
};

const getBlocksOfBlockSelection = (editor: Editor, blockSelection: SlatePath[]): NodeEntry<Block>[] => {
  const entries = blockSelection
    .map(path => {
      const node = SlateNode.getIf(editor, path);
      if (!node || !isBlock(node)) return null;
      return [node, path];
    })
    .filter((result): result is NodeEntry<Block> => result !== null);

  return entries;
};

export const BlockSelectionUtility = {
  getPathsAboveSlateSelection,
  getPathsAboveBlockSelection,
  getPathsBelowBlockSelection,
  getTextSelectionFromBlockSelection,
  getBlocksOfTextSelection,
  getBlocksOfBlockSelection,
} as const;
