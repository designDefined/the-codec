import { BaseEditor } from "slate";
import { ReactEditor, RenderElementProps, RenderLeafProps } from "slate-react";
import { Element } from "@core/entity/content/element/Element";
import { Leaf } from "@core/entity/content/leaf/Leaf";
import { Key } from "react";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: Element;
    Text: Leaf;
  }
}

export type RenderElementPropsExtended = Omit<RenderElementProps, "attributes"> & {
  attributes?: RenderElementProps["attributes"];
  key?: Key;
};
export type RenderLeafPropsExtended = Omit<RenderLeafProps, "attributes"> & {
  attributes?: RenderLeafProps["attributes"];
  key?: Key;
};
