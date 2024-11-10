import { ID } from "../../constant/ID";
import { SUBTITLE, TITLE } from "../../constant/TEXT";
import { OuterBox } from "../box/OuterBox";

export type Index = {
  id: ID["INDEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  content: OuterBox;
};
