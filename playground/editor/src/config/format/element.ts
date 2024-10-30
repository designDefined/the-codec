import { ELEMENT_TYPE } from "core/constant/content/ELEMENT_TYPE";
import { CodeBlockElement } from "core/entity/content/element/CodeBlockElement";
import { Editor, Element, Transforms } from "slate";

export const isElementActive = (editor: Editor, type: ELEMENT_TYPE) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === type,
    }),
  );
  return !!match;
};

export const toggleCodeBlock = (editor: Editor) => {
  const isActive = isElementActive(editor, "CODE_BLOCK");
  Transforms.unwrapNodes(editor, {
    match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === "CODE_BLOCK",
    split: true,
  });
  if (!isActive) {
    const codeBlock: CodeBlockElement = { type: "CODE_BLOCK", children: [] };
    Transforms.wrapNodes(editor, codeBlock);
  } else {
    Transforms.setNodes(editor, { type: "PARAGRAPH" });
  }
};
