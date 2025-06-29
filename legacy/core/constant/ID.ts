import { TypeOfEnum } from "../utility/zod/TypeOfEnum";
import { z } from "zod";

export const ID = {
  USER: z.coerce.number().brand("USER"),
  INDEX: z.coerce.number().brand("INDEX"),
  CODEX: z.coerce.number().brand("CODEX"),
  BOX: z.coerce.string().brand("BOX"),
};
export type ID = TypeOfEnum<typeof ID>;
