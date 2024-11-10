import { BOX_TYPE } from "../../constant/content/BOX_TYPE";
import { ID } from "../../constant/ID";
import { TITLE } from "../../constant/TEXT";
import { InboxContent } from "../content/InboxContent";
import { BoxStyle } from "./BoxStyle";

export type InnerBox = {
  type: typeof BOX_TYPE.Enum.INNER_BOX;
  id: ID["BOX"];
  title: TITLE;
  children: InboxContent[];
  style?: BoxStyle;
};
