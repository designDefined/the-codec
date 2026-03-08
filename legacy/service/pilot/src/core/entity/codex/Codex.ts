import { ID } from "../../constant/id";
import { Box } from "../box/Box";
import { IndexSummary } from "../index/IndexSummary";
import { Metadata } from "../common/Metadata";

export type Codex = {
  id: ID["CODEX"];
  title: string;
  indices: IndexSummary[];
  data: Box;
} & Metadata;
