import { z } from "zod";

export const MARK = z.enum(["bold"]);
export type MARK = z.infer<typeof MARK>;
