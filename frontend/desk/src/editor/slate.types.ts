import type { Block, Leaf } from "shared/types/src/content/_index.types";
import type { Paragraph } from "shared/types/src/content/paragraph";
import type { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: Block | Paragraph;
    Text: Leaf;
  }
}
