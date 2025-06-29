import { Article } from "@flexive/core";
import { useContentEditor } from "../context";
import { LeafEditor } from "../leaf/LeafEditor";
import { SelectedElementEditor } from "../element";
import { ContentVisualizer } from "../ContentVisualizer";

export const SelectedContentEditor = () => {
  const selected = useContentEditor();

  if (!selected) return null;

  // const isBold = Editor.marks(editor)?.bold;

  return (
    <Article g={6}>
      <SelectedElementEditor {...selected} />
      <LeafEditor {...selected} />
      <ContentVisualizer {...selected} />
    </Article>
  );
};
