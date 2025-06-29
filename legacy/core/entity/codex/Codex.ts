import { ID } from "@core/constant/ID";
import { TITLE, SUBTITLE } from "@core/constant/TEXT";
import { OuterBox } from "../box/OuterBox";
import { IndexSummary } from "../index/IndexSummary";
import { TimeRecord } from "../time/TimeRecord";

export type Codex = {
  id: ID["CODEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  content: OuterBox;
  items: IndexSummary[];
} & TimeRecord;
