import { Index } from "@core/entity/index/Index";
import { Article, Input, Label } from "@flexive/core";

type IndexEditorProps = {
  index: Index;
  onChangeIndexPartial?: (index: Partial<Index>) => void;
};

export const IndexInformationEditor = ({ index, onChangeIndexPartial }: IndexEditorProps) => {
  return (
    <Article f={{ flow: ["row"], spacing: [[12, 4], 12] }}>
      <Label>Title:</Label>
      <Input type="text" value={index.title} onChange={e => onChangeIndexPartial?.({ title: e.target.value })} />
    </Article>
  );
};
