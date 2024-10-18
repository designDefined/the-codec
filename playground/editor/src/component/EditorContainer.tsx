import { useState } from "react";
import { Editor } from "./Editor";
import { createEditor, Descendant } from "slate";
import { Slate, withReact } from "slate-react";
import { Article } from "@flexive/core";

const initialValue: Descendant[] = [{ type: "paragraph", children: [{ text: "Hello World" }] }];

export function EditorContainer() {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Article f={{ flow: ["row"] }}>
        <Editor />
      </Article>
    </Slate>
  );
}
