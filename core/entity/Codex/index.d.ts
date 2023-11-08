import { PublidId } from "../.shared/Id";
import { User } from "../User";
import { Index } from "./IndexType";

export type Codex = {
  id: PublidId;
  writer: User;
  title: string;
  contents: Index[];
};
