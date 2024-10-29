import { TypeOfEnum } from "../utility/zod/TypeOfEnum";
import { z } from "zod";

export const ID = {
  USER: z.number().brand("USER"),
  INDEX: z.number().brand("INDEX"),
  CODEX: z.number().brand("CODEX"),
  BOX: z.string().brand("BOX"),
};
export type ID = TypeOfEnum<typeof ID>;
