import { CodeBlockElement } from "@core/entity/content/element/block/CodeBlockElement";
import { ContentEditor } from "@module/content/type";
import { Transforms, Node as SlateNode } from "slate";
import { BlockHelper } from "../BlockHelper";
import { ParagraphHelper } from "../ParagraphHelper";
import { CODE_BLOCK_LANGUAGE } from "@core/constant/content/CODE_BLOCK_LANGUAGE";

const isCodeBlock = (n: SlateNode): n is CodeBlockElement => BlockHelper.isBlock(n) && n.type === "CODE_BLOCK";
const toCodeBlock = (editor: ContentEditor) => {
  ParagraphHelper.toParagraph(editor);
  Transforms.wrapNodes(editor, { type: "CODE_BLOCK", language: "TS", children: [] });
};

const setLanguage = (editor: ContentEditor, language: CODE_BLOCK_LANGUAGE) =>
  Transforms.setNodes(editor, { language }, { match: isCodeBlock });

const nameOfLanguage = (language: CODE_BLOCK_LANGUAGE) => {
  switch (language) {
    case "TS":
      return "Typescript";
    case "TSX":
      return "Typescript JSX";
    default:
      return language;
  }
};

export const CodeBlockHelper = {
  isCodeBlock,
  toCodeBlock,
  setLanguage,
  nameOfLanguage,
};
