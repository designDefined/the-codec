import { BOX_TYPE } from "@core/constant/content/BOX_TYPE";
import { ID } from "@core/constant/ID";
import { NAME } from "@core/constant/TEXT";
import { BoxLayout } from "./BoxLayout";
import { Content } from "../content/Content";
import { BoxLook } from "./BoxLook";

export type InnerBox = {
  type: typeof BOX_TYPE.Enum.INNER_BOX;
  id: ID["BOX"];
  name: NAME;
  children: Content[];
  layout: BoxLayout;
  look: BoxLook;
};
