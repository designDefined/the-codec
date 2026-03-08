import styles from "./index.module.css";
import { EditorPanel } from "@component/area";
import { bindCSS, Div } from "@flexive/core";
import { ContentEditor } from "@module/content/type";
import { Descendant, Element as SlateElement } from "slate";

const cx = bindCSS(styles);

type ContentVisualizerProps = {
  editor: ContentEditor;
  count: number;
};

export const ContentVisualizer = ({ editor }: ContentVisualizerProps) => {
  return (
    <EditorPanel className={cx("ContentVisualizer")} g={4}>
      {editor.children.map((child, i) => (
        <Item key={i} item={child} />
      ))}
    </EditorPanel>
  );
};

const Item = ({ item }: { item: Descendant }) => {
  if (!SlateElement.isElement(item))
    return (
      <Div className={cx("text")}>
        {item.text.slice(0, 24)}
        {item.text.length > 24 ? "..." : ""}
      </Div>
    );

  return (
    <Div py={2}>
      <Div>{item.type}</Div>
      <Div py={2} pl={12}>
        {item.children.map((child, i) => (
          <Item key={i} item={child} />
        ))}
      </Div>
    </Div>
  );
};
