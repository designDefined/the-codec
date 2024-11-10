import { FlexiveStyle } from "@flexive/core";
import { Leaf } from "./Leaf";
import { Element } from "./Element";

export type Box = {
  id: string;
  f?: FlexiveStyle;
  children: (Element | Leaf)[];
};

export const isBox = (value: unknown): value is Box =>
  typeof value === "object" && !!value && "id" in value && "chlidren" in value;
