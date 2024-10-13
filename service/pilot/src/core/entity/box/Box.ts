import { ID } from "../../constant/id";
import { Tag } from "../common/Tag";
import { Block } from "../editor/block";
import { BoxStyle } from "./BoxStyle";

export type Box = {
  id: ID["BOX"];
  data: (Box | Block)[];
  name?: string;
  style?: BoxStyle;
  tag?: Tag;
};
