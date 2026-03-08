import { EditorPanel } from "@component/area";
import { InputLabel, InputText } from "@component/input";
import { Index } from "@core/entity/index/Index";

type IndexEditorProps = {
  index: Index;
  onChangeIndexPartial?: (index: Partial<Index>) => void;
};

export const IndexInformationEditor = ({ index, onChangeIndexPartial }: IndexEditorProps) => {
  return (
    <EditorPanel name="Information">
      <InputLabel level={1} text="Title" g={8}>
        <InputText value={index.title ?? ""} onChange={e => onChangeIndexPartial?.({ title: e.target.value })} />
      </InputLabel>
      <InputLabel level={1} text="Description" g={8}>
        <InputText
          value={index.description ?? ""}
          onChange={e => onChangeIndexPartial?.({ description: e.target.value })}
        />
      </InputLabel>
    </EditorPanel>
  );
};
