import { Div } from "@flexive/core";
import { Readable } from "./Readable";
import { renderStatic } from "../config/render/renderStatic";

export function Reader() {
  return (
    <Div style={{ padding: 16, border: "1px solid black" }}>
      <Readable renderStatic={renderStatic} />
    </Div>
  );
}
