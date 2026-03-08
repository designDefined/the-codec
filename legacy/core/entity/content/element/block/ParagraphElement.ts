import { BLOCK_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../../Content";
import { ElementBase } from "../ElementBase";
import { FONT } from "@core/constant/content/FONT";
import { TEXT_ALIGN } from "@core/constant/content/TEXT_ALIGN";

export type ParagraphElement = ElementBase & {
  type: typeof BLOCK_TYPE.Enum.PARAGRAPH;
  children: Content[];
  font?: FONT;
  align?: TEXT_ALIGN;
};
