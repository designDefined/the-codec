import { Editable, useSlate } from "slate-react";
import { renderElement } from "../config/render/renderElement";
import { useOnKeyDown } from "../config/event/useOnKeyDown";
import { renderLeaf } from "../config/render/renderLeaf";

export function Editor() {
  const editor = useSlate();
  const onKeyDown = useOnKeyDown(editor);

  return (
    <Editable
      onKeyDown={onKeyDown}
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      style={{ padding: 16, border: "1px solid black" }}
    />
  );
}
