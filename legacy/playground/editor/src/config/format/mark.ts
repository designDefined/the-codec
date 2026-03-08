import { Editor } from "slate";
import { MARK } from "@core/constant/content/MARK";

export const isMarkActive = (editor: Editor, mark: MARK) => {
  const marks = Editor.marks(editor);
  return marks ? marks[mark] === true : false;
};

export const toggleMark = (editor: Editor, mark: MARK) => {
  if (isMarkActive(editor, mark)) Editor.removeMark(editor, mark);
  else Editor.addMark(editor, mark, true);
};
