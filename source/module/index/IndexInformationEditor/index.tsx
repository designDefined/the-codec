import { Index } from "@core/entity/index/Index";
import { Article, Input, Label } from "@flexive/core";

type IndexEditorProps = {
  index: Index;
  onChangeIndexPartial?: (index: Partial<Index>) => void;
};

export const IndexInformationEditor = ({ index, onChangeIndexPartial }: IndexEditorProps) => {
  return (
    <Article row px={4} py={12} g={12}>
      <Label>Title:</Label>
      <Input type="text" value={index.title} onChange={e => onChangeIndexPartial?.({ title: e.target.value })} />
    </Article>
  );
};
