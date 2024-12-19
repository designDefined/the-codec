import { ELEMENT_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../Content";
import { ElementBase } from "./ElementBase";

export type CodeBlockElement = ElementBase & {
  type: typeof ELEMENT_TYPE.Enum.CODE_BLOCK;
  children: Content[];
};
