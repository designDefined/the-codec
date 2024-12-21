import { ID } from "@core/constant/ID";
import { DESCRIPTION, SUBTITLE, TITLE } from "@core/constant/TEXT";
import { TimeRecord } from "../time/TimeRecord";

export type IndexSummary = {
  id: ID["INDEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  description?: DESCRIPTION;
} & TimeRecord;
