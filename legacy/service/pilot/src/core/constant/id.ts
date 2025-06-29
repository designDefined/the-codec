import { Branded } from "../utility/brand";

export type ID = {
  USER: Branded<number, "User">;
  INLINE: Branded<number, "Inline">;
  BLOCK: Branded<number, "Block">;
  BOX: Branded<number | string, "Box">;
  INDEX: Branded<number, "Index">;
  CODEX: Branded<number, "Codex">;
};
