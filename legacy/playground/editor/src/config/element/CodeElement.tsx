import { RenderElementPropsExtended } from "../type";

export const CodeElement = (props: RenderElementPropsExtended) => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);
