import { ID } from "../../constant/id";
import { Metadata } from "../common/Metadata";

export type IndexSummary = {
  id: ID["INDEX"];
  title: string;
  description?: string;
} & Metadata;
