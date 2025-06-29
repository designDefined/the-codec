import { z } from "zod";

export const CODE_BLOCK_LANGUAGE = z.enum(["TS", "TSX", "HTML", "CSS"]);
export type CODE_BLOCK_LANGUAGE = z.infer<typeof CODE_BLOCK_LANGUAGE>;
