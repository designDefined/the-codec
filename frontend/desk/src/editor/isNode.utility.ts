import { Editor, Element as SlateElement, Node as SlateNode, Path as SlatePath } from "slate";
import type { Block, Leaf, Paragraph } from "types/content";

export const isEditor = (node: SlateNode): node is Editor => Editor.isEditor(node);
export const isLeaf = (node: SlateNode): node is Leaf => "text" in node && !("children" in node);
export const isParagraph = (node: SlateNode): node is Paragraph =>
  SlateElement.isElement(node) && node.type === "PARAGRAPH";
export const isBlock = (node: SlateNode): node is Block => !isEditor(node) && !isLeaf(node) && !isParagraph(node);
export const isBlockAtPath =
  (path?: SlatePath) =>
  (node: SlateNode, nodePath: SlatePath): node is Block =>
    path ? isBlock(node) && SlatePath.equals(path, nodePath) : isBlock(node);
