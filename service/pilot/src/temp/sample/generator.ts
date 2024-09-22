import { FlexiveStyle } from "@flexive/core";
import { Block } from "../core/block";
import { Inline } from "../core/inline";
import { Tag } from "../core/tag";
import { CSSProperties } from "react";

// token
export const inline = (data: string, tag?: Tag): Inline => ({ data, tag: tag ?? {} });
export const block = (data: Inline[], tag?: Tag): Block => ({ data, tag: tag ?? {} });
export const body = (...data: string[]) => data.map(datum => block([inline(datum)], { indent: true }));

// tag
export const f = (flexive: FlexiveStyle) => JSON.stringify(flexive);
export const style = (style: CSSProperties) => JSON.stringify(style);
