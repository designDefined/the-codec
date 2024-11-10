import { Descendant } from "slate";

type CustomElement = { type: "paragraph"; children: Descendant[] };
type CodeElement = { type: "code"; children: Descendant[] };

export type Element = CustomElement | CodeElement;
