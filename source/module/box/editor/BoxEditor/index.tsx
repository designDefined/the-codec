import { Box } from "@core/entity/box/Box";
import { InnerBoxEditor } from "./InnerBoxEditor";
import { BoxPath } from "@core/entity/box/BoxPath";
import { OuterBoxEditor } from "./OuterBoxEditor";

type BoxEditorProps = {
  box: Box;
  path: BoxPath;
};

export const BoxEditor = ({ box, path }: BoxEditorProps) => {
  if (box.type === "INNER_BOX") return <InnerBoxEditor key={box.id} box={box} path={path} />;
  return (
    <OuterBoxEditor box={box} path={path}>
      {box.children.map(child => (
        <BoxEditor key={child.id} box={child} path={[...path, { id: child.id, name: child.name }]} />
      ))}
    </OuterBoxEditor>
  );
};
