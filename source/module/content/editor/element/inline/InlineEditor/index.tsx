import { InlineElement } from "@core/entity/content/element/Element";
import { Div } from "@flexive/core";
import { ContentEditor } from "@module/content/type";

type InlineEditorProps = {
  editor: ContentEditor;
  value?: InlineElement;
};

export const InlineEditor = ({ editor, value }: InlineEditorProps) => {
  return <Div>{!!editor && !!value}</Div>;
};
