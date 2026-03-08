import type { BlockLayout } from "./layout.types";
import type { Leaf } from "./leaf.types";
import type { BlockLook } from "./look.types";
import type { Paragraph } from "./paragraph.types";

type BLOCK_TYPE = "FLOW" | "HEADING";
const BLOCK_TYPES = ["FLOW", "HEADING"] as const;

interface BlockBase {
  id: string;
  type: BLOCK_TYPE;
  children: (Block | Paragraph | Leaf)[];
  layout?: BlockLayout;
  look?: BlockLook;
}

interface FlowBlock extends BlockBase {
  type: "FLOW";
}

interface HeadingBlock extends BlockBase {
  type: "HEADING";
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

type Block = FlowBlock | HeadingBlock;

export type { Block, BLOCK_TYPE, FlowBlock, HeadingBlock };
export { BLOCK_TYPES };
