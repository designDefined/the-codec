import { Div } from "@flexive/core";
import { Box } from "../../../core/entity/box/Box";
import { BlockReader } from "../../block/BlockReader/BlockReader";

type BoxReaderProps = {
  box: Box;
};

export function BoxReader({ box: { id, data, style } }: BoxReaderProps) {
  return (
    <Div id={typeof id === "string" ? id : undefined} f={style?.f} className={style?.className}>
      {data.map(datum =>
        datum.type === "BOX" ? <BoxReader key={datum.id} box={datum} /> : <BlockReader key={datum.id} block={datum} />,
      )}
    </Div>
  );
}
