import { BOX_TYPE } from "../../constant/content/BOX_TYPE";
import { ID } from "../../constant/ID";
import { TITLE } from "../../constant/TEXT";
import { Box } from "./Box";
import { BoxLayout } from "./BoxLayout";

export type OuterBox = {
  type: typeof BOX_TYPE.Enum.OUTER_BOX;
  id: ID["BOX"];
  title: TITLE;
  children: Box[];
  layout?: BoxLayout;
};
