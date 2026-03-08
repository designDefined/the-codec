import { atom, useAtomValue } from "jotai";
import { useMemo } from "react";
import { type Element as SlateElement, Path as SlatePath, Range as SlateRange } from "slate";
import { ReactEditor, useSlateStatic } from "slate-react";

import { BlockSelectionUtility } from "@/editor/blockSelection.utility";

export const textSelectionAtom = atom<SlateRange | null>(null);
export const blockSelectionAtom = atom<SlatePath[] | null>(null);

export const useIsBlockOn = (element: SlateElement) => {
  const editor = useSlateStatic();
  const blockSelection = useAtomValue(blockSelectionAtom);

  return useMemo(() => {
    if (!blockSelection) return false;
    const path = ReactEditor.findPath(editor, element);
    return blockSelection.some(managedPath => SlatePath.equals(managedPath, path));
  }, [element, editor, blockSelection]);
};

export const useSelectedBlockEntries = () => {
  const editor = useSlateStatic();
  const textSelection = useAtomValue(textSelectionAtom);
  const blockSelection = useAtomValue(blockSelectionAtom);

  return useMemo(() => {
    if (textSelection) {
      return BlockSelectionUtility.getBlocksOfTextSelection(editor, textSelection);
    }
    if (blockSelection) {
      return BlockSelectionUtility.getBlocksOfBlockSelection(editor, blockSelection);
    }
    return [];
  }, [editor, textSelection, blockSelection]);
};
