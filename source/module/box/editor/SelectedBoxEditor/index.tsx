import { Article, Div } from "@flexive/core";
import { useBoxEditor } from "../BoxEditorContext/useBoxEditor";
import { BoxLayoutEditor } from "./BoxLayoutEditor";

export const SelectedBoxEditor = () => {
  const { selected } = useBoxEditor();

  if (!selected) return null;

  return (
    <Article>
      {selected.path.map(({ id, name }) => (
        <Div key={id}>
          {id} {name}
        </Div>
      ))}
      <BoxLayoutEditor {...selected} />
    </Article>
  );
};
