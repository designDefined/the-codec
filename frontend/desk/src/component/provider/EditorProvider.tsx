import isHotkey from "is-hotkey";
import { useSetAtom } from "jotai";
import { type PropsWithChildren, useCallback, useEffect, useState } from "react";
import { createEditor, type Descendant, Editor, type Selection as SlateSelection, Transforms } from "slate";
import { Slate, useSlateStatic, withReact } from "slate-react";
import type { Leaf } from "types/content";

import { EditorConfigContext } from "@/context/EditorConfigContext";
import { BlockSelectionUtility } from "@/editor/blockSelection.utility";
import { BlockTransform } from "@/editor/blockTransform.utility";
import { withContent } from "@/editor/withContent";
import { blockSelectionAtom, textSelectionAtom } from "@/state/selectionState";

type EditorProviderProps = PropsWithChildren & {
  initialValue: Descendant[];
  onSave?: (value: Descendant[]) => void;
};

export const EditorProvider = ({ children, initialValue, onSave }: EditorProviderProps) => {
  const [editor] = useState(() => withContent(withReact(createEditor())));
  const setSlateSelection = useSetAtom(textSelectionAtom);
  const setBlockSelection = useSetAtom(blockSelectionAtom);

  const onSelectionChange = useCallback(
    (selection: SlateSelection) => {
      setSlateSelection(selection);
      if (selection) setBlockSelection(null);
    },
    [setSlateSelection, setBlockSelection],
  );

  return (
    <Slate editor={editor} initialValue={initialValue} onSelectionChange={onSelectionChange}>
      <EditorConfigProvider>
        <EditorHotkeyProvider onSave={onSave}>{children}</EditorHotkeyProvider>
      </EditorConfigProvider>
    </Slate>
  );
};

type EditorConfigProviderProps = PropsWithChildren;
const EditorConfigProvider = ({ children }: EditorConfigProviderProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  return (
    <EditorConfigContext
      value={{
        isPanelOpen,
        setIsPanelOpen,
      }}
    >
      {children}
    </EditorConfigContext>
  );
};

const HOTKEYS = ["mod+b", "mod+s", "enter", "mod+enter", "shift+enter"] as const;

// TODO: Separate hotkey logics into utility
type EditorHotkeyProviderProps = PropsWithChildren & {
  onSave?: (value: Descendant[]) => void;
};
const EditorHotkeyProvider = ({ children, onSave }: EditorHotkeyProviderProps) => {
  const editor = useSlateStatic();
  const setBlockSelection = useSetAtom(blockSelectionAtom);

  const isMarkActive = useCallback((editor: Editor, mark: keyof Omit<Leaf, "text">) => {
    const marks = Editor.marks(editor);
    return marks ? marks[mark] === true : false;
  }, []);

  const toggleMark = useCallback(
    (editor: Editor, mark: keyof Omit<Leaf, "text">) => {
      const isActive = isMarkActive(editor, mark);
      if (isActive) {
        Editor.removeMark(editor, mark);
      } else {
        Editor.addMark(editor, mark, true);
      }
    },
    [isMarkActive],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      HOTKEYS.forEach(hotkey => {
        if (isHotkey(hotkey, event)) {
          event.preventDefault();
          if (hotkey === "mod+b") {
            toggleMark(editor, "bold");
            return;
          }
          if (hotkey === "mod+s") {
            onSave?.(editor.children);
            return;
          }
          if (isHotkey("mod+enter", event)) {
            BlockTransform.insertBlockBreak(editor);
            return;
          }
          if (isHotkey("enter", event)) {
            if (editor.selection) {
              BlockTransform.insertParagraphBreak(editor);
              return;
            }
            setBlockSelection(prev => {
              if (!prev) return null;
              const newBlockSelection = BlockSelectionUtility.getPathsBelowBlockSelection(editor, prev);
              if (newBlockSelection) return newBlockSelection;
              const textSelection = BlockSelectionUtility.getTextSelectionFromBlockSelection(editor, prev);
              if (textSelection) Transforms.select(editor, textSelection);
              return null;
            });
          }
          if (isHotkey("shift+enter", event)) {
            setBlockSelection(prev =>
              prev
                ? BlockSelectionUtility.getPathsAboveBlockSelection(prev)
                : BlockSelectionUtility.getPathsAboveSlateSelection(editor),
            );
            Transforms.deselect(editor);
            return;
          }
        }
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [editor, onSave, toggleMark, setBlockSelection]);

  return children;
};
