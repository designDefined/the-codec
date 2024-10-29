import { ELEMENT_TYPE } from "../../../constant/content/ELEMENT_TYPE";
import { InboxContent } from "../InboxContent";

export type ParagraphElement = {
  type: typeof ELEMENT_TYPE.Enum.PARAGRAPH;
  children: InboxContent[];
};
