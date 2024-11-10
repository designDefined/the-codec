import { Index } from "core/entity/index/Index";
import { Input, Label, Section } from "@flexive/core";

type IndexEditorProps = {
  index: Index;
  onChangeIndexPartial: (index: Partial<Index>) => void;
};

export const IndexEditor = ({ index, onChangeIndexPartial }: IndexEditorProps) => {
  return (
    <>
      <Section>
        <Label>제목</Label>
        <Input type="text" value={index.title} onChange={e => onChangeIndexPartial({ title: e.target.value })} />
      </Section>
    </>
  );
};
