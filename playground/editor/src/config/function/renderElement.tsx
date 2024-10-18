import { DefaultElement, RenderElementProps } from "slate-react";
import { CodeElement } from "../element/CodeElement";

export const renderElement = (props: RenderElementProps): React.JSX.Element => {
  switch (props.element.type) {
    case "code":
      return <CodeElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};
