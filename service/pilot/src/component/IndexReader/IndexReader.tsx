import { Section } from "@flexive/core";
import { Index } from "../../temp/core";
import { BlockReader } from "../BlockReader/BlockReader";
import { useFlexive } from "../../hook/useFlexive/useFlexive";
import { useStyle } from "../../hook/useStyle/useStyle";

type IndexReaderProps = {
  data: Index;
};

export function IndexReader({ data: index }: IndexReaderProps) {
  const f = useFlexive(index.tag);
  const style = useStyle(index.tag);
  return (
    <Section f={f} style={style} id={index.id}>
      {index.data.map((block, i) => (
        <BlockReader data={block} key={i} />
      ))}
    </Section>
  );
}
