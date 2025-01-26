import { CodeBlockElement } from "./block/CodeBlockElement";
import { HeadingElement } from "./block/HeadingElement";
import { ParagraphElement } from "./block/ParagraphElement";
import { LinkElement } from "./inline/LinkElement";

export type BlockElement = CodeBlockElement | HeadingElement | ParagraphElement;
export type InlineElement = LinkElement;

export type Element = BlockElement | InlineElement;
