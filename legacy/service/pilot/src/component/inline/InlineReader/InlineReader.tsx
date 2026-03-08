import { Span } from "@flexive/core";
import { Inline } from "../../../core/entity/editor/inline";

type InlineReaderProps = {
  inline: Inline;
};

export function InlineReader({ inline: { data } }: InlineReaderProps) {
  // TODO: Add tag customization
  return <Span f={{ disable: true }}>{data}</Span>;
}
