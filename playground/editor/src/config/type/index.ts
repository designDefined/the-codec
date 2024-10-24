import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type CustomText = { bold?: boolean; text: string };

export type CustomElement = { type: "paragraph"; children: CustomText[] };
export type CodeElement = { type: "code"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement | CodeElement;
    Text: CustomText;
  }
}
