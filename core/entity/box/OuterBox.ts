import { BOX_TYPE } from "../../constant/content/BOX_TYPE";
import { ID } from "../../constant/ID";
import { NAME } from "../../constant/TEXT";
import { Box } from "./Box";
import { BoxLayout } from "./BoxLayout";
import { BoxLook } from "./BoxLook";

export type OuterBox = {
  type: typeof BOX_TYPE.Enum.OUTER_BOX;
  id: ID["BOX"];
  name: NAME;
  children: Box[];
  layout?: BoxLayout;
  look?: BoxLook;
};
