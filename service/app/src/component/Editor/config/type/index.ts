import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { Element } from "../../../../core/entity/Element";
import { Leaf } from "../../../../core/entity/Leaf";

// Leaf
declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: Element;
    Text: Leaf;
  }
}
