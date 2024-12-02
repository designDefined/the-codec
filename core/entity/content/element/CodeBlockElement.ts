import { ELEMENT_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../Content";

export type CodeBlockElement = {
  type: typeof ELEMENT_TYPE.Enum.CODE_BLOCK;
  children: Content[];
};
