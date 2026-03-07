import { nanoid } from "nanoid";
import type { Block, Leaf } from "shared/types/src/content/_index.types";
import type { Paragraph } from "shared/types/src/content/paragraph";
import { Editor, Element as SlateElement, Node as SlateNode, Transforms } from "slate";

const isEditor = (node: SlateNode): node is Editor => Editor.isEditor(node);
const isLeaf = (node: SlateNode): node is Leaf => "text" in node && !("children" in node);
const isParagraph = (node: SlateNode): node is Paragraph => SlateElement.isElement(node) && node.type === "PARAGRAPH";
const isBlock = (node: SlateNode): node is Block => !isEditor(node) && !isLeaf(node) && !isParagraph(node);

export const withContent = (editor: Editor) => {
  const { apply, normalizeNode } = editor;

  editor.normalizeNode = nodeEntry => {
    const [node, path] = nodeEntry;

    if (isBlock(node) && node.children.length < 1) {
      Transforms.insertNodes(
        editor,
        {
          id: nanoid(),
          type: "PARAGRAPH",
          children: [{ text: "" }],
        },
        { at: [...path, 0] },
      );
      return;
    }

    if (isParagraph(node) && node.children.length < 1) {
      Transforms.insertNodes(editor, { text: "" }, { at: [...path, 0] });
      return;
    }

    normalizeNode(nodeEntry);
  };

  editor.apply = operation => {
    switch (operation.type) {
      case "insert_node": {
        if (!SlateNode.isNode(operation.node) || !isBlock(operation.node)) break;
        operation.node = {
          ...operation.node,
          id: nanoid(),
        };
        break;
      }

      case "split_node": {
        if (!("id" in operation.properties)) break;
        operation.properties = {
          ...operation.properties,
          id: nanoid(),
        };
        break;
      }

      default: {
        // console.log(`[APPLY]
        // operationType: ${operation.type}
        // operation: ${JSON.stringify(operation, null, 2)}`);
      }
    }

    apply(operation);
  };

  return editor;
};
