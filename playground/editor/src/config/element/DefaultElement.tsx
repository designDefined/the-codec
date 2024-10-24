import { CustomElement } from "../type";
import { DefaultElement as _DefaultElement } from "slate-react";
import { renderStatic } from "../render/renderStatic";

const Edit = _DefaultElement;

const Read = (props: CustomElement): React.JSX.Element => {
  return <div style={{ position: "relative" }}>{props.children.map(renderStatic)}</div>;
};

export const DefaultElement = { Edit, Read };
