import { z } from "zod";

export const TEXT_ALIGN = z.enum(["LEFT", "CENTER", "RIGHT", "JUSTIFY"]);
export type TEXT_ALIGN = z.infer<typeof TEXT_ALIGN>;
