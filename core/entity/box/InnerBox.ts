import { BOX_TYPE } from "@core/constant/content/BOX_TYPE";
import { ID } from "@core/constant/ID";
import { TITLE } from "@core/constant/TEXT";
import { BoxLayout } from "./BoxLayout";
import { Content } from "../content/Content";

export type InnerBox = {
  type: typeof BOX_TYPE.Enum.INNER_BOX;
  id: ID["BOX"];
  title: TITLE;
  children: Content[];
  layout?: BoxLayout;
};
