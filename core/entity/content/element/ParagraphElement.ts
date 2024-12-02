import { ELEMENT_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../Content";

export type ParagraphElement = {
  type: typeof ELEMENT_TYPE.Enum.PARAGRAPH;
  children: Content[];
};
