import { RenderElementProps } from "slate-react";
import { CodeElement as CodeElementType } from "../type";
import { renderStatic } from "../render/renderStatic";

const Edit = (props: RenderElementProps) => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);

const Read = (props: CodeElementType) => (
  <pre>
    <code>{props.children.map(renderStatic)}</code>
  </pre>
);

export const CodeElement = {
  Edit,
  Read,
};
