import { ID } from "../../constant/id";
import { Tag } from "../common/Tag";
import { Inline } from "./inline";

export type Block = {
  id: ID["BLOCK"];
  tag?: Tag;
  data: Inline[];
};
