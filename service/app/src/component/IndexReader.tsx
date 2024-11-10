import { Div } from "@flexive/core";
import { Index } from "../core/entity/Index";
import { renderStatic } from "./Editor/config/render/renderStatic";

type IndexReaderProps = {
  data: Index;
};

export function IndexReader({ data }: IndexReaderProps) {
  return (
    <Div>
      {data.data.map(box => (
        <Div key={box.id}>{box.children.map(renderStatic)}</Div>
      ))}
    </Div>
  );
}
