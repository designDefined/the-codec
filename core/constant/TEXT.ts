import { z } from "zod";

export const TITLE = z.string().min(2).max(20);
export type TITLE = z.infer<typeof TITLE>;

export const SUBTITLE = z.string().min(2).max(40);
export type SUBTITLE = z.infer<typeof SUBTITLE>;
