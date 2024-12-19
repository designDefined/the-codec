import { LookClass } from "@core/entity/style/LookClass";
import { LookVariable } from "@core/entity/style/LookVariable";

export type LeafBase = {
  look?: {
    classes?: LookClass[];
    variables?: LookVariable[];
  };
};
