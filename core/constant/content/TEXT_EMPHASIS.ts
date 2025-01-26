import { z } from "zod";

export const TEXT_EMPHASIS = z.enum(["VIVID", "DEEP"]);
export type TEXT_EMPHASIS = z.infer<typeof TEXT_EMPHASIS>;
