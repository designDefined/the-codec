import { z } from "zod";

export const FONT = z.enum(["SANS", "SERIF", "MONO"]);
export type FONT = z.infer<typeof FONT>;
