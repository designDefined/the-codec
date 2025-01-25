import { z } from "zod";

export const BOX_TYPE = z.enum(["OUTER_BOX", "INNER_BOX"]);
export type BOX_TYPE = z.infer<typeof BOX_TYPE>;
