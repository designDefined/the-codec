import { nanoid } from "nanoid";
import { Editor, Node as SlateNode, Transforms } from "slate";

import { isBlock, isParagraph } from "./isNode.utility";

export const withContent = (editor: Editor) => {
  const { apply, normalizeNode } = editor;

  editor.normalizeNode = nodeEntry => {
    const [node, path] = nodeEntry;

    if (isBlock(node)) {
      if (node.children.length < 1) {
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

      if (node.type === "HEADING" && !("level" in node)) {
        Transforms.setNodes(editor, { level: 1 }, { at: path });
        return;
      }
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
