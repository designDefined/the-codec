import { useState } from "react";
import { Editor } from "./Editor";
import { Article, Div, H1 } from "@flexive/core";
import { Reader } from "./Reader";
import { InboxContent } from "core/entity/content/InboxContent";
import { StatusViewer } from "./StatusViewer";
import { toMark } from "../config/stringify/stringify";

const initialValue: InboxContent[] = [{ type: "PARAGRAPH", children: [{ text: "" }] }];

export function EditorContainer() {
  const [content, setContent] = useState(initialValue);
  const [markdown, setMarkdown] = useState("");

  return (
    <Article f={{ flex: [1, 1], flow: ["row"], spacing: [16, 16], overflow: ["hidden"] }}>
      <Div className="bordered" f={{ flex: [1, 1, 0], spacing: [16, 16] }}>
        <H1>Editor</H1>
        <Editor
          initialValue={content}
          onChange={(content, editor) => {
            setContent(content);
            setMarkdown(toMark(editor, content));
          }}
        />
      </Div>
      <Div className="bordered" f={{ flex: [1, 1, 0], spacing: [16, 16] }}>
        <H1>Reader</H1>
        <Div>
          <Reader value={content} />
        </Div>
      </Div>
      <Div f={{ flex: [2, 2, 0], spacing: [16, 16], overflow: ["hidden"] }}>
        <H1>Status</H1>
        <StatusViewer value={content} markdown={markdown} />
      </Div>
    </Article>
  );
}
