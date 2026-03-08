import { CodeElement } from "./CodeElement";
import { RenderElementPropsExtended } from "../type";
import { ParagraphElement } from "./ParagraphElement";

export const Element = (props: RenderElementPropsExtended) => {
  switch (props.element.type) {
    case "CODE_BLOCK":
      return <CodeElement {...props} />;
    case "PARAGRAPH":
      return <ParagraphElement {...props} />;
  }
};
