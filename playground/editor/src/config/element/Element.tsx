import { DefaultElement } from "slate-react";
import { RenderElementPropsExtended } from "../render/type";
import { CodeElement } from "./CodeElement";

export const Element = (props: RenderElementPropsExtended) => {
  switch (props.element.type) {
    case "code":
      return <CodeElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};
