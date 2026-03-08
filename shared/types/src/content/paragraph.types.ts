import type { Leaf } from "./leaf.types";

interface Paragraph {
  id: string;
  type: "PARAGRAPH";
  children: Leaf[];
}

export type { Paragraph };
