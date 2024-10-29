import { ID } from "../../constant/ID";
import { SUBTITLE, TITLE } from "../../constant/TEXT";
import { Index } from "../index/Index";

export type Codex = {
  id: ID["CODEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  children: Index[];
};
