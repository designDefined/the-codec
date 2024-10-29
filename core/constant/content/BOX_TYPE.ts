import { z } from "zod";

export const BOX_TYPE = z.enum(["BOX", "INBOX"]);
export type BOX_TYPE = z.infer<typeof BOX_TYPE>;
