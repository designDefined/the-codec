import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

// Leaf
type CustomText = { bold?: boolean; text: string };

// Element
type CustomElement = { type: "paragraph"; children: CustomText[] };
type CodeElement = { type: "code"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement | CodeElement;
    Text: CustomText;
  }
}
