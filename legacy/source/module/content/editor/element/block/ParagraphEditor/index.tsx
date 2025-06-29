import { ParagraphElement } from "@core/entity/content/element/block/ParagraphElement";
import { ContentEditor } from "@module/content/type";

type ParagraphEditorProps = {
  editor: ContentEditor;
  value: ParagraphElement;
};

export const ParagraphEditor = ({ editor, value }: ParagraphEditorProps) => {
  console.log(editor, value);
  return null;
};
