import { BOX_TYPE } from "../../../constant/content/BOX_TYPE";
import { ID } from "../../../constant/ID";
import { TITLE } from "../../../constant/TEXT";
import { InboxContent } from "../InboxContent";

export type Box = {
  id: ID["BOX"];
  title: TITLE;
} & (
  | { type: typeof BOX_TYPE.Enum.BOX; children: Box[] }
  | { type: typeof BOX_TYPE.Enum.INBOX; children: InboxContent[] }
);
