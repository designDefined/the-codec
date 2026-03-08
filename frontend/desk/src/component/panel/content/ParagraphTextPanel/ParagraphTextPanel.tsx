import { Div } from "@flexive/core";

import { EditorPanel } from "../../EditorPanel/EditorPanel";

export const ParagraphTextPanel = () => {
  return (
    <EditorPanel>
      <EditorPanel.Title>글과 문단</EditorPanel.Title>
      <EditorPanel.Content>
        <Div sizeM={200}>내용</Div>
      </EditorPanel.Content>
    </EditorPanel>
  );
};
