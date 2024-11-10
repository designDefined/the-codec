import { RenderElementPropsExtended } from "../../utility/slate-type";
import { CodeBlockReader } from "../block/CodeBlockReader";
import { ParagraphReader } from "../block/ParagraphReader";

export const ElementReader = (props: RenderElementPropsExtended) => {
  switch (props.element.type) {
    case "PARAGRAPH":
      return <ParagraphReader {...props} />;
    case "CODE_BLOCK":
      return <CodeBlockReader {...props} />;
  }
};
