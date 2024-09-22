import { ID } from "../constant/id";
import { Block } from "./block";
import { Tag } from "./tag";

export type Index = {
  id: ID["INDEX"];
  tag: Tag;
  data: Block[];
};
