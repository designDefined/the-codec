import { RenderElementProps } from "slate-react";

export const CodeElement = (props: RenderElementProps) => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);
