import { Selectable } from "@component/button";
import { InputLabel } from "@component/input";
import { HeadingElement } from "@core/entity/content/element/block/HeadingElement";
import { ContentEditor } from "@module/content/type";
import { HeadingHelper } from "../HeadingHelper";
import { Div } from "@flexive/core";

type HeadingEditorProps = {
  editor: ContentEditor;
  value: HeadingElement;
};

export const HeadingEditor = ({ editor, value }: HeadingEditorProps) => {
  return (
    <InputLabel text="Level" level={2} row g={8}>
      <Div row g={4}>
        {([1, 2, 3, 4, 5, 6] as const).map(level => (
          <Selectable
            key={level}
            value={value.level === level}
            onClick={() => HeadingHelper.setLevel(editor, level)}
            colored
            px={3}
            rad={2}
          >
            {level}
          </Selectable>
        ))}
      </Div>
    </InputLabel>
  );
};
