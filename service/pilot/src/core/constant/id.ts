import { Branded } from "../utility/brand";

export type ID = {
  INLINE: Branded<number, "Inline">;
  BLOCK: Branded<number, "Block">;
  BOX: Branded<number, "Box">;
  INDEX: Branded<number, "Index">;
  CODEX: Branded<number, "Codex">;
};
