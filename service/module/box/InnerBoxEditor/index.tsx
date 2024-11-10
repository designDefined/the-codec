import styles from "./index.module.css";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { useMemo } from "react";
import { bindCSS } from "@flexive/core";
import { renderElement } from "../../content/render/renderElement";
import { renderLeaf } from "../../content/render/renderLeaf";
import { InnerBox } from "core/entity/box/InnerBox";

const cx = bindCSS(styles);

type InnerBoxEditorProps = {
  box: InnerBox;
  onChangeBox?: (box: InnerBox) => void;
};

export const InnerBoxEditor = ({ box, onChangeBox }: InnerBoxEditorProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate
      editor={editor}
      initialValue={box.children}
      onChange={children =>
        editor.operations.some(op => "set_selection" !== op.type) && onChangeBox?.({ ...box, children })
      }
    >
      <Editable
        className={cx("InnerBoxEditor")}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder={box.title}
      />
    </Slate>
  );
};
