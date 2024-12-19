import { ELEMENT_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../Content";
import { ElementBase } from "./ElementBase";

export type ParagraphElement = ElementBase & {
  type: typeof ELEMENT_TYPE.Enum.PARAGRAPH;
  children: Content[];
};
