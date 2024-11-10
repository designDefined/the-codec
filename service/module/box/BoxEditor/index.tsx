import { Box } from "core/entity/content/box/Box";
import { InnerBoxEditor } from "../InnerBoxEditor";

type BoxEditorProps = {
  box: Box;
  onChangeBox?: (content: Box) => void;
};

export const BoxEditor = ({ box, onChangeBox }: BoxEditorProps) => {
  if (box.type === "INNER_BOX") return <InnerBoxEditor key={box.id} box={box} onChangeBox={onChangeBox} />;
  return box.children.map(child => <BoxEditor key={child.id} box={child} onChangeBox={onChangeBox} />);
};
