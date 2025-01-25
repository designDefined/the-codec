import { RenderElementPropsExtended } from "../../../type/slate";
import { CodeBlockReader, CodeBlockWithHighlightReader } from "../block/CodeBlockReader";
import { HeadingReader } from "../block/HeadingReader";
import { ParagraphReader } from "../block/ParagraphReader";

export const ElementReader = ({ element, ...props }: RenderElementPropsExtended) => {
  switch (element.type) {
    case "PARAGRAPH":
      return <ParagraphReader element={element} {...props} />;
    case "CODE_BLOCK":
      if (props.attributes) return <CodeBlockReader element={element} {...props} />;
      return <CodeBlockWithHighlightReader element={element} {...props} />;
    case "HEADING":
      return <HeadingReader element={element} {...props} />;
  }
};
