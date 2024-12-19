import { ELEMENT_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../Content";
import { ElementBase } from "./ElementBase";

export type HeadingElement = ElementBase & {
  type: typeof ELEMENT_TYPE.Enum.HEADING;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: Content[];
};
