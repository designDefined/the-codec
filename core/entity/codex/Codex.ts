import { ID } from "@core/constant/ID";
import { TITLE, SUBTITLE } from "@core/constant/TEXT";
import { Index } from "../index/Index";

export type Codex = {
  id: ID["CODEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  children: Index[];
};
