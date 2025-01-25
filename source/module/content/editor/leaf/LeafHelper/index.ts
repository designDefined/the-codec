import { TEXT_EMPHASIS } from "@core/constant/content/TEXT_EMPHASIS";
import { Leaf } from "@core/entity/content/leaf/Leaf";
import { ContentEditor } from "@module/content/type";
import { Editor } from "slate";

const bold = (editor: ContentEditor) => !!Editor.marks(editor)?.bold;
const setBold = (editor: ContentEditor) => (value?: boolean) =>
  value ? Editor.addMark(editor, "bold", true) : Editor.removeMark(editor, "bold");

const italic = (editor: ContentEditor) => !!Editor.marks(editor)?.italic;
const setItalic = (editor: ContentEditor) => (value?: boolean) =>
  value ? Editor.addMark(editor, "italic", true) : Editor.removeMark(editor, "italic");

const emphasized = (editor: ContentEditor, type: Required<Leaf["emphasis"]>) =>
  !!(Editor.marks(editor)?.emphasis === type);
const setEmphasized = (editor: ContentEditor) => (type?: TEXT_EMPHASIS) =>
  type ? Editor.addMark(editor, "emphasis", type) : Editor.removeMark(editor, "emphasis");

export const LeafHelper = {
  bold,
  setBold,
  italic,
  setItalic,
  emphasized,
  setEmphasized,
};
