import { useState } from "react";
import { Editor } from "./Editor";
import { createEditor, Descendant } from "slate";
import { Slate, withReact } from "slate-react";
import { Article } from "@flexive/core";
import { StatusViewer } from "./StatusViewer";
import { Reader } from "./Reader";

const initialValue: Descendant[] = [{ type: "paragraph", children: [{ text: "Hello World" }] }];

export function EditorContainer() {
  const [editor] = useState(() => withReact(createEditor()));
  const [astString, setAstString] = useState("");

  return (
    <>
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={value => {
          const isAstChange = editor.operations.some(op => "set_selection" !== op.type);
          if (isAstChange) {
            const content = JSON.stringify(value, null, 2);
            setAstString(content);
          }
        }}
      >
        <Article f={{ flow: ["row"], spacing: [16, 16] }}>
          <Editor />
          <Reader />
          <StatusViewer ast={astString} />
        </Article>
      </Slate>
    </>
  );
}
