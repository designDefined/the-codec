import { ID } from "@core/constant/ID";
import { TITLE } from "@core/constant/TEXT";

export type IndexSummary = {
  id: ID["INDEX"];
  title: TITLE;
  subtitle?: string;
};
