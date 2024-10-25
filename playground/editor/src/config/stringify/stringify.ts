import { Descendant, Editor, Element } from "slate";

const trimWithCount = (text: string): [string, string, string] => {
  const startTrimmed = text.trimStart();
  const startPad = text.slice(0, text.length - startTrimmed.length);
  const bothTrimmed = startTrimmed.trimEnd();
  const endPad = startTrimmed.slice(bothTrimmed.length);
  return [startPad, bothTrimmed, endPad];
};

export const toMark = (editor: Editor, content: Descendant[]): string =>
  content.reduce((acc, node, i, array) => {
    const isEnd = i === array.length - 1;
    if (Element.isElement(node)) {
      if (editor.isBlock(node)) {
        if (node.type === "paragraph") acc += `${toMark(editor, node.children)}`;
        if (node.type === "code") acc += "```\n" + toMark(editor, node.children) + "\n```";
        if (!isEnd) acc += "\n";
      } else {
        acc += toMark(editor, node.children);
      }
    } else {
      let value = node.text;
      if (node.bold) {
        const [start, content, end] = trimWithCount(value);
        value = `${start}**${content}**${end}`;
      }
      acc += value;
    }
    return acc;
  }, "");
