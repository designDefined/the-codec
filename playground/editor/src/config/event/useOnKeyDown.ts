import React, { useCallback } from "react";
import { Editor, Element, Transforms } from "slate";

export const useOnKeyDown = (editor: Editor) => {
  const handler = useCallback<React.KeyboardEventHandler>(
    e => {
      if (e.key === "&") {
        // Prevent the ampersand character from being inserted.
        e.preventDefault();
        // Execute the `insertText` method when the event occurs.
        editor.insertText("and");
      }
      if (e.metaKey && e.key === "'") {
        // Prevent the backtick character from being inserted.
        e.preventDefault();
        // Determine whether any of the currently selected blocks are code blocks.
        const [match] = Editor.nodes(editor, {
          match: n => "type" in n && n.type === "code",
        });
        // Execute the `insertText` method when the event occurs.
        Transforms.setNodes(
          editor,
          { type: match ? "paragraph" : "code" },
          { match: n => Element.isElement(n) && Editor.isBlock(editor, n) },
        );
      }
      if (e.metaKey && e.key === "b") {
        e.preventDefault();
        Editor.addMark(editor, "bold", true);
      }
    },
    [editor],
  );
  return handler;
};
