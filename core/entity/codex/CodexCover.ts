import { ID } from "@core/constant/ID";
import { TITLE, SUBTITLE } from "@core/constant/TEXT";
import { OuterBox } from "../box/OuterBox";

export type CodexCover = {
  id: ID["CODEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  content: OuterBox;
};
