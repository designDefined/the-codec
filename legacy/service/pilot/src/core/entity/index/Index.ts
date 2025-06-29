import { ID } from "../../constant/id";
import { Box } from "../box/Box";
import { Metadata } from "../common/Metadata";

export type Index = {
  id: ID["INDEX"];
  title: string;
  description?: string;
  data: Box;
} & Metadata;
