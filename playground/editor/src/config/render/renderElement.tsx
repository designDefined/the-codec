import { RenderElementProps } from "slate-react";
import { CodeElement } from "../element/CodeElement";
import { DefaultElement } from "../element/DefaultElement";

export const renderElement = (props: RenderElementProps): React.JSX.Element => {
  switch (props.element.type) {
    case "code":
      return <CodeElement.Edit {...props} />;
    default:
      return <DefaultElement.Edit {...props} />;
  }
};
