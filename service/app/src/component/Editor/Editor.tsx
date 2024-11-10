import { useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { renderElement } from "./config/render/renderElement";
import { renderLeaf } from "./config/render/renderLeaf";

type EditorProps = {
  initialValue: Descendant[];
  onChange: (value: Descendant[]) => void;
};

export function Editor({ initialValue, onChange }: EditorProps) {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={value => {
        const isAstChange = editor.operations.some(op => "set_selection" !== op.type);
        if (isAstChange) onChange(value);
      }}
    >
      <Editable className="sans editor" renderElement={renderElement} renderLeaf={renderLeaf} spellCheck={false} />
    </Slate>
  );
}
