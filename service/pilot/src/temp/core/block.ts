import { Inline } from "./inline";
import { Tag } from "./tag";

export type Block = {
  tag: Tag;
  data: Inline[];
};
