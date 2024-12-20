import { ID } from "@core/constant/ID";
import { OuterBox } from "../box/OuterBox";
import { DESCRIPTION, SUBTITLE, TITLE } from "@core/constant/TEXT";
import { TimeRecord } from "../time/TimeRecord";

export type Index = {
  id: ID["INDEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  description?: DESCRIPTION;
  content: OuterBox;
} & TimeRecord;
