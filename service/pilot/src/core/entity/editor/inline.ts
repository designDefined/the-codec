import { ID } from "../../constant/id";
import { Tag } from "../common/Tag";

export type Inline = {
  id: ID["INLINE"];
  tag?: Tag;
  data: string;
};
