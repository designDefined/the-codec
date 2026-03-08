import type { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import type { Block, Leaf, Paragraph } from "types/content";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: Block | Paragraph;
    Text: Leaf;
  }
}
