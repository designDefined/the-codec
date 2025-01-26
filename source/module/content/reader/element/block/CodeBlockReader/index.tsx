import { ParagraphElement } from "@core/entity/content/element/block/ParagraphElement";
import styles from "./index.module.css";
import { CodeBlockElement } from "@core/entity/content/element/block/CodeBlockElement";
import { bindCSS } from "@flexive/core";
import { RenderElementPropsExtended } from "@module/content/type";
import { Highlight } from "prism-react-renderer";
import { Leaf } from "@core/entity/content/leaf/Leaf";

const cx = bindCSS(styles);

export const CodeBlockReader = (props: RenderElementPropsExtended<CodeBlockElement>) => {
  return (
    <pre {...props.attributes} className={cx("CodeBlock", "edit")}>
      {props.children}
    </pre>
  );
};

export const CodeBlockWithHighlightReader = (props: RenderElementPropsExtended<CodeBlockElement>) => {
  const code = props.element.children
    .map(p => (p as ParagraphElement).children.map(l => (l as Leaf).text).join("\n"))
    .join("\n");

  return (
    <Highlight code={code} language={props.element.language ?? "TSX"}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={cx("CodeBlock")}>
          {tokens.map((line, i) => (
            <p key={i} {...getLineProps({ line })}>
              {<span>{i + 1} </span>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </p>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
