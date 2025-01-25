import { INLINE_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { InlineElement } from "@core/entity/content/element/Element";
import { Element as SlateElement, Node as SlateNode } from "slate";

const isInline = (n: SlateNode): n is InlineElement =>
  SlateElement.isElement(n) && INLINE_TYPE.safeParse(n.type).success;

export const InlineHelper = {
  isInline,
};
