import { ELEMENT_TYPE } from "core/constant/content/ELEMENT_TYPE";
import { Editor, Element } from "slate";

export const isActive = (editor: Editor, type: ELEMENT_TYPE) => {
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

export const toggleCodeBlock = () => {};
