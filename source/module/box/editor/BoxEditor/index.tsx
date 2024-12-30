import { Box } from "@core/entity/box/Box";
import { InnerBoxEditor } from "./InnerBoxEditor";
import { Section } from "@flexive/core";
import { BoxPath } from "@core/entity/box/BoxPath";

type BoxEditorProps = {
  box: Box;
  path: BoxPath;
};

export const BoxEditor = ({ box, path }: BoxEditorProps) => {
  if (box.type === "INNER_BOX") return <InnerBoxEditor key={box.id} box={box} path={path} />;
  return (
    <Section id={box.id} className={box.look?.classes?.map(c => c.value).join(" ")} {...box.layout}>
      {box.children.map(child => (
        <BoxEditor key={child.id} box={child} path={[...path, { id: child.id, name: child.name }]} />
      ))}
    </Section>
  );
};
