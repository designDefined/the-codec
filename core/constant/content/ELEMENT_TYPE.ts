import { z } from "zod";

export const BLOCK_TYPE = z.enum(["PARAGRAPH", "CODE_BLOCK"]);
export type BLOCK_TYPE = z.infer<typeof BLOCK_TYPE>;

export const ELEMENT_TYPE = BLOCK_TYPE;
export type ELEMENT_TYPE = z.infer<typeof ELEMENT_TYPE>;
