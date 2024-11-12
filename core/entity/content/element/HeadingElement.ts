import { ELEMENT_TYPE } from "../../../constant/content/ELEMENT_TYPE";
import { InboxContent } from "../InboxContent";

export type HeadingElement = {
  type: typeof ELEMENT_TYPE.Enum.HEADING;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: InboxContent[];
};
