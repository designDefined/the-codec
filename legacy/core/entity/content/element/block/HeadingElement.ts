import { BLOCK_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../../Content";
import { ElementBase } from "../ElementBase";
import { FONT } from "@core/constant/content/FONT";

export type HeadingElement = ElementBase & {
  type: typeof BLOCK_TYPE.Enum.HEADING;
  children: Content[];
  level: 1 | 2 | 3 | 4 | 5 | 6;
  font?: FONT;
};
