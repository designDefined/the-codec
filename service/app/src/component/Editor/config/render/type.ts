import { RenderElementProps, RenderLeafProps } from "slate-react";

type RenderMetadata = { index?: number; isStatic?: true };

export type RenderElementPropsExtended = RenderElementProps & RenderMetadata;
export type RenderLeafPropsExtended = RenderLeafProps & RenderMetadata;
