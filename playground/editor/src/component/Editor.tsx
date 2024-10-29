import { Editable, Slate, withReact } from "slate-react";
import { renderElement } from "../config/render/renderElement";
import { useOnKeyDown } from "../config/event/useOnKeyDown";
import { renderLeaf } from "../config/render/renderLeaf";
import { useMemo } from "react";
import { createEditor } from "slate";
import { InboxContent } from "core/entity/content/InboxContent";
import { Editor as SlateEditor } from "slate";
import { Article } from "@flexive/core";
import { Toolbar } from "./Toolbar";

type EditorProps = {
  initialValue: InboxContent[];
  onChange?: (value: InboxContent[], editor: SlateEditor) => void;
} & Omit<React.TextareaHTMLAttributes<HTMLDivElement>, "onChange">;

export function Editor({ initialValue, onChange, ...props }: EditorProps) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const onKeyDown = useOnKeyDown(editor);

  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={content => {
        const isAstChange = editor.operations.some(op => "set_selection" !== op.type);
        if (isAstChange && onChange) onChange(content, editor);
      }}
    >
      <Article f={{ flex: [1, 1, 0], spacing: [0, 12] }}>
        <Toolbar />
        <Editable
          className="editor"
          onKeyDown={onKeyDown}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          {...props}
        />
      </Article>
    </Slate>
  );
}
