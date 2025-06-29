import { INLINE_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { Content } from "../../Content";

export type LinkElement = {
  type: typeof INLINE_TYPE.Enum.LINK;
  children: Content[];
  to: string;
};
