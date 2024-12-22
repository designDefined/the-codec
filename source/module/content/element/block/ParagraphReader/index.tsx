import { typ } from "@style/names";
import { RenderElementPropsExtended } from "../../../utility/slate-type";
import { bindCSS } from "@flexive/core";

const cx = bindCSS({});

export const ParagraphReader = (props: RenderElementPropsExtended) => (
  <p className={cx(typ.size.body)} {...props.attributes}>
    {props.children}
  </p>
);
