import { ID } from "@core/constant/ID";
import { TITLE } from "@core/constant/TEXT";
import { TimeRecord } from "../time/TimeRecord";

export type IndexSummary = {
  id: ID["INDEX"];
  title: TITLE;
  subtitle?: string;
} & TimeRecord;
