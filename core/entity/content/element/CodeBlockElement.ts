import { ELEMENT_TYPE } from "../../../constant/content/ELEMENT_TYPE";
import { InboxContent } from "../InboxContent";

export type CodeBlockElement = {
  type: typeof ELEMENT_TYPE.Enum.CODE_BLOCK;
  children: InboxContent[];
};
