import isHotkey from "is-hotkey";
import { type PropsWithChildren, useCallback, useEffect, useState } from "react";
import type { Leaf } from "shared/types/src/content/leaf.types";
import { createEditor, type Descendant, Editor } from "slate";
import { Slate, useSlate, withReact } from "slate-react";

import { EditorConfigContext } from "@/context/EditorConfigContext";
import { BlockTransform } from "@/editor/blockTransform.utility";
import { withContent } from "@/editor/withContent";

type EditorProviderProps = PropsWithChildren & {
  initialValue: Descendant[];
  onSave?: (value: Descendant[]) => void;
};

export const EditorProvider = ({ children, initialValue, onSave }: EditorProviderProps) => {
  const [editor] = useState(() => withContent(withReact(createEditor())));

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <EditorConfigProvider>
        <EditorHotkeyProvider onSave={onSave}>{children}</EditorHotkeyProvider>
      </EditorConfigProvider>
    </Slate>
  );
};

type EditorConfigProviderProps = PropsWithChildren;
const EditorConfigProvider = ({ children }: EditorConfigProviderProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return <EditorConfigContext value={{ isPanelOpen, setIsPanelOpen }}>{children}</EditorConfigContext>;
};

const HOTKEYS = ["mod+b", "mod+s", "mod+enter", "enter"] as const;

// TODO: Separate hotkey logics into utility
type EditorHotkeyProviderProps = PropsWithChildren & {
  onSave?: (value: Descendant[]) => void;
};
const EditorHotkeyProvider = ({ children, onSave }: EditorHotkeyProviderProps) => {
  const editor = useSlate();

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
            BlockTransform.splitNearestBlock(editor);
            return;
          }

          if (isHotkey("enter", event)) {
            BlockTransform.insertParagraphBreak(editor);
            return;
          }
        }
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [editor, onSave, toggleMark]);

  return children;
};
