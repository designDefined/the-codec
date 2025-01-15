import { EditorPanel } from "@component/area";
import { useBoxEditor } from "../context";
import { OuterBoxItem } from "./OuterBoxItem";

export const BoxManager = () => {
  const { root } = useBoxEditor();
  return (
    <EditorPanel>
      <OuterBoxItem box={root} path={[{ id: root.id, name: root.name }]} />
    </EditorPanel>
  );
};
