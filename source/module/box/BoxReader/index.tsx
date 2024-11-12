import { Box } from "@core/entity/box/Box";
import { renderStatic } from "../../content/render/renderStatic";
import { Section } from "@flexive/core";

type BoxReaderProps = {
  box: Box;
};

export const BoxReader = ({ box }: BoxReaderProps) => {
  if (box.type === "INNER_BOX")
    return (
      <Section id={box.id} f={{ spacing: [box.style?.padding, box.style?.gap] }}>
        {box.children.map(renderStatic)}
      </Section>
    );
  return (
    <Section id={box.id} f={{ spacing: [box.style?.padding, box.style?.gap] }}>
      {box.children.map(child => (
        <BoxReader key={child.id} box={child} />
      ))}
    </Section>
  );
};
