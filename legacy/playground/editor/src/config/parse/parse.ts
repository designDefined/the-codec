import { Descendant } from "slate";
import { RootParser } from "./parser";

export const fromMark = (content: string): Descendant[] => {
  const parser = new RootParser();
  parser.parseAll(content);
  return parser.finish();
};
