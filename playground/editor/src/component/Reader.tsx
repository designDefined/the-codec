import { Div } from "@flexive/core";
import { useSlate } from "slate-react";
import { renderStatic } from "../config/render/renderStatic";

export function Reader() {
  const editor = useSlate();

  return <Div style={{ padding: 16, border: "1px solid black" }}>{editor.children.map(renderStatic)}</Div>;
}
