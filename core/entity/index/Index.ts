import { ID } from "../../constant/ID";
import { SUBTITLE, TITLE } from "../../constant/TEXT";
import { Box } from "../box/Box";

export type Index = {
  id: ID["INDEX"];
  title: TITLE;
  subtitle?: SUBTITLE;
  content: Box;
};
