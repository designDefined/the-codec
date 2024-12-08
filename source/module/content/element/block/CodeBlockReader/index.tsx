import { RenderElementPropsExtended } from "../../../utility/slate-type";

export const CodeBlockReader = (props: RenderElementPropsExtended) => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);
