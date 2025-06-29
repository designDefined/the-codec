import { BaseEditor } from "slate";
import { ReactEditor, RenderElementProps, RenderLeafProps } from "slate-react";
import { Element } from "@core/entity/content/element/Element";
import { Leaf } from "@core/entity/content/leaf/Leaf";
import { Key } from "react";

export type ContentEditor = BaseEditor & ReactEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: ContentEditor;
    Element: Element;
    Text: Leaf;
  }
}

export type RenderElementPropsExtended<E extends Element = Element> = Omit<
  RenderElementProps,
  "attributes" | "element"
> & {
  element: E;
  attributes?: RenderElementProps["attributes"];
  key?: Key;
};
export type RenderLeafPropsExtended = Omit<RenderLeafProps, "attributes"> & {
  attributes?: RenderLeafProps["attributes"];
  key?: Key;
};
