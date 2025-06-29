import { ID } from "../../constant/id";
import { Metadata } from "../common/Metadata";

export type CodexSummary = {
  id: ID["CODEX"];
  title: string;
} & Metadata;
