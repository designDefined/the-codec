import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

// Leaf
type CustomText = {
  text: string;
  bold?: boolean;
  // italic?: boolean;
  // underline?: boolean;
  // code?: boolean;
};

// Element
type CustomElement = { type: "paragraph"; children: Descendant[] };
type CodeElement = { type: "code"; children: Descendant[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement | CodeElement;
    Text: CustomText;
  }
}
