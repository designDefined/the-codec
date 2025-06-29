import { CONTENT_TYPE } from "../../constant/contentType";
import { ID } from "../../constant/id";
import { Tag } from "../common/Tag";
import { Inline } from "./inline";

export type Block = {
  type: CONTENT_TYPE["BLOCK"];
  id: ID["BLOCK"];
  data: Inline[];
  tag?: Tag;
};
