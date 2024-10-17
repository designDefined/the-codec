import { P } from "@flexive/core";
import { Block } from "../../../core/entity/editor/block";
import { InlineReader } from "../../inline/InlineReader/InlineReader";

type BlockReaderProps = {
  block: Block;
};

export function BlockReader({ block: { data } }: BlockReaderProps) {
  // TODO: Add tag customization
  return (
    <P f={{ disable: true }}>
      {data.map(datum => (typeof datum === "string" ? datum : <InlineReader key={datum.id} inline={datum} />))}
    </P>
  );
}
