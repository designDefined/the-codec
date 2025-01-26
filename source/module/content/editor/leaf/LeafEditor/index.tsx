import styles from "./index.module.css";
import { EditorPanel } from "@component/area";
import { Selectable } from "@component/button";
import { bindCSS } from "@flexive/core";
import { ContentEditor } from "@module/content/type";
import { LeafHelper } from "../LeafHelper";

const cx = bindCSS(styles);

type LeafEditorProps = {
  editor: ContentEditor;
  count: number;
};

export const LeafEditor = ({ editor }: LeafEditorProps) => {
  return (
    <EditorPanel className={cx("LeafEditor")} row g={4}>
      <Selectable
        className={cx("bold")}
        colored
        bordered
        value={LeafHelper.bold(editor)}
        onChange={LeafHelper.setBold(editor)}
        onPointerDown={e => e.preventDefault()}
      >
        B
      </Selectable>
      <Selectable
        className={cx("italic")}
        colored
        bordered
        value={LeafHelper.italic(editor)}
        onChange={LeafHelper.setItalic(editor)}
        onPointerDown={e => e.preventDefault()}
      >
        I
      </Selectable>
      <Selectable
        colored
        bordered
        value={LeafHelper.emphasized(editor, "VIVID")}
        onChange={v => LeafHelper.setEmphasized(editor)(v ? "VIVID" : undefined)}
        onPointerDown={e => e.preventDefault()}
      >
        Vivid
      </Selectable>
      <Selectable
        colored
        bordered
        value={LeafHelper.emphasized(editor, "DEEP")}
        onChange={v => LeafHelper.setEmphasized(editor)(v ? "DEEP" : undefined)}
        onPointerDown={e => e.preventDefault()}
      >
        Deep
      </Selectable>
    </EditorPanel>
  );
};
