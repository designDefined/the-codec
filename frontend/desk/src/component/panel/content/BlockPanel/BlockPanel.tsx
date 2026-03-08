import { Div } from "@flexive/core";
import { Button, Toggle } from "design/component/action";
import { Select } from "design/component/input";
import { useSetAtom } from "jotai";
import { Transforms } from "slate";
import { useSlate } from "slate-react";
import { BLOCK_TYPES } from "types/content";

import { BlockSelectionUtility } from "@/editor/blockSelection.utility";
import { BlockTransform } from "@/editor/blockTransform.utility";
import { blockSelectionAtom, useSelectedBlockEntries } from "@/state/selectionState";

import { EditorPanel } from "../../EditorPanel/EditorPanel";

export const BlockPanel = () => {
  const editor = useSlate();
  const selectedBlockEntries = useSelectedBlockEntries();
  const setBlockSelection = useSetAtom(blockSelectionAtom);

  if (selectedBlockEntries.length !== 1) return null;
  const [block, path] = selectedBlockEntries[0];

  return (
    <EditorPanel>
      <EditorPanel.Title>블록</EditorPanel.Title>
      <EditorPanel.Content>
        <Select value={block.type} f disabled={path.length === 1}>
          <Div g={4}>
            {BLOCK_TYPES.map(blockType => (
              <Toggle
                key={blockType}
                value={block.type === blockType}
                onChange={value => {
                  if (!value) return;
                  BlockTransform.setBlockType(editor, path, blockType);
                  setBlockSelection([path]);
                }}
              >
                {blockType}
              </Toggle>
            ))}
          </Div>
          <Div sizeM={120}></Div>
        </Select>
        <Div row g={8}>
          <Button
            onClick={() => {
              if (editor.selection) {
                BlockTransform.wrapBlock(editor);
                setBlockSelection(BlockSelectionUtility.getPathsAboveSlateSelection(editor));
                Transforms.deselect(editor);
              } else {
                BlockTransform.wrapBlock(editor, path);
              }
            }}
            disabled={path.length === 1}
            f
          >
            블록 감싸기
          </Button>
          <Button
            onClick={() => {
              if (editor.selection) {
                BlockTransform.unwrapBlock(editor);
                setBlockSelection(BlockSelectionUtility.getPathsAboveSlateSelection(editor));
                Transforms.deselect(editor);
              } else {
                BlockTransform.unwrapBlock(editor, path);
                setBlockSelection([path.slice(0, -1)]);
              }
            }}
            disabled={path.length === 1}
            f
          >
            블록 풀기
          </Button>
        </Div>

        <Div sizeM={200}></Div>
      </EditorPanel.Content>
    </EditorPanel>
  );
};
