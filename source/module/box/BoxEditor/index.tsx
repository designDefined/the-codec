import { Box } from "@core/entity/box/Box";
import { InnerBoxEditor } from "../InnerBoxEditor";
import { Section } from "@flexive/core";

type BoxEditorProps = {
  box: Box;
  onChangeBox?: (content: Box) => void;
};

export const BoxEditor = ({ box, onChangeBox }: BoxEditorProps) => {
  if (box.type === "INNER_BOX") return <InnerBoxEditor key={box.id} box={box} onChangeBox={onChangeBox} />;
  return (
    <Section f={{ spacing: [box.style?.padding, box.style?.gap] }}>
      {box.children.map(child => (
        <BoxEditor key={child.id} box={child} onChangeBox={onChangeBox} />
      ))}
    </Section>
  );
};
