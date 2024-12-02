import { ID } from "@core/constant/ID";
import { TITLE, SUBTITLE } from "@core/constant/TEXT";
import { OuterBox } from "../box/OuterBox";
import { IndexSummary } from "../index/IndexSummary";

export type Codex = {
  id: ID["CODEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  content: OuterBox;
  items: IndexSummary[];
};
