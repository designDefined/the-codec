import { Button, Div } from "@flexive/core";
import { useMemo, useState } from "react";
import { createEditor, Editor, EditorMarks, Transforms, Element, Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { renderElement } from "../config/render/renderElement";
import { renderLeaf } from "../config/render/renderLeaf";
import isHotkey from "is-hotkey";
import { toMark } from "../config/stringify/stringify";
import { fromMark } from "../config/parse/parse";

// constants
const HOTKEYS = {
  "mod+b": "bold",
  // "mod+i": "italic",
  // "mod+u": "underline",
  // "mod+`": "code",
} as const;
// const LIST_TYPES = ["numbered-list", "bulleted-list"];
// const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const initialValue: Descendant[] = [{ type: "paragraph", children: [{ text: "" }] }];

export const SampleEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [data, setData] = useState<{ raw: Descendant[]; markdown: string; ast: Descendant[] }>({
    raw: initialValue,
    markdown: "",
    ast: fromMark(""),
  });

  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={content => {
        const markdown = toMark(editor, content);
        const ast = fromMark(markdown);
        setData({ raw: content, markdown, ast });
      }}
    >
      <Div f={{ flow: ["row"], spacing: [16] }} style={{ border: "1px solid black" }}>
        <Button
          // active={isMarkActive(editor, format)}
          onMouseDown={event => {
            event.preventDefault();
            toggleMark(editor, "bold");
          }}
        >
          B
        </Button>
        <Button
          // active={isMarkActive(editor, format)}
          onMouseDown={event => {
            event.preventDefault();
            toggleBlock(editor, "code");
          }}
        >
          Code
        </Button>
      </Div>
      <Div f={{ spacing: [16], align: [undefined, undefined, 600, 600] }} style={{ border: "1px solid black" }}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={e => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, e)) {
                e.preventDefault();
                const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Div>
      <Div style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data.raw, null, 2)}</Div>
      <Div style={{ whiteSpace: "pre-wrap" }}>{data.markdown}</Div>
      <Div style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data.markdown)}</Div>
      <Div style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data.ast, null, 2)}</Div>
    </Slate>
  );
};

const isMarkActive = (editor: Editor, format: keyof EditorMarks) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};
const toggleMark = (editor: Editor, format: keyof EditorMarks) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor: Editor, format: Element["type"]) => {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => !Editor.isEditor(n) && Element.isElement(n) && n["type"] === format,
    }),
  );
  return !!match;
};
const toggleBlock = (editor: Editor, format: Element["type"]) => {
  const isActive = isBlockActive(editor, format);
  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : format,
  });
};
