import { z } from "zod";

export const BLOCK_TYPE = z.enum(["PARAGRAPH", "HEADING", "CODE_BLOCK"]);
export type BLOCK_TYPE = z.infer<typeof BLOCK_TYPE>;

export const INLINE_TYPE = z.enum(["LINK"]);
export type INLINE_TYPE = z.infer<typeof INLINE_TYPE>;

export const ELEMENT_TYPE = z.enum([...BLOCK_TYPE.options, ...INLINE_TYPE.options]);
export type ELEMENT_TYPE = z.infer<typeof ELEMENT_TYPE>;
