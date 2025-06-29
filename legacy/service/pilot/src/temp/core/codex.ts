import { Index } from ".";
import { ID } from "../constant/id";

export type Codex = {
  id: ID["CODEX"];
  title: string;
  data: Index[];
};
