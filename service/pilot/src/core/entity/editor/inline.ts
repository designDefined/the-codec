import { CONTENT_TYPE } from "../../constant/contentType";
import { ID } from "../../constant/id";
import { Tag } from "../common/Tag";

export type Inline = {
  type: CONTENT_TYPE["INLINE"];
  id: ID["INLINE"];
  tag?: Tag;
  data: string;
};
