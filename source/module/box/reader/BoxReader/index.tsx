import { Box } from "@core/entity/box/Box";
import { Section } from "@flexive/core";
import { useBoxLookStyle } from "@module/box/look";
import { renderStatic } from "@module/content/render/renderStatic";

type BoxReaderProps = {
  box: Box;
};

export const BoxReader = ({ box }: BoxReaderProps) => {
  const style = useBoxLookStyle(box.look);

  if (box.type === "INNER_BOX")
    return (
      <Section id={box.id} {...box.layout} style={style}>
        {box.children.map(renderStatic)}
      </Section>
    );
  return (
    <Section id={box.id} {...box.layout} style={style}>
      {box.children.map(child => (
        <BoxReader key={child.id} box={child} />
      ))}
    </Section>
  );
};
