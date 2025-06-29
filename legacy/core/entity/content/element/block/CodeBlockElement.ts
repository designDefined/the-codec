import { BLOCK_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../../Content";
import { ElementBase } from "../ElementBase";
import { CODE_BLOCK_LANGUAGE } from "@core/constant/content/CODE_BLOCK_LANGUAGE";

export type CodeBlockElement = ElementBase & {
  type: typeof BLOCK_TYPE.Enum.CODE_BLOCK;
  children: Content[];
  language?: CODE_BLOCK_LANGUAGE;
};
