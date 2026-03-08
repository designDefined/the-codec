import { WEIGHT } from "@core/constant/style/WEIGHT";

export type BoxLook = {
  theme?: number;
  border?: { color?: string; weight?: WEIGHT };
  background?: { color?: string };
  body?: { color?: string };
  accent?: { color?: string };
};
